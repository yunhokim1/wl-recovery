"use strict";


const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    nextBtn = document.querySelector("#button");



nextBtn.addEventListener("click", delete_account);


function delete_account(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(!psword.value) return alert("비밀번호를 입력해주십시오.");
    
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/delete_account", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                return location.href = "/delete_account2";
            } else {
                return alert("입력한 정보를 다시 확인해주세요.");
            }
        })
        .catch((err) => {
            console.error("계정 삭제 중 에러 발생");
        });
      
}