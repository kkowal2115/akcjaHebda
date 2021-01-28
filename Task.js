class Task {
    constructor(task, onCompleted, onDelete){

        this.task = task
        this.onCompleted = onCompleted
        this.onDelete = onDelete
    }

    render(){


        const container =document.createElement('div')
        const p = document.createElement('p')
        const deleteButton = new Button('Usuń', this.onDelete)

        p.innerText = this.task.text 

        container.style.display = 'flex'
        container.style.justifyContent = 'space-between'
        container.style.padding = '4px'
        container.style.marginBottom = '4px'
        container.style.borderRadius = '4px'

        container.style.backgroundColor = 'rgba(0, 0, 0, 0.025)'


        if(this.task.isCompleted === true){
            p.style.textDecoration = 'line-through'
            p.style.textDecorationColor = 'red'
        }
        p.style.margin = '4px'
        p.style.width = '100%'
        p.style.fontFamily= 'sans-serif'
        p.style.fontSize = '14px'
        p.style.cursor = 'pointer'
        
        p.addEventListener(
            'click',
            () => this.onCompleted()
        )

        container.appendChild(p)
        container.appendChild(deleteButton.render())
        return container
    }
}