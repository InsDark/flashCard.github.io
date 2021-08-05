const MODAL_ACTIVATOR = document.querySelector('#modalActivator')
let modalContainer = document.querySelector('.modal-flashCard')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.close')

const showModal = () => {
    modalContainer.style.opacity = 1;
    modalContainer.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
}


const hideModal = () => {
    modal.classList.toggle('modal-close');
    setTimeout(() =>{
        modalContainer.style.opacity = 0;
        modalContainer.style.visibility = 'hidden';
    }, 800)
}

MODAL_ACTIVATOR.addEventListener('click', showModal)

closeModal.addEventListener('click', hideModal);

modalContainer.addEventListener('click', e => {
    if (e.target === modalContainer){
        modal.classList.toggle('modal-close');
        setTimeout(() =>{
            modalContainer.style.opacity = 0;
            modalContainer.style.visibility = 'hidden';
        }, 800)
    }
})

let form = document.querySelector('#getQuestion')
let questionModal = document.querySelector('.questionModal')
let answerModal = document.querySelector('.answerModal')
let questionList = document.querySelector('.questionList')

form.addEventListener('submit', e => {
    e.preventDefault()
    let question = questionModal.value
    let answer = answerModal.value
    questionModal.value =''
    answerModal.value = ''

    questionList.innerHTML += `<div class='newQuestion'>
                                    <h2 class="question">${question}</h2>
                                    <a href="" class="showAnswer">Show/Hide Answer</a>
                                    <h2 class="answer hidden">${answer}</h2>
                                    <div class="buttons">
                                        <button class='editQuestion'>EDIT</button>
                                        <button class='deleteQuestion'>DELETE</button>
                                    </div>
                                </div>`
    hideModal()
    questionDeleter()
    displayAnswer()
})

const displayAnswer = () => {
    let showAnswer = document.querySelectorAll('.showAnswer')
    showAnswer.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            let newItem = e.target.parentElement.children[2]
            newItem.classList.toggle('hidden')
        })
    })
}

let editQuestion = document.querySelectorAll('.editQuestion')

const questionDeleter = () => {
    let deleteQuestion = document.querySelectorAll('.deleteQuestion')
    deleteQuestion.forEach(item => {
        item.addEventListener('click', e => {
            let itemUp = e.target.parentElement
            itemUp.parentElement.remove()
        })
    })
}

displayAnswer()
questionDeleter()