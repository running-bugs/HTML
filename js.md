# js常用方法锦集

### DOM
dom【节点】，将网页看作一棵树状结构，网页将由一个个节点组成；节点一般分为两类：元素节点、内容节点

* 获取网页的节点
```
<script>
var eleDom=document.getElementsByTagName("tag");//取得该类标签元素，返回一个对象数组
var clsDom=document.getElementsByClassNane("class");//取得该类标签，返回一个对象数组
var idDom=document.getElementById("id");//取得该id元素 返回一个节点对象
</script>
```

* 对dom进行操作
```
新建元素节点
var ele=document.createElement("p");
新建内容节点
var inner=document.createTextNode("xxx");//不能有回车
取得父类节点

添加子节点
ele.appendChild(inner);
idDom.appendChild(ele);
删除节点

修改节点的属性
ele.style.background-color="rgb(255,255,255)";
ele.style="float:left;width:20px;"
修改节点内容
ele.innerHTML="XXX";

```

* 为dom添加事件
```
点击事件
ele.onclick="fun(this)"
鼠标按下
ele.onmouseDown
鼠标弹起
ele.onmouseup
鼠标移动到元素上
ele.onmouseover
鼠标移出元素
ele.onmouseout
元素获取焦点时
ele.onfocus
元素失去焦点
ele.onblur
当载入网页时
```
