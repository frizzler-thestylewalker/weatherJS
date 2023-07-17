// 6f977cf60e4c437991f162427232506

let search = document.getElementById("search")
let form = document.getElementById("form")
let cardInfo = document.getElementById("card-info")

apiUrl = "https://api.weatherapi.com/v1/current.json?"
apiKey = "6f977cf60e4c437991f162427232506"

// image.src = 'https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_1280.jpg'

// http://api.weatherapi.com/v1/current.json?key=6f977cf60e4c437991f162427232506&q=London&aqi=no


 var a =() =>{
    search.addEventListener("click", (e)=>{
        cityName = form.value
        find()
    })
 }

a()



let find = () =>{
    const url = `${apiUrl}key=${apiKey}&q=${cityName}`
    

    fetch(url, { mode: 'cors' })
    .then((response)=>{
        if(!response.ok){
            throw new Error("request failed")
        }

        return response.json()
    })
    .then((data)=>{
        document.getElementById("cityName").innerText = `${cityName.toUpperCase()}`
        document.getElementById("country").innerText = `${data.location.country.toUpperCase()}`

        switch(data.current.condition.text){
            case 'Sunny':
            case 'Clear':
            cardInfo.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2017/06/17/18/35/beach-2413081_1280.jpg")`
            document.getElementById("temp-icon").innerHTML = `<img src='https://cdn.weatherapi.com/weather/64x64/day/113.png'></img>`
            break

            case 'Partly cloudy':
            case 'Overcast':
            case 'Cloudy': 
            cardInfo.style.backgroundImage = `url("https://media.istockphoto.com/id/1425535242/photo/dark-cumulus-thunderstorm-clouds-background.webp?b=1&s=612x612&w=0&k=20&c=UtKbwoQFS4v8X12HmniQJmVulZ5DGlV3e-nXuyHuSA8=")`
            document.getElementById("temp-icon").innerHTML = `<img src='https://cdn.weatherapi.com/weather/64x64/day/119.png'></img>`
            break

            case 'Moderate rain':
            case 'Light rain':
            case 'Light rain shower':
            case 'Heavy rain':  
            case 'Patchy rain possible':  
            case 'Moderate or heavy rain shower':  
            cardInfo.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_1280.jpg")`
            document.getElementById("temp-icon").innerHTML = `<img src='https://cdn.weatherapi.com/weather/64x64/day/308.png'></img>`
            document.getElementById("temp-text").style.color = `white`
            break

            default:
            cardInfo.style.backgroundImage = `url("https://cdn.pixabay.com/photo/2014/01/07/18/34/fog-240075_640.jpg")`
            document.getElementById("temp-icon").innerHTML = ''
        }
        
        document.getElementById("temp").innerText = `Current Temperature: ${data.current.temp_c}°C`
        
        document.getElementById("temp-text").innerText = `${data.current.condition.text}`
        

    })
    .catch((error)=>{
        cardInfo.innerText = 'Please, Enter Valid City'
        cardInfo.style.color='red'
        // cardInfo.style.backgroundImage= 'no'
        cityName.innerText = 'mumbai'
        console.log('error', error.message)
        a()

      
        

    })
}


