//HTML 요소 불러오기
const id = document.getElementById("id");
const pw = document.getElementById("pw");
const btn = document.getElementById("loginBtn");

//사용자 ID,PW 데이터 입력 시 적용 함수
function handleInput() {
    const idVal = document.getElementById("id").value;
    const pwVal = document.getElementById("pw").value;

    const isValidId = checkVal(idVal);
    const isValidPw = checkVal(pwVal);

    if (isValidId === true && isValidPw === true) {
        handleBtn(true);
    } else {
        handleBtn(false);
    }
}
//사용자가 입력한 ID, PW 값 조건 통과 여부 확인 > 유효성 검사
function checkVal(value) {
    if (value.length > 0) {
        return true;
    } else {
        return false;
    }
}
//사용자가 입력한 값에 따라 버튼 활성화, 비활성화
function handleBtn(btnValid) {
    if (btnValid === true) {
        //btn active
        btn.disabled = false;
        btn.style.opacity = 1;
        btn.style.cursor = pointer;
        success();
       } else {
           //btn deactive
           login.disabled = true;
           btn.style.opacity = 0.5;
       }
}
//로그인 성공 시 실행 함수
function success() {
    alert("로그인 성공!");
}
//요소에 이벤트 적용, init 함수 안에 이벤트 정의
function init() {
    id.addEventListener("input", handleInput);
    pw.addEventListener("input", handleInput);
    btn.addEventListener("click", success);
}
//init 함수 실행
init();