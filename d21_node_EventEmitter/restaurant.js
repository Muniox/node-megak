const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  /**
   * Otwarcie restauracji.
   */
  open() {
    this.emit('open');
  }

  /**
   * Zamknięcie restauracji.
   */
  close() {
    this.emit('close');
  }

  /**
   * Stolik został zarezerowany na teraz.
   * Traktuj to jako po prostu 1 stolik mniej.
   */
  reserveTable() {
    this.emit('reserveTable');
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    this.emit('cancelTableReservation');
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    this.emit('takeTableWithoutReservation');
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    this.emit('markTableAsBroken');
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    this.emit('cleanupTable');
  }
}

module.exports = {
  Restaurant,
};
