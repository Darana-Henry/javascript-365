const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).append(img);
});

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        //updateStorage();
        console.log('Update Storage');
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                //updateStorage();
                console.log('Update Storage');
            }
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === 'Enter') {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});