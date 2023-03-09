<template>
  <div class="position-fixed bottom-0 w-100 bg-white py-2 px-1 bottom-nav">
    <div class="container-fluid text-gray fs-xSmall text-center">
      <div class="row">
        <div class="col-4 ">
          <router-link :to="{ name: 'dashboard' }">
            <img src="../assets/images/dashboard_icon.svg" alt="dashboardIcon" />
            <div class="pt-1 text-warning text-decoration-0">داشبورد</div>
          </router-link>
        </div>
        <div class="col-4">
          <router-link :to="{ name: 'profile' }">
          <img src="../assets/images/profile_icon.svg" alt="profileIcon" />
          <div class="pt-1">پروفایل</div></router-link>
        </div>
        <div class="col-4">
          <img src="../assets/images/support_icon.svg" alt="supportIcon" />
          <div class="pt-1">پشتیبانی</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>