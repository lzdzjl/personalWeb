<template>
    <div class="section screen06">
        <div class="minContent6">
            <ul class="topText">
                <li style="color:#b5ff4d">灵感</li>
                <li style="color:#b980ff">代码</li>
                <li style="color:#0bbbff">梦想</li>
                <li style="color:#ffcb80">未来</li>
            </ul>
            <div class="box baseCenter">
                <div class="sun baseCenter">
                    <template v-if="sun1">联系我</template>
                    <img v-if="sun2" src="../../assets/images/qq.png" alt="qq">
                    <img v-if="sun3" src="../../assets/images/weixin.png" alt="weixin">
                    <img v-if="sun4" src="../../assets/images/zhihu.png" alt="zhihu">
                </div>
                <div class="lin3 public">
                    <a href="https://github.com/lzdzjl" target="_blank"><i class="iconfont icon-github tubiaoUp"
                                                                           title="github"></i></a>
                    <a @click.prevent="clSun4" href=""><i class="iconfont icon-zhihu tubiaoDown" title="知乎"></i></a>
                </div>
                <div class="lin4 public">
                    <a @click.prevent="clSun2" href="#"><i class="iconfont icon-QQ tubiaoUp" title="QQ"></i></a>
                    <a @click.prevent="clSun3" href="#"><i class="iconfont icon-weixin tubiaoDown" title="微信"></i></a>
                </div>
                <div class="lin5 public hidden-sm hidden-xs">
                    <a href="#"><i style="font-size:20px" class="iconfont icon-bokeyuan tubiaoUp" title="博客"></i></a>
                    <a href="#"><i class="iconfont icon-youxiang tubiaoDown" title="邮箱"></i></a>
                </div>
            </div>
            <ul class="downText">
                <li class="hidden-xs hidden-sm">自学能力强，能快速接受使用新知识</li>
                <li class="hidden-xs hidden-sm">良好的分析解决问题能力，自我管理能力</li>
                <li class="hidden-xs hidden-sm">一个代码强迫症，追求精简</li>
                <li>带上我吧，一起去探索未知的世界</li>
            </ul>
            <footer>
                © Thomas Liu | <a href="http://www.miitbeian.gov.cn">皖ICP备18019406号</a>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sun1: true,
                sun2: false,
                sun3: false,
                sun4: false,
            }
        },
        methods: {
            clSun2() {
                this.sun1 = false
                this.sun2 = true
                this.sun3 = false
                this.sun4 = false
            },
            clSun3() {
                this.sun1 = false
                this.sun2 = false
                this.sun3 = true
                this.sun4 = false
            },
            clSun4() {
                this.sun1 = false
                this.sun2 = false
                this.sun3 = false
                this.sun4 = true
            }
        }
    }
</script>

<style scoped lang="less">
    .screen06 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgb(113, 150, 159);
        .minContent6 {
            z-index: 1112;
            width: 75%;
            height: 75%;
            margin: 0 auto;
            .topText {
                width: 90%;
                height: 35px;
                font-size: 22px;
                margin: 0 auto;
                margin-top: 75px;
                li {
                    display: block;
                    line-height: 35px;
                    width: 25%;
                    height: 35px;
                    text-align: center;
                    float: left;
                }
            }
        }

        footer{
            width: 250px;
            height: 20px;
            line-height: 20px;
            display: block;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: #666;
            a{
                color: #666;
            }
        }

        .downText {
            position: absolute;
            bottom: 75px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            font-size: 16px;
            overflow: hidden;
            li {
                margin-top: 5px;
                color: white;
                text-align: center;
            }
        }

        @media (min-width: 992px) {
            .minContent6 {
                .topText {
                    width: 30%;
                    font-size: 28px;
                    margin-top: 125px;
                }
            }

            .downText {
                width: 40%;
                font-size: 18px;
            }
        }

        .box {
            width: 400px;
            height: 400px;
            position: absolute;
            i {
                position: absolute;
                display: block;
                background-color: #333;
                width: 34px;
                height: 34px;
                color: #FFF;
                font-size: 28px;
                text-align: center;
                line-height: 34px;
                border-radius: 50%;
            }
            .sun {
                position: absolute;
                width: 120px;
                height: 120px;
                background-color: #0bbbff;
                border: 1px solid #72d0fa;
                border-radius: 50%;
                box-shadow: 0px 0px 50px #0bbbff;
                color: white;
                font-size: 20px;
                text-align: center;
                line-height: 120px;
                overflow: hidden;
                img {
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .public {
                position: absolute;
                left: 50%;
                top: 50%;
            }
            @keyframes rotate {
                from {
                    transform: rotateZ(0deg);
                }
                to {
                    transform: rotateZ(360deg);
                }
            }
            .lin3 {
                width: 192px;
                height: 192px;
                border: 1px solid #EEE;
                border-radius: 50%;
                margin-left: -96px;
                margin-top: -96px;
                z-index: 1003;
                animation: rotate 15s linear infinite;
                .tubiaoUp {
                    top: 96px;
                    left: -17px;
                }
                .tubiaoDown {
                    top: 96px;
                    left: 172px;
                }
            }

            .lin4 {
                width: 282px;
                height: 282px;
                border: 1px solid #EEE;
                border-radius: 50%;
                margin-left: -141px;
                margin-top: -141px;
                z-index: 1002;
                animation: rotate 25s linear infinite;
                .tubiaoUp {
                    top: 141px;
                    left: -17px;
                }
                .tubiaoDown {
                    top: 141px;
                    left: 262px;
                }
            }

            .lin5 {
                width: 390px;
                height: 390px;
                border: 1px solid #EEE;
                border-radius: 50%;
                margin-left: -195px;
                margin-top: -195px;
                z-index: 1001;
                animation: rotate 20s linear infinite;
                .tubiaoUp {
                    top: 170px;
                    left: -17px;
                }
                .tubiaoDown {
                    top: 170px;
                    left: 370px;
                }
            }
        }
    }
</style>