<template>
  <div class="main-content screen-width">
    <TopHeader headerText="واحد شماره ۱۰۴ " />
    <div class="container mt-5">
      <div class="card text-center box-shadow">
        <div class="card-header bg-gray text-white py-3 border-0 fs-medium">
          صورت حساب شما
        </div>
        <div class="card-body">
          <div class="text-gray py-3  fs-medium">مبلغ قابل پرداخت</div>
          <div class=" fs-large">3,650,000 ریال</div>
          <button type="submit" class="btn btn-primary my-3 w-75"  @click="$router.push('/saveReceipt')">ثیت فیش پرداختی</button>
        </div>
      </div>
    </div>

    <div class="row pt-4">
      <YellowBoxIcon title="بدهکاران" icon="volunteer" />
      <YellowBoxIcon title="اعلانات" icon="trending" />
      <YellowBoxIcon title="صورت حساب" icon="receipt" />
    </div>
    <div class="container mt-5">
      <div class="row" >
        <div class="col-12 fs-small">لیست هزینه ها</div>
        <ListBox price="10000" title="قبض آب" icon="up" />
        <ListBox price="10000" title="قبض برق" icon="down" />
      </div>
    </div>
  </div>
  <BottomNav />
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import BottomNav from '../components/BottomNav.vue';
import YellowBoxIcon from '../components/YellowBoxIcon.vue';
import ListBox from '../components/ListBox.vue';

export default {

  components: {

    TopHeader, BottomNav, YellowBoxIcon, ListBox
  },
  data() {
    return {


    }
  }

}
</script>

<style></style>
