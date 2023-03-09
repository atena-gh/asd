<template>
    <div class="main-content screen-width" >
      <TopHeader headerText="ثبت فیش پرداختی"  icon="1" />
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 ">
            <div class="text-gray fs-small">اطلاعات فیش یا فیشهای پرداخت شده را وارد نمایید</div>
          </div>
          <div class="col-12 pt-4">
            <label for="priceTxt" class="form-label fs-small mb-2">جمع مبلغ پرداختی</label>
            <input type="text" class="form-control text-center" id="priceTxt" placeholder="به ریال نوشته شود">
          </div>
          <div class="col-12 pt-4">
            <label for="descTxt" class="form-label fs-small mb-2">توضیحات </label>
            <textarea class="form-control text-center" id="descTxt" rows="4"></textarea>
          </div>
          <div class="col-12 pt-4">
            <label class="form-label fs-small mb-2">تصاویر فیشها </label>
            <div class="row px-1">
              <PlusBox />
              <PlusBox />
            </div>
          </div>
          <div class="col-12 pt-5 text-center">
            <button type="submit" class="btn btn-warning text-white px-5"  @click="$router.push('/CheckReceipt')">ارسال</button>
          </div>
        </div>
      </div>
    </div>
    <BottomNav />
  </template>
  
  <script>
  import TopHeader from '../components/TopHeader.vue';
  import BottomNav from '../components/BottomNav.vue';
  import PlusBox from '../components/PlusBox.vue';
  
  export default {
  
    components: {
  
      TopHeader, BottomNav, PlusBox
    },
    data() {
      return {
  
  
      }
    }
  
  }
  </script>
  
  <style></style>
  