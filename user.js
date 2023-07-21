export class User {
    constructor(input) {
        this.id = input.id;
        this.username = input.username;
        this.name = input.name;
        this.address = input.address;
        this.address.city = input.address.city;
        this.address.street = input.address.street;
        this.address.suite = input.address.suite;
        this.address.zipcode = input.address.zipcode;
        this.address = input.address;
        this.phone = input.phone;
        this.email = input.email;
        this.website = input.website;
    }
    get fullAddress() {
        return `${this.address.city}-${this.address.street}-${this.address.suite}`
    }
}