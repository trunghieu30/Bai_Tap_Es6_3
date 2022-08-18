
const addItem = document.querySelector('#addItem')

const TaskLists = new TaskList()

const input = document.querySelector('#newTask').value

const getFormValues = () => {
    const input = document.querySelector('#newTask').value
    const task = new Task()
    task['name'] = input
    return task
}

const renderTaskList = () => {
    const taskList = TaskLists.taskList
    const html = taskList.reduce((value, task) => {
        return (value += `
        <li><span>${task.name}</span>
                            <div class="buttons">
                                <button class="remove" onclick="xoaTask('${task.name}')">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="complete" onclick="themTaskHoanThanh('${task.name}')">
                                    <i class="far fa-check-circle"></i>
                                    <i class="fas fa-check-circle"></i>
                                </button>
                            </div>
                        </li>
        `)
    }, '')
    document.querySelector('#todo').innerHTML = html;
}

const renderTaskHoanThanh = () => {
    const taskHoanThanh = TaskLists.taskHoanThanh
    const html = taskHoanThanh.reduce((value, task) => {
        return (value += `
        <li><span>${task.name}</span>
                            <div class="buttons">
                                <button class="remove" onclick="xoaTaskHoanThanh('${task.name}')">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="complete">
                                    <i class="far fa-check-circle"></i>
                                    <i class="fas fa-check-circle"></i>
                                </button>
                            </div>
                        </li>
        `)
    }, '')
    document.querySelector('#completed').innerHTML = html;
}

const setLocalStore = () => {
    localStorage.setItem('taskList', JSON.stringify(TaskLists.taskList))
}

const setLocalStore1 = () => {
    localStorage.setItem('taskHoanThanh', JSON.stringify(TaskLists.taskHoanThanh))
}

const getLocalStore = () => {
    const data = localStorage.getItem('taskList')
    const dataParse = JSON.parse(data) || []
    TaskLists.taskList = dataParse.map((value) => {
        const task = new Task()
        for (let key in value) {
            task[key] = value[key]
        }
        return task
    })

    renderTaskList()
}

const getLocalStore1 = () => {
    const data = localStorage.getItem('taskHoanThanh')
    const dataParse = JSON.parse(data) || []

    TaskLists.taskHoanThanh = dataParse.map((value) => {
        const task = new Task()
        for (let key in value) {
            task[key] = value[key]
        }
        return task
    })

    renderTaskHoanThanh()
}
getLocalStore()

getLocalStore1()

addItem.onclick = () => {
    const task = getFormValues()
    TaskLists.themTask(task)
    getFormValues()
    renderTaskList()
    setLocalStore()
}

window.xoaTask = (name) => {
    TaskLists.xoaTask(name)
    renderTaskList()
    setLocalStore()
}

window.xoaTaskHoanThanh = (name) => {
    TaskLists.xoaTaskHoanThanh(name)
    renderTaskHoanThanh()
    setLocalStore1()
}

window.themTaskHoanThanh = (name) => {
    TaskLists.themTaskHoanThanh(name)
        ,
        renderTaskHoanThanh()
    TaskLists.xoaTask(name)
    renderTaskList()
    setLocalStore()
    setLocalStore1()
}



document.querySelector('#two').onclick = () => {
    TaskLists.sapXepAZ()
    TaskLists.sapXepTuAZ()
    renderTaskList()
    renderTaskHoanThanh()
    setLocalStore()
    setLocalStore1()
}

document.querySelector('#three').onclick = () => {
    TaskLists.sapXepZA()
    TaskLists.SapXepTuZA()
    renderTaskList()
    renderTaskHoanThanh()
    setLocalStore()
    setLocalStore1()
}




