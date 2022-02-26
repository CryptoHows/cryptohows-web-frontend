<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>프로젝트</h6>
    </div>
    <div class="card-body px-0 pt-2 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                프로젝트명
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                프로젝트 소개
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                투자사
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                투자 라운드
              </th>
            </tr>
          </thead>
          <tbody>
            <project-item
              v-for="project in allProjects"
              :key="project"
              :project="project"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "projects-table",
  components: {
    ProjectItem,
  },
  setup() {
    let allProjects = ref([]);
    // let allProjectsOriginal = ref([]);

    function getProjects() {
      axios
        .get("https://cryptohows.herokuapp.com/projects")
        .then((response) => {
          allProjects.value = response.data;
          // allProjectsOriginal = [...response.data];
        })
        .catch((response) => alert(response));
    }

    onMounted(() => {
      getProjects();
    });

    return { allProjects };
  },
};
</script>
