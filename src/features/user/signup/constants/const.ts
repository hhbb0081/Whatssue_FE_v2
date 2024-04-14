export const SIGNUP_TITLE = "추가 정보 입력";

export const SIGNUP_INPUT_ARR = [
    {
        title: "회원 이름",
        type: "input",
        essential: true,
        name: "username"
    },
    {
        title: "회원 이메일",
        type: "input",
        essential: true,
        name: "email"
    },
    {
        title: "회원 전화번호",
        type: "btnInput",
        essential: true,
        name: "mobile"
    }
]

export const SIGNUP_BTN = {
    getNum: "인증번호 받기",
    checkNum: "인증번호 확인",
    retryNum: "재전송",
    complete: "회원 가입"
}
