
let unread_icon='<span class="notification-unread-icon"></span>';

const unread_num = document.getElementById("unread-num");

const nodeList = document.querySelectorAll("[class=notification]");



function GetUnreadNum() {
    let count=0
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].innerHTML.includes(unread_icon)) {
            count++
        }
    }
    unread_num.innerHTML=count;
}
GetUnreadNum()
function MarklAllRead() {
    for (let i = 0; i < nodeList.length; i++) {
        
        nodeList[i].innerHTML=nodeList[i].innerHTML.replace(unread_icon,"");
        nodeList[i].style.backgroundColor = "var(--White)";
    }
    GetUnreadNum();
}

for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].innerHTML.includes(unread_icon)) {
        nodeList[i].style.backgroundColor = "var(--Very-light-grayish-blue)"
    }
    nodeList[i].onmousedown= function(){
        nodeList[i].innerHTML=nodeList[i].innerHTML.replace(unread_icon,"");
        nodeList[i].style.backgroundColor = "var(--White)";
        GetUnreadNum()
    };
}

function displayDate() {
    document.querySelector("[class=notification]").innerHTML ="shit";
  }