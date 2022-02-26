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
    <td>
      <div class="avatar-group mt-2">
        <image-icon-with-name
          v-for="investor in investors"
          :key="investor"
          :image="investor.logo"
          :name="investor.name"
        />
      </div>
    </td>
    <td>
      <span class="text-xs font-weight-bold mb-0">{{ round }}</span>
    </td>
  </tr>
</template>

<script>
import VsudAvatar from "@/components/VsudAvatar.vue";
import ImageIconWithName from "./ImageIconWithName.vue";

export default {
  name: "projects-item",
  components: {
    VsudAvatar,
    ImageIconWithName,
  },
  props: {
    project: Object,
  },
  data() {
    return {
      name: this.project.name,
      about: this.project.about,
      homepage: this.project.homepage,
      logo: this.project.logo,
      round: this.project.round,
      investors: this.project.investors,
    };
  },
};
</script>

<style></style>
