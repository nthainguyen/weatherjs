const weather = new Weather('hanoi', 'VN');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather)
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    weather.changeLocation(city, country)

    getWeather();

    $('#locModal').modal('hide')
})

function getWeather(){
    weather.getWeather()
        .then(result => {
            console.log(result);
            ui.paint(result);
        })
        .catch(err => console.log(err))
}
