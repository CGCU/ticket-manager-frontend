var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "article",
    { class: _vm.isLoading ? "blur" : "" },
    [
      _c("h1", [_vm._v("Scan tickets for " + _vm._s(_vm.event.name))]),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              _vm.switchCamera()
            }
          }
        },
        [_vm._v("Switch camera")]
      ),
      _c("qrcode-reader", { on: { decode: _vm.handleScan } })
    ],
    1
  )
}

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Event } from '../event';
import { getEvent, verifyTicket } from '../apiClient';

@Component({})
export default class EventScannerComponent extends Vue {
  private event: any = {};
  private scanner: any;
  private camNum = 0;
  private isLoading = false;

  private beforeMount() {
    const eventId = Number(this.$route.params.eventId);
    getEvent(eventId).then(event => this.event = event);

  }

  private checkIn(qr: string) {
    verifyTicket(this.event.id, qr)
      .then(verified => alert('Ticket ' + (!verified ? 'invalid or already scanned' : 'scanned successfully.')))
      .then(() => this.isLoading = false);
  }

  private handleScan(data: string) {
    this.isLoading = true;
    console.log('SCANNED ' + data);
    this.checkIn(data);
  }

  private switchCamera() {
  }
}
</script>

<style>
#preview {
  /*background-color: black;*/
}
.blur {
  -webkit-filter: blur(5px);
          filter: blur(5px);
}
</style>
