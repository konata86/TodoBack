const express = require("express");
const cores = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');

// DB接続
require("./utils/connection");
require("./models/user");
require("./models/todo");

// テーブルの作成
(async () => {
  try {
    await sequelize.sync(); // テーブルを作成する場合に force: true を指定
    console.log('テーブルが作成されました');
  } catch (error) {
    console.error('テーブルの作成中にエラーが発生しました:', error);
  }
})();

app.use(cores());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", userRoutes);
app.use("/todo", todoRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
