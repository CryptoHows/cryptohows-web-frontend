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
    <td class="align-middle text-center text-sm">
      <a :href="homepage" target="_blank">
        <vsud-badge color="success" variant="gradient" size="sm"
          >바로가기</vsud-badge
        >
      </a>
    </td>
  </tr>
</template>

<script>
import VsudAvatar from "@/components/VsudAvatar.vue";
import VsudBadge from "@/components/VsudBadge.vue";

export default {
  name: "venture-capital-item",
  components: {
    VsudAvatar,
    VsudBadge,
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
