<template>
    <div class="col-12 bg-white rounded-6 text-shadow my-2">
        <div class="d-flex justify-content-between px-2 py-3">
          <div>
            <img :src="require(`@/assets/images/${icon}.svg`)" width="15" />
            <span class="fs-small ps-2">{{title}}</span>
          </div>

          <div class="">
          {{ price }} تومان
          </div>
        </div>
      </div>
</template>
<script>
export default {
    props : ['price','title','icon']    

}
</script>

<style>

</style>