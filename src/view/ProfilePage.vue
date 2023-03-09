<template>
    <div class="main-content screen-width">
      <TopHeader headerText="پروفایل"  icon="1" />
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <div class="fs-large">نام و نام خانوادگی</div>
            <div class="text-shadow text-muted fw-normal pt-2">09123456789 </div>
            <div class="text-shadow text-muted pt-2">شماره ساختمان </div>
          </div>
          <div class="col-auto">
            <img src="../assets/images/profile/profile.png" class="rounded-circle" alt="profile" width="110" height="110" />
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-12 fs-xSmall fw-normal truncate">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
            هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
            پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
            سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>
        </div>
        <div class="row pt-5  justify-content-between">
          <IconBox />
          <IconBox />
        </div>
        <div class="row pt-4">
          <AlertBox />
          <AlertBox />
          <AlertBox />
  
        </div>
      </div>
    </div>
    <BottomNav />
  </template>
  
  <script>
  import TopHeader from '../components/TopHeader.vue';
  import BottomNav from '../components/BottomNav.vue';
  import IconBox from '../components/IconBox.vue';
  import AlertBox from '../components/AlertBox.vue';
  
  export default {
  
    components: {
  
      TopHeader, BottomNav, IconBox, AlertBox
    },
    data() {
      return {
  
  
      }
    }
  
  }
  </script>
  
  <style></style>
  