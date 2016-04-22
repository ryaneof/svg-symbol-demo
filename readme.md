## Requirements

```
Node.js (> 0.12)
```

## Tools

- [svg-sprite](https://github.com/jkphl/svg-sprite)
- [svgo](https://github.com/svg/svgo)
- [svgshelf](https://github.com/bitinn/svgshelf)
- [grunticon](https://github.com/filamentgroup/grunticon)
- [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)
- [grunt-svg-sprite](https://github.com/jkphl/grunt-svg-sprite)
- [node-iconizr](https://github.com/jkphl/node-iconizr)
- [svg-fallback](https://github.com/yoksel/svg-fallback)
- [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin)


## References

- [awesome-svg](https://github.com/willianjusten/awesome-svg)
- [SVG `symbol` a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/)
- [SVG `use` with External Reference, Take 2](https://css-tricks.com/svg-use-with-external-reference-take-2/)
- [A Complete Guide to SVG Fallbacks](https://css-tricks.com/a-complete-guide-to-svg-fallbacks/)
- [A Compendium of SVG Information](https://css-tricks.com/mega-list-svg-information/)
- [Using SVG](https://css-tricks.com/using-svg/)
- [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)
- [Ten reasons we switched from an icon font to SVG](http://ianfeather.co.uk/ten-reasons-we-switched-from-an-icon-font-to-svg/?utm_source=ourjs.com)
- [My speech about this in Chinese: 灵活的 Web 图标](https://ryan.im/documents/flexible-web-icons.pdf)

## Up and Running

```
npm i
npm start
```

### Generate SVG Symbols

SVG source files created by your awesome designer.

```
./svg-source/
```

Default generated file name.

```
./app/images/icon-svg-symbol.svg
```

Generate!

```
node ./generate-svg-symbols.js
```
