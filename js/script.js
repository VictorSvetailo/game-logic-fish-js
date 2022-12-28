const match__body = document.querySelector('.match__body')
const wrap = document.querySelector('.match__taken')
const victory = document.querySelector('.victory')
const refreshPage = document.querySelector('a')

refreshPage.style.display = 'none'

const selectedIsMatch = (value) => {
    if (value) {
        wrap.classList.add('active')
    } else {
        wrap.classList.remove('active')
    }
}

let choiceIsMade = 1
match__body.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    let value = e.target.classList.contains("active")
    if (!value && e.target.classList.contains("match")) {
        if (choiceIsMade === 0) {
            e.target.classList.add('active')
            checkingClassMatches()
            selectedIsMatch(1)
            choiceIsMade = 1
        }
    } else if (value) {
        if (choiceIsMade === 1) {
            e.target.classList.remove('active')
            selectedIsMatch(0)
            choiceIsMade = 0
        }
    }
})


const checkingClassMatches = () => {
    let numberMatches = 0
    const match = document.querySelectorAll('.match')
    match.forEach(item => {
        if (item.classList.contains("active") && item.classList.contains("true")) {
            numberMatches++
            if (numberMatches === 8) {
                victory.classList.add('active')
                refreshPage.style.display = 'block'
            }
        }
    })
    numberMatches = 0
}