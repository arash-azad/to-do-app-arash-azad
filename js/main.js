// let data = document.createElement("h1");
// let data2 = data.textContent("gholi");
// document.body.appendChild(data2);
let root = document.getElementById("root");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let alert=document.getElementById("empty_alert-id");
let circle=document.getElementById("done-circle-id");

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

let isEditingMode = false;
let IndexAsli;
btn.addEventListener("click", function () {
  if (isEditingMode) {
    DATA[IndexAsli].title = input.value;
    isEditingMode = false;
  } else {
    let newOne = {
      title: input.value,
      isDone: false,
    };
    DATA.push(newOne);
  }

  input.value = "";
  render();
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
        <button onclick="handleDone(${index})">${
      item.isDone ? "NotDone" : "Done"
    } </button>
        <button onclick="handleDelete(${index})">Delete</button>
        <button onclick="handleEdit(${index})">Edit</button>
        </li>
        `;
  });
  root.innerHTML = template.join("");
}
render();

btn.addEventListener('click',function(){
       alert.classList.add('notempty-alert');
      alert.classList.remove('empty_alert');
});
circle.addEventListener('click',function(){
  circle.classList.toggle('notdone-circle')
  circle.classList.toggle('done-circle')

  
})

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