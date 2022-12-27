//http 모듈을 실행
const http = require("http"); //http 모듈 추출 
const app = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    //브라우저가 받은 응답을 한글로 해석해야 한다는 것을 명시
    //200은 정상 응답, html 문서이며 utf-8코드를 사용하라는 의미
    if(req.url === "/"){
        res.end("루트 페이지 입니다.");
    } else if (req.url === "/login"){
        res.end("로그인 페이지 입니다.");
    }
}); //서버 생성, 경로 지정

//서버 실행
app.listen(3001, function(){
    console.log("서버 가동");
});

// /**********************  메인 코드 ********************/

// //express 모듈을 실행
// const express = require("express"); //express 모듈 추출 
// const app = express(); //서버 생성

// //서버 실행
// app.listen(3000, function(){
//     console.log("서버 가동");
// });

// //경로 설정
// app.get("/", function(req, res){
//     res.send("루트 페이지 입니다.");
// });

// app.get("/login", function(req, res){
//     res.send("로그인 페이지 입니다.");
// });