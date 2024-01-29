# Traditional Way

## Using FTP Client for Static Hosting

- You can't just upload the Node project folder structure
  - They are made for realtime execution via a (local) Node server
- To create files made for static web hosting you need to **build your project**
  - Execute `npm run build` to build a static folder
    - Make sure to use webpack or something similiar to build!
- Once the build is done, you have a new folder in your project folder: `dist`
  - This folder is made for static webhosting, you can upload them to your FTP server

# Modern Solution

## Using Vercel with continuous integration

- Vercel automates testing, checks for errors and - if your project works with no errors - deploys the build
  - Alternatives: Netlify, GitHub Pages (and many more ...)
1. Create an account on vercel.com
- Vercel will fetch your repository automatically
- Assist in setting up a live version
- Automativally update whenever you push an update to your repository
2. Add Vercel to your project
- Vercel is available as an NPM module
  - `npm i vercel`
  - Remeber the differences between global and local installations!
- In `package.json` add a new script in the `scripts` property
  - `"deploy": "vercel --prod"`
    - Using `vercel` without prod means the code will be published to a preview URL, not the live Vercel site
- Run `npm deploy`
  - At this point, Vercel should invite you to login. If you get an error regarding an invalid token, you need to run `npx vercel login`
- Follow the instructed steps according to your account setup on Vercel
  - Make sure the directories and commands are the same as you used when building!
- Now your project is live!

## Further Settings

- Go to vercel.com and open your dashboard
- You can connect a Git Repository for more automation!
- See Analytics
- Change deployment preferences
- Information about the latest builds
  - See potential errors
- Add a custom domain

## Is Vercel free?

- Yes and No
  - More information on vercel.com/pricing
- No commercial intent? Deploy on Vercel for free! (Hobby Plan)
  - As many projects as you want!
  - Limited bandwidth and build time limitations