const cardHolder = document.getElementById('card-name')
const cardNumber = document.getElementById('card-number')
const month = document.getElementById('card-month')
const year = document.getElementById('card-year')
const cvc = document.getElementById('card-cvc')
const form = document.getElementById('my-form')
const cardInfo = document.getElementById('card-info')
const complete = document.getElementById('complete-message')
const submitButton = document.getElementById('card-submit')
const continueButton = document.getElementById('continue-btn')
const inputArray = document.getElementsByTagName('input')

const userHolder = document.getElementById('card-user-name')
const userNumber = document.getElementById('card-user-number')
const userDate = document.getElementById('card-user-date')
const userCvc = document.getElementById('cvc')

const nameError = document.getElementById('name-error')
const numberError = document.getElementById('number-error')
const dateError = document.getElementById('date-error')
const submitError = document.getElementById('submit-error')


year.addEventListener('input', (e) => {
    if (year.value > 3) {
        year.style.border = '1px solid red'
        dateError.innerHTML = 'input a valid date'


        setTimeout(() => {
            year.style.border = ""
            dateError.innerHTML = ''
        }, 3000);
    }
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (cardHolder.value == 0) {
        cardHolder.style.border = '1px solid red'
        nameError.innerHTML = 'field required'

        setTimeout(() => {
            cardHolder.style.border = ""
            nameError.innerHTML = ''
        }, 3000);
    }
    if (cardNumber.value == 0) {
        cardNumber.style.border = '1px solid red'
        numberError.innerHTML = 'field required'

        setTimeout(() => {
            cardNumber.style.border = ""
            numberError.innerHTML = ""

        }, 3000);
    }
    if (month.value == 0) {
        month.style.border = '1px solid red'
        dateError.innerHTML = 'field required'

        setTimeout(() => {
            month.style.border = ""
            dateError.innerHTML = ''
        }, 3000);
    }
    if (year.value == 0 || year.value > 3) {
        year.style.border = '1px solid red'
        dateError.innerHTML = 'field required'

        setTimeout(() => {
            year.style.border = ""
            dateError.innerHTML = ''
        }, 3000);
    }
    if (cvc.value == 0) {
        cvc.style.border = '1px solid red'
        dateError.innerHTML = 'field required'

        setTimeout(() => {
            cvc.style.border = ""
            dateError.innerHTML = ''
        }, 3000);
    }




    if (cardHolder.value == 0 || cardNumber.value == 0 || month.value == 0
        || year.value == 0 || cvc.value == 0) {



    } else {
        cardInfo.classList.add('hidden')
        complete.classList.remove('hidden')
        complete.classList.add('complete')


        userHolder.innerHTML = cardHolder.value
        userNumber.innerHTML = cardNumber.value
        userDate.innerHTML = `${month.value} / ${year.value}`
        userCvc.innerHTML = cvc.value

        form.reset()

    }
})

continueButton.addEventListener('click', (e) => {
    cardInfo.classList.remove('hidden')
    complete.classList.add('hidden')

    userHolder.innerHTML = '***** ****'
    userNumber.innerHTML = '0000 0000 0000 0000'
    userDate.innerHTML = '00/00'
    userCvc.innerHTML = '000'
})




