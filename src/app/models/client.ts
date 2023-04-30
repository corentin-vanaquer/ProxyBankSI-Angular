export class Client {
  subscribe(arg0: { next: (response: any) => void; error: (err: any) => void; }) {
    throw new Error('Method not implemented.');
  }

  constructor(public id:number,
              public name:string,
              public firstname:string,
              public address: string,
              public zipcode:string,
              public city:string,
              public phone:string
  ){}
}
