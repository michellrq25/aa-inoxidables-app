import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const scope = searchParams.get('scope') || 'repo,user';
  
  const client_id = process.env.OAUTH_CLIENT_ID;
  if (!client_id) {
    return NextResponse.json(
      { error: 'Falta la variable de entorno OAUTH_CLIENT_ID' },
      { status: 500 }
    );
  }

  // Redirect to GitHub login screen
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=${scope}`;
  return NextResponse.redirect(redirectUrl);
}
