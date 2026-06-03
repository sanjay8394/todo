const taskInput =
document.getElementById("taskInput");


const addBtn =
document.getElementById("addBtn");


const taskList =
document.getElementById("taskList");


const count =
document.getElementById("count");


const themeBtn =
document.getElementById("themeBtn");



let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



// Display Tasks

function displayTasks(){


    taskList.innerHTML="";


    tasks.forEach((task,index)=>{


        const li =
        document.createElement("li");


        if(task.completed){

            li.classList.add("completed");

        }



        li.innerHTML = `


        <span class="task-text">

        ${task.text}

        </span>


        <div class="actions">


        <button 
        class="complete"
        onclick="completeTask(${index})">

        ✔

        </button>



        <button
        class="edit"
        onclick="editTask(${index})">

        ✏

        </button>



        <button
        class="delete"
        onclick="deleteTask(${index})">

        ✖

        </button>


        </div>


        `;


        taskList.appendChild(li);


    });



    count.innerText = tasks.length;


    saveTasks();

}





// Add Task


addBtn.addEventListener(
"click",
()=>{


    const text =
    taskInput.value.trim();



    if(text===""){

        alert(
        "Please enter a task"
        );

        return;

    }



    tasks.push({

        text:text,

        completed:false

    });



    taskInput.value="";


    displayTasks();


});




// Enter key support


taskInput.addEventListener(
"keypress",
(e)=>{


    if(e.key==="Enter"){

        addBtn.click();

    }

});





// Complete Task


function completeTask(index){


    tasks[index].completed =
    !tasks[index].completed;


    displayTasks();

}





// Delete Task


function deleteTask(index){


    tasks.splice(index,1);


    displayTasks();

}





// Edit Task


function editTask(index){


    let updated =
    prompt(
    "Edit Task",
    tasks[index].text
    );



    if(updated){

        tasks[index].text =
        updated;


        displayTasks();

    }

}





// Save


function saveTasks(){


    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );


}





// Dark Mode


themeBtn.onclick = ()=>{


    document.body.classList.toggle("dark");


    if(
    document.body.classList.contains("dark")
    ){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }


};





displayTasks();
