const button = document.getElementById('to-convert-button')
const select = document.getElementById('currency-select')

const dollars = 5.1
const euro = 5.75
const bitcoin = 0.0000052.toFixed(10)

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReal)

    if (select.value === 'U$ US Dollar'){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReal / dollars)
    }

    if (select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReal / euro)
    }

    if (select.value === '₿ Bitcoin'){
        currencyValueText.innerHTML = (`₿ ${bitcoin * inputReal}`)
    }
} 

changeCurrancy = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-image')

    if (select.value === 'U$ US Dollar'){
        currencyName.innerHTML = 'US Dollar'
        currencyImage.src = "./Assets/USAflag.png"
    }

    if (select.value === '€ Euro'){
        currencyName.innerHTML = '€ Euro'
        currencyImage.src = "./Assets/UEflag.png"
    }

    if (select.value === '₿ Bitcoin'){
        currencyName.innerHTML = '₿ Bitcoin'
        currencyImage.src = "./Assets/Bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrancy)