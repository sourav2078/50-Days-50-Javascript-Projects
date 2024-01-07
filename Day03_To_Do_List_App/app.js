const item=document.querySelector("#item");
const toDoBox=document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function (event){
        if(event.key == "Enter"){
            addToDo(this.value);
            this.value="";
        }
    }
)

const addToDo = (item)=> {
    const listItem=document.createElement("li");
    listItem.innerHTML=`
    ${item}
    <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>`;
     listItem.addEventListener(
        "click",
        function (event) {
            this.classList.toggle("done");
        }
     )
     listItem.querySelector("i").addEventListener(
        "click",
        function (event){
            listItem.remove(); 
        }
     )
    toDoBox.appendChild(listItem);
}