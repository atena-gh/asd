<template>
  <div class="main-content screen-width">
    <TopHeader headerText="تایید ارسال فیش "  icon="1" />
    <div class=" mt-5">
      <div class="row">
        <div class="col-12 text-center">
          <img src="../assets/images/check.png" alt="check" width="85" />
          <div class="text-success fs-medium pt-3">ارسال فیش پرداختی</div>
        </div>
      </div>
      <div class="row px-3">
        <div class="col-6 pt-5">مبلغ پرداختی</div>
        <div class="col-6 pt-5 text-start">3,650,000 <span>ریال</span></div>
        <div class="col-6 pt-4">شماره پیگیری</div>
        <div class="col-6 pt-4 text-start">25645</div>
        <div class="col-12 text-gray fs-small pt-4">اطلاعات شما ارسال شد و یعد از نایید مدیر در حساب شما منظور می گردد.
        </div>
      </div>
    </div>
  </div>
  <BottomNav/>
  </template>
  
  <script>
  import TopHeader from '../components/TopHeader.vue';
  import BottomNav from '../components/BottomNav.vue';
  
  export default {
  
    components: {
  
      TopHeader,BottomNav
    },
    data() {
      return {
  
  
      }
    }
  
  }
  </script>
  
  <style></style>
  