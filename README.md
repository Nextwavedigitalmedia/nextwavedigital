# Next Wave Digital

Premium responsive B2B website for Next Wave Digital.

**Tagline:** Build. Brand. Print. Market. Supply.

## Stack
- React
- Vite
- React Router
- Lucide React
- CSS

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Before launch

The Contact page uses the supplied email, UK and India phone/WhatsApp numbers, and London/Delhi locations. The quote form opens the visitor's default email app with the enquiry prefilled; the visitor must still send the email. For automatic submission without an email app, connect a form backend. Do not put private API keys in frontend code.

## GitHub

Create a repository, then:

```bash
git init
git add .
git commit -m "Initial Next Wave Digital website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

For a host that builds from GitHub, use:

- Build command: `npm run build`
- Output/publish directory: `dist`
- Branch: `main`

### Hostinger

If your Hostinger plan offers Git deployment with a build command, connect the GitHub repository and use the settings above. The deployed document root must be the generated `dist` directory.

If Hostinger's Git tool only clones the repository and has no build step, it cannot serve the Vite source directly. Build the project with `npm run build`, then upload the **contents** of `dist` to the website's document root (usually `public_html`). This includes the `.htaccess` file needed for React Router routes such as `/about` and `/services`.

### Downloading a built site from GitHub

The `Build site` GitHub Actions workflow runs on pushes to `main`, verifies the production build, and attaches a `hostinger-site` artifact to successful push runs. In GitHub, open **Actions**, select the latest successful **Build site** run, and download `hostinger-site`. Extract it and upload its contents to `public_html` if deploying manually. The artifact includes the hidden `.htaccess` file.

## Notes

The project intentionally avoids fake testimonials, statistics, prices and technical cable specifications. Add verified business information before production launch.

Cable reference images are stored locally in `public/cables/`. The Cable Solutions and Products pages include expandable image credits with creator, Commons source, and licence links. Cable imagery is illustrative and should not be treated as a representation of exact stock, manufacturer, or specification.
