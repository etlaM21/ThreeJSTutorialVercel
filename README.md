# ThreeJSTutorialVercel

## About Vite Build

- `npx vite` is the build command
  - _I think it could (should ?!) also be `npx vite build`, but if it works it works_

```js
// vite.config.js
export default {
    root: "./",
    publicDir: "../public",
    build: {
       outDir: "../build"
    }
 } 
```

`publicDir` is very important:

We import model and texture from the public directory
```js
// main.js
loader.load(
    "./cave.glb",
    [...]);
```

The model name needs to stay the same and the file needs to stay untouched, so the format won't be corrupt!

When not using the public folder, Vite will compress files when building.

Then the GLTF-Model won't load correctly, same for the texture.

## "Tutorials"

[Vercel Deployment](tutorial.md)

[About React](tutorialReact.md)


## LIVE APPS
[ThreeJS w/ Vercel: https://threejs-tutorial-vercel-deploy.vercel.app/](https://threejs-tutorial-vercel-deploy.vercel.app/)

[ThreeJS using REACT w/ Vercel: https://threejs-tutorial-react-vercel-deploy.vercel.app/](https://threejs-tutorial-react-vercel-deploy.vercel.app/)