// function challenge1(){
//     document.getElementById("emailDiv").style.display = "block";
// }

document.getElementById("subscribe").addEventListener("click", function(){
    if (this.checked){
        console.log("checked");
        document.getElementById("emailDiv").style.display = "block";
    }
    else{
        console.log("unchecked");
        document.getElementById("emailDiv").style.display = "none";} 
});

document.body.addEventListener("click", function(){
    window.alert(new Date());
});