export class User {
    constructor(input) {
        this.id = input.id;
        this.username = input.username;
        this.name = input.name;
        this.add = input.address;
        this.add.city = input.address.city;
        this.add.street = input.address.street;
        this.add.suite = input.address.suite;
        this.add.zipcode = input.address.zipcode;
        this.add = input.address;
        this.phone = input.phone;
        this.email = input.email;
        this.website = input.website;
    }
    get address() {
        return `${this.add.city}-${this.add.street}-${this.add.suite}`
    }
}