import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const client_id = process.env.OAUTH_CLIENT_ID;
  const client_secret = process.env.OAUTH_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    return NextResponse.json(
      { error: 'Faltan las credenciales OAuth en las variables de entorno' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code
      })
    });

    const data = await response.json();
    
    if (data.error) {
      return NextResponse.json(
        { error: data.error_description || data.error },
        { status: 400 }
      );
    }

    const token = data.access_token;
    
    // Post token back to Decap CMS popup opener window
    const htmlResponse = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Autenticación Exitosa</title>
      </head>
      <body>
        <script>
          const token = "${token}";
          const provider = "github";
          
          const message = {
            token: token,
            provider: provider
          };
          
          if (window.opener) {
            // Decap CMS (formerly Netlify CMS) expects the message formatted as:
            // "authorization:provider:status:JSON_string"
            window.opener.postMessage(
              "authorization:" + provider + ":success:" + JSON.stringify(message),
              "*"
            );
          } else {
            console.error('No opener window found');
          }
          
          window.close();
        </script>
        <p>Autenticación exitosa. Redirigiendo...</p>
      </body>
      </html>
    `;
    
    return new Response(htmlResponse, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
