
let addActivityToList = document.getElementById("input_area");
let addButton = document.getElementById("add");
let activity = document.getElementById("activities");


function addToList(){
    createList(addActivityToList);
    addActivityToList.value = "";
}

function createList(){
    let li = document.createElement("li");
    li.className = "content";
    let checkbox = document.createElement('input');
    let paragraph = document.createElement('p');
    let deleteElement = document.createElement('button');

    checkbox.type = "checkbox";
    checkbox.className = "galochka";
    checkbox.classList.add("row");
    li.appendChild(checkbox);

    paragraph.textContent = addActivityToList.value;
    paragraph.className = "activity-info";
    paragraph.classList.add("row");
    li.appendChild(paragraph);

    deleteElement.textContent = "Delete";
    deleteElement.className = "delete";
    deleteElement.classList.add("row");
    deleteElement.addEventListener("click", () => {
        activity.removeChild(li);
    })
    li.appendChild(deleteElement);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked)
            paragraph.classList.add('line');
        else
            paragraph.classList.remove('line');

    })

    activity.appendChild(li);

}