let amount6 = {};

for (let i = 0; i < data2.length; i++) {
    for (let j = 0; j < data2[i].THING.length; j++) {
        if (data2[i].THING[j].TYPE == "FOOD") {


            if (amount6.hasOwnProperty(data2[i].THING[j].SUBTYPE)) {
                amount6[data2[i].THING[j].SUBTYPE] += 1;
            } else {
                amount6[data2[i].THING[j].SUBTYPE] = 1;
            }
        }
    }
}
console.log(amount6);


var amountResult6 = [];

for (let i in amount6) {
    var s = {};


    s["AMOUNT"] = amount6[i];
    s["TYPE"] = i;
    amountResult6.push(s);


}
console.log(amountResult6)






// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('pie'));
myChart.resize({
    width: 360,
    height: 950,

});

// 指定图表的配置项和数据
option = {
    title: {
        text: 'TYOE OF FOOD that i BUY most',
        left: 'center',
        top: 10,
        textStyle: {
            color: '#fff',
            fontFamily: "FAKERECE"
        }
    },
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
        // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['TYPE', 'AMOUNT'],
        source: amountResult6,


    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%'
    },
    visualMap: [{
            type: 'piecewise',
            min: 0,
            max: 15,
            x: "right",
            top: 70,
            textStyle: {
                color: '#fff',
                fontFamily: "FAKERECE"
            },



            inRange: {
                // 选中范围中的视觉配置z
                color: ['#555', "#999", "#BBB", '#fff'], // 定义了图形颜色映射的颜色列表，
                // 数据最小值映射到'blue'上，
                // 最大值映射到'red'上，
                // 其余自动线性计算。
                symbolSize: [30, 100] // 定义了图形尺寸的映射范围，
                    // 数据最小值映射到30上，
                    // 最大值映射到100上，
                    // 其余自动线性计算。
            },

        }
        //    ...
    ],
    legend: {
        orient: 'vertical',
        x: 'left',
        top: 70,
        color: '#fff',
        textStyle: {
            color: '#fff',
            fontFamily: "FAKERECE"
        }

    },
    series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center',
            emphasis: {
                show: true
            }
        },
        labelLine: {
            show: false
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
    }],
    textStyle: {
        color: '#fff',
        fontFamily: "FAKERECE"
    }

};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);