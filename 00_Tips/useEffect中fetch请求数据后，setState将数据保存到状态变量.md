
# useEffect中fetch请求数据后，setState将数据保存到状态变量

- **useEffect中fetch请求得到数据后，如何通过setState将数据保存到本地状态变量中？**，将所有数据拼接成一个字符串，再把字符串解析为json对象，在set到状态变量中
- **但是不通过字符串转换，直接setState赋值状态变量会赋值失败**

    1. `fetch(url).then(res=>res.json()).then(data=>data.map( ... ))`，循环拿到每一条数据
    2. 现将数据保存到一个字符串中，字符串最后用”反斜线“作为分隔符
    3. 清洗上面的字符串slice（返回为列表格式），需要时在添加其他字符，以用于构造出一个json对象形式的字符串
    4. 遍历上述清洗后的数组的每一个元素map，并将每一个元素`json.parse()`成对象，再赋值给新的数组
    5. 将上述新数组setState给状态变量即可
    

完整代码实例
```javascript
useEffect(() => {
    var all = ''
    fetch("https://picsum.photos/v2/list?page=10&limit=80")
        .then(res=>res.json())
        .then(data=>{
            data.map(v=>{
                let id = v.id
                let src = v.download_url.split('/').slice(0,5)
                let new_src = src.join('/') + '/120/150'
                all += `{id:${id}, src:'url(${new_src})', count:${Math.floor(Math.random(300)*1000)}}\\`
            })
            let old_string_list = all.split("\\")
            let new_string_list = old_string_list.slice(0,old_string_list.length-1)
            let obj = new_string_list.map(v=>eval("(" + v + ")"))
            
            console.log(typeof(obj),obj)
            setLoadMoreList(obj)  
        })
}, []);
```


1. `all`字符串，由于需要转义字符，代码中使用两个反斜杠
```javascript
a = "{id:722, src:'url(https://picsum.photos/id/722/120/150)', count:588}\\{id:810, src:'url(https://picsum.photos/id/810/120/150)', count:654}\\"
```
```
{id:722, src:'url(https://picsum.photos/id/722/120/150)', count:588}\{id:810, src:'url(https://picsum.photos/id/810/120/150)', count:654}\
```

2. `old_string_list`将字符串通过反斜线分隔开，分割后，数组最后一个空元素需要清洗掉
```javascript
b = a.split('\\')
```
```
["{id:722, src:'url(https://picsum.photos/id/722/120/150)', count:588}", "{id:810, src:'url(https://picsum.photos/id/810/120/150)', count:654}", ""]
```

3. `new_string_list `清洗
```javascript
c = b.slice(0,b.length-1)
```
```
 ["{id:722, src:'url(https://picsum.photos/id/722/120/150)', count:588}", "{id:810, src:'url(https://picsum.photos/id/810/120/150)', count:654}"]
```

4. `obj `遍历清洗后的数组，将数组中的每个字符串元素，转换为json对象元素
```javascript
d = c.map(v=>eval("(" + v + ")"))
```

```
(2) [{…}, {…}]
  0: {id: 722, src: "url(https://picsum.photos/id/722/120/150)", count: 588}
  1: {id: 810, src: "url(https://picsum.photos/id/810/120/150)", count: 654}
  length: 2
  __proto__: Array(0)
```

5. 使用上面，有json对象构成的数组，来setState

