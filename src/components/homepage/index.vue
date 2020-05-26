<template>
  <section>
    <div class="mainbox">
      <div v-for="(item,index) in result" :key="index">
        <p class="minBox" :style="'height:'+item+'px;'">{{item}}</p>
      </div>
    </div>
    <div class="button">
        <span @click="bubbleSort(result)">基础冒泡排序</span>
        <span @click="bubbleSort1(result)">冒泡排序优化</span>
        <span @click="selectionSort(result)">选择排序</span>
        <span @click="insertionSort(result)">插入排序</span>
        <span @click="mergeSortRec(result)">归并排序</span>
    </div>
    <div class="mainbox">
      <div>基础冒泡排序</div>
      <div v-for="(item,index) in bubbleSortArr" :key="index">
        <p class="minBox" :style="'height:'+item+'px;'">{{item}}</p>
      </div>
    </div>
    <div class="mainbox">
      <div>冒泡排序优化</div>
      <div v-for="(item,index) in bubbleSortArr1" :key="index">
        <p class="minBox" :style="'height:'+item+'px;'">{{item}}</p>
      </div>
    </div>
    <div class="mainbox">
      <div>选择排序</div>
      <div v-for="(item,index) in selectionResult" :key="index">
        <p class="minBox" :style="'height:'+item+'px;'">{{item}}</p>
      </div>
    </div>
    <div class="mainbox">
      <div>插入排序</div>
      <div v-for="(item,index) in insertionArr" :key="index">
        <p class="minBox" :style="'height:'+item+'px;'">{{item}}</p>
      </div>
    </div>
    <div class="mainbox">
      <div>归并排序</div>
      <div v-for="(item,index) in mergeArr" :key="index">
        <p class="minBox" :style="'height:'+item+'px;'">{{item}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      result:[],
      bubbleSortArr:[],
      bubbleSortArr1:[],
      selectionResult:[],
      insertionArr:[],
      mergeArr:[]
      
    }
  },
  methods:{
    //随机数
    generateArr(num = 10){
        let arr=[];
        for(let i=0;i<num;i++){
          let item=Math.floor(Math.random()*(num+1))
          arr.push(item)
        }
        this.result=arr;
    },
    generateArrPosX ( n = 10,w = 6,m = 6 ){
      let pos=[];
      for(let i=0;i<n;i++){
        let item=(w+m)*i
        pos.push(item)
      }
    },
    //基础版-冒泡排序
    bubbleSort(arr = []) {
      let array=[];
      arr.forEach((item,index)=>{
        array.push(item)
      })
      let len = array.length
      for(let i = 0; i< len; i++) {
        for(let j = 0; j < len - 1; j++) {
          if(array[j] > array[j+1]) {
            // 置换
            [array[j], array[j+1]] = [array[j+1], array[j]]
          }
        }
      }
      this.bubbleSortArr=array;
    },
    // 冒泡排序优化版
    bubbleSort1(arr = []) {
      let array=[];
      arr.forEach((item,index)=>{
        array.push(item)
      })
      let len = array.length
      // 优化
      for(let i = 0; i< len; i++) {
        for(let j = 0; j < len - 1 - i; j++) {
          if(array[j] > array[j+1]) {
            // 置换
            [array[j], array[j+1]] = [array[j+1], array[j]]
          }
        }
      }
      this.bubbleSortArr1=array;
    },
    //选择排序
    selectionSort(arr) {
      let array=[];
      arr.forEach((item,index)=>{
        array.push(item)
      })
      let len = array.length,
          indexMin
      for(let i = 0; i< len -1; i++) {
        indexMin = i
        for(let j = i; j < len; j++){
          if(array[indexMin] > array[j]) {
            indexMin = j
          }
        }
        if(i !== indexMin) {
          [array[i], array[indexMin]] = [array[indexMin], array[i]]
        }
      }
      this.selectionResult=array;
    },
    //插入排序
    insertionSort(arr) {
      let array=[];
      arr.forEach((item,index)=>{
        array.push(item)
      })
      let len = array.length,
        j,
        temp;
      for(let i = 1; i< len; i++) {
        j = i
        temp = array[i]
        while(j > 0 && array[j-1] > temp) {
          array[j] = array[j-1]
          j--
        }
        array[j] = temp;
      }
      this.insertionArr=array;
    },
    // 归并排序
    mergeSortRec(arr) {
      let len = arr.length
      if(len === 1) {
        return arr
      }
      let mid = Math.floor(len / 2),
          left = arr.slice(0, mid),
          right = arr.slice(mid, len)
      return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
    },
    // 合并方法
    merge(left, right) {
      let result = [],
          l = 0,
          r = 0;
      while(l < left.length && r < right.length) {
        if(left[l] < right[r]) {
          result.push(left[l++])
        }else {
          result.push(right[r++])
        }
      }
      while(l < left.length) {
        result.push(left[l++])
      }
      while(r < right.length) {
        result.push(right[r++])
      }
      return result
    }
    
  },
  mounted(){
    this.generateArr(50);
  }
}
</script>
<style scoped>
.mainbox{
  width: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom:1px solid #000;
  padding: 30px 10px 0 10px;
}
.minBox{
  width: 10px;
  margin-left: 10px;
  background-color: #f60f60;
}
.button{
  width: 100%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button>span{
  display: inline-block;
  width: 100px;
  height: 30px;
  border: 1px solid #000;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
  margin: 0 10px;

}
</style>
