<template>
    <div class="col-4 text-center">
        <div class="bg-warning box-shadow text-center py-3">
          <div class=" box-container">
            <div class="bg-white px-2 py-3 icon-circle ">
              <img width="20" :src="require(`@/assets/images/${icon}.svg`)" alt="icon-add" />
            </div>
          </div>
          <div class="text-primary fs-xSmall pt-3">{{title}}
          </div>
        </div>
      </div>
</template>
<script>
export default {
  props : ['title','icon']    
}
</script>

<style>

</style>