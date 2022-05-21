# launcher

After using a couple of frameworks (Angular/Vue/React) I noticed that I had never used good old web components. That's why I decided to build this personal landing page with web components.

## Table of Contents

- [launcher](#launcher)
  - [Table of Contents](#table-of-contents)
  - [About this project](#about-this-project)
    - [hsl() blob](#hsl-blob)
  - [Contributing](#contributing)
  - [Build with](#build-with)
  - [Authors](#authors)
  - [License](#license)

## About this project

This is a personal landing page with links to sites I often use.

### hsl() blob

The color of the blob behind the emoji is based on the date and time of visiting, and the "current" temperature[^1]. The color is in `hsl()`, hue is based on the date, saturation is based on the temperature, and lightness is based on the time.

Hue is `0` on the first of January and `360` on 31st of December (yes, I've tought of leap years), where saturation is `0%` when it's <=-10&deg; and `100%` when it's >=30&deg;.
Ligtness is `100%` when the time is 00:00 and will be `0%` when it's 23:59.

## Contributing

Since this is a personal project please do not contribute to this repo. However I'm always open to suggestions/ideas/tips/whatever.

## Build with

- [eslint](https://eslint.org/) - JS linter
- [gh-pages](https://github.com/tschaub/gh-pages) - Publish tool for GitHub pages
- [parcel](https://parceljs.org/) - Build tool
- [postcss](https://postcss.org/) - CSS transformer
- [prettier](https://prettier.io/) - Code formatter
- [tailwindcss](https://tailwindcss.com/) - CSS utility framework

## Authors

- **Marten de Bruijn** - [martendebruijn](https://github.com/martendebruijn)

Inspiration: [launcher by lorenzodelijser](https://github.com/lorenzodelijser/launcher)

## License

MIT License, see [LICENSE](/LICENSE)

[^1]: I've used an array of the average temperature of each month in Brussels, it would be great to do this with an API like openwheatermap. But if I would, I want to limit the calls to the API (FE: max. 1 per hour), by storing the retrieved data somewhere, which we can't with GitHub Pages. I could use something like LocalStorage or cookies or else... But it doesn't fall within the scope of this hobby project.
