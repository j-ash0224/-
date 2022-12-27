const express = require("express");
const router = express.Router(); 
//라우팅 파일의 변수는 관례적으로 router 사용
//라우팅 기능을 사용하기 위해 express.Router() 사용

//경로 설정
router.get("/", function(req, res){
    res.render("home/root"); //ejs 파일 불러오기
});

router.get("/login", function(req, res){
    res.render("home/login");
});

module.exports = router;
//라우팅 파일을 외부 파일에서도 사용 할 수 있도록 해주는 명령어