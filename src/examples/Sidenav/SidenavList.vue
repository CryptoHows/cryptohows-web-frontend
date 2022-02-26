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
        <sidenav-collapse navText="투자 라운드" :to="{ name: 'Round' }">
          <template v-slot:icon>
            <icon name="foundation" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="프로젝트" :to="{ name: 'Projects' }">
          <template v-slot:icon>
            <icon name="spaceship" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          navText="벤처 캐피탈"
          :to="{ name: 'Venture Capitals' }"
        >
          <template v-slot:icon>
            <icon name="office" />
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
