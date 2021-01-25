var state = false
document.getElementById("menu").addEventListener("click", function(){
    if (!state) {
        document.getElementsByClassName("list")[0].className =  "list active"
        
    }else{
        document.getElementsByClassName("list")[0].className =  "list"

    }
    state =!state;
})
