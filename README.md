## cloudflare-double-slashes-issue

This project is to replicate an issue with the `wrangler` from Cloudflare.

There's a middleware in `/functions/secure` directory to be applied on all routes of `/secure`.

And the `/out/secure` directory contains a file `one.html` which should be served at `/secure/one` (but first the middleware needs to be invoked)

Now, the **Problem**...

The middleware is properly invoked on `/secure/one` route but not on the `//secure/one`, whenever someone uses a double slash before the middleware directory, wrangler doesn't run the middleware and instead directly serve the pages.
