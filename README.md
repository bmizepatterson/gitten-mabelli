# Gitten Mabelli
An unusual Italian trattoria

## To install

To install dependencies, open your terminal to the project root and run `npm install`.

## To compile

Edit assets **only** in the `src/` directory. Run `npm run dev` to set watchers that automatically compile assets into the `dist/` directory. This script executes the following:

1. All HTML files in `src/` are copied (without change) into analogous folders in `dist/`.
2. Sass code in `src/sass/main.scss` is compiled into CSS in `dist/css/main.css`.
3. Any JavaScript in the `src/js/` directory is transpiled into `dist/js` with Babel. (See `babel.config.js` for settings.)
4. Browser-sync serves the site from `dist/`.

## To publish

1. Test the site with express by running `node index.js` and taking a peek at [localhost:3000](http://localhost:3000).
2. If all looks well, `git push heroku master`.
3. View app on heroku at [XXX](XXX).
4. Celebrate with an Oreo.
