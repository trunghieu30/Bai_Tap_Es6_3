class TaskList {
    constructor() { }
    taskList = []
    tasks = []
    tasks1 = []
    tasks2 = []
    tasks3 = []
    taskHoanThanh = []

    themTask(task) {
        this.taskList = [...this.taskList, task]
    }

    xoaTask(name) {
        this.taskList = this.taskList.filter((task) => task.name !== name)
    }

    xoaTaskHoanThanh(name) {
        this.taskHoanThanh = this.taskHoanThanh.filter((task) => task.name !== name)
    }

    themTaskHoanThanh(name) {
        this.tasks = [...this.taskList]
        this.tasks2 = this.tasks.filter((task) => task.name === name)
        this.taskHoanThanh = [...this.tasks2, ...this.taskHoanThanh]
    }



    sapXepAZ() {
        this.taskList = this.taskList.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if (tenTaskTiepTheo > tenTask) {
                return 1
            }
            if (tenTaskTiepTheo < tenTask) {
                return -1
            }
            return 1
        })
    }

    sapXepZA() {
        this.taskList = this.taskList.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if (tenTaskTiepTheo > tenTask) {
                return -1
            }
            if (tenTaskTiepTheo < tenTask) {
                return 1
            }
            return 1
        })
    }

    sapXepTuAZ() {
        this.taskHoanThanh = this.taskHoanThanh.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if (tenTaskTiepTheo > tenTask) {
                return 1
            }
            if (tenTaskTiepTheo < tenTask) {
                return -1
            }
            return 1
        })
    }

    SapXepTuZA() {
        this.taskHoanThanh = this.taskHoanThanh.sort((taskTiepTheo, task) => {
            let tenTaskTiepTheo = taskTiepTheo.name.toLowerCase()
            let tenTask = task.name.toLocaleLowerCase()
            if (tenTaskTiepTheo > tenTask) {
                return -1
            }
            if (tenTaskTiepTheo < tenTask) {
                return 1
            }
            return 1
        })
    }
}