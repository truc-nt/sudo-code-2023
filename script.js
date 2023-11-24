const renderToDoList = () => {
    const toDoListElements = toDoListData.map((item) => {
        var template = document.createElement('template');
        template.innerHTML = `<li><span style="display: none">${item.key}</span><span>${item.text}</span><button class="btn btn-delete" onclick="handleDelete(event)">Delete</button></li>`;
        return template.content.firstChild;     
    });
    toDoList.replaceChildren(...toDoListElements);
}

const handleDelete = (e) => {
    const key = e.target.parentNode.firstChild.textContent;
    toDoListData = toDoListData.filter((item) => item.key !== key);
    renderToDoList();
}

const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    toDoListData.push({
        key: (new Date()).toISOString(),
        text: values.text
    });
    renderToDoList();

    //download(JSON.stringify(toDoListData), 'to-do-list.json');
}

function download(content, fileName) {
    var a = document.createElement("a");
    var file = new Blob([content]);
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

let toDoListData = []
const toDoList = document.getElementById('toDoList');



fetch('./to-do-list.json')
    .then((response) => response.json())
    .then((data) => {
        toDoListData = [...data]
        renderToDoList();
    });


