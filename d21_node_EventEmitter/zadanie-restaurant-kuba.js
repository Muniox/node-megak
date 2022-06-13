const { Restaurant } = require('./restaurant-kuba');

const megaRestaurant = new Restaurant();
let tablesCount = 25;


megaRestaurant
    .on('open', () => console.log("Otwarto restaurację."))
    .on('close', () => console.log("Zamknięto restaurację."))
    .on('tableCountChange', change => {
        tablesCount += change;
        console.log(`Dostępnych stolików: ${tablesCount}.`);
    });


megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostępnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostępnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostępnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostępnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostępnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostępnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostępnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostępnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostępnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."
