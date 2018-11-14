<!-- 定义一个类 -->
var Doc_=function(){
	/**
	 * ele属性 用来存储元素 -->
	 */
	this.ele=document;
	
	/**
	 * 获取id元素
	 */
	this.get=function(mark){
		return this.gets("#"+mark)[0];
	}
	
	/**
	 * 获取Doc_类下的子节点 并返回一个Doc_对象数组
	 * Doc_默认元素是document-->
	 */
	this.gets=function(mark){
		var eles;
		
		if(mark.indexOf(".")==0){
			eles=this.ele.getElementsByClassName(mark.substr(1));
		}else if(mark.indexOf("#")==0){
			eles=this.ele.getElementById(mark.substr(1));
		}else if(mark.indexOf("]")==0){
			eles=this.ele.getElementsByName(mark.substr(1));
		}else{
			eles=this.ele.getElementsByTagName(mark);
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
	this.create = function(tag){
		var inr;
		var child;
		
		if(tag){
			var tps=tag.split(".");
			
			// 只有一段话 则生成textNode
			if(tps.length==1){
				child=document.createElement("div");
				child.style.display="inline-block";
				inr=document.createTextNode(tag);
			}else{
				if(tps[0].length==0){
					// 点在最前面
					child=document.createElement(tag.substr(1));
				}else if(tps[1].length==0){
					// 点在最后面
					child=document.createElement(tps[0]);
				}else{
					child=document.createElement(tps[0]);
					inr=document.createTextNode(tag.substr(tps[0].length+1));
				}
			}

			if(inr!=null){
				child.appendChild(inr);
			}
			this.ele.appendChild(child).style.padding="15px";
			
			var new_=new Doc_();
			new_.ele=child;
			
			return new_;
		}
		
		return this;
	}
}

/** 实例化Doc_()类 **/
var doc=new Doc_();
