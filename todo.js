const todolist = []
class todo_class
{
    constructor(item)
    {
        this.ulElement = item;
    }
    create() //add
    {
        var todoInput = document.querySelector("#mytodo").value;
        const ip = todoInput;
        if(todoInput = "")
        {
            alert("No Input Detected!");
        }
        else
        {
            const todo_obj  = {id:todolist.length, todoText:ip, isDone:false}
            todolist.push(todo_obj);
            this.displ();
            document.querySelector("#mytodo").value = '';
        }
    }
    displ()
    {
        this.ulElement.innerHTML = "";
        todolist.forEach((object_item) => {
            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");
            
            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);
            
            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "fa-trash-alt");
            
            liElement.append(delBtn);
            //liElement.prepend(count+".  ");
            
            delBtn.addEventListener("click",function(e){
                const delitem = e.target.getAttribute("data-id");
                obj.del(delitem);
            });
            
            liElement.addEventListener("click",function(e){
                const stat = e.target.getAttribute("data-id");
                obj.status(stat);
            });
            
            if(object_item.isDone)
            {
                liElement.classList.add("checked");
            }
            this.ulElement.append(liElement);
        })
    }
    status(e)
    {
        const selectedTodoIndex = todolist.findIndex((item)=> item.id == e);
        //console.log(todolist[selectedTodoIndex].isDone);
        todolist[selectedTodoIndex].isDone == false ? todolist[selectedTodoIndex].isDone = true : todolist[selectedTodoIndex].isDone = false;
        this.displ();
    }
    del(e)
    {
        const deleteitem =  todolist.findIndex((item)=> item.id == e);
        todolist.splice(deleteitem,1);
        this.displ();
    }
}
const listSection = document.querySelector("#myUL");
obj = new todo_class(listSection);
document.querySelector(".addbtn").addEventListener("click",function(){obj.create();})
