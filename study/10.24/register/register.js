/* input 창을 모조리 가져와야함 */

const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');
const gender = document.querySelector('#gender')
const birthYear = document.querySelector('input[id=birthYear]')
const birthDay = document.querySelector('select[id=birthDay]')


/* 제출 버튼을 눌렀을 때, input 값들을 확인하는게 있어야함. EVENT! */

submitButton.addEventListener('click',function(){

    let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm(), birthConfirm()]
    // for문을 이용하여 하나하나씩 보내준다
    let chkFlag = true
    for (const chk of chkArray){
        if(!chk){ //확인하는 아이들의 return 값이 false인경우
            chkFlag = false // 하나라도 false가 들어온 경우. 
        }
    }
    if (chkFlag){ // 다 true가 뜨면 자료를 보냄.
        document.signup.submit()
    }


    // 전송시키기
    // const idConf = idConfirm()
    // const pwd1Conf =pwd1Confirm()
    // const pwd2Conf =pwd2Confirm()
    // const fullnameConf =fullnameConfirm()
    // const emailConf =emailConfirm()
    // const telConf =telConfirm()

    // if(idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf){ //모두 true 여야함
    //     document.signup.submit(); //signup이라 하는것을 submit시켜줌 - 보내준다 
    // }





    // 아이디 : 공백여부 / 중복여부
    // 비밀번호 : 공백여부 / 특문, 숫자, 문자 포함 8~15 여부 / 
    // 비밀번호 확인 : 공백여부 / 비밀번호와 일치여부
    // 이름 : 공백여부 
    // 메일 : 공백여부 / 이메일형식 일치여부 (aaa@aaa.com)
    // 연락처 : 전화번호 형식 여부 (000-0000-0000) 

    // >> 함수화를 시켜서 만들어봅시다
})

    function idConfirm() {
        const mustId = document.querySelector(".must_id")
        const overlap = document.querySelector(".overlap")

        // 텍스트가 남아있어서 공백, 중복이 이중으로 뜨게 되는걸 방지
        mustId.style.display = "none"
        overlap.style.display = "none"

        // 1. userId 공백여부 확인
        // null, undefined, "" , 0은 false
        // 즉, userid가 빈 문자열일때 fuction을 실행한다는 의미
        if(!userid.value.replace(/  /g,"")){ // 빈 문자열일 때! // 공백이나 0이 들어올때 ""로 바꿔준다는 의미
            mustId.style.display = "block" /* css설정 */
            return false //잘못된 값이므로! false 보냄. -> submit이 되지 않게 하는 억제기!
        } else { // 중복여부를 체크해야함
            if(!idCheck(userid.value.replace(/  /g,""))){  // id가 중복일 때
                overlap.style.display = "block" /* css설정 */
                return false //잘못된 값이므로! false 보냄. -> submit이 되지 않게 하는 억제기! 
            }
        }
        return true
    }

    function pwd1Confirm() {
        const mustPwd1 = document.querySelector(".must_pwd1")
        const regPwd = document.querySelector(".reg_pwd")
        
        mustPwd1.style.display = "none"
        regPwd.style.display = "none"

        if(!pwd1.value.replace(/  /g,"")){ 
            mustPwd1.style.display = "block"
            return false 
        } else { //특문, 숫자, 문자 포함 8~15 여부 -> 자바스크립트 정규식 이용
                // js 정규표현식 검색해서 띄워봐야함
            if(!pwdCheck(pwd1.value.replace(/  /g,""))){ // 정규표현식에 맞지 않는다면
                regPwd.style.display = "block" 
                return false
            }
        }
        return true
    }

    function pwd2Confirm() { //중복, pwd1이랑 같은지 여부 
        const mustPwd2 = document.querySelector(".must_pwd2")
        const same = document.querySelector(".same")
        mustPwd2.style.display = "none"
        same.style.display = "none"

        if(!pwd2.value){
            mustPwd2.style.display = "block"
            return false 
        }else { //pwd1, 2 모두 값이 있는지 확인 / 그 다음에 같은지 확인
            if(pwd1.value && pwd2.value){
                if (pwd1.value !== pwd2.value){
                    same.style.display = "block"
                    return false
                }
            }
        }
        return true
    }

    function fullnameConfirm() { //공백여부 확인
        const mustFullname = document.querySelector(".must_fullname")
        mustFullname.style.display = "none"
        if(!mustFullname.value){
            mustFullname.style.display = "block"
            return false
        }
        return true
    }

    function emailConfirm() {
        const mustEmail = document.querySelector(".must_email")
        const regEmail = document.querySelector(".reg_email")
        
        mustEmail.style.display = "none"
        regEmail.style.display = "none"

        if(!email.value){ 
            mustEmail.style.display = "block"
            return false 
        } else { 
            if(!emailCheck(email.value)){ // 정규표현식에 맞지 않는다면
                regEmail.style.display = "block" 
                return false
            }
        }
        return true
    }

    function telConfirm() {
        const regTel = document.querySelector(".reg_tel")
        regTel.style.display = "none"

        if(!telCheck(tel.value) && tel.value){
        // 전화번호가 있고! 형식이 일치하지 않을때 (유효성 통과) 
            regTel.style.display = "block" 
            return false
        }
        return true
    }

        // function genderConfirm(){
        //     const chkGender = document.querySelector(".msg_gender")
        //     chkGender.style.display = "none"

        //     if(!gender.value){
        //         chkGender.style.display = "block"
        //         return false
        //     }
        //     return true
        // }

        function birthConfirm(){
            const mustBirth = document.querySelector(`.must_birth`)
            mustBirth.style.display = "block"
            console.log(1);
            if(!birthYear.value){
                mustBirth.style.display = "block"
                return false
            }else if(!birthDay.value){
                mustBirth.style.display = "block"
                return false   
            }
            
            return true
        }

// 중복된 아이디 체크하는 function - 얘는 임시로 가짜 만들어줌
    function idCheck(id){
        return true
    }

// 비밀번호 정규식 체크하는 아이
    function pwdCheck(pwd){
     const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
       return reg.test(pwd)
    }

    function telCheck(tel){
        const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
        return reg.test(tel);
    }

    function emailCheck(email) {
        const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return reg.test(email);
      }
      











