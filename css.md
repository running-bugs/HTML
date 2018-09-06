# css常见样式锦集

* css选择器
  * 标签选择器 对一类标签进行样式设置
  * 类选择器 对定义相同类名的元素设置相同样式
  * id选择器 对设置的唯一id元素进行样式设置【如果id相同 虽然样式也会被设置 但是不建议设置】
  * 子代选择器 用于精确定位 对某元素下的某个/某类子元素进行样式设置
  * 后代选择器 用于精确定位 位于该后代下的某个/某类元素进行样式设置
  * 使用元素名.类/id 用于为该类元素的某个/某类元素设置样式
  
* 背景样式
  * background-color：;设置背景颜色
  * background:URL("") ;设置背景图片
  。。。 。。。
  
* 外边距
  * margin 设置外边距长度 顺序为上右下左 如果只设置三个值则为上 左右 下；
  * margin-top/margin-right/margin-bottom/margin-left 单独设置上下左右的外边距
  * margin：0 auto；设置本元素相对于父级元素水平居中，需要指定本元素宽度
  
* 内边距
  * padding 设置内边距长度 顺序为上右下左 如果只设置三个值则为上 左右 下；
  * padding-top/padding-right/padding-bottom/padding-left 单独设置上下左右内边距
  
* 边框
  * border-color 设置边框颜色；
  * border-style 设置边框样式；
  * border-width 设置边框粗细；
  
* 宽高
  * width 设置宽度
  * height 设置高度
  
* text-align 设置元素内部文字与**所有**后代元素的位置
  * left/center/right 设置后代元素效果右对齐、居中、与左对齐

* 位置
  * position设置元素所处位置
  * abselute：绝对定位，元素跳出原父类元素空间，以上代中出现过position的元素为参照，进行定位【static除外】
  * relation：相对与原来位置为参考点，元素还在父元素内
  * static：默认位置

* 浮动
  * 用来设置本元素的位置
  
* 层级
 * z-index 设置元素层级；数量越小，层级越下
