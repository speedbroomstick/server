const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
const urlencodedParser = express.urlencoded({extended: false});
const fs = require('fs');
let col;
const dir = './picture';
fs.readdir(dir, (err, files) => {
    col = files.length;
});
const multer  = require("multer");
app.use(express.static(__dirname));
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "picture");
    },
    filename: (req, file, cb) =>{
        cb(null, 'photo' + col+'.jpg');
    }
});
// определение фильтра
const fileFilter = (req, file, cb) => {

    if(file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"||
        file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}
app.use(multer({storage:storageConfig, fileFilter: fileFilter}).single("filedata"));
app.post("/upload", function (req, res, next) {
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/main.html");
});
app.get("/main.html", function (request, response) {
    response.sendFile(__dirname + "/main.html");
});
app.get("/stile.css", function (request, response) {
    response.sendFile(__dirname + "/stile.css");
});
app.get("/kodik.js", function (request, response) {
    response.sendFile(__dirname + "/kodik.js");
});
app.get("/jquery-3.6.1.min.js", function (request, response) {
    response.sendFile(__dirname + "/jquery-3.6.1.min.js");
});
app.get("/1.jpg", function (request, response) {
    response.sendFile(__dirname + "/1.jpg");
});
app.get("/fon.jpg", function (request, response) {
    response.sendFile(__dirname + "/fon.jpg");
});
app.get("/History.html", function (request, response) {
    response.sendFile(__dirname + "/History.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    async function run() {
        try {
            await mongoClient.connect();
            const db = mongoClient.db("blog");
            const collection = db.collection("users");
            let user = {login: request.body.login, password: request.body.pasword};
            const results = await collection.find({login: request.body.login, password: request.body.pasword}).toArray();
           // console.log(results.keys('login'));
            if(results.length>0)
            {
                alert("Вы успешно вошли");
            }
            else
            {
                const result = await collection.insertOne(user);alert("Регистрация успешна");
            }

        }catch(err) {
            console.log(err);
        } finally {
            await mongoClient.close();
        }
    }
    run();

});

app.listen(3000, ()=>console.log("Сервер запущен..."));