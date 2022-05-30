const bcrypt = require('bcrypt');


//hasło bc nie może mieć więcej niż 72 bytes, najlepiej dadać funkcje która będzie sprawdzać wielkość naszego hasła
//bcrypt za każdym razem wyrzuca nam innego hasha więc tutaj musimy używać funkcji porownującej (compare)

bcrypt.hash('tekst do zhashowania', 10, (error, hash) => {
  if (error) {
    console.log(error);
  } else {
    console.log(hash);

    //sprawdz czy hasła są takie same
    bcrypt.compare('tekst do zhashowania', hash, (error, res) =>{
      if (res){
        console.log("passwords match");
      } else {
        console.log("passwords don't match");
      }
    });
  }
});

