<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>벤처 캐피탈</h6>
    </div>
    <div class="card-body px-0 pt-1 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                회사명
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                회사 소개
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                웹페이지
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <venture-capital-item
              v-for="ventureCapital in allVentureCapitals"
              :key="ventureCapital"
              :ventureCapital="ventureCapital"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VentureCapitalItem from "./VentureCapitalItem.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import createStore from "../../store/index.js";

export default {
  name: "venture-capitals-table",
  components: {
    VentureCapitalItem,
  },
  setup() {
    let allVentureCapitals = ref([]);
    // let allVentureCapitalsOriginal = ref([]);

    function getVentureCapitals() {
      axios
        .get(createStore.state.backendUrl + "/venture-capitals")
        .then((response) => {
          allVentureCapitals.value = response.data;
          // allVentureCapitalsOriginal = [...response.data];
        })
        .catch((response) => alert(response));
    }

    onMounted(() => {
      getVentureCapitals();
    });

    return { allVentureCapitals };
  },
};
</script>
