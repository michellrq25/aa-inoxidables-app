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
          
          function receiveMessage(e) {
            // Only respond if the message is from our opener window to prevent hijacking
            if (e.source !== window.opener) return;
            
            // Send the sensitive authorization payload strictly to the verified origin
            window.opener.postMessage(
              "authorization:" + provider + ":success:" + JSON.stringify(message),
              e.origin
            );
            
            window.removeEventListener("message", receiveMessage, false);
            
            // Wait a brief moment to ensure the browser dispatches the event before closing
            setTimeout(() => {
              window.close();
            }, 200);
          }
          
          if (window.opener) {
            window.addEventListener("message", receiveMessage, false);
            // Send handshake signal to initiate communication
            window.opener.postMessage("authorizing:" + provider, "*");
          } else {
            console.error('No opener window found');
            window.close();
          }
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
