<template>
  <div class="sidebar">
    <b-sidebar
      no-header
      width="200px"
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-slide
      visible="true"
    >
      <template>
        <div class="p-3">
          <p>（ここにロゴが入ります）</p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item @click="linkList">list</b-nav-item>
              <b-nav-item @click="linkHello">HelloWorld</b-nav-item>
              <b-nav-item @click="linkDeviceList">DeviceList</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    linkList() {
      this.$router.push("/list");
    },
    linkHello() {
      this.$router.push("/");
    },
    linkDeviceList() {
      this.$router.push("/DeviceList");
    },
  },
};
</script>

<style>
.sidebar {
  width: 10%;
}
</style>
