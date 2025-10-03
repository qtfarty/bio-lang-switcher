export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cookies = request.headers.get('Cookie') || '';
    const acceptLang = request.headers.get('Accept-Language') || '';
  
    // ←ここでAccept-Languageの内容をログ出力
    console.log("Accept-Language: ", acceptLang);  // ←この一行を追加
    
    // If the user has already been redirected, proceed normally
    if (cookies.includes('lang_redirected=1')) {
      return fetch(request);
    }

    // Only check for language preference on the root URL path
    if (url.pathname === "/") {
const primaryLang = acceptLang.split(',')[0].toLowerCase();
// If the user's main language is Japanese, redirect to /ja/
if (primaryLang.startsWith('ja')) {
return new Response(null, {
      status: 302,
      headers: {
        'Location': '/ja/',
        'Set-Cookie': 'lang_redirected=1; Max-Age=86400; Path=/'
      }
    });
  }
}

    // All other cases: serve the page as usual
    return fetch(request);
  }
}
