let key = Math.random();

function new_todo()
{
    let todo = prompt("To do :");
    if (todo)
    {
        key = key + 1;
        const node = document.createElement("div");
        node.innerHTML = todo;
        document.getElementById("node-list").appendChild(node);
        node.classList.add("node")
        node.addEventListener("click", destroy);
        node.setAttribute("id", `${key}`);

        localStorage.setItem(`key-${key}`, todo);
        console.log(localStorage);
    }
}

function destroy(event)
{
    if (confirm("Delete this task ?"))
    {
        let keyNumber = Number(event.target.getAttribute("id"));
        console.log(keyNumber);
        localStorage.removeItem(`key-${keyNumber}`);
        event.target.remove();
    }
}
// const items = {...localStorage};
// console.log(items);

window.onload = setTasks();

function setTasks()
{
    console.log("hello");
    const items = {...localStorage};
    let len = items.length;
    let i = 0;
    while (i <= len)
    {
        console.log("hi");
        console.log(items[i]);
        i++;
    }
    console.log(items);
}