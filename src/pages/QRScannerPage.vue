<template>
    <div>
        <div class="card">
            <h1>QR Scanner Page</h1>
        </div>
        <qr-scanner></qr-scanner>
    </div>
</template>
<script>
import QRScanner from '../components/QRScanner.vue';

export default {
  name: "scanner-page",
  components: {
    "qr-scanner": QRScanner
  }
}
</script>
