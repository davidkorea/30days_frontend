# Chartjs

```html
<link rel="stylesheet" href="./tailwind.min.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(function() {
        var ctx = document.getElementById('chart').getContext('2d');
        Chart.defaults.global.defaultFontColor = 'aliceblue';
        var chart = new Chart(ctx, {type: 'line'});
    })
</script>

<body>
    <div class="frame flex flex-col justify-center items-center bg-gray-800 w-screen h-screen">
        <div class="chart bg-gray-700">
            <canvas id="chart" width="600" height="400"></canvas>
        </div>
        <div class="btn mt-6 p-2 text-gray-200 bg-blue-600 hover:text-gray-100 hover:bg-blue-800 select-none rounded shadow-2xl">Open file</div>
    </div>
</body>
```
