let weather = {
    "apikey": "", // insert api key in parenthesis.
    fetchWeather: function (city) 
    {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=imperial&appid="
             + this.apikey
        ).then(response => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data)
    {

        let planet = "";
        let joke = [];

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        if (temp >= 75)
        {
            planet = "Tatooine";

            joke.slice(joke.length);

            joke.push("Maybe Jabba The Hutt's got an AC");
            joke.push("\"Luke, I am your father, don't you dare touch that thermostat\" - Darth Vadar");
            joke.push("\"May the force keep you cool\" - Obi-Wan Kenobi");
        }
        else if (temp >= 60 && temp <= 75)
        {
            planet = "Nabbo";

            joke.slice(joke.length);
            
            joke.push("\"Mmm. Any Help Here Would Be Hot.\" - Jar Jar Binks");
            joke.push("\"Once more the Sith will cool the galaxy\" - Emperor Palpatine");
            joke.push("misa luke warm!");
        }
        else if (temp >= 45 && temp <= 60)
        {
            planet = "Alderaan";

            joke.slice(joke.length);

            joke.push("It's not quite warm enough for Princess Leia to let down her hair");
            joke.push("\"Help me Obi-Wan Kenobi, it's sweater weather, and I only have this robe.\"");
            joke.push("Alderaan could put the heater on");
        }
        else if (temp >= 30 && temp <= 45)
        {
            planet = "Dagobah";

            joke.slice(joke.length);

            joke.push("\"brisk it is out there!\" - Yoda");
            joke.push("you can't weather a gnarltree, but you can climate.");
            joke.push("try not... do... get me a coat.");
        }
        else if (temp <= 30)
        {
            planet = "Hoth";

            joke.slice(joke.length);

            joke.push("May the furnace be with you");
            joke.push("Use the force and grab me a blankit");
            joke.push("what's the difference between a Taun Taun, and the weather, one is reined up, one rains down.");
        }

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "It's like " + planet + " out there!";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".joke").innerText = joke[getRandomInt(3)];
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");

        document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + planet + " Planet From Star Wars)";

        function getRandomInt(max) 
        {
            return Math.floor(Math.random() * max);
        }
    },
    search: function ()
    {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function () 
    {
        weather.search();
    }
);

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) 
    {
        if (event.key == "Enter")
        {
            weather.search();
        }
    }
);