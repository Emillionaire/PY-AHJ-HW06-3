import InteractiveColumn from './InteractiveColumn'
import ItemDragWidget from './ItemDragWidget'
import NewCard from './NewCard'
import SaveDataWidget from './SaveDataWidget'

export default class TrelloApp {
    constructor (container) {
        this.container = container
        this.taskColumns = container.querySelectorAll('.column')
        this.newCardCreator = new NewCard()

        this.itemDragWidget = new ItemDragWidget(document.body)
        this.saveDataWidget = new SaveDataWidget(this.taskColumns, this.newCardCreator)
        this.saveDataWidget.loadData()
    }

    run () {
        this.taskColumns.forEach((column) => {
            const interactiveColumn = new InteractiveColumn(column, this.newCardCreator)
            interactiveColumn.init()
        })
    }
}
