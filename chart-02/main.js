let amount2 = {};

for (let i = 0; i < data2.length; i++) {
    for (let j = 0; j < data2[i].THING.length; j++) {
        if (amount2.hasOwnProperty(data2[i].THING[j].NAME)) {
            amount2[data2[i].THING[j].NAME] += 1;
        } else {
            amount2[data2[i].THING[j].NAME] = 1;
        }
    }
}
console.log(amount2);

var amountResult2 = [];

for (let i in amount2) {
    var s = {};
    if (amount2[i] > 1) {
        s["NAME"] = i;
        s["AMOUNT"] = amount2[i];
        amountResult2.push(s);
    }

}
console.log(amountResult2)




// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('bar'));
myChart.resize({
    width: 360,
    height: 500,

});

// 指定图表的配置项和数据
var option = {

    backgroundColor: "#000",
    title: {
        text: "things i buy more than once",
        right: "center",
        top: 5,
        textStyle: {
            color: '#fff',
            fontFamily: "FAKERECE"
        }

    },

    legend: {
        orient: 'vertical',
        right: 5,
        top: 30,


        textStyle: {
            color: '#fff',
            fontFamily: "FAKERECE"


        }
    },
    tooltip: {},
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
        // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['NAME', 'AMOUNT'],
        source: amountResult2,


    },
    yAxis: {
        type: 'category',
        color: "#fff",
        // offset: -100

    },
    xAxis: {
        color: "#fff"
    },
    series: [{ type: 'bar' }],
    textStyle: {
        color: '#fff',
        fontFamily: "FAKERECE"
    },
    color: "#ff1cae"

};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);