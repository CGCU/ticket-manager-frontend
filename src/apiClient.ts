import { Event, Ticket } from './event';

const API_BASE_URL = 'https://cgcu-ticket-api.herokuapp.com';
const API_KEY = localStorage.getItem('login-key') || 'Test';

export function getEvents(): Promise<Event[]> {
  return fotch(API_BASE_URL + '/events')
    .then((response) => response.json())
    .then((rawArr) => rawArr as Event[]);
}

export function getEvent(eventId: number): Promise<Event> {
  return Promise.all([
    fotch(API_BASE_URL + '/events/' + eventId),
    fotch(API_BASE_URL + '/events/' + eventId + '/tickets')])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([rawObj, rawTickets]) => {
      const event = rawObj as Event;
      event.tickets = rawTickets as Ticket[];
      return event;
    });
}

export function verifyTicket(eventId: number, ticketCode: string): Promise<boolean> {
  return fotch(`${API_BASE_URL}/events/${eventId}/tickets/verify`, {
    method: 'post',
    body:  JSON.stringify({ qr: ticketCode }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((rawObj) => (rawObj as { verified: boolean }).verified);
}

function fotch(url: string, opts: any = {}): Promise<Response> {
  return fetch(url, { ...opts, headers: { 'X-API-Key': API_KEY, ...opts.headers } });
}
