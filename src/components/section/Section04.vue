<template>
    <div class="section screen04">
        <div class="minContent4 baseCenter">
            <h2>过去式</h2>
            <h4>Experience</h4>
            <div class="mobileBorder">
                <transition>
                    <ul
                            class="pcJingLiUl"
                            :style="leftSize"
                    >
                        <li class="pcJingLiLi">
                            <div class="pcJingLiContent con1">
                                <h3>2016.9</h3>
                                <i></i>
                                <h3>2019.6</h3>
                            </div>
                            <div class="pcJingLiContent con2">
                                <h3>安徽新华学院</h3>
                                <ul>
                                    <li>计算机一级证书</li>
                                    <li>英语三级证书</li>
                                    <li>院级三等奖学金</li>
                                    <li>未曾挂科</li>
                                    <li>在校期间获得驾照一枚</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </li>
                        <li class="pcJingLiLi">
                            <div class="pcJingLiContent con1">
                                <h3>2018.8</h3>
                                <i></i>
                                <h3>2018.9</h3>
                            </div>
                            <div class="pcJingLiContent con2">
                                <h3>安徽美图信息科技有限公司</h3>
                                <ul>
                                    <li>通过psd图片还原静态页</li>
                                    <li>参与开发安徽省公安厅的首页</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </li>
                        <li class="pcJingLiLi">
                            <div class="pcJingLiContent con1">
                                <h3>2018.3</h3>
                                <i></i>
                                <h3>至今</h3>
                            </div>
                            <div class="pcJingLiContent con2">
                                <h3>安徽新华学院</h3>
                                <ul>
                                    <li>系统式自学前端开发</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </transition>
            </div>
            <ul class="point hidden-md hidden-lg">
                <li @click="index = 0" :class="index === 0 ? 'pointActive' : ''"></li>
                <li @click="index = 1" :class="index === 1 ? 'pointActive' : ''"></li>
                <li @click="index = 2" :class="index === 2 ? 'pointActive' : ''"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        data() {
            return {
                index: 0
            }
        },
        computed: {
            leftSize() {
                $('.pcJingLiUl').animate({
                    left: -(this.index * 270) + 'px'
                }, 200)
            }
        }
    }
</script>

<style scoped lang="less">
    .screen04 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgba(3,101,100,1);
        .minContent4 {
            position: absolute;
            z-index: 1112;
            width: 100%;
            height: 100%;
            margin-top: 7%;
            h2 {
                margin-top: 25px;
                text-align: center;
                color: white;
                position: relative;
                &::before {
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
            .mobileBorder {
                position: relative;
                width: 270px;
                height: 400px;
                margin: 0 auto;
                overflow: hidden;
                .pcJingLiUl {
                    position: absolute;
                    width: 810px;
                    height: 380px;
                    left: 0;
                    .pcJingLiLi {
                        display: none;
                        position: relative;
                        width: 250px;
                        height: 380px;
                        border-radius: 10px;
                        margin: 10px;
                        float: left;
                        .pcJingLiContent {
                            position: absolute;
                            top: 0;
                            left: 0;
                            transition: all 0.6s;
                            cursor: pointer;
                            width: 250px;
                            height: 380px;
                            border-radius: 10px;
                            &:first-child {
                                z-index: 1010;
                                backface-visibility: hidden;
                            }
                        }
                        .con1 {
                            background: url("../../assets/images/04bg1.jpg") center no-repeat;
                            background-size: cover;
                            box-shadow: 0 0 10px #13384b;
                            padding: 10px;
                            overflow: hidden;
                            text-align: center;
                            color: #DDD;
                            h3 {
                                font-size: 48px;
                            }
                            i {
                                display: block;
                                background-color: #DDD;
                                height: 200px;
                                width: 2px;
                                margin-left: 123px;
                                transform: rotate(45deg);
                            }
                        }
                        .con2 {
                            padding: 10px;
                            overflow: hidden;
                            box-shadow: 0 0 10px #13384b;
                            background: url("../../assets/images/04bg2.jfif") center no-repeat;
                            background-size: cover;
                            ul {
                                li {
                                    font-size: 16px;
                                    padding-left: 20px;
                                    display: block;
                                    position: relative;
                                    width: 100%;
                                    height: 15%;
                                    &::before {
                                        content: '';
                                        position: absolute;
                                        width: 5px;
                                        height: 5px;
                                        background-color: #ffcb80;
                                        left: 5px;
                                        top: 50%;
                                        transform: translateY(-50%);
                                    }
                                }
                            }
                        }
                        &:hover .pcJingLiContent {
                            transform: rotateY(180deg) scaleX(-1);
                        }
                    }
                }
            }
            .point {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 510px;
                width: 240px;
                height: 14px;
                li {
                    float: left;
                    width: 14px;
                    height: 14px;
                    background-color: #f6f4ff;
                    border: 1px solid #ccc;
                    border-radius: 50%;
                    margin-right: 32px;
                    margin-left: 32px;
                }
                .pointActive {
                    &::after {
                        content: '';
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        margin: 2px;
                        background-color: #666;
                    }
                }
            }
        }
        @media (min-width: 992px) {
            .minContent4 {
                margin-top: 100px;
                .mobileBorder {
                    position: relative;
                    width: auto;
                    height: auto;
                    margin: auto;
                    overflow: visible;
                    .pcJingLiUl {
                        margin-top: 100px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 1000px;
                        height: 400px;
                        .pcJingLiLi {
                            display: none;
                            position: relative;
                            width: 250px;
                            height: 380px;
                            border-radius: 10px;
                            margin: 0 40px 0 40px;
                            float: left;
                            overflow: hidden;
                        }
                    }
                }
            }
        }
    }
</style>