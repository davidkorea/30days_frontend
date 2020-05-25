# Tips

1. [useEffect中fetch请求得到数据后，如何通过setState将数据保存到本地状态变量中？]()
    - fetch请求到数据后，map函数遍历数据后，生成字符串，再parse成json，最后setState保存数据到状态变量
    - map函数中需要遍历每一个url进行fetch请求，将每一个url传送给一个子组件来处理，子组件内部fetch请求该url的所有数据，将数据保存在子组件的本地状态变量中，由子组件直接使用
