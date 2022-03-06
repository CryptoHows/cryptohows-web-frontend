<template>
  <tr>
    <td>
      <div class="d-flex px-2 py-1">
        <div>
          <vsud-avatar
            :img="projectLogo"
            border-radius="lg"
            size="sm"
            class="me-3"
            alt="user1"
          />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h6 class="mb-1 text-sm">{{ projectName }}</h6>
          <p class="text-xs text-secondary mb-0">
            {{ projectAbout }}
          </p>
        </div>
      </div>
    </td>
    <td class="text-xs font-weight-bold mb-0">
      <span class="text-xs font-weight-bold">{{ projectCategory }}</span>
    </td>
    <td class="text-xs font-weight-bold mb-0">
      <span class="text-xs font-weight-bold">{{ announcedDate }}</span>
    </td>
    <td class="text-xs font-weight-bold mb-0">
      <span class="text-xs font-weight-bold">{{ moneyRaised }}</span>
    </td>
    <td class="text-xs font-weight-bold mb-0">
      <span class="text-xs font-weight-bold">{{ fundingStage }}</span>
    </td>
    <td>
      <div class="avatar-group mt-2">
        <image-icon-with-name
          v-for="participant in participants"
          :key="participant"
          :image="participant.logo"
          :name="participant.name"
        />
      </div>
    </td>
    <td class="text-xs font-weight-bold mb-0 homepage-link">
      <a :href="newsArticle" target="_blank" v-if="newsArticle">
        <i class="fas fa-solid fa-link text-lg me-1"></i> link
      </a>
    </td>
  </tr>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import VsudAvatar from "@/components/VsudAvatar.vue";
import ImageIconWithName from "./ImageIconWithName.vue";

export default {
  name: "round-item",
  components: {
    VsudAvatar,
    ImageIconWithName,
  },
  mounted() {
    setTooltip();
  },
  props: {
    round: Object,
  },
  data() {
    return {
      projectName: this.round.project.name,
      projectAbout: this.shorten(this.round.project.about),
      projectLogo: this.round.project.logo,
      projectCategory: this.round.project.category,
      announcedDate: this.round.announcedDate,
      moneyRaised: this.round.moneyRaised,
      newsArticle: this.round.newsArticle,
      fundingStage: this.round.fundingStage,
      participants: this.round.participants,
    };
  },
  methods: {
    shorten(text) {
      let textMaxLength = 60;
      if (text.length > textMaxLength) {
        return text.substring(0, textMaxLength) + "...";
      }
      return text;
    },
  },
};
</script>
