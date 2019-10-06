<article class="page">
  <h1>{{event.name}} Tickets</h1>
  <table>
    <tr>
      <th>Name</th>
      <th>Ticket code</th>
      <th>Scanned?</th>
      <th>Check In</th>
    </tr>
    <tbody>
      <tr v-for="ticket in tickets">
        <td>{{ticket.purchaser.first_name + " " + ticket.purchaser.last_name}}</td>
        <td>{{ticket.qr}}</td>
        <td>{{ticket.scanned ? "✔" : ""}}</td>
        <td><button @click="() => checkIn(ticket)">Check In</button></td>
      </tr>
    </tbody>
  </table>
</article>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Event, Ticket } from '../event';
import { getEvent, verifyTicket } from '../apiClient';

@Component({})
export default class EventDetailComponent extends Vue {
  private event: any = {};

  private beforeMount() {
    const eventId = Number(this.$route.params.eventId);
    getEvent(eventId).then(event => this.event = event);
    setInterval(() => this.refreshData(), 5000);
  }

  private refreshData() {
    // Fetch event details
    getEvent(this.event.id).then(event => this.event = event);
  }

  private checkIn(ticket: Ticket) {
    verifyTicket(this.event.id, ticket.qr)
      .then(verified => alert('User ' + (!verified ? 'not verified' : 'verified successfully.')))
      .then(() => this.refreshData());
  }
}
</script>