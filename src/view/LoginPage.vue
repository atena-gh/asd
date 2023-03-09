<template>
    <div class="d-flex flex-column min-vh-100 screen-width px-3">
      <TopHeader headerText="ورود"/>
      <div class="d-flex flex-grow-1 flex-column justify-content-center align-items-center px-2">
        <div class="fs-medium">اطلاعات حساب کاربری خود را وارد نمایید</div>
        <div class="mt-5 w-100 mb-2">
          <label for="mobileTxt" class="form-label fs-small mb-3">شماره موبایل</label>
          <input type="text" class="form-control text-center" id="mobileTxt" placeholder="09">
        </div>
        <div class="mt-5">
          <button type="submit"  @click="$router.push('/CheckCode')" class="btn btn-secondary text-white px-5">ورود</button>
          
         <!-- اگر شماره موبایل درست بود
           <button type="submit"  @click="$router.push('/CheckCode')" class="btn btn-warning text-white px-5">ورود</button> -->
        </div>
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
      // HomeItem,
      // ArticleSlider,
      // BreadCrumb
    },
    data() {
      return {
        
  
      }
    }
  
  }
  </script>
  
<style>

</style>
  