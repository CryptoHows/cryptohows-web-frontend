<template>
  <aside
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl ms-3"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="m-0 navbar-brand" href="/">
        <img
          :src="logo"
          class="navbar-brand-img h-100 logoImage"
          alt="main_logo"
        />
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :cardBg="custom_class" />
    <channel />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import Channel from "./Channel.vue";
import logo from "@/assets/img/logo.png";

export default {
  name: "index",
  components: {
    SidenavList,
    Channel,
  },
  data() {
    return {
      logo,
    };
  },
  props: ["custom_class"],
};
</script>

<style scoped>
.logoImage {
  max-height: 3.7em !important;
}
</style>
