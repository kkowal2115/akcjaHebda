class Input {
    constructor(text, onChange){
        this.text = text
        this.onChange = onChange
    }
    render(){
        const input = document.createElement('input')
        
        input.value = this.text

        input.style.outline = 'none'
        input.style.width = '90%'
        input.style.height = '30px'
        input.style.lineHeight = '24px'
        input.style.border = '1px solid black'
        input.style.borderRadius = '4px'
        input.style.padding = '4px'
        input.style.marginTop = '4px'
        input.style.boxSizing = 'border-box'
        
        input.addEventListener(
            'input',
            (event) => this.onChange(event.target.value)
        )

        return input
    }
}