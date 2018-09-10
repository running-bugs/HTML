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
... ...
```

* js定义一个类
```
T=function(){
    this.x; //属性前面的this需要加上
    this.y;
    
    this.run=function(){
        return ++this.x;
    };
}

var postion=new T();
console.log(position.x);
```

* js定义一个数组
```
var arr=["hello","world","!!!"];
var arr=new Array("hello","world");

console.log(arr[0]);
```

* js定义一个方法
```
function fun(){
  ...
}
```

* js在某动作t毫秒后执行方法
```
function getX(){
 return 100;
}
var timeout=setTimeOut(getX,3000);  //3秒后执行getX()函数 注意! getX 非getX();
    //stTimeOut(function(){...},3000);

clearTimeOut(timeout);  //中断setTimeOut方法执行
```
在某动作后每t毫秒为周期 重复执行方法
```
function getX(){
 return 100;
}
var inter=setInterval(getX,3000);  //每3秒执行getX()函数 注意! getX 非getX();

clearInterval(inter);  //中断setInterval方法执行
```
