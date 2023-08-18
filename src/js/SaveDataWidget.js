export default class SaveDataWidget {
    constructor (dataColumns, newCardCreator) {
        this.dataColumns = dataColumns
        this.newCardCreator = newCardCreator
        this.setHandlers()
    }

    setHandlers () {
        window.addEventListener('beforeunload', () => {
            this.saveData()
        })
    }

    saveData () {
        const data = {
            column1: [],
            column2: [],
            column3: []
        }
        for (let i = 0; i < this.dataColumns.length; i++) {
            const allColumnItems = this.dataColumns[i].querySelector('.column-items-container').querySelectorAll('.column-item')
            allColumnItems.forEach((item) => {
                data[`column${i + 1}`].push(item.querySelector('.item-text').textContent)
            })
        }

        const trelloData = JSON.stringify(data)
        localStorage.setItem('trelloData', trelloData)
    }

    loadData () {
        const trelloData = localStorage.getItem('trelloData')
        try {
            const data = JSON.parse(trelloData)
            for (let i = 0; i < this.dataColumns.length; i++) {
                const form = this.dataColumns[i].querySelector('.add-card-box')
                const itemsContainer = this.dataColumns[i].querySelector('.column-items-container')
                data[`column${i + 1}`].forEach((item) => {
                    itemsContainer.insertBefore(this.newCardCreator.createNewCard(item), form)
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}
