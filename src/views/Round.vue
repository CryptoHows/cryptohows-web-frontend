<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <round-table />
      </div>
    </div>
  </div>
</template>
<script>
import RoundTable from "./components/RoundTable.vue";

export default {
  name: "round",
  components: {
    RoundTable,
  },
};
</script>
