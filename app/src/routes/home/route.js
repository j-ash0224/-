const express = require("express");
const router = express.Router(); 
//라우팅 파일의 변수는 관례적으로 router 사용
//라우팅 기능을 사용하기 위해 express.Router() 사용

const ctroler = require("./ctrl");
//컨트롤러 파일을 가져와서 변수에 대입

//컨트롤러 파일 읽어옴
router.get("/", ctroler.root);
router.get("/login", ctroler.login);

module.exports = router;
//라우팅 파일을 외부 파일에서도 사용 할 수 있도록 해주는 명령어