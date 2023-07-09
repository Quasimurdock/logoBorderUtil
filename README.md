# logoBorderUtil

## What is it

So basically this is a script program which aims to generate **customized logo-styled bottom border** for photo images.

## How to use it

### Release package

1. Download the latest `release` package on the git page.
2. Unzip it and drag your image files into `./source/` directory.
3. Drag your logo files into `./logo/` directory.
4. Customize key-value pairs of your own configurations in `config.json`.
5. Open `logoborderutil.exe` in the root directory.
6. Once you see there's successful logs in the window, check `./target/` directory for output processed images.

### Source code

1. First you need to install Node.js and NPM.
3. Open terminal, `cd` to your project root directory, then `git clone` this repo.
4. `npm install` to make sure all project dependencies added.
5. Drag your image files into `./source/` directory.
6. Drag your logo files into `./logo/` directory.
7. Customize key-value pairs of your own configurations in `config.json`.
8. `npm start` to begin the program.
9. Once you see there's successful logs in the console, check `./target/` directory for output processed images.

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
