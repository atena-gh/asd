<template>
  <div class="fs-large fw-b text-purple pt-3 d-flex justify-content-between align-items-center">
    <div><img src="../assets/images/icon.svg" alt="logo" /> {{ headerText }} </div>
    <img v-if="icon" src="../assets/images/back.svg" alt="back" width="15" height="15"/>
  </div>
</template>
<script>
export default {
  props : ['headerText','icon'] 
}</script>


<style>
</style> 