const button = document.getElementById('to-convert-button')
const select = document.getElementById('currency-select')

// const dollars = 5.1     // discarded... replaced by the variables below the FETCH
// const euro = 5.75
// const bitcoin = 0.0000052

const convertValues = async () => {  // include async in function ... if not arrow function
                                     // the format would be as follows ... async function myFunction(){
                                     //                                }   

    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    // ASYNC AWAIT =>  asynchronous code (which does not have sync)
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dollars = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    //console.log(data) // => for verification in inspect


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
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputReal / bitcoin)
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