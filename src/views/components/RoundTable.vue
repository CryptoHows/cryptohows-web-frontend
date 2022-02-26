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
</template>

<script>
import RoundItem from "./RoundItem.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "round-table",
  components: {
    RoundItem,
  },
  setup() {
    let allRounds = ref([]);

    function getRounds() {
      axios
        .get("https://cryptohows.herokuapp.com/rounds/recent")
        .then((response) => {
          allRounds.value = response.data;
        })
        .catch((response) => alert(response));
    }

    onMounted(() => {
      getRounds();
    });

    return { allRounds };
  },
};
</script>
