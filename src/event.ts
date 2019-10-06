export interface Person {
  first_name: string;
  last_name: string;
}

export interface Ticket {
  purchaser: Person;
  qr: string;
  scanned: boolean;
}

export interface Event {
  id: number;
  tickets: Ticket[];
}
