const fetch = require('node-fetch');



const processWeatherData = async data => {
   const sorted = [...data].sort((a, b) => {
       return b.temperatura - a.temperatura
        // if (b.temperatura > a.temperatura){
        //     return 1;
        // }
        // if (a.temperatura > b.temperatura){
        //     return -1;
        // }
        // return 0;
   });

    for (const sort of sorted) {

        const {
            stacja: station,
            temperatura: temperature
        } = sort

        console.log(`Station ${station} with temperature: ${temperature}°C`);

    }
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




