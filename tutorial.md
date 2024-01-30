# What is Vercel

_"Vercel builds a frontend-as-a-service product—they make it easy for engineers to deploy and run the user-facing parts of their applications."_ - [What does Vercel do?](https://vercel.com/blog/what-is-vercel)

## Applications have frontend and backend

### Frontend (web focused)

What the user sees and interacts with
- Markup and web languages such as HTML, CSS, JavaScript
- Asynchronous request handling and AJAX
- Responsive web design
- Cross-browser compatibility
- Search engine optimization
- Accessibility

### Backend (web focused)

The backend _serves_ the data to the user and is the system architecture
- Scripting languages like PHP, Python, Ruby, Perl, Node.js, or Compiled languages like C#, Java or Go
- Automated testing frameworks for the language being used
- Application Data Access
- Database Administration
- Scalability
- Availability
- Security, authentication and authorization
- Backups

## Vercel handles the backend

- Vercel automates testing, checks for errors and - if your project works with no errors - deploys the build
  - Alternatives: Netlify, GitHub Pages (and many more ...)
- Vercel optimizes production code to be served faster
- Vercel puts the code on a bunch of CDNs around the world so everybody has fast access
- Vercel automatically _redeploys_ your application when changes are made to the repository (and the tests are all ok)
- It abstracts a lot of backend features that involve digging through logs etc.
  - Analytics
  - Error messages
  - DNS handling

## Vercel creates and maintains Next.js

- Next.js is a popular framework for React
  - open-source and free
  - other Frameworks are Create React App, Gatsby, etc.
- Integration and Deployment of Next.js projects on Vercel are native, fast and easy

# Traditional Way of Deployment

## Using FTP Client for Static Hosting

- You can't just upload the Node project folder structure
  - They are made for real-time execution via a (local) Node server
- To create files made for static web hosting you need to **build your project**
  - Execute `npm run build` to build a static folder
    - Make sure to use Webpack or something similar to build!
- Once the build is done, you have a new folder in your project folder: `dist`
  - This folder is made for static web hosting, you can upload them to your FTP server

# Modern Solution

## Using Vercel with continuous integration

1. Create an account on vercel.com
- Vercel will fetch your repository automatically
- Assist in setting up a live version
- Automatically update whenever you push an update to your repository
2. Add Vercel to your project
- Vercel is available as an NPM module
  - `npm i vercel`
  - Remember the differences between global and local installations!
- In `package.json` add a new script in the `scripts` property
  - `"deploy": "vercel --prod"`
    - Using `vercel` without prod means the code will be published to a preview URL, not the live Vercel site
3. Deploying your project on Vercel
- Run `npm run deploy`
  - At this point, Vercel should invite you to log in. If you get an error regarding an invalid token, you need to run `npx vercel login`
- Follow the instructed steps according to your account setup on Vercel
  - Make sure the directories and commands are the same as you used when building!
- Now your project is live!

## Further Settings

- Go to vercel.com and open your dashboard
- You can connect a Git Repository for even more automation!
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