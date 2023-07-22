export class User {
    constructor(input) {
        this.id = input.id;
        this.username = input.username;
        this.name = input.name;
        this._address = new Address(input.address.city, input.address.street, input.address.city, input.address.city);
        this.phone = input.phone;
        this.email = input.email;
        this.website = input.website;
    }
    get address() {
        return `${this._address.city}-${this._address.street}-${this._address.suite}`;
    }
}
class Address {
    constructor(city, street, suite, zipcode) {
        this.city = city;
        this.street = street;
        this.suite = suite;
        this.zipcode = zipcode;
    }
}
