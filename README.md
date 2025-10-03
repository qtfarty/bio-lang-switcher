# Language Redirector Worker

A Cloudflare Worker for automatic language redirection on [qtfarty.omg.lol](https://qtfarty.omg.lol).

## What does this Worker do?

- Detects the browser's Accept-Language header
- If the user’s preferred language is Japanese (`ja`), redirects to `/ja/`
- Otherwise, loads the default (English) site
- Limits auto-redirect to once per user per day (via a cookie)

## Deploy / Usage

1. Deploy as a Cloudflare Worker on `qtfarty.omg.lol`
2. Set up a Route: `qtfarty.omg.lol/*` → this Worker

## Related Project

This Worker is used by the main [qtfarty/bio](https://github.com/qtfarty/bio) repository (the “link in bio” site).

## License

MIT
