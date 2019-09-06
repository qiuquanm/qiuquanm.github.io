   var colors = ['#5793f3', '#d14a61', '#675bba'];

option1 = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '蒸发量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '降水量',
            min: 0,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            yAxisIndex: 1,
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 2,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};




var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
		option2 = {
     title: {
	        text: '2019年销售水量和主营业务收入对比',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
    backgroundColor: '#0f375f',
    grid: {
        top: "25%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        data: ["销售水量", "主营业务"],
        top: "15%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: [
            "当年完成水量",
            "去年同期水量",
            "滚动目标值水量",
            "全年目标值水量",
            "当年完成金额",
            "去年同期金额",
            "滚动目标金额",
            "全年目标值",
            
        ],
        axisLine: {
            show: true //隐藏X轴轴线
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac" //X轴文字颜色
            }
        },
         axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                        }
                },
    },
    yAxis: [{
            type: "value",
            name: "亿元",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            },
             axisLine: {
                        lineStyle: {
                            color: '#FFFFFF'
                            }
                    },
        },
        {
            type: "value",
            name: "同比",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#ebf8ac"
                }
            }
        },
        {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
    ],
    series: [{
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle:{
                color: "rgba(5,140,255, 0.2)"
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        },
        {
            name: "主营业务",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                        {
                            offset: 1,
                            color: "#4693EC"
                        }
                    ])
                }
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        }
    ]
};


 var option3 = {
     title: [{
             text: '今日煤矿煤炭产品销售预览',
             x: 'center',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '内外块粉比',
             x: '19.8%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '块粉比',
             x: '49.8%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '内外比',
             x: '79.8%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '34106.24吨',
             x: 'center',
             y: '8%',
             subtext: '2019-05-20 15:19:32',
             textStyle: {
                 fontSize: 80
             }
         }
     ],
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: [{
             data: ['外销', '内销'],
             x: '25%',
             y: '60%'
         },
         {
             data: ['外销块煤', '内销块煤', '外销面煤', '内销面煤', '块煤', '面煤'],
             x: 'left',
             orient: 'vertical'
         }
     ],
     grid: [{
             left: '0%',
             right: '55%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         },
         {
             gridindex: 1,
             left: '48%',
             right: '3%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         }
     ],
     xAxis: [{
             type: 'value',
             axisLabel: {
                 formatter: '{value} 吨'
             },
             boundaryGap: [0, 0.01]
         },
         {
             gridIndex: 1,
             type: 'category',
             boundaryGap: false,
             data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时']
         }
     ],
     yAxis: [{
             type: 'category',
             data: ['块煤大块', '块煤4-8', '块煤3-6', '块煤2-4', '块煤1-3', '块煤0.5-1', '面煤', '电面煤', '电块煤', '劣质煤'],
             axisLabel: {
                 interval: 0
             }
         },
         {
             gridIndex: 1,
             type: 'value',
             axisLabel: {
                 formatter: '{value} 吨'
             }
         }
     ],
     series: [{
             name: '外销',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [1576.28, 840.18, 997.15, 1865.25, 3026.62, 877.09, 6361.68, 0, 0, 1188.28]
         },
         {
             name: '内销',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [44.67, 11.94, 123.67, 20.28, 62.46, 29.62, 1362.29, 10127.00, 3909.78, 1682.00]
         },
         {
             name: '大煤种',
             type: 'pie',
             center: ['20%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}吨({d}%)'
                 }
             },
             data: [{
                     value: 9182.57,
                     name: '外销块煤'
                 },
                 {
                     value: 4202.42,
                     name: '内销块煤'
                 },
                 {
                     value: 6361.68,
                     name: '外销面煤'
                 },
                 {
                     value: 11489.29,
                     name: '内销面煤'
                 }
             ]
         },
         {
             name: '块粉比',
             type: 'pie',
             center: ['50%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}吨({d}%)'
                 }
             },
             data: [{
                     value: 13384.99,
                     name: '块煤'
                 },
                 {
                     value: 17850.97,
                     name: '面煤'
                 }
             ]
         },
         {
             name: '内外比',
             type: 'pie',
             center: ['80%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}吨({d}%)'
                 }
             },
             data: [{
                     value: 15544.25,
                     name: '外销'
                 },
                 {
                     value: 15691.71,
                     name: '内销'
                 }
             ]
         },
         {
             xAxisIndex: 1,
             yAxisIndex: 1,
             name: '分时统计',
             type: 'line',
             lineStyle: {
                 normal: {
                     color: '#4ea397'
                 }
             },
             data: ['516.48', '482.46', '418.74', '284.66', '315.28', '365.34', '657.19', '3054.78', '4127.51', '5180.03', '5416.46', '4113.99', '3021.61', '4191.89', '3437.5', '1250.22', ],
             markPoint: {
                 data: [{
                         type: 'max',
                         name: '最大值',
                         symbolSize: 80
                     },
                     {
                         type: 'min',
                         name: '最小值',
                         symbolSize: 50
                     }
                 ],
                 itemStyle: {
                     normal: {
                         color: '#d0648a'
                     }
                 }
             },
             markLine: {
                 data: [{
                     type: 'average',
                     name: '平均值'
                 }]
             }
         }
     ]
 };
 
 
 
 var xData = ['芝罘区','福山区','莱山区','牟平区','海阳市','莱阳市','蓬莱市','栖霞市','龙口市','长岛县','招远市','莱州市','开发区','高新区','昆嵛山','龙海','机场','核电'];
var y1Data = [10758,3975,2980,1831,2122,3018,3525,1729,2764,380,3988,2333,3596,453,365,9,67,48];
var y2Data = [28,4.4,5.9,0.9,0.7,1.1,2.1,0.4,1.9,3.8,1.6,0.7,5.7,6.1];
option4 = {
    grid: {
        left: '7%',
        right: '5%',
        top: '25%',
        bottom: '19%',
    },
    title: {
        show: false
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['监控数量', '监控密度'],
        right: '3%',
        top: '10%',
        itemWidth: 11,
        itemHeight: 11,
        textStyle: {
            color: 'black',
            fontSize: 13
        }
    },
    toolbox: {
        show: false,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            show: true,
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 15,
                color: '#f86462',
                margin: 8,
                interval:0 ,
                formatter:function(val){
                    return val.split("").join("\n");
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#4e608b',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            data: xData
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '',
            axisLine: {
                show: false
            },
            splitNumber : 4,
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: '#4e608b'
                }
            },
            axisLabel: {
                fontSize: 13,
                color: '#d0d0d0',
                margin: 12,
            },
            max: 12000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            axisLine: {
                show: false
            },
            splitNumber : 3,
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 13,
                color: '#00F5FF',
                margin: 12,
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: '#4e608b'
                }
            },
            name: '',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },

    ],
    series: [
        {
            name:'监控数量',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#1dacfe'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#4889fb" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#15b3ff" // 100% 处的颜色
                    }], false)
                }
            },
            barWidth: '40%',
            yAxisIndex: 0,
            data: y1Data
        },
        {
            name:'监控密度',
            yAxisIndex: 1,
            color: '#ffd300',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#ffd300'
                    }
                }
            },
            lineStyle: {
                color: '#ffd300'
            },
            type:'line',
            data: y2Data
        }
    ]
};
