const form      = document.getElementById("ToDoForm");
const input     = document.getElementById("TaskInput");
const task_list = document.getElementById("taskList");
const stats     = document.getElementById("Stats_Text");

const STORAGE_KEY = "Miras_Will_Not_Go_To_WEB";
let   todoes = [];

function Update_Stats() {
    const total = todoes.length;
    const done = todoes.filter(t => t.done).length;
    const left = total - done;

    stats.textContent = `${total} tasks • ${done} done • ${left} left`;
}

function Save_ToDoes () 
{   localStorage.setItem(STORAGE_KEY, JSON.stringify(todoes)); }

function Load_ToDoes ()
{   const raw = localStorage.getItem(STORAGE_KEY);
    todoes = raw ? JSON.parse(raw) :[];
}

function Render_ToDoes ()
{
    task_list.innerHTML = "";

    for (const todo of todoes)
    {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;
        checkbox.classList.add("glass-checkbox");

        const span = document.createElement("span");
        span.textContent = todo.text;

        const del_btn = document.createElement("button");
        del_btn.textContent = 'X';
        del_btn.classList.add("del-btn");

        if (todo.done)
        { li.classList.add("done"); }


        checkbox.addEventListener("change", function()
        {   todo.done = checkbox.checked;
            li.classList.toggle("done");
            Save_ToDoes();
            Update_Stats();
        }); 

        del_btn.addEventListener("click", function()
        {   todoes = todoes.filter(t => t.id !== todo.id);
            Save_ToDoes();
            Render_ToDoes();
            Update_Stats();
        }); 


        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(del_btn);

        task_list.appendChild(li);
    }
}

form.addEventListener("submit", function(event) 
{
    event.preventDefault();

    const value = input.value.trim();
    if (value === "") 
    { return; }

    todoes.push({
        id: Date.now(),
        text: value,
        done: false
    });

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type  = "checkbox";
    checkbox.classList.add("glass-checkbox");
    li.appendChild(checkbox);

    const span = document.createElement("span")
    span.textContent = value;
    li.appendChild(span);

    task_list.appendChild(li);

    const del_btn = document.createElement("button");
    del_btn.textContent = 'X';
    del_btn.classList.add("del-btn");
    li.appendChild(del_btn);

    input.value = "";

    checkbox.addEventListener("change", function()
    { li.classList.toggle("done");});

    del_btn.addEventListener("click", function()
    { li.remove(); });

    Save_ToDoes();
    Render_ToDoes();
    Update_Stats();
});

Load_ToDoes();
Render_ToDoes();
Update_Stats();