let unorderedTaskList = document.getElementsByClassName("taskList");
let tasks = document.getElementsByTagName("li");
let checked = document.getElementById("check");
let checkedList = document.getElementById("check-list");

checked.addEventListener("change", checkMarkTask);

function checkMarkTask() {
    for (let i = 0; i < checkedList.length; i++) {
        if (checked.checked) {
            console.log("checkbox checked")
            checked.style.textDecoration == "line-through"
        } else {
            console.log("checkbox is unchecked")
            checked.style.textDecoration == "none"
        }
    }
    
}


// function checkMarkTask() {
//     // checkedList.checked = false
//     for (let i = 0; i < tasks.length; i++) {
//     // for (idx, val in enumerate(checked)) {
//         let listItem = tasks[i];
//         console.log(listItem)
//         if (checked.checked) {
//             // #draw line through task
//             // console.log(checkedList.checked)
//             listItem.style.textDecoration = "line-through";
//             // return checkedList
//         }
//         else {
//           listItem.style.textDecoration = "none";
//         }
    
//     // return checkedList
// }}


// checked.addEventListener("change", checkMarkTask);
// checked.addEventListener("change", () => {

//     if (checked.checked) {
//         for (let i = 0; i < tasks.length; i++) {
//             listItem = checked.parentNode;
//         if (checked.checked) {
//             checked.classList.add("hidden");
//         }
//         // checked.style.textDecoration = "line-through"
         
//         else {
//         checked.classList.remove("hidden");
//         }
// }
// }
// });
