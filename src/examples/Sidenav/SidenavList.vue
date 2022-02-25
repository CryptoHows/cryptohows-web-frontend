<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2"
        >
          분류별 보기
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Round" :to="{ name: 'Round' }">
          <template v-slot:icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          navText="Venture Capitals"
          :to="{ name: 'Venture Capitals' }"
        >
          <template v-slot:icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Projects" :to="{ name: 'Projects' }">
          <template v-slot:icon>
            <icon name="billing" />
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";
import SidenavCollapse from "./SidenavCollapse.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    Icon,
    SidenavCollapse,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
