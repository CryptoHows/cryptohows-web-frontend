<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="mb-4 col-lg-5 mb-lg-0">
        <div class="card z-index-2">
          <div class="p-3 card-body">
            <!-- chart -->
            <active-users-chart />
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <!-- line chart -->
        <div class="card z-index-2">
          <gradient-line-chart />
        </div>
      </div>
    </div>
    <div class="my-4">
      <div class="col-lg-11 col-md-6 mb-md-0 mb-4">
        <projects-card />
      </div>
    </div>
  </div>
</template>
<script>
import ActiveUsersChart from "@/examples/Charts/ActiveUsersChart.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import ProjectsCard from "./components/ProjectsCard.vue";

export default {
  name: "dashboard-default",
  components: {
    ActiveUsersChart,
    GradientLineChart,
    ProjectsCard,
  },
};
</script>
