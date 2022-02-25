<template>
  <div class="channel">
    <div class="channel-title">
      <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
        Channels
      </h6>
    </div>

    <div class="channel-item ps-4 ms-2 mt-4">
      <a href="https://github.com/CryptoHows" target="_blank"
        ><i class="fa fa-github channel-icon"></i
      ></a>
      <a href="https://t.me/cryptohows_official" target="_blank">
        <i class="fa fa-telegram channel-icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "channel",
};
</script>

<style>
.channel {
  position: absolute;
  top: 88%;
}

.channel-item > a {
  margin-right: 15px;
}

.channel-item > a:hover {
  color: #82d616;
}

.channel-icon {
  font-size: 20px;
}
</style>
