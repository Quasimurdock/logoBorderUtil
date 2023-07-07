# logoBorderUtil

## What is it
So basically this is a script program which aims to generate **customized logo-styled bottom border** for photo images.

## How to use it
1. First you need to install Node.js and NPM.
2. Open terminal, `cd` to your project root directory, then `git clone` this repo.
3. `npm install` to make sure all project dependencies added.
4. Drag your image files into `./source/` directory.
5. Drag your logo files into `./logo/` directory.
6. Customize key-value pairs of your own configurations in `config.json`.
7. `npm start` to begin the program.
8. Once you see there's successful logs in the console, check `./target/` directory for output processed images.

## Open issues
1. Border styles configuration are static (fonts, colors, etc.)
2. ~~Logo files configuration are static (only my own camera's brand for testing)~~
3. ~~Imcomplete error handling (e.g. image files exif info missing cases)~~
4. ~~Multiple image formats supports missing~~
5. Maybe it needs a GUI (idk actually it's for my own purpose, i'm OK with CLI lol...)

## Gossips
It's **NOT** a very usable and complete program. It's only a super simple demo script program right now. So I'm gonna say just have some fun if you're willing to test or commit a PR for me. 

Anyway, let me know if you like it or you have other similar/better programs to this since i'm actually a user who wants a good tool to add logo bottom borders for my photo images **batchly**. 

There's quite a lot of mini programs which supports this feature but needs to import images **one by one**. And I don't wanna manually launch them and set params every single time. I'm happy with default params the first time I set and don't like to change params frequently.

Besides, if I happen to have a laptop or PC near me, I can import batch image files through my camera. Then It's more easy for me to have a tool to generate logo borders at one time instead of relying on my cellphone.

Hence here it is.

## Contact
Mail to sh1wnt@outlook.com or simply open an issue in this repo.