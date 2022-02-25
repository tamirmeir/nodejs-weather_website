console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherImageUrl = document.getElementById('weatherImage')

//document.getElementById('weatherImage').src = 'http://yourImagePathHere';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    weatherImageUrl.src=''

    fetch('/weather?address=' + location).then((response) => {
    //fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastMsg
                weatherImageUrl.src=data.forecastIcon
            }
        })
    })
})