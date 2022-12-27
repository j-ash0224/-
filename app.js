/**********************  메인 코드 ********************/

//express 모듈을 실행
const express = require("express"); //express 모듈 추출 
const app = express(); //서버 생성

//서버 실행
app.listen(3000, function(){
    console.log("서버 가동");
});

//ejs를 사용하기 위한 코드
app.set("views","./views");
app.set("view engine", "ejs");

//경로 설정
app.get("/", function(req, res){
    res.render("home/root"); //ejs 파일 불러오기
});

app.get("/login", function(req, res){
    res.render("home/login");
});