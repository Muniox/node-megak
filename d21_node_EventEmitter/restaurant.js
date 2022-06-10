const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  /**
   * Otwarcie restauracji.
   */
  open() {
    this.emit('open', 'Otwarto restaurację');
  }

  /**
   * Zamknięcie restauracji.
   */
  close() {
    this.emit('close', 'Zamknięte');
  }

  /**
   * Stolik został zarezerowany na teraz.
   * Traktuj to jako po prostu 1 stolik mniej.
   */
  reserveTable() {
    this.emit('reserve', 'Zarezerowano stolik');
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    // Emit...
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    // Emit...
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    // Emit...
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    // Emit...
  }
}

module.exports = {
  Restaurant,
};
