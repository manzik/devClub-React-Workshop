# devClub React Workshop

The project's source code is located in the "noter" folder.  

You can access sample codes used in the presentation in the "examples" folder.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the directory called "notes", you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Building for Electron

At the current project's root folder run these commands to build a standalone application from this project.

```bash
npm install -g electron-packager
electron-packager noter Noter
```