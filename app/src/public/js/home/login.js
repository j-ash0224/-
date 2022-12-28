
const id = document.querySelector("#id");
const psword = document.querySelector("#password");
const loginBtn = document.querySelector("button")
//DOM을 사용한 메소드
//질의 선택자 : 파라미터로 넘어온 선택자를 통해 HTML 값을 가져올 수 있다
//선택자는 ejs 파일에 있는 태그

loginBtn.addEventListener("click", login);
//이벤트 리스너 작성
//전달받은 HTML 태그에 이벤트 click 발생시 로그인 함수 실행

function login(){
    const req = {
        id: id.value,
        psword: psword.value
    }
    //전달받은 태그에 .value를 통해 입력받은 값을 가져올 수 있다
    //해당 값들을 오브젝트에 입력 // 오브젝트 구성은 : 사용
    console.log(req);
}; //로그인 기능 함수