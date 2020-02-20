

# less

1. 创建css变量
```css
html {
  --color: red;
}
.box1 {
  background-color: var(--color);
}
```


2. calc()
```css
.box1 {
  height: calc(1000px/2);
  background-color: var(--color);
}
```



### 配置插件
<img width="1010" src="https://user-images.githubusercontent.com/26485327/74901861-22825280-53df-11ea-90d3-9877ca353e68.png">

```json
{
    "editor.fontSize": 16,
    "liveServer.settings.CustomBrowser": "chrome",
    "window.zoomLevel": 0,
    "less.compile": {
        "compress": false,
        "sourceMap":true,
        "out": true,
    }
}
```
















































