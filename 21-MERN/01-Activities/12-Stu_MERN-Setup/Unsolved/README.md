# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {
  "start": "node server/server.js", // starts the server once it can be run
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"", // run the serveer file and the client file at the same time from 2 different ports
  "install": "cd server && npm i && cd ../client && npm i", // installs the npm packages
  "seed": "cd server && npm run seed", //runs the seed file
  "build": "cd client && npm run build" //runs the build command in the client file
},
```

## Client-side Functionality

* TODO: Explain what this object does in the client-side `client/vite.config.js` file:
// sets up the graphql address to run from the localhost server port 3001
```js
  proxy: {
    '/graphql': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
```

## Server-side Functionality

* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));  
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
```
