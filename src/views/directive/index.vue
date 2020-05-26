<template>
  <section>
    <div id="app">
      <span  v-hello="changeColor">{{message}}</span>
      <button @click="add"> 点击开始加1</button>
    </div>
  </section>
</template>
<script>
import Vue from 'vue';
Vue.directive("hello",{
  bind:function(el,bingind,vnode){
    console.log("1-bind");
  },
  inserted:function(){
    console.log("2-insert");
  },
  update:function(el,bingind,vnode){
    console.log(el,bingind,vnode,'el,bingind,vnode')
    el.style["color"] = bingind.value();
    console.log("3-update");
  },
  componentUpdated:function(){
    console.log('4 - componentUpdated');
  },
  unbind:function(){
    console.log('5 - unbind');
  }
})
export default {
  name:'directive',
  data(){
    return {
      message:10,
      color3: "red"

    }
  },
  methods:{
      add(){
        this.message++;
      },
      changeColor(){
        this.num=20;
        return this.color3;
      }
  }
  
}
</script>
<style scoped>

</style>