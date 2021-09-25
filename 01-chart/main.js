// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
myChart.resize({
    width: 400,
    height: 200
});

// 指定图表的配置项和数据
var option = {
    backgroundColor: "#FAF8F1",
    title: {
        text: "westside market",
        right: "center",
        top: 5,
        textStyle: {
            color: '#000',
            fontFamily: "FAKERECE"
        }

    },

    legend: {
        orient: 'vertical',
        right: 5,
        top: 30,


        textStyle: {
            color: '#000',
            fontFamily: "FAKERECE"


        }
    },
    tooltip: {},
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
        // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['NAME', 'PRICE'],
        source: [
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "MILK QUART WHOLE", "PRICE": 1.99, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "CUCUMBERS PERSIAN 14OZ", "PRICE": 1.99, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "TOMATOES ON THE VINE ORG", "PRICE": 2.99, "AMOUNT": 1 }
        ]
    },
    yAxis: {
        type: 'category',
        color: "#000"
    },
    xAxis: {
        color: "#000"
    },
    series: [{ type: 'bar' }],
    textStyle: {
        color: '#000',
        fontFamily: "FAKERECE"
    },
    color: "#000"

};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);