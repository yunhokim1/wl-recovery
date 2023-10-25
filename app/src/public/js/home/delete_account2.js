"use strict";


const id = document.querySelector("#id"),
    nextBtn = document.querySelector("#button");



nextBtn.addEventListener("click", delete_account);


function delete_account(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    
    const req = {
        id: id.value,
    };

    fetch("/delete_account2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                return alert("계정이 삭제 되었습니다.", location.href = "/login");
            } else {
                return alert("입력한 정보를 다시 확인해주세요.");
            }
        })
        .catch((err) => {
            console.error("계정 삭제 중 에러 발생");
        });
      
}