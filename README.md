# VSK DNH&DD website (Vercel)

Static website for Vidya Samiksha Kendra, UT of Dadra and Nagar Haveli and Daman and Diu.
No build step, no server code. Vercel serves the files as they are.

## Files
- `index.html` the page shell
- `vercel.json` clean URLs: /about, /products, /products/pragati, /journey, /resources, /contact
- `assets/js/vsk-content.js` ALL website content (products, figures, milestones, dashboards, resources)
- `assets/js/vsk-assets.js` image list and QR codes
- `assets/img/` photos, posters, screenshots, logos
- `assets/js/vsk-app.js`, `vsk-map.js`, `three.min.js` application, map data and 3D library
- `assets/css/style.css` design

## Deploy option A: GitHub + Vercel (recommended, no coding)
1. Create a free account at github.com.
2. New repository, name it e.g. `vsk-dnhdd`, Public or Private, Create.
3. Click "uploading an existing file", drag in everything inside this folder
   (index.html, vercel.json, README.md and the assets folder), then Commit changes.
4. Go to vercel.com, Sign up with GitHub.
5. Add New > Project > Import the `vsk-dnhdd` repository.
6. Framework Preset: Other. Leave Build Command and Output Directory empty. Deploy.
7. Your site is live at https://<project-name>.vercel.app
   To change the name: Project > Settings > General > Project Name (e.g. dnhddvsk).
8. To update later: edit a file on GitHub and commit. Vercel redeploys automatically.

## Deploy option B: Vercel CLI (one command)
Needs Node.js installed.
```
cd vsk-dnhdd
npx vercel        # first time: log in, accept defaults
npx vercel --prod # publish to production
```

## Updating content
Open `assets/js/vsk-content.js`, change a value, keep commas and quotes intact, commit.
Keep each figure's reporting period and source key. To add a photo, put it in
`assets/img/`, add a key in `vsk-assets.js`, and use that key in the content file
(or use any full image URL).

## Custom domain (optional)
Project > Settings > Domains > Add, e.g. vsk.dnh.gov.in, then add the DNS record
Vercel shows (ask the NIC / IT team for government domains).
