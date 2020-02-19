# 移动端

适配不同移动端设备屏幕的最佳尺寸
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

- 不同设备的视口viewport不同，因此不能用像素px单位，否则有的设备上全屏，其他设备可能不是全屏
- viewwidth视口宽度，vw永远相对于设备的视口宽度，无论时什么尺寸的设备
  - 100vw就是百分之百横向满屏
- 设计图宽度750px，常见的还有1125px
  - 手机屏幕750px，那么设计图的750px就是100vw
  - 那么设计图48px，是多少vw？100/750 * 48 = 6.4vw
- vw适配方案
  - font-size + rem 

## em & rem
- em 相对于自身元素的字体大小 font-size * 10
- rem 相对于根元素的字体大小，即html的font-size * 10

浏览器默认font-size=16px，最小12px。当设置font-size小于12px时，em和rem将自动10倍于12px，而不是设置的像素

```html
html{
  font-size: 5.333vw; // 注意是vw
}

.box{
  height: 4.8px;
  width: 3.5px
}
```

- 设计图宽度全屏750px = 100vw
  - 算出设计图1px = 100/750 = 0.1333333vw
  - 但是 0.1333333vw 小于浏览器最小12pxfont-size
  - 所以 0.133333vw * 40 约等于19px
  - 所以之后设计图中的像素需要除以40









