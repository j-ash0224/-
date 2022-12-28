//express 모듈을 실행
const operate = require("../app"); //메인 코드를 읽어온다

const PORT = 3000;

//서버 실행
operate.listen(PORT, function(){
    console.log("서버 가동");
});