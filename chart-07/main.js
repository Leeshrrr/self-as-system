let amount7 = {};

for (let i = 0; i < data2.length; i++) {
    for (let j = 0; j < data2[i].THING.length; j++) {
        if (((amount7.hasOwnProperty(data2[i].THING[j].NAME)) == false) && (data2[i].THING[j].PRICE != "")) {
            amount7[data2[i].THING[j].NAME] = data2[i].THING[j].PRICE;
        }
    }

}
console.log(amount7);

var amountResult7 = [];

for (let i in amount7) {
    var s = {};


    s["PRICE"] = amount7[i];
    s["NAME"] = i;
    amountResult7.push(s);


}
console.log(amountResult7)




// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('bar'));
myChart.resize({
    width: 360,
    height: 3000,

});

// 指定图表的配置项和数据
var option = {

    backgroundColor: "#1F1F1F",
    title: {
        text: "THE PRICE OF THINGS",
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
        dimensions: ['NAME', 'PRICE'],
        source: amountResult7,


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
    color: "#fff"

};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);