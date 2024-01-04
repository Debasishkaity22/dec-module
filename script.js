let all=[];
let low=[],medium=[],high=[];
let allCount=0,lowCount=0,mediumCount=0,highCount=0;
let obj={};
let form=document.querySelector("#input-task");
let input1=document.querySelector("#add-input");
let input2=document.querySelector(".date-input");
let select1=document.querySelector(".priority1");
let btn1=document.querySelector("#add");
btn1.addEventListener("click",function(e){
   e.preventDefault();
   obj={
    task1:input1.value,
    task2:input2.value,
    selected:select1.value
   }
   allCount++;
   addItems(obj);
   form.reset();
})
let itemsContainer=document.querySelector("#items-container");
function addItems(obj){
    let deleteDiv=document.querySelector(".items");
    deleteDiv.style.display="none";
    let newDiv=document.createElement("div");
    newDiv.classList.add("new-items");
    let taskDiv1=document.createElement("div");
    taskDiv1.classList.add("newTask1");
    let taskDiv2=document.createElement("div");
    taskDiv2.classList.add("newTask2");
    let p1=document.createElement("p");
    p1.classList.add("date-para");
    p1.innerText=obj.task2;
    let p2=document.createElement("p");
    p2.classList.add("priority-para");
    p2.innerText=obj.selected;
    taskDiv2.append(p1,p2);
    let p3=document.createElement("input");
    let label=document.createElement("input");
    p3.classList.add("input-pra");
    p3.type="checkbox";
    label.type="text";
    label.value=obj.task1;
   label.setAttribute("readonly", "true");
    label.classList.add("label-para");
    let btnDiv=document.createElement("div");
    let labelDiv=document.createElement("div");
    labelDiv.classList.add("label-div")
    btnDiv.classList.add("btn-div");
  btnDiv.innerHTML=`
  <button class="new-btn1" onclick="editItems(this)">edit</button>
  <button class="new-btn2" onclick="deleteItems(this)">delete</button>
  `;
  labelDiv.append(p3,label);
  taskDiv1.append(labelDiv,btnDiv);
  newDiv.append(taskDiv2,taskDiv1)
  itemsContainer.appendChild(newDiv);
  allListCount();
}
function allListCount(){
   let toDo=document.querySelector(".todo-text2");
   toDo.innerText=allCount;
   let low1=document.querySelector(".lowpriorty-text2");
   let medium1=document.querySelector(".mediumpriorty-text2");
   let high1=document.querySelector(".highpriorty-text2");
   let priority11=document.querySelector(".priority1");
   if(priority11.value==="Low"){
    lowCount++;
   }
   else if(priority11.value==="Medium"){
    mediumCount++;
   }
   else if(priority11.value==="High"){
    highCount++;
   }
   
    low1.innerText=lowCount+" of "+allCount;
    medium1.innerText=mediumCount+" of "+allCount;
    high1.innerText=highCount+" of "+allCount;
    let newBtn2=document.querySelector("click",function(){

    })
}
function deleteItems(row){
   let rowDel=row.parentNode.parentNode.parentNode;
  rowDel.remove();
  allCount--;
  allListCount();
}
let inputParent;
function editItems(row){
   let parent=row.parentNode.parentNode;
   inputParent=parent;
   let class1=parent.firstChild.lastChild;
   class1.removeAttribute("readonly");
   class1.focus();
   
}

