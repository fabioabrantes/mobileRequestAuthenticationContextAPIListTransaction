export interface TransactionDTO {
  id:string;
  amount:number;
  type:string;
  createdAt:Date;
  clientId:string;
  client: {
    id: string;
    name: string;
  }
}