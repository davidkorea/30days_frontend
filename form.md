# 表单

# Jquery get Form Values
```html
<div>
    <form id="form" action="" autocomplete="off" method="POST">
        <table>
            <tbody>
                <tr>
                    <td>Name: </td>
                    <td>
                        <input type="text" name="name" id="name">
                    </td>
                </tr>
                <tr>
                    <td>Author: </td>
                    <td>
                        <input type="text" name="author" id="author">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="button" value="submit" id="submit">
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div>

<script>
    $(function() {
        $('#submit').click(function() {
            // var formData = $('#form').serializeArray()
            // console.log(formData);
            var name = $('#name').val()
            var author = $('#author').val()
            console.log(name, author);
        })
    })
</script>
```
```javascript
$(function() {
    $('#submit').click(function() {
        var formData = $('#form').serializeArray()
        console.log(formData);
    })
})
```

1. 获取到input元素，使用val()方法
<img width="544" src="https://user-images.githubusercontent.com/26485327/75663191-614fbc80-5cab-11ea-9975-ce987c60479e.png">

2. 获取到form元素，使用`$('#form').serializeArray()`，一次性获取表单内所有input的数据
<img width="644" src="https://user-images.githubusercontent.com/26485327/75663245-77f61380-5cab-11ea-8760-f527bbd29432.png">


# Form Basic
> **！！！每个input元素必须指定name值！！！**


## 1. action
```html
<form action="process.html" autocomplete="off">
</form>
```
- 下面所有选项都不会提示历史记录，全部取消自动不全
```html
<pricess.html/>
processing
```
action，表单提交给哪个页面进行处理

## 2. input text
```html
UserName: <input type="text" name="username" autocomplete="off">
```
- type, text文本类型
- name, 指定文本框名称username，用于提交数据
- **autocomplete="off"，关闭自动补全，不会显示最近输入历史列表**
- **readonly，只读，可以选中，不能修改，可以提交该参数**
- **disabled，不能选中，不可以被提交该参数**
- **autofocus，自动获取焦点，即光标默认显示在该输入框**

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

`http://127.0.0.1:5500/process.html?username=name&password=12345&choice=one`

## 6. checkbox 所选框
```html
<input type="checkbox" name="multi" value="1" checked id="">
<input type="checkbox" name="multi" value="2" id="">
<input type="checkbox" name="multi" value="3" id="">
```
- checked，默认被勾选
- name
- value

`http://127.0.0.1:5500/process.html?username=&password=&choice=one&multi=1&multi=2`

## 7. select 下拉选框
```html
<select name="select" id="">
    <option value="opt1" selected>option 1</option>
    <option value="opt2">option 2</option>
</select>
```
- name，用于提交数据
- value，用于提交数据
- selected，默认选中

`http://127.0.0.1:5500/process.html?username=&password=&multi=1&select=opt2`

## 8. file
```html
<input type="file" name="file" id="">
```

`http://127.0.0.1:5500/process.html?username=&password=&multi=1&select=opt1&file=1.jpg`

## 9. button
1. 重置
```html
<input type="reset" name="" id="">
```
```html
<button type="reset"></button>
```
- 清空输入框和选项，恢复为默认值
- 二者功能一致，但是button标签可以做更多css样式，如给按钮添加图片等

2. 提交
```html
<input type="submit" name="" id="">
```
```html
<button type="submit"></button>
```

3. 普通按钮
```html
<input type="button" name="btn" value="click" id="">
```
```html
<button type="button"></button>
```
- 显示为click的一个普通按钮
- 需要通过js设置功能


## 10. color 颜色选择框
```html
<input type="color" name="color" id="">
```

`http://127.0.0.1:5500/process.html?username=&password=&multi=1&select=opt1&color=%2300fdff`


## 11. email 自动检测邮件格式
```html
<input type="email">
```
- 移动端更常用，会根据输入框类型弹出相应的虚拟键盘











