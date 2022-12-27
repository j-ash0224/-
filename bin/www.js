//express 모듈을 실행
const operate = require("../app");

const PORT = 3000;

//서버 실행
operate.listen(PORT, function(){
    console.log("서버 가동");
});