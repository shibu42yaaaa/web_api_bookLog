# web_api_bookLog

# やること
- 読んだ本の読書を記録できる
- 記録した読書ログを取得する

# 機能一覧
- 読書ログを記録する
- 読書ログの一覧を取得する

# URLとHTTPメソッド
- 読書ログを記録する
PODT https:;//api.example.com/booklog

- 読書ログの一覧を取得する
GET https:;//api.example.com/booklog

# パラメータ
- 読書ログを記録する
POST https:;//api.example.com/booklog
パラメータ：name, text

- 読書ログを取得する
GET https:;//api.example.com/booklog
パラメータ：なし

# レスポンスデータ
- 読書ログを記録する
成功 
{"ok":true,
  "booklog":{
   "name":"風の歌を聴け", "text":"村上春樹っぽい"}}

失敗
{"ok":false,
  "error:""invalid parameter"}

# 使用する技術
- Node.js
- Express
- PISTMAN

# 構築手順
npm init

デフォルト：index.js
動画ではapp.jsに変更

Expressのインストール
npm install express --save

expressの起動
node ファイル名.js (この場合はindex.js)



