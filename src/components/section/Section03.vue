<template>
    <div class="section screen03">
        <div class="minContent3">
            <div class="screen3Head" style="display: none">
                <h2>技能栈</h2>
                <h4>Skills</h4>
            </div>
            <div id="skills" class="baseCenter"></div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {}
        },
        //生命周期，DOM数据已完成
        mounted() {
            const myChart = echarts.init(document.getElementById('skills'));
            const test_data = [
                {
                    "name": "HTML5",
                    "value": "84"
                },
                {
                    "name": "CSS3",
                    "value": "73"
                },
                {
                    "name": "JavaScript",
                    "value": "76"
                },
                {
                    "name": "jQuery",
                    "value": "78"
                },
                {
                    "name": "Less",
                    "value": "68"
                },
                {
                    "name": "Node.js",
                    "value": "72"
                },
                {
                    "name": "Vue",
                    "value": "66"
                },
                {
                    "name": "React",
                    "value": "60"
                },
                {
                    "name": "webpack",
                    "value": "66"
                },
                {
                    "name": "ES6",
                    "value": "72"
                },
                {
                    "name": "Ajax",
                    "value": "83"
                },
                {
                    "name": "Bootstrap",
                    "value": "61"
                }
            ];
            const maxData = 100,
                seriesd = [],
                legend = [];

            for (const j in test_data) {
                if (legend.indexOf(test_data[j]["name"] == -1)) {
                    legend.push({
                        'icon': 'rect',
                        "name": test_data[j]["name"]
                    });
                }
                const ra = test_data.length - 1 - j;
                seriesd.push({
                    name: test_data[j]["name"],
                    type: 'pie',
                    radius: [(ra * 5 + 10) + "%", (7 + ra * 5) + "%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            }
                        }
                    },
                    hoverAnimation: false,
                    startAngle: 180,
                    center: ["50%", "75%"],
                    data: [{
                        value: test_data[j]["value"],
                        name: test_data[j]["name"],
                        label: {
                            normal: {
                                postion: "center"
                            }
                        },
                    },
                        {
                            value: maxData - test_data[j]["value"],
                            itemStyle: {
                                normal: {
                                    color: 'rgba(203,203,203,0.5)',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(203,203,203,1)'
                                }
                            },
                            name: 'showtip_' + test_data[j]["value"]
                        },
                        {
                            value: maxData,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(0,0,0,0)',
                                    label: {
                                        show: true
                                    },
                                    labelLine: {
                                        show: true
                                    }
                                },
                                emphasis: {
                                    color: 'rgba(0,0,0,0)'
                                }
                            },
                            name: 'hide'
                        }
                    ]
                })
            }
            const initnum = parseFloat(seriesd[0].data[0]["value"] * 100 / maxData).toFixed(2);
            seriesd.push({
                type: 'gauge',
                z: 3,
                min: 0,
                max: 100,
                splitNumber: 5,
                center: ['50%', '75%'], // 默认全局居中
                radius: '80%',
                endAngle: 0,
                startAngle: 180,
                axisLabel: {
                    formatter: "{value}%"
                },
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [
                            [1, "#13384b"]
                        ], //仪表盘颜色
                        width: 3, //仪表盘宽度
                    }
                },
                axisTick: { // 坐标轴小标记
                    length: 5, // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: { // 分隔线
                    show: true,
                    length: 5, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto',
                        width: 1
                    }
                },
                title: {
                    show: false
                },
                detail: { //显示数据
                    show: true,
                },
                pointer: {
                    width: 1,
                    shadowColor: '#13384B', //默认透明
                },
                itemStyle: {
                    normal: {
                        color: "#13384B", //仪表盘颜色
                    }
                },
                data: [{
                    value: initnum
                }]

            })
            const option = {
                maxnum: maxData,
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        if (params.name === "hide") {
                            return null
                        } else {
                            if (params.name.indexOf("showtip_") !== -1) {
                                var num = Number(params.name.split("_")[1]);
                            } else {
                                var num = params.value;
                            }
                            if (Number(num) === 0) return params.seriesName + ":" + Number(num) + "";
                            return params.seriesName + ":" + parseFloat(num * 100 / maxData).toFixed(2) + "%";
                        }
                    }
                },
                legend: {
                    itemGap: 5,
                    left:'center',
                    x: 'left',
                    top:100,
                    itemWidth: 12,
                    itemHeight: 10,
                    data: legend
                },
                grid: {
                    top: 8,
                    height: 10,
                    left: "25%",
                    right: '15%',
                },
                series: seriesd
            };
            myChart.on('mouseover', function (params) {
                if (params.name !== "hide") {
                    if (params.name.indexOf("showtip_") !== -1) {
                        var shownum = parseFloat(params.name.split("_")[1] * 100 / myChart.getOption().maxnum).toFixed(2);
                    } else {
                        var shownum = parseFloat(params.value * 100 / myChart.getOption().maxnum).toFixed(2);
                    }
                    const series = myChart.getOption().series;
                    option.series[series.length - 1].data[0].value = shownum;
                    myChart.setOption(option, true);
                }
            });
            myChart.setOption(option);
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .screen03 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgba(137,190,178,1);
        .minContent3 {
            position: absolute;
            z-index: 1112;
            width: 100%;
            height: 100%;
            margin-top: 7%;
            .screen3Head{
                h2 {
                    margin-top: 25px;
                    text-align: center;
                    color: white;
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        bottom: -10px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 85px;
                        height: 3px;
                        background-color: red;
                    }
                }
                h4 {
                    margin-top: 15px;
                    text-align: center;
                    color: white;
                }
            }
            #skills {
                position: absolute;
                width:95%;
                height: 80%;
                bottom: 50px;
            }
        }
        @media (min-width: 992px) {
            .minContent3 {
                margin-top: 100px;
            }
            #skills {
                bottom: 150px;
            }
        }
    }
</style>