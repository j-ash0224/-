//함수를 따로 선언 할 때에는 이름을 부여해야 한다.
function root (req, res){
    res.render("home/root");
}

function login (req, res){
    res.render("home/login");
}

module.exports = {root, login};
//외부에서 함수를 사용 할 수 있도록 하는 명령어