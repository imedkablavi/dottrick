<div align="center">
<h1>DotTrick - Gmail Dot Trick Generator</h1>
<p><strong>Generate · Copy · Save</strong><br/>Create dotted variants of a Gmail username before @gmail.com.</p>
<p>
<img src="https://img.shields.io/badge/Type-Static%20Web%20App-blueviolet" />
<img src="https://img.shields.io/badge/Languages-AR%20%7C%20EN%20%7C%20TR-green" />
<img src="https://img.shields.io/badge/Design-Glass%20%2B%20Animated-orange" />
</p>
</div>

## Features
- Multi-language interface: Arabic (RTL), English, Turkish
- Generates dotted variants using a bounded algorithm
- Copy to clipboard and save as `.txt`
- Responsive interface with animated background and glass surfaces
- Semantic HTML, keyboard focus, and reduced-motion support

---

## Project Structure
```text
/
├─ assets/
│  ├─ css/style.css          # Styles, themes, layout, animations
│  ├─ js/app.js              # Logic, generation, i18n, events
│  ├─ favicon.svg            # App icon
│  └─ og-image.svg           # Social share image
├─ index.html                # Main app
└─ README.md                 # This file
```

## Live Demo
[DotTrick](https://imedkablavi.github.io/dottrick/)

---

## Internationalization
- Detects browser language for Arabic, English, and Turkish
- RTL layout for Arabic
- Translation strings are in `assets/js/app.js` under `state.strings`

---

## Development
- Pure HTML, CSS, and JavaScript with no build step
- Open `index.html` directly or serve it as a static site
- Input is sanitized and generation is capped

---

## Deployment
- Supports static hosting such as GitHub Pages, Netlify, and Vercel
- Netlify deployments can optionally use `_headers` for additional security headers

---

## Contributing
- Improve translations in `app.js`
- Update the interface in `style.css`
- Pull requests are welcome

---

## License
[MIT License](LICENSE), [Imed Kablavi](https://github.com/imedkablavi)

---

## Support
[BuyMeACoffee](https://buymeacoffee.com/imed_kablavi)
