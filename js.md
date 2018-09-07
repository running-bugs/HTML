# js常用方法锦集

### DOM
dom【节点】，将网页看作一棵树状结构，网页将由一个个节点组成；节点一般分为两类：元素节点、内容节点

* 获取网页的节点
```
<script>
var eleDom=document.getElementsByTagName("tag");//取得该类标签元素，返回一个对象数组
var clsDom=document.getElementsByClassNane("class");//取得该类标签，返回一个对象数组
var idDom=document.getElementById("id");//取得该id元素 返回一个节点对象
</script>```

* 对dom进行操作
```
新建元素节点
var ele=document.createElement("p");
新建内容节点
var inner=document.createTextNode("xxx");//不能有回车
添加子节点
ele.appendChild(inner);
idDom.appendChild(ele);
修改节点的属性
ele.style.background-color="rgb(255,255,255)";
ele.style="float:left;width:20px;"
```