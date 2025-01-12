1. 檢查是否安裝node.js：
   1.1 輸入指令
       node -v
       npm -v
   1.2 如果看到版號，表示安裝成功。
   1.3 如果未安裝node.js：
       1.3.1 輸入指令
             nvm install --lts
             nvm use --lts
       1.3.2 如果看到版號，表示安裝成功。
-
2. 初始化專案
   2.1 建立專案資料夾
       mkdir my-project
       cd my-project
   2.2 建立package.json 文件，記錄專案依賴與配置  
       npm init -y
   2.3 安裝node_modules
       npm install express
-
3. package.json 設定
   3.1 加入 script 快捷指令
   "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
    }
   3.1 執行 (試試看設定o不ok)
       npm start
       3.1.1 執行後可能出現錯誤訊息
             Error: Cannot find module 'D:\GitHubDesktop\project\web-project\node-project\1_createNodeProject\index.js'
-
4. 建立index.js
   4.1 建立index.js文件
   4.2 輸入內容
       console.log("Hello Node.js!");
   4.3 執行index.js
       node index.js