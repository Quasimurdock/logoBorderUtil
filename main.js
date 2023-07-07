const Worker = require('tiny-worker');
const fs = require('fs');

// 读取路径配置文件
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

// 设置要处理的图片的路径和输出路径
const inputPath = config.inputDirectory;
const outputPath = config.outputDirectory;

// 获取要处理的所有图片文件的文件名
const pattern = /\.(jpg|jpeg|png|gif|bmp|tiff)$/i;
const inputFiles = fs.readdirSync(inputPath)
  .filter(file => {
    const result = file.match(pattern); return result.length != 0;
  });

if (inputFiles == null || inputFiles.length == 0) {
  console.log('Input files not found.');
  return;
}

// 创建一个Tiny-worker池，用于并行处理图片
const pool = [];
for (let i = 0; i < inputFiles.length; i++) {
  const worker = new Worker('./worker.js');
  pool.push(worker);
}
const set = new Set();
// 将要处理的所有图片提交给Tiny-worker池进行处理
async function processImages() {
  console.log("Starting to process tasks......");
  for (let i = 0; i < inputFiles.length; i++) {
    const filename = inputFiles[i];
    const worker = pool[i % pool.length];
    worker.onmessage = (ev) => {
      const { filename: name } = ev.data;
      set.add(name);
      worker.terminate();
      console.log(`(${set.size}/${inputFiles.length}) Processed image file ======> ${name}`)
      if (set.size == inputFiles.length) {
        console.log(`Successfully completed all ${inputFiles.length} tasks.`);
      }
    }
    await worker.postMessage({ inputPath, outputPath, filename, config });
  }
}

processImages();
process.stdin.resume();