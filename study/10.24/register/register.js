/* input 창을 모조리 가져와야함 */

const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submitButton');

/* 제출 버튼을 눌렀을 때, input 값들을 확인하는게 있어야함. EVENT! */

submitButton.addEventListener('click', function(){
    // 공통적으로, 공백인지 아닌지 여부 확인

    // 아이디 : 공백여부 / 중복여부
    // 비밀번호 : 공백여부 / 특문, 숫자, 문자 포함 8~15 여부 / 
    // 비밀번호 확인 : 공백여부 / 비밀번호와 일치여부
    // 이름 : 공백여부 
    // 메일 : 공백여부 / 이메일형식 일치여부 (aaa@aaa.com)
    // 연락처 : 전화번호 형식 여부 (000-0000-0000) 

    // >> 함수화를 시켜서 만들어봅시다


})

    function idConfirm() {
        // 1. 공백여부 확인
        if(!userid.value){}
    }
    function pwd1Confirm() {}
    function pwd2Confirm() {}
    function nameConfirm() {}
    function emailConfirm() {}
    function telConfirm() {}













