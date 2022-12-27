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

//라우팅 파일을 사용하기 위한 코드
const route = require("./routes/home/route");
//라우팅 파일을 읽어와서 변수에 저장
app.use("/",route);
//첫번째 파라미터의 경로에서부터 라우팅 파일 사용해서 경로 지정