function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if(item.value != "" && item.value.length <= 40){
        let make_li = document.createElement("LI");
        let make_i = document.createElement("I");
        make_i.className +="fas fa-trash-alt";
        make_li.appendChild(make_i);
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value=""
        make_i.onclick = function(){
            this.parentNode.remove();
        }
    }else if(item.value.length > 40){
        alert("Work Length should be less than 40 Characters");
        item.value="";
    }
    else{
        alert("Please Add a work you want to do!");
    }
}