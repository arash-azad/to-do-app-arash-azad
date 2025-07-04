// let data = document.createElement("h1");
// let data2 = data.textContent("gholi");
// document.body.appendChild(data2);
let root = document.getElementById("root");
let input = document.querySelector("input");
let btn = document.getElementById("button1");
let alert1=document.getElementById("empty_alert-id");
let circle=document.getElementById("done-circle-id");

let welcome=document.getElementById("welcomeid");
let welcomebtn=document.getElementById("welcomebtnid");

// let DATA = ["Shopping", "Runnig", "Doctor"];
let DATA = [
  // {
  //   title: "Shopping",
  //   isDone: false,
  // },
  // {
  //   title: "Runnig",
  //   isDone: false,
  // },
  // {
  //   title: "Doctor",
  //   isDone: false,
  // },
];
let emptyinput=true;
let isEditingMode = false;
let IndexAsli;
btn.addEventListener("click", function () {
  
if (input.value.trim() === "") {
  alert("Your list is empty");
}
else {
  if (isEditingMode) {
    DATA[IndexAsli].title = input.value;
    isEditingMode = false;
  } else {
    let newOne = {
      title: input.value,
      isDone: false,
    };
    DATA.push(newOne);
    emptyinput=false;
  }
  
  input.value = "";
  render(); 
}






});

function handleDone(index) {
  //   DATA[index].isDone = true;
  let state = DATA[index].isDone;
  DATA[index].isDone = !state;
  //   console.log(DATA[index]);
  render();
}
function handleDelete(index) {
  DATA.splice(index, 1);
  render();
}
function handleEdit(index) {
  input.value = DATA[index].title;
  isEditingMode = true;
  IndexAsli = index;
}

function render() {
  let template = DATA.map((item, index) => {
    return `
      <div class="${item.isDone ? "done-circle" : "notdone-circle"}" id="done-circle-id" onclick="handleDone(${index})"></div>
        <li class="${item.isDone ? "done" : "notdone"}">${item.title}
        <br><br>
        <button id="button1" onclick="handleDone(${index})">${
      item.isDone ? "NotDone" : "Done"
    } </button>
        <button id="button1" onclick="handleDelete(${index})">Delete</button>
        <button id="button1" onclick="handleEdit(${index})">Edit</button>
        </li>
        `;
  });
  root.innerHTML = template.join("");
}
render();
btn.addEventListener('click',function(){
  if(emptyinput==false){
  alert1.classList.add('notempty-alert');
  alert1.classList.remove('empty_alert');}
});

welcomebtn.addEventListener('click',function(){
  welcome.classList.remove('welcome');
  welcome.classList.add('hidden');

  welcomebtn.classList.remove('welcome');
  welcomebtn.classList.add('hidden');
  
  setTimeout(() => {
  welcome.style.display = "none";
}, 1002);
});




// circle.addEventListener('click',function(){
//   circle.classList.toggle('notdone-circle')
//   circle.classList.toggle('done-circle')
// })

// function updatedivclass(){
//   if (DATA.length>0){
//       alert.classList.add('class2');
//       alert.classList.remove('empty_alert');   
//   }
//   else{
//     alert.classList.add('empty_alert');
//     alert.classList.remove('class2');
//   }

// }