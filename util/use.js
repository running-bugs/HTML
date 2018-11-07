<!-- 定义一个类 方便操作节点元素 -->
var Doc_=function(){
  /**
   * ele属性 用来存储元素 -->
   */
  this.ele=document;

  /**
   * 获取元素子节点 返回一个Doc_对象 通过
   * Doc_默认元素是document-->
   */
  this.get=function(tb){
    if(tb==null){
      return this;
    }
    if(tb.indexOf(".")==0){
      this.ele=this.ele.getElementsByClassName(tb.substr(1));
    }else if(tb.indexOf("#")==0){
      this.ele=this.ele.getElementById(tb.substr(1));
    }else if(tb.indexOf("]")==0){
      this.ele=this.ele.getElementsByName(tb.substr(1));
    }else{
      this.ele=this.ele.getElementsByTagName(tb);
    }
    return this;
  };
}

/** 实例化Doc_类 */
var doc=new Doc_();
