export default {
    async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cookie = request.headers.get('Cookie') || '';
    // If you already have a redirected cookie, do nothing
    if (cookie.includes('lang_redirected=1')) {
    return fetch(request);
    }
    
    const acceptLang = request.headers.get('Accept-Language') || '';
    if (acceptLang.toLowerCase().startsWith('ja') && url.pathname === "/") {
    // When detected as Japanese, redirect to the Japanese page and keep the preference for a while. 
    return new Response(null, {
    status: 302,
    headers: {
    'Location': '/ja/',
    'Set-Cookie': 'lang_redirected=1; Max-Age=86400; Path=/'
    }
    });
    }
    
    // Other than that, normal processing
    return fetch(request);
    }
    }
    