
					
					        // 指定图表的配置项和数据
					        var option1 = {
					 tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b}: {c} ({d}%)"
					    },
					    legend: {      
						    textStyle: {
					  //标题颜色
							//color: '#00BFFF',
							 color:['#00BFFF','#c23531', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
							fontSize:'10',
							fontWeight:'600',
					                },
					        orient: 'vertical',
					        x: 'left',
					        data:['中国','美国','日本','德国','法国','英国','印度','巴西','意大利','加拿大','其余国家'],
					
					    
					    },
					    series: [
					        {
					            name:'GDP总量占比',
					            type:'pie',
					            selectedMode: 'single',
					            radius: [0, '30%'],
					
					            label: {
					                normal: {
					                    position: 'inner'
					                }
					            },
					            labelLine: {
					                normal: {
					                    show: false
					                }
					            },
					            data:[
					                {value:13.2, name:'中国',selected:true},
					                {value:20.51, name:'美国' },
					                {value:5.06, name:'日本'},
					                {value:3.93, name:'德国'},
					                {value:2.76, name:'法国'},
					                {value:39.34, name:'其余国家'}
					            ]
					        },
					        {
					            name:'全球GDP总量（万亿/美元）',
					            type:'pie',
					            radius: ['40%', '55%'],
					            label: {
					                normal: {
					                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
					                    backgroundColor: '#eee',
					                    borderColor: '#aaa',
					                    borderWidth: 1,
					                    borderRadius: 4,
					                    // shadowBlur:3,
					                    // shadowOffsetX: 2,
					                    // shadowOffsetY: 2,
					                    // shadowColor: '#999',
					                    // padding: [0, 7],
					                    rich: {
					                        a: {
					                            color: 'red',
					                            //标签字体颜色
					                            lineHeight: 22,
					                            align: 'center'
					                        },
					                        // abg: {
					                        //     backgroundColor: '#333',
					                        //     width: '100%',
					                        //     align: 'right',
					                        //     height: 22,
					                        //     borderRadius: [4, 4, 0, 0]
					                        // },
					                        hr: {
					                            borderColor: '#aaa',
					                            width: '100%',
					                            borderWidth: 0.5,
					                            height: 0
					                        },
					                        b: {
					                            fontSize: 16,
					                            lineHeight: 33
					                        },
					                        per: {
					                            color: 'yellow',
					                            //百分比
					                            backgroundColor: '#334455',
					                            padding: [2, 4],
					                            borderRadius: 2
					                        }
					                    }
					                }
					            },
					            data:[
					                {value:13.2, name:'中国',selected:true},
					                {value:20.51, name:'美国'},
					                {value:5.06, name:'日本'},
					                {value:3.93, name:'德国'},
					                {value:2.76, name:'法国'},
					                {value:2.66, name:'英国'},
					                {value:2.65, name:'印度'},
					                {value:2.2, name:'巴西'},
					                {value:2.05, name:'意大利'},
					                {value:1.76, name:'加拿大'},
					              	 {value:28.02, name:'其余国家'},
					            ]
					        }
					    ]
					};
					
					        // // 使用刚指定的配置项和数据显示图表。
					        // myChart.setOption(option1);
							
							
							

	
	        // 指定图表的配置项和数据app.title = '世界人口总量 - 条形图';
	
	option2 = {
	    title: {
	        text: '各国人均GDP（美元）',
	        subtext: '数据来自网络',
	            textStyle: {
			color:'black',
	   				},
	    },
	
	    textStyle: {
	
			color:'black',
		    fontSize:'20',
	   				},
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
		    
	            textStyle: {
			color:'black',
	   				},
	        data: ['2016年','2017年', '2018年'],
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        data: ['英国','德国','日本','美国','中国']
	    },
	    series: [
	            {
	            name: '2016年',
	            type: 'bar',
	            data: [45791, 43548, 34285, 58740,8516]
	        },
	        {
	            name: '2017年',
	            type: 'bar',
	            data: [38723, 40548,38285,59460 ,8848]
	        },
	        {
	            name: '2018年',
	            type: 'bar',
	            data: [29151, 42378, 43667, 60519,18369]
	        }
	    ]
	};
	
	        // 使用刚指定的配置项和数据显示图表。
	        // myChart2.setOption(option2);
			
			
	  option3= {
		    textStyle: {
			color:'black',
	   				},
	   	tooltip: {},
		 title:{
			text:'历年全国贫困人口数量(万人)',
			textStyle: {
			color:'black',
	   				},
			 },
		legend: {
	                data:['全国贫困人口数量'],
	                		textStyle: {
			color:'black',
	   				},
	            },
		color: ['#FFA500'],
	    xAxis: {
	        type: 'category',
	        data: ['1978年', '1998','2000年', '2007','2010','2018']
	    },
	    yAxis: {
	       
	    },
	    series: [{
		    name: '全国贫困人口数量',
	        data: [250000, 19208,9422, 2688,1900,1479],
	        type: 'bar'
	    }]
	};
	
	
	var datasladebts=["data-sladebt1","data-sladebt2","data-sladebt3"];
	
	var indexdatai=0;
	indexdataq=0;
    function moveindexdata(){
	for(dataslb=0;dataslb<sladebts.length;dataslb++){
			document.getElementById(datasladebts[dataslb]).style.backgroundColor="rgba(0,191,255,0.4)";
				 }
				
				 
			if(indexdatai<=-200){
				indexdatai=0;
				indexdataq=0;
			}else{
				indexdataq++;
				indexdatai=indexdatai-100;
			}
			document.getElementById('index-data-slade').style.left=indexdatai+'%';
			document.getElementById(datasladebts[indexdataq]).style.backgroundColor="coral";
			
			}
			
			indexdatas=window.setInterval(moveindexdata, 8000);
			
	function indexdataslbt(dataslbtid,dataslbtq){
		indexdatai=dataslbtid;
		indexdataq=dataslbtq;
		moveindexdata();
		
	}