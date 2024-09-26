// 綁定按鈕點擊事件處理函式
document.getElementById("ab-bu").addEventListener("click", abbu);
document.getElementById("ex-bu").addEventListener("click", exbu);
document.getElementById("go-bu").addEventListener("click", gobu);

// 事件處理函式
function abbu() {
  document.getElementById("about").style.display = "";
  document.getElementById("experience").style.display = "none";
  document.getElementById("goal").style.display = "none";
}

function exbu() {
  document.getElementById("about").style.display = "none";
  document.getElementById("experience").style.display = "";
  document.getElementById("goal").style.display = "none";
}

function gobu() {
  document.getElementById("about").style.display = "none";
  document.getElementById("experience").style.display = "none";
  document.getElementById("goal").style.display = "";
}

//document.getElementById("ab-bu").onclick = abbu;
//document.getElementById("ex-bu").onclick = exbu;
//document.getElementById("go-bu").onclick = gobu;

//function abbu() {
//if (this.id == "ab-bu") {
//document.getElementById("about").style.display = "";
//document.getElementById("experience").style.display = "none";
//document.getElementById("goal").style.display = "none";
//}
//}

//function exbu() {
//  if (this.id == "ex-bu") {
//    document.getElementById("about").style.display = "none";
//    document.getElementById("experience").style.display = "";
//    document.getElementById("goal").style.display = "none";
//  }
//}

//function gobu() {
//  if (this.id == "go-bu") {
//    document.getElementById("about").style.display = "none";
//    document.getElementById("experience").style.display = "none";
//    document.getElementById("goal").style.display = "";
//  }
//}
