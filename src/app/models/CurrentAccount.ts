import { Client } from "./client";

export class CurrentAccount{

  id: number;
  accountNumber: String;
  dateCreation : Date;
  solde: number;
  threshold: number;
  rate: number;
  client: Client;

}
