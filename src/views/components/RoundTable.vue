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
                카테고리
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
  <vsud-pagination color="success" class="roundPagination">
    <vsud-pagination-item
      v-if="currentPageNumber != 1"
      :prev="true"
      @click="
        getRoundsByPage(currentPageNumber - 1),
          displayActivePage(currentPageNumber - 1)
      "
    />
    <vsud-pagination-item
      :label="1"
      :id="'page1'"
      @click="getRoundsByPage(1), displayActivePage(1)"
    />
    <p v-if="pageMode != 'frontPagination'">...</p>
    <vsud-pagination-item
      v-for="pageNumber in pageToDraw"
      :key="pageNumber"
      :label="pageNumber"
      :id="'page' + pageNumber"
      @click="getRoundsByPage(pageNumber), displayActivePage(pageNumber)"
    />
    <p v-if="pageMode != 'backPagination'">...</p>
    <vsud-pagination-item
      :label="totalPageRequired"
      :id="'page' + totalPageRequired"
      @click="
        getRoundsByPage(totalPageRequired), displayActivePage(totalPageRequired)
      "
    />
    <vsud-pagination-item
      v-if="currentPageNumber != totalPageRequired"
      :next="true"
      @click="
        getRoundsByPage(currentPageNumber + 1),
          displayActivePage(currentPageNumber + 1)
      "
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
    var roundPerPage = 9;
    var pageMode = ref("frontPagination");
    var pageToDraw = ref([2, 3, 4]);

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
      pageMode,
      pageToDraw,
    };
  },
};
</script>

<style scoped>
.roundPagination {
  justify-content: center;
}

p {
  margin-right: 8px;
  margin-left: 5px;
}
</style>
