let main = document.querySelector('.main')
function getValue() {
    let inputVal = document.querySelector('.input').value
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
    let fetchh = fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                main.innerHTML = `
                <p>
                Please enter the full name of the city
                </p>
                `
            }
        })
        .then(response =>
            main.innerHTML = `
            <p>Country : ${response.sys.country}</p>
            <p>City: ${response.name}</p>
            <p>Weather: ${response.weather[0].main}</p>
            <p>Temperature: ${response.main.temp.toFixed(0)}°C/${(response.main.temp.toFixed(0) * 9 / 5) + 32}F</p>
            <p>Wind: ${Math.round(response.wind.speed * 2.23694)} mph</p>
            `
        )
}
let submit = document.querySelector('.submit')
submit.addEventListener('click', getValue)