<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>투자 라운드</h6>
    </div>
    <div class="card-body px-0 pt-1 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                프로젝트
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                투자 날짜
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                투자 금액
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                투자 단계
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                투자사
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                보도자료
              </th>
            </tr>
          </thead>
          <tbody>
            <round-item
              v-for="round in allRounds"
              :key="round"
              :round="round"
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
      @click="getRoundsByPage(pageNumber), displayActivePage(pageNumber)"
    />
  </vsud-pagination>
</template>

<script>
import RoundItem from "./RoundItem.vue";
import VsudPagination from "../../components/VsudPagination.vue";
import VsudPaginationItem from "../../components/VsudPaginationItem.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import createStore from "../../store/index.js";

export default {
  name: "round-table",
  components: {
    RoundItem,
    VsudPagination,
    VsudPaginationItem,
  },
  setup() {
    let allRounds = ref([]);
    var currentPageNumber = ref(1);
    var totalRoundCount = 0;
    var totalPageRequired = ref(1);
    var roundPerPage = 10;

    function getRoundsByPage(pageNumber) {
      axios
        .get(
          createStore.state.backendUrl +
            "/rounds/recent?page=" +
            String(pageNumber - 1) +
            "&roundsPerPage=" +
            String(roundPerPage)
        )
        .then((response) => {
          allRounds.value = response.data;
        })
        .catch((response) => alert(response));
    }

    function getRoundsCount() {
      axios
        .get(createStore.state.backendUrl + "/rounds/count")
        .then((response) => {
          return response.data.rounds;
        })
        .then((roundCount) => calculateTotalPageRequired(roundCount))
        .catch((response) => alert(response));
    }

    function calculateTotalPageRequired(roundCount) {
      totalRoundCount = parseInt(roundCount);
      if (totalRoundCount % roundPerPage == 0) {
        totalPageRequired.value = parseInt(totalRoundCount / roundPerPage);
      } else {
        totalPageRequired.value = parseInt(totalRoundCount / roundPerPage) + 1;
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
      getRoundsCount();
      getRoundsByPage(1);
      displayActivePage(1);
    });

    return {
      allRounds,
      getRoundsByPage,
      displayActivePage,
      currentPageNumber,
      totalPageRequired,
    };
  },
};
</script>
