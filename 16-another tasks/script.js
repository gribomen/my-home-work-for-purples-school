'use strict'

function addDescription(id,description){
        this.findToID(id).description = description;
}

function removeDescriptionTask(id){
    this.findToID(id).description = "";
}

const ToDoList = {
    tasks : [{
        title: 'Помыть посуду',
        id:1,
        order:1,
        description:'описание'
    }],

    findToID (id){
        return this.tasks.find(item => item.id === id)
    },

    addTask (task){
        this.tasks.push(task);
    },

    deleteTaskID (id){
        const num = this.tasks.indexOf(this.findToID(id));
        this.tasks.splice(num,1);
    },

    updateTitleorPriorityorDescriptionToId(title,order,description,id){
        const task = this.findToID(id);
        if(title){
            task.title = title;
        }

        if(order){
            task.order = order;
        }
        
        if(description){
            addDescription.call(this,id,description);
        }
    },

    sortTaskToPriority(){
        this.tasks.sort((a,b)=>b.order-a.order);
    },

}

const task = {
    title: 'Пойти погулять',
    id:2,
    order:3,
    description:'описание2'
};
ToDoList.addTask(task);
addDescription.call(ToDoList,2,"new task");
ToDoList.updateTitleorPriorityorDescriptionToId("new task",5,"new deskri",task.id);
removeDescriptionTask.call(ToDoList,task.id);
ToDoList.sortTaskToPriority();
console.log(ToDoList);
