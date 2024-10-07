const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// مسیر فایل index.html با توجه به محل فایل fileWatcher.js
const filePath = path.resolve(__dirname, '../.next/server/app/index.html');

// ایجاد Watcher با تنظیمات دقیق‌تر
const watcher = chokidar.watch([filePath], {
  persistent: true,
  ignoreInitial: false,            // اطمینان از اینکه فایل‌های موجود هم مانیتور شوند
  usePolling: true,                // فعال کردن حالت Polling برای مانیتورینگ دقیق‌تر
  interval: 1000 ,                // فاصله بررسی تغییرات (میلی‌ثانیه)
  depth: 0,                        // محدود کردن عمق مانیتورینگ
});

watcher
  .on('ready', () => console.log(`Watching for changes in ${filePath}...`))
  .on('change', async () => {
    console.log(`File changed: ${filePath}`);

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    try {
      console.info(`File uploaded successfully: ${path.basename(filePath)}`,fileContent);
    } catch (error) {
      console.error(`Failed to upload file: ${error.message}`);
    }
  })
  .on('error', (error) => console.error(`Watcher error: ${error}`));
