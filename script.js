function showMessage(){
alert("Welcome to Yashvardhan's Official Artist Journey 🚀");
}

/* Mouse 3D movement */
document.addEventListener("mousemove",(e)=>{
document.querySelector(".card").style.transform =
`rotateY(${(e.clientX/50)}deg) rotateX(${-(e.clientY/50)}deg)`;
});
