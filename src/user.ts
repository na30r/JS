export class User {
  id: number;
  username: string;
  name: string;
  private _address: Address;
  phone: string;
  email: string;
  website: string;
  constructor(input: any) {
    this.id = input.id;
    this.username = input.username;
    this.name = input.name;
    this._address = new Address(
      input.address.city,
      input.address.street,
      input.address.city,
      input.address.city
    );
    this.phone = input.phone;
    this.email = input.email;
    this.website = input.website;
  }
  get address() {
    return `${this._address.city}-${this._address.street}-${this._address.suite}`;
  }
}

class Address {
  constructor(
    public city: string,
    public street: string,
    public suite: string,
    public zipcode: string
  ) {}
}
