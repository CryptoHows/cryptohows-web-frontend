<template>
  <a
    href="javascript:;"
    class="avatar avatar-xs rounded-circle"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    :data-bs-original-title="name"
  >
    <img :src="image" rounded-circle alt="team4" />
  </a>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "image-icon-with-name",
  mounted() {
    setTooltip();
  },
  props: {
    image: String,
    name: String,
  },
};
</script>
