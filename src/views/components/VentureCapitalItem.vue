<template>
  <tr>
    <td>
      <div class="d-flex px-2 py-1">
        <div>
          <vsud-avatar
            :img="logo"
            size="sm"
            border-radius="lg"
            class="me-3"
            alt="user1"
          />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h6 class="mb-0 text-sm">{{ name }}</h6>
        </div>
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">{{ about }}</p>
    </td>
    <td class="text-xs font-weight-bold mb-0 homepage-link">
      <a :href="homepage" target="_blank" v-if="homepage">
        <i class="fas fa-solid fa-link text-lg me-1"></i> link
      </a>
    </td>
  </tr>
</template>

<script>
import VsudAvatar from "@/components/VsudAvatar.vue";

export default {
  name: "venture-capital-item",
  components: {
    VsudAvatar,
  },
  props: {
    ventureCapital: Object,
  },
  data() {
    return {
      name: this.ventureCapital.name,
      about: this.ventureCapital.about,
      homepage: this.ventureCapital.homepage,
      logo: this.ventureCapital.logo,
    };
  },
};
</script>
