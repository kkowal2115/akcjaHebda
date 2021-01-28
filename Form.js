class Form
{
    constructor(initiaValue, onSubmit){

        this.initiaValue = initiaValue
        this.onSubmit = onSubmit
        this.value = initiaValue
    }

    render()
    {

        const form = document.createElement('form')
        const input = new Input(
            this.initiaValue,
         (value) => this.value = value
         )
        const button = new Button('Dodaj zadanie')


        form.style.display = 'flex'
        form.style.justifyContent = 'space-between'
        form.style.padding = '4px'
        form.style.marginBottom = '4px'

        form.addEventListener(
            'submit',
            (event) => {
                event.preventDefault()
                this.onSubmit(this.value)
            }
        
        )

        form.appendChild(input.render())
        form.appendChild(button.render())
        return form

    }

}