let unlist=document.getElementById("unlist");
let textBox=document.getElementById("input-text");
let btAdd=document.querySelector(".btAdd");
function clicked(){
    let textData=textBox.value;
    let symb=/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if(textData==="")
    {
      alert("Enter Data Properly");
      return false
    }
    if(symb.test(textData)){
      alert("Enter Valid data")
      textBox.value="";
      textBox.focus();
      return false;
    } 
    let li=document.createElement("li");
    li.classList.add("li");
    unlist.appendChild(li);
    li.innerHTML=textData;
    //li.textContent = 
    textBox.value="";
    textBox.focus();
    let del=document.createElement("button");
    del.classList.add("bt_del");
    li.appendChild(del);
    del.innerHTML="Delete";
  
}
function del(e){
   if(e.target.classList[0]==="bt_del"){
     let item=e.target.parentElement;
     item.remove();
   }
   
}

btAdd.addEventListener("click",clicked);
unlist.addEventListener("click",del);