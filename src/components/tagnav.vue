<template>
  <div class="tagnav">
    Matches
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'tagnav',
});
</script>
<style lang="scss" scoped>
.tagnav{
  // width: 100%;
  height: 45px;
  padding: 0 10px;
  line-height: 45px;
  color: white;
  font-weight: 900;
  background-image: linear-gradient(to right, #1f4064 0%, #00bfa8 181%, #00bfa8 181%);
}  
</style>