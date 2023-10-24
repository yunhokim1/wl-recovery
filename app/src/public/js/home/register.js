"use strict";


const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    birthDay = document.querySelector("#birthDay"),
    email = document.querySelector("#email"),
    phoneNumb = document.querySelector("#phoneNumb"),
    registerBtn = document.querySelector("#button");



registerBtn.addEventListener("click", register);

function autoHypenPhone(str){
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{              
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }
    return str;
}

var cellPhone = document.getElementById('phoneNumb');
cellPhone.onkeyup = function(event){
event = event || window.event;
var _val = this.value.trim();
this.value = autoHypenPhone(_val) ;
}

function register(){
    const pattern = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,9}$");
    const pattern2 = new RegExp("^[가-힣]{2,5}$");
    const pattern3 = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}");
    const pattern4 = new RegExp("[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$");
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(!pattern.test(id.value)) return alert("아이디를 영문+숫자 5~10 글자로 입력해주십시오.");
    if(!name.value) return alert("이름를 입력해주십시오.");
    if(!pattern2.test(name.value)) return alert("이름을 똑바로 입력해주십시오.");
    if(!psword.value) return alert("비밀번호를 입력해주십시오.");
    if(!pattern3.test(psword.value)) return alert("비밀번호를 특수문자, 영문, 숫자 조합 6~16자리로 입력해주십시오.");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    if(!birthDay.value) return alert("생년월일을 입력해주십시오.");
    if(!email.value) return alert("이메일을 입력해주십시오.");
    if(!pattern4.test(email.value)) return alert("이메일을 똑바로 입력해주십시오.");
    if(!phoneNumb.value) return alert("휴대전화 번호를 입력해주십시오.");
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        birthDay: birthDay.value,
        email: email.value,
        phoneNumb: phoneNumb.value,
    };
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                return alert("정상적으로 회원가입 되었습니다." ,location.href = "/login");
            } else {
                if (res.err) return alert("이미 존재하는 아이디 입니다.");
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
      
}


