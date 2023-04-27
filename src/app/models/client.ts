export class Client {
  id: number;
  name: string;
  firstname: string;
  address: string;
  zipcode: string;
  city: string;
  phone: string;

  constructor(id, name, firstname, address, zipcode, city, phone) {
    this.id = id, this.name = name, this.firstname = firstname, this.address = address, this.zipcode = zipcode, this.city = city, this.phone = phone
  }
}
