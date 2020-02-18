# 表单


> **！！！每个input元素必须指定name值！！！**

## 1. action
```html
<form action="process.html">
</form>
```
```html
<pricess.html/>
processing
```
action，表单提交给哪个页面进行处理

## 2. input text
```html
UserName: <input type="text" name="username">
```
- type, text文本类型
- name, 指定文本框名称username，用于提交数据

## 3. input password
```html
<input type="password" name="password">
```
- type，密码类型
- name, 指定文本框名称password，用于提交数据
## 4. input submit
```html
<input type="submit" value="Sign Up">
```
- type，显示为提交按钮
- value，按钮显示的文字

提交后的链接，`http://127.0.0.1:5500/process.html?username=name&password=12345`
- 处理表单的链接为process.html
- username=name，等号前面为元素的name值，后面为用户输入值
- password=12345，等号前面为元素的name值，后面为用户输入值

## 5. Radio 单选按钮
```html
<input type="radio" name="choice" value="one" id="">
<input type="radio" name="choice" value="two" id="">
<input type="radio" name="choice" value="three" id="">
```
- 多个单选框的name属性值必须一致，否则无法控制单选，相同那么表示为一组选项，只允许选择一个
- 由于选框不需要用户输入，需要设定每个单选的值，value为相服务器传递的参数 `choice=one`

http://127.0.0.1:5500/process.html?username=name&password=12345&choice=one

## 6. checkbox 所选框
```html
<input type="checkbox" name="multi" value="1" checked id="">
<input type="checkbox" name="multi" value="2" id="">
<input type="checkbox" name="multi" value="3" id="">
```
- checked，默认被勾选
- name
- value

http://127.0.0.1:5500/process.html?username=&password=&choice=one&multi=1&multi=2

## 7. select 下拉选框


















