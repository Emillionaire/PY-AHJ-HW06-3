import AddNewCardWidget from './AddNewCardWidget'

export default class InteractiveColumn {
    constructor (columnContainer, newCardCreator) {
        this.columnItemsContainer = columnContainer.querySelector('.column-items-container')

        this.addNewCardBtn = columnContainer.querySelector('.add-card-btn')

        this.addNewCardForm = this.columnItemsContainer.querySelector('.add-card-box')
        this.addNewCardForm = new AddNewCardWidget(this.columnItemsContainer, this.addNewCardForm, newCardCreator)
        this.addNewCardForm.init()
    }

    init () {
        this.addNewCardBtn.addEventListener('click', this.addNewCardForm.showForm.bind(this.addNewCardForm))
    }
}
