import TrelloApp from './TrelloApp'

const mainContainer = document.querySelector('.container')
const trelloApp = new TrelloApp(mainContainer)
trelloApp.run()
