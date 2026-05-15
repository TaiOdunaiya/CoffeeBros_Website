# Coffee Bros Website

A single-page marketing site for **Coffee Bros**—hero, about highlights, menu imagery, stats, testimonials, and a booking-style contact form. Layout is responsive and uses vanilla HTML, CSS, and JavaScript plus CDN libraries.

## Features

- Responsive layout with breakpoints for tablets and phones
- Fixed navigation bar that gains a sticky (solid) style on scroll
- Landing hero with call-to-action buttons and a **Swiper** image carousel
- About, menu, animated statistics, customer quotes, and contact sections
- Contact form UI (labels via placeholders); no server or mail integration
- Font Awesome icons and Google Fonts (Poppins, Josefin Sans, Great Vibes)

## Tech stack

| Area        | Details |
|------------|---------|
| Markup     | HTML5 |
| Styling    | CSS3 (Flexbox, media queries) |
| Scripting  | ES5+ vanilla JavaScript |
| Carousel   | [Swiper 8](https://swiperjs.com/) (jsDelivr CDN) |
| Icons      | [Font Awesome 6](https://fontawesome.com/) |
| Fonts      | [Google Fonts](https://fonts.google.com/) |

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/TaiOdunaiya/CoffeeBros_Website.git
   ```

2. Change into the project folder:

   ```bash
   cd CoffeeBros_Website
   ```

3. Open `index.html` in a browser (double-click or use a local static server).

For development, a simple static server avoids some browsers’ restrictions on `file://` loading:

```bash
npx --yes serve .
```

## Project structure

```
CoffeeBros_Website/
├── index.html      # Page content and section markup
├── style.css       # Layout, theme, and responsive rules
├── script.js       # Swiper init, sticky nav, stat counters
├── images/         # Photos referenced by HTML/CSS (add if missing locally)
└── README.md
```

Place the image files expected by `index.html` and `style.css` (e.g. `images/image1.jpg` … `images/image8.jpg`, client avatars) under `images/` so backgrounds and slides load correctly.

## Behavior notes

- **Swiper** runs on the landing `.swiper` element (fade, autoplay, pagination).
- **Stat counters** animate when the menu section scrolls into view; interval timing is derived from the number of `.num` elements on the page.
- **Shop / cart** links are placeholders for future e-commerce work.

## Possible next steps

- Hook the contact form to a backend or form service
- Add real menu data, online ordering, or reservations
- Add `alt` text on images and tighten accessibility (focus states, skip link)
- Add a `LICENSE` file if you want to publish under a specific license

## Credits

- Design and development: Tai Odunaiya
- Icons: Font Awesome
- Fonts: Google Fonts
- Carousel: Swiper

Replace image credits in your repo if you use stock or licensed photography.
