<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <venture-capitals-table />
      </div>
    </div>
  </div>
</template>

<script>
import VentureCapitalsTable from "./components/VentureCapitalsTable";

export default {
  name: "venture-capitals",
  components: {
    VentureCapitalsTable,
  },
};
</script>
