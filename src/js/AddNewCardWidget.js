export default class AddNewCardWidget {
    constructor (itemsContainer, formContainer, newCardCreator) {
        this.itemsContainer = itemsContainer
        this.formContainer = formContainer
        this.newCardCreator = newCardCreator
        this.textArea = formContainer.querySelector('.add-card-box__text-field')
        this.addBtn = formContainer.querySelector('.add-card-box__add-btn')
        this.cancelBtn = formContainer.querySelector('.add-card-box__cancel-btn')
    }

    init () {
        this.formContainer.addEventListener('submit', this.addNewCard.bind(this))
        this.cancelBtn.addEventListener('click', this.cancelForm.bind(this))
    }

    addNewCard (e) {
        e.preventDefault()
        if (this.textArea.value.trim()) {
            const newCard = this.newCardCreator.createNewCard(this.textArea.value)
            this.textArea.value = ''
            this.formContainer.style.display = 'none'

            this.itemsContainer.insertBefore(newCard, this.formContainer)
        }
    }

    showForm () {
        this.formContainer.style.display = 'block'
    }

    cancelForm () {
        this.formContainer.style.display = 'none'
    }
}
