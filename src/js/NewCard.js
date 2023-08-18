export default class NewCard {
    #svgIcon

    constructor () {
        this.createSvgImage()
    }

    createSvgImage () {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        iconSvg.classList.add('item-delete')
        const iconPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        )

        iconSvg.setAttribute('viewBox', '0 -960 960 960')
        iconSvg.setAttribute('height', '15')
        iconSvg.setAttribute('width', '15')
        // iconSvg.classList.add('add-card-box__cancel-btn')

        iconPath.setAttribute(
            'd',
            'm249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z'
        )

        iconSvg.appendChild(iconPath)

        this.#svgIcon = iconSvg
    }

    createNewCard (text) {
        const cardItem = document.createElement('div')
        cardItem.classList.add('column-item')

        const cardText = document.createElement('p')
        cardText.innerText = text
        cardText.classList.add('item-text')
        cardItem.appendChild(cardText)

        const deleteBtn = this.#svgIcon.cloneNode(true)
        cardItem.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            cardItem.remove()
        })
        return cardItem
    }
}
