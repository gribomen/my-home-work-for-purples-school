const tasks = ['Задача1','Задача2','Задача3','Задача4'];


function addTask(name_task){
    tasks.push(addTask);

}

function removeTask(name_task){
    const index_task = tasks.indexOf(name_task);
    
    if(index_task !== -1){
        tasks.splice(index_task,1);
        return index_task;
    
    }else{
        return -1;
    
    }
}

function prioritizeTask(name_task){
    if(removeTask(name_task) >= 0){
        tasks.unshift(name_task);
    
    }else{
        return -1;
         
    }

}

prioritizeTask('Задача2');
console.log(tasks);