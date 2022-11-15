<template>
  <div class="filter-options" :class="{'selected-filter':selected }" @click="selected=!selected">
    <span>{{filterItem}} Women</span>
  </div>
</template>
<script>
export default {
  props:['filterItem'],
  data(){
    return{
      selected:false,
    }
  },
}
</script>
<style lang="scss" scoped>
.filter-options{
  padding: 6px 15px ;
  margin:0 10px;
  font-size: 14px;
  color:var(--light_gray_clr);
  border-radius: 6px;
  background: var(--white_clr);
  border:2.5px solid transparent;
  span{
    color: inherit;
    font-size: inherit;
  }
}
.selected-filter{
  border:2.5px solid var(--main_theme_clr);
  color:var(--main_theme_clr);
  transition: all 0.1s linear;
  cursor: pointer;
}
</style>
