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
  <vsud-pagination color="success" class="projectPagination">
    <vsud-pagination-item
      v-if="currentPageNumber != 1"
      :prev="true"
      @click="
        getProjectsByPage(currentPageNumber - 1),
          displayActivePage(currentPageNumber - 1)
      "
    />
    <vsud-pagination-item
      :label="1"
      :id="'page1'"
      @click="getProjectsByPage(1), displayActivePage(1)"
    />
    <p v-if="pageMode != 'frontPagination'">...</p>
    <vsud-pagination-item
      v-for="pageNumber in pageToDraw"
      :key="pageNumber"
      :label="pageNumber"
      :id="'page' + pageNumber"
      @click="getProjectsByPage(pageNumber), displayActivePage(pageNumber)"
    />
    <p v-if="pageMode != 'backPagination'">...</p>
    <vsud-pagination-item
      :label="totalPageRequired"
      :id="'page' + totalPageRequired"
      @click="
        getProjectsByPage(totalPageRequired),
          displayActivePage(totalPageRequired)
      "
    />
    <vsud-pagination-item
      v-if="currentPageNumber != totalPageRequired"
      :next="true"
      @click="
        getProjectsByPage(currentPageNumber + 1),
          displayActivePage(currentPageNumber + 1)
      "
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
    var projectPerPage = 9;
    var pageMode = ref("frontPagination");
    var pageToDraw = ref([2, 3, 4]);

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

      if (pageNumber == 1 || pageNumber == 2 || pageNumber == 3) {
        pageMode.value = "frontPagination";
        pageToDraw.value = [2, 3, 4];
      } else if (
        pageNumber == totalPageRequired.value ||
        pageNumber == totalPageRequired.value - 1 ||
        pageNumber == totalPageRequired.value - 2
      ) {
        pageMode.value = "backPagination";
        pageToDraw.value = [
          totalPageRequired.value - 3,
          totalPageRequired.value - 2,
          totalPageRequired.value - 1,
        ];
      } else {
        pageMode.value = "middlePagination";
        pageToDraw.value = [pageNumber - 1, pageNumber, pageNumber + 1];
      }
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
      pageMode,
      pageToDraw,
    };
  },
};
</script>

<style scoped>
.projectPagination {
  justify-content: center;
}

p {
  margin-right: 8px;
  margin-left: 5px;
}
</style>
