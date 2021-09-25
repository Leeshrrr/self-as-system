let amount5 = {};

for (let i = 0; i < data2.length; i++) {
    for (let j = 0; j < data2[i].THING.length; j++) {
        if (amount5.hasOwnProperty(data2[i].THING[j].TYPE)) {
            amount5[data2[i].THING[j].TYPE] += 1;
        } else {
            amount5[data2[i].THING[j].TYPE] = 1;
        }
    }
}
console.log(amount5);


var amountResult5 = [];

for (let i in amount5) {
    var s = {};


    s["AMOUNT"] = amount5[i];
    s["TYPE"] = i;
    amountResult5.push(s);


}
console.log(amountResult5)






// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('pie'));
myChart.resize({
    width: 360,
    height: 700,

});

// 指定图表的配置项和数据
option = {
    title: {
        text: 'THINGS that i BUY most',
        left: 'center',
        top: 10,
        textStyle: {
            color: '#fff',
            fontFamily: "FAKERECE"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%'
    },
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
        // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['TYPE', 'AMOUNT'],
        source: amountResult5,


    },
    visualMap: [{
            type: 'piecewise',
            min: 0,
            max: 85,
            top: 70,
            x: "right",
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