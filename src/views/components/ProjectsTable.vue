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
  <vsud-pagination color="success">
    <vsud-pagination-item
      v-for="pageNumber in totalPageRequired"
      :key="pageNumber"
      :label="pageNumber"
      :id="'page' + pageNumber"
      @click="getProjectsByPage(pageNumber), displayActivePage(pageNumber)"
    />
  </vsud-pagination>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import VsudPagination from "../../components/VsudPagination.vue";
import VsudPaginationItem from "../../components/VsudPaginationItem.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import createStore from "../../store/index.js";

export default {
  name: "projects-table",
  components: {
    ProjectItem,
    VsudPagination,
    VsudPaginationItem,
  },
  setup() {
    var allProjects = ref([]);
    var currentPageNumber = ref(1);
    var totalProjectCount = 0;
    var totalPageRequired = ref(1);
    var projectPerPage = 10;

    function getProjectsByPage(pageNumber) {
      axios
        .get(
          createStore.state.backendUrl +
            "/projects?page=" +
            String(pageNumber - 1) +
            "&projectsPerPage=" +
            String(projectPerPage)
        )
        .then((response) => {
          allProjects.value = response.data;
        })
        .catch((response) => alert(response));
    }

    function getProjectsCount() {
      axios
        .get(createStore.state.backendUrl + "/projects/count")
        .then((response) => {
          return response.data.projects;
        })
        .then((projectCount) => calculateTotalPageRequired(projectCount))
        .catch((response) => alert(response));
    }

    function calculateTotalPageRequired(projectCount) {
      totalProjectCount = parseInt(projectCount);
      if (totalProjectCount % projectPerPage == 0) {
        totalPageRequired.value = parseInt(totalProjectCount / projectPerPage);
      } else {
        totalPageRequired.value =
          parseInt(totalProjectCount / projectPerPage) + 1;
      }
    }

    function displayActivePage(pageNumber) {
      var pageToggleBefore = document.getElementById(
        "page" + String(currentPageNumber.value)
      );
      pageToggleBefore.classList.remove("active");

      var pageToggle = document.getElementById("page" + String(pageNumber));
      pageToggle.classList.add("active");
      currentPageNumber.value = pageNumber;
    }

    onMounted(() => {
      getProjectsCount();
      getProjectsByPage(1);
      displayActivePage(1);
    });

    return {
      allProjects,
      getProjectsByPage,
      displayActivePage,
      currentPageNumber,
      totalPageRequired,
    };
  },
};
</script>
