/**********************  메인 코드 ********************/

//express 모듈을 실행
const express = require("express"); //express 모듈 추출 
const app = express(); //서버 생성

//서버 실행
app.listen(3000, function(){
    console.log("서버 가동");
});

//경로 설정
app.get("/", function(req, res){
    res.send("루트 페이지 입니다.");
});

app.get("/login", function(req, res){
    res.send("로그인 페이지 입니다.");
});