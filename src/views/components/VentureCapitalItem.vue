<template>
  <tr>
    <td>
      <div class="d-flex px-2 py-1">
        <div>
          <vsud-avatar
            :img="img1"
            size="sm"
            border-radius="lg"
            class="me-3"
            alt="user1"
          />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h6 class="mb-0 text-sm">John Michael</h6>
          <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
        </div>
      </div>
    </td>
    <td>
      <p class="text-xs font-weight-bold mb-0">Manager</p>
      <p class="text-xs text-secondary mb-0">Organization</p>
    </td>
    <td class="align-middle text-center text-sm">
      <vsud-badge color="success" variant="gradient" size="sm"
        >Online</vsud-badge
      >
    </td>
    <td class="align-middle text-center">
      <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
    </td>
    <td class="align-middle">
      <a
        href="javascript:;"
        class="text-secondary font-weight-bold text-xs"
        data-toggle="tooltip"
        data-original-title="Edit user"
        >Edit</a
      >
    </td>
  </tr>
</template>

<script>
export default {};
</script>
