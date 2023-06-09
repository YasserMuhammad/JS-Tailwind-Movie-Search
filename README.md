# JS-Tailwind-Movie-Search

An App to practice using TailwindCSS to use OMDB API to search movies details.

## Development TailwindCSS server

```bash
  npm run watch
```

Run `npm run watch` to run tailwindcss-cli server and the Output CSS will appear in `dist/main.css`. The app will automatically reload if you change any of the source files.

## Run Locally

You can use [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Extention to run a live server of the project.

## Environment Variables

To run this project, you will need to get `API_KEY` from [OMDB Website](https://www.omdbapi.com/apikey.aspx)
and add the key in src/js/keys.js file

apiKey = `API_KEY`;

## API Reference

```http
  GET http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}&plot=full
```

| Parameter   | Type     | Description                                         |
| :---------- | :------- | :-------------------------------------------------- |
| `api_key`   | `string` | **Required**. Your API key                          |
| `movieName` | `string` | **Required**. Movie Name                            |
| `plot`      | `string` | **Optional**. Description of the Movie (full-short) |

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to us at myasser612@gmail.com
