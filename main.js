const Jimp = require('jimp');
const Worker = require('tiny-worker');

// 设置要处理的图片的路径和输出路径
const inputPath = './source/';
const outputPath = './target/';

// 获取要处理的所有PNG文件的路径
const fs = require('fs');
const inputFiles = fs.readdirSync(inputPath).filter(file => file.endsWith('.jpg'));

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
    await worker.postMessage({ inputPath, outputPath, filename });
  }
}

processImages();