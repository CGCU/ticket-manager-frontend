<template>
<article>
  <h1>Events</h1>
  <section class="content">
    <table>
      <tr>
        <th>Event name</th>
        <th>Date</th>
        <th></th>
      </tr>
      <tbody>
        <tr v-for="event in events" @click="() => rowClicked(event.id)">
          <td>{{event.name}}</td>
          <td>{{event.date | moment("LL")}}</td>
          <td>
            <i class="cell-button material-icons" @click="() => deleteClicked(event.id)">delete</i>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Event } from '../event';
import { getEvents } from '../apiClient';

@Component({})
export default class EventsPageComponent extends Vue {
  private events: Event[] = [];

  private beforeMount() {
    getEvents().then(events => this.events = events);
  }

  private rowClicked(eventId: number) {
    this.$router.push('/events/' + eventId);
  }

  private deleteClicked(eventId: number) {
    // TODO: Show confirmation popup
    console.log('Delete clicked for', eventId);
  }
}
</script>

<style>
.cell-button {
  cursor: pointer;
  text-align: center;
}

.content[data-v-e85c445c] {
  -webkit-box-flex: 1;
      -ms-flex: auto;
          flex: auto;
  height: 100%;
}
tbody > tr[data-v-e85c445c] {
  cursor: pointer;
}
</style>