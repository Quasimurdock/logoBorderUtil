const Jimp = require('jimp');
const moment = require('moment');

onmessage = async function (ev) {
    const { inputPath, outputPath, filename, config } = ev.data;
    await Jimp.read(inputPath + filename, async function (err, img) {
        if (err) throw err;
        const initialBottomBorderHeight = img.bitmap.height * 0.065;
        const bottomBorderHeight = initialBottomBorderHeight > 298 ? initialBottomBorderHeight : 298;
        const canvasHeight = img.bitmap.height + bottomBorderHeight;
        const borderedImg = new Jimp(img.bitmap.width, canvasHeight, '#ffffff');
        borderedImg.composite(img, 0, 0);
        await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(async (font) => {
            const exif = this._exif;
            const tags = exif.tags;
            const { FNumber, ISO, FocalLength, ExposureTime, DateTimeOriginal } = tags;
            const Shutter = 1 / ExposureTime;
            const FocalLengthString = (FocalLength == null || typeof FocalLength === 'undefined') ? "" : `${FocalLength}mm  `;
            const FNumberString = (FNumber == null || typeof FNumber === 'undefined') ? "" : `F${FNumber}  `;
            const ISOString = (ISO == null || typeof ISO === 'undefined') ? "" : `ISO${ISO}  `;
            const ShutterString = (Shutter == null || typeof Shutter === 'undefined') ? "" : `1/${Shutter}s  `;
            const basicExifInfoString = `${FocalLengthString}${FNumberString}${ISOString}${ShutterString}`;
            // console.log(basicExifInfoString);
            const logo = await Jimp.read(config.logoDirectory + config.logoFileName);
            const facLogo = await Jimp.read(config.logoDirectory + config.brandLogoFileName);
            borderedImg.blit(logo, img.bitmap.width * 0.02, img.bitmap.height + bottomBorderHeight * 0.08);
            borderedImg.blit(facLogo, img.bitmap.width - facLogo.bitmap.width - img.bitmap.width * 0.02, img.bitmap.height + bottomBorderHeight * 0.16)
            borderedImg.print(font, img.bitmap.width * 0.02, img.bitmap.height + bottomBorderHeight * 0.70,
                basicExifInfoString);
            if (typeof DateTimeOriginal != 'undefined') {
                borderedImg.print(font, img.bitmap.width - 608 - img.bitmap.width * 0.02, img.bitmap.height + bottomBorderHeight * 0.68,
                    moment(DateTimeOriginal * 1000).format('YYYY-MM-DD hh:mm:ss'));
            }
            borderedImg.write(outputPath + filename, () => {
                // 返回处理结果
                postMessage({ filename });
            });
        });
    });
}