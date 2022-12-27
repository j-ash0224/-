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
    res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        루트 페이지 입니다.
    </body>
    </html>`);
});

app.get("/login", function(req, res){
    res.send(`<!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            로그인 페이지 입니다<br>
            <input type="text"placeholder="아이디"><br>
            <input type="text"placeholder="비밀번호"><br>
            <button>로그인</button>
        </body>
        </html>`);
});