<!-- 定义一个类 -->
var Doc_=function(){
	/**
	 * ele属性 用来存储元素 -->
	 */
	this.ele=document;
	
	/**
	 * 获取id元素
	 */
	this.get=function(tb){
		return this.gets("#"+tb)[0];
	}
	
	/**
	 * 获取Doc_类下的子节点 并返回一个Doc_对象数组
	 * Doc_默认元素是document-->
	 */
	this.gets=function(tb){
		var eles;
		
		if(tb.indexOf(".")==0){
			eles=this.ele.getElementsByClassName(tb.substr(1));
		}else if(tb.indexOf("#")==0){
			eles=this.ele.getElementById(tb.substr(1));
		}else if(tb.indexOf("]")==0){
			eles=this.ele.getElementsByName(tb.substr(1));
		}else{
			eles=this.ele.getElementsByTagName(tb);
		}


		var docs=new Array();
		/**
		 * 如果结果为null 则返回自己
		 */
		if(eles==null||eles.length==0){
			return docs[0]=this;
		}
		if(eles.length==null){
			docs[0]=new Doc_();
			docs[0].ele=eles;
			return docs;
		}
		
		for(var i=0;i<eles.length;i++){
			docs[i]=new Doc_();
			docs[i].ele=eles[i];
		}
		
		return docs;
	};
	
	
	/**
	 * 创建元素
	 */
	var create = function(){
		var new_=
	}
}

/** 实例化Doc_()类 **/
var doc=new Doc_();
