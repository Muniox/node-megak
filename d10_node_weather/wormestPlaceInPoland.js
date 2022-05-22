const fetch = require('node-fetch');



const processWeatherData = async data => {
   const sorted = [...data].sort((a, b) => {
        if (b.temperatura > a.temperatura){
            return 1;
        }
        if (a.temperatura > b.temperatura){
            return -1;
        }
        return 0;
   });

   const {
       stacja: station,
       temperatura: temperature
   } = sorted[0]

   console.log(`Most warm place in Poland is ${station} with temperature: ${temperature}°C`);
};

const findWarmestPlaceInPoland = async () => {
    try {
        const response = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await response.json();
        await processWeatherData(data);
    } catch (error) {
        console.log('Error has occurred :(', error);
    }
}

void findWarmestPlaceInPoland();




