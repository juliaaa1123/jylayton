# jylayton.com

Static rebuild of jylayton.com (previously on Squarespace). Plain HTML/CSS, no build step.

- `index.html` – home (about, select works, contact)
- `selectworks.html` – served at `/selectworks`
- `css/style.css`, `images/`
- `vercel.json` – clean URLs (`/selectworks` without `.html`)

## Preview locally
    python3 -m http.server 8000

## Deploy to Vercel
    npx vercel        # preview
    npx vercel --prod # production
Or push to GitHub and import the repo at vercel.com/new (Framework preset: "Other", no build command).
Then add jylayton.com under Project → Settings → Domains and update DNS at your registrar.
