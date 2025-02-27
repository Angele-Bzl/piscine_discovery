
function new_todo()
{
    let todo = prompt("To do :");
    if (todo)
    {
        const node = document.createElement("div");
        node.innerHTML = todo;
        document.getElementById("node-list").appendChild(node);
        node.classList.add("node")
        node.addEventListener("click", destroy);
        console.log(todo);

        localStorage.setItem("node-content", todo);
        console.log(localStorage);
    }
}

function destroy(event)
{
    if (confirm("Delete this task ?"))
    {
        event.target.remove();
    }
}

// function loadLocalStorage()
// {
//     let savedContent = localStorage.getItem("node-content");
//     if (savedContent)
//     {

//     }
// }

