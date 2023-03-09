<template>
  <div class="d-flex flex-column min-vh-100 screen-width px-3">
    <TopHeader headerText="ورود" />
    <div class="d-flex flex-grow-1 flex-column justify-content-center align-items-center px-2">
      <div class="fs-small text-gray">کد 5 رقمی ارسال شده به شماره 09153520267 را وارد نمایید
      </div>
      <div class="mt-5 w-100">
        <div class="d-flex justify-content-between fs-small">
          <label for="mobileTxt" class="form-label mb-3">کد تایید</label>
          <div>1:35</div>
        </div>

        <input type="text" class="form-control text-center" id="mobileTxt" placeholder="09">
      </div>
      <div class="my-3 w-100">
        <button type="submit"  @click="$router.push('/dashboard')" class="btn btn-secondary text-white w-100">تایید و ادامه</button>

        <!-- اگر دکمه ارسال مجدد باید فعال شود
        <button type="submit" class="btn btn-warning text-white w-100">تایید و ادامه</button> -->
      </div>
      <div class="d-flex justify-content-between w-100 mt-5">
        <button type="submit" class="btn btn-secondary text-white px-4 "> ارسال مجدد</button> 

        <!-- اگر دکمه ارسال مجدد باید فعال شود
        <button type="submit" class="btn btn-warning text-white px-4 "> ارسال مجدد</button> -->
        <button type="submit" class="btn btn-primary text-white px-4"> تغییر شماره</button>
      </div>
      <!-- اگر کد اشتباه بود پبام خطا ظاهر می شود
      <div class="bg-orange rounded-4 text-white fs-xSmall py-2 px-5 mt-3">کد نوشته شده اشتباه است</div> -->
    </div>
    <div class="text-center">
      <img src="../assets/images/icon.svg" alt="" />
      رایاسان پردازان پارت
    </div>
  </div>
</template>
  
<script>
import TopHeader from '../components/TopHeader.vue';

export default {

  components: {

    TopHeader,

  },
  data() {
    return {


    }
  }

}
</script>
  
<style></style>
  