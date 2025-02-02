--------------------------
* create CommonJS Project
--------------------------
1. 載入打包工具(vite)
   1.1 是否安裝 node.js
       1.1.1 terminal
             node -v
       1.1.2 如果沒顯示版號，代表沒安裝
----
   1.2 初始化 Vite 專案 => terminal
       1.2.1 npm create vite@latest my-cjs-project
       1.2.2 ? Select a framework:
             Vanilla
       1.2.3 ? Select a variant:
             JavaScript
----
   1.3 安裝相依套件(node_modules) => terminal
       1.3.1 cd my-cjs-project
       1.3.2 npm install
----   
   1.4 試啟服務 => terminal
       npm run dev
----
   1.5 主委加碼
       1.5.1 npm run dev 時自動開啟瀏覽器
             編輯 vite.config.js (如果沒有就自己建立)：
             import { defineConfig } from 'vite';

             export default defineConfig({
             server: {
                 open: true, // 在开发服务器启动时自动打开浏览器
              },
             });
--------------
2. CommonJS 要再見了 ? (還沒)
   2.1 為 Javascript 與 瀏覽器 間建立模組約定 (前後端)
   2.2 2009年 1月 Mozilla工程師 Kevin Dangoor 發起，名為 ServerJS
       ServerJS 強調是在 Server端 執行 JavaScript，但其實也適用於瀏覽器與其他環境
       2009年 8月 改名為「CommonJS」，強調「Common 通用」的模組標準，除Server端，也適用於各種Javascript環境
       (比較好賣)
   2.3 2013年 5月，Node.js套件管理器(npm)作者-lsaac Z. Schlueter 宣布 Node.js 廢棄 CommonJS
       2.3.1 CommonJS的侷限性
             。模組靜態解析：CommonJS 的 require 是動態調用，無法在編譯時靜態解析(預載)，影響效能優化
             。CommonJS 是為 Server端 設計，瀏覽器需要額外工具(Browserify、Webpack)才能使用，增加複雜性
             。不夠靈活、高效的模組管理方式
       2.3.2 未直接廢棄 CommonJS，而是推廣更標準化的模組(ESM)
             ESM 尚未完全成熟，還是得依賴 CommonJS
--------------
3. CommonJS 模組系統
   3.1 require
       取得外部模組的API，如果無法取得則throw錯誤
   3.2 exports
       模組API的服務提供
--------------
_4. 樣列
   4.1 util.js
       var count = 0;

       function getNumber() {
        count ++;
        return count;
       }
       exports.getNumber = getNumber
       exports.abc = "abc"
   -
   4.2 index.js
       var util = require('./util.js');
       console.log(util); // { getNumber: [Function: getNumber], abc: 'abc'}
       console.log(util.abc); // abc
       console.log(util.getNumber()); // 1
       console.log(util.getNumber()); // 2
       console.log(util.getNumber()); // 3
       console.log(util.count); // undefined
--------------
4. 測試(test/...)
   4.1 test1 - 關於 exports.value
       let _value = 0;
       [
            exports.value = _value; 屬於宣告(靜態)
            const valueSetting = (newVal) => {
                _value = newVal;
            };
            exports.value 還是一開始定義的 _value = 0
       ]
       [
            const getValue = () => {
                return _value;
            }; 才會取得最新的 _value
       ]
   4.2 test1 - 多require(同一個模組)
       const count = require('./count.cjs');
       const count2 = require('./count.cjs');
       count、count2 都指向('./count.cjs')，count2 異動 value，count.value 取得異動後 value
--------------
5. node.js 實作 CommonJS
   5.1 為保證高效能，模組只有require才會被加載
   5.2 為保證模組程式不會汙染到整個專案，整個模組被放進一個物件裡
   5.3 如果有多個 js 加載同一個模組，
       只要模組被加載過就會被存在暫存裡, 其他 js 就沿用暫存裡的模組，不再加載一次
       5.3.1 測試(4.2)
--------------
6. CommonJS 與 ESM 共存
   6.0 沒處理好就報錯
       6.0.1 情境 [type="module"、.js require .cjs]
             6.0.1.1 錯誤訊息
                     ReferenceError: require is not defined in ES module scope, you can use import instead
                     This file is being treated as an ES module because it has a '.js' file extension and 
                     'D:\...\project\...\my-cjs-project\package.json' contains "type": "module".
                     To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
                     不負責任翻譯：
                     package.json - type="module"，.js 視為 ES module (ESM)
                     ESM 不認識 require 所以報錯
             6.0.1.2 解法(擇一)
                     -1. type="commonJS"
                     -2. index.js 改為 index.cjs
   6.1 CommonJS 模式
       6.1.1 package.json.type
             無指定 type → 預設 CommonJS，.cjs/.js 都會被視為 CommonJS
             指定 type="commonjs" → .cjs/.js 都會被視為 CommonJS
       6.1.2 【require】載入必須使用 
             require(path)
             取得路徑檔案匯出的模組
       6.1.3 【exports】匯出必須使用 
             exports.可提供的物件(方法、參數...)
             必須exports，require 才可取得
       6.1.4 被載入的模組存放區，其實是個 json (module.exports)
             module.exports重新定義
                module.exports = {
                    參數名稱: 模組本人, ....
                }
            增加屬性
                exports["參數名稱"] = 某個模組或值
       6.1.5 module.exports 和 exports
            最一開始
            exports === module.exports → true
            -
            當使用 exports 時，其實也是在操作 module.exports
            exports.message = "測試" [等同於] module.exports.message = "測試"
            -
            當 exports 本人被重新定義
            exports = "測試A"
            export 就不再是 module.exports 了....
            exports === module.exports → false
            -
            require 返回的是 module.exports
            所以 exports 被重新定義不會影響專案運作
