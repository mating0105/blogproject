<template>
<section>
  <div @click="test">按钮</div>
</section>
  
</template>
<script>
export default {
  name:'problemAnalysis',
  methods:{
    test(){
      var dataArr=['1', '2', '3'];
      var data=dataArr.map(parseInt);
      console.log(data,'data');     //返回 [1,NaN,NaN]
      var aa=parseInt("10");			//返回 10
      var bb=parseInt("19",10);		 //返回 19 (10+9)
      var cc=parseInt("11",2);		//返回 3 (2+1)
      var dd=parseInt("17",8);		//返回 15 (8+7)
      var ee=parseInt("1f",16);		//返回 31 (16+15)
      var ff=parseInt("010");		 //未定：返回 10 或 8  ===>10
      var gg=parseInt("1f");    //返回 1
      var hh=parseInt("f1");    //返回 NaN
      console.log(aa,bb,cc,dd,ee,ff,gg,hh)

      var a=parseInt("0",2);		//返回 0
      var b=parseInt("1",2);		//返回 1
      var c=parseInt("2",2);		//返回 NaN
      var d=parseInt("3",2);		//返回 NaN
      var e=parseInt("10",2);		 //返回 2
      var f=parseInt("010",2);	 //返回 2
      var g=parseInt("1f",2);    //返回 1
      var h=parseInt("f1",2);    //返回 NaN
      var i=parseInt("110",2);	 //返回 6
      var j=parseInt("100",2);	 //返回 4
      var k=parseInt("11",2);		//返回 3
      var l=parseInt("111",2);	//返回 7
      console.log(a,b,c,d,e,f,g,h,i,j,k,l,'2')

      var aaa=parseInt("0",8);		//返回 0
      var bbb=parseInt("1",8);		//返回 1
      var ccc=parseInt("8",8);		//返回 NaN
      var ddd=parseInt("9",8);		//返回 NaN
      var eee=parseInt("10",8);		 //返回 8
      var fff=parseInt("11",8);	   //返回 9
      var ggg=parseInt("12",8);    //返回 10
      var hhh=parseInt("17",8);    //返回 15
      var iii=parseInt("18",8);	  //返回 1
      var jjj=parseInt("88",8);	  //返回 NaN
      var kkk=parseInt("1f",8);		//返回 1
      var lll=parseInt("f1",8);	  //返回 NaN
      console.log(aaa,bbb,ccc,ddd,eee,fff,ggg,hhh,iii,jjj,kkk,lll,'8')

      var aaaa=parseInt("0",16);		//返回 0
      var bbbb=parseInt("1",16);		//返回 1
      var cccc=parseInt("2",16);		//返回 2
      var dddd=parseInt("3",16);		//返回 3
      var eeee=parseInt("4",16);		 //返回 4
      var ffff=parseInt("5",16);	   //返回 9
      var gggg=parseInt("6",16);    //返回 6
      var hhhh=parseInt("7",16);    //返回 7
      var iiii=parseInt("8",16);	  //返回 8
      var jjjj=parseInt("9",16);	  //返回 9
      var kkkk=parseInt("10",16);		//返回 16
      var llll=parseInt("11",16);	  //返回 17
      var mmmm=parseInt("12",16);    //返回 18
      var nnnn=parseInt("13",16);	  //返回 19
      var oooo=parseInt("14",16);	  //返回 20
      var pppp=parseInt("15",16);		//返回 21
      var qqqq=parseInt("16",16);	  //返回 22
      var rrrr=parseInt("17",16);	  //返回 23
      var ssss=parseInt("66",16);	  //返回 102
      var tttt=parseInt("77",16);	  //返回 119
      console.log(aaaa,bbbb,cccc,dddd,eeee,fff,gggg,hhhh,iiii,jjjj,kkkk,llll,mmmm,nnnn,oooo,pppp,qqqq,rrrr,ssss,tttt,'16')
    }
  }
}
</script>
<style scoped>

</style>