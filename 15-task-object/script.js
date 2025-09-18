'use strict'

const ToDoList = {
    tasks : [{
        title: 'Помыть посуду',
        id:1,
        priority:1
    }],

    findToID: function(id){
        return this.tasks.find(item => item.id === id)
    },

    addTask: function(task){
        this.tasks.push(task)    
    },

    deleteTaskID: function(id){
        const num = this.tasks.indexOf(this.findToID(id));
        this.tasks.splice( num,1);
    },

    updateNameorPriorityToId:function(title,priority,id){
        const task = this.findToID(id);
        if(title){
            task.title = title;
        }

        if(priority){
            task.priority = priority;
        }
    },

    sortTaskToPriority: function(){
        this.tasks.sort((a,b)=>b.priority-a.priority);
    }

}

const task1 = {
    title: 'Помыть полы',
    id:2,
    priority:3
}

const task2 = {
    title: 'Сделать зарядку',
    id:3,
    priority:5
}

const task3 = {
    title: 'Пойти погулять',
    id:4,
    priority:-2
}

const task4 = {
    title: 'Поспать',
    id:5,
    priority:9
}

ToDoList.addTask(task1);
ToDoList.addTask(task2);
ToDoList.addTask(task3);
ToDoList.addTask(task4);
ToDoList.deleteTaskID(2);
ToDoList.updateNameorPriorityToId("Z",5,4);
ToDoList.sortTaskToPriority();
console.log(ToDoList);