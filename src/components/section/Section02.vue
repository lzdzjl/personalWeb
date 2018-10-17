<template>
    <div class="section screen02">
        <div class="minContent2 baseCenter">
            <h2>关于我</h2>
            <h4>About me</h4>
            <div class="container">
                <div class="row">
                    <div class="col col-lg-2 col-md-2 col-sm-2 com-xs-2">
                        <div class="meImg">
                            <i class="iconfont icon-weizhi-tianchong"></i>
                        </div>
                        <p>坐标/合肥</p>
                    </div>
                    <div class="col col-lg-2 col-md-2 col-sm-2 com-xs-2">
                        <div class="meImg">
                            <i class="iconfont icon-jiaoyujingli"></i>
                        </div>
                        <p>学历/专科</p>
                    </div>
                    <div class="col col-lg-2 col-md-2 col-sm-2 com-xs-2">
                        <div class="meImg">
                            <i class="iconfont icon-nianling"></i>
                        </div>
                        <p>年龄/20岁</p>
                    </div>
                    <div class="col col-lg-2 col-md-2 col-sm-2 com-xs-2">
                        <div class="meImg">
                            <i class="iconfont icon-gongzuojingli"></i>
                        </div>
                        <p>状态/无业</p>
                    </div>
                </div>
                <div class="meText">
                    <p>您好，
                        我叫刘振东，
                        我是计算机应用专业的学生，
                        大二第一次接触前端，
                        并产生浓厚的兴趣，
                        便开始自学前端，
                        在此之前接触过C++和Python，
                        但是当时都不是很感兴趣，
                        现在的职业规划是希望能向着全栈发展，
                        目前在学习React。
                        没有工作经验，
                        我写过一些简单的页面，
                        例如本站，
                        可以做一些小项目。
                        <br/>&emsp;&emsp;最后，快来个大老板把我收走吧！</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "section02"
    }
</script>

<style scoped lang="less">
    .screen02 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgba(113, 150, 159, 1);
        .minContent2 {
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
            .container{
                width: 100%;
                height: 60%;
                margin-top: 25px;
                .row{
                    width: 100%;
                    height: auto;
                    margin: 0 auto;
                    .col{
                        display: none;
                        width: 25%;
                        height: 110px;
                        float: left;
                        padding: 0;
                        .meImg {
                            height: 60px;
                            width: 60px;
                            border: 1px solid #ccc;
                            background-color: rgba(0, 0, 0, .4);
                            border-radius: 50%;
                            margin: 0 auto;
                            position: relative;
                            text-align: center;
                            i{
                                font-size: 40px;
                                line-height:60px;
                                color: #DDD;
                            }
                            &:hover{
                                color: #CCC;
                                background-color: rgba(0, 0, 0, .2);
                                animation: scale 1s 0.5s linear infinite alternate
                            }
                            @keyframes scale {
                                from {
                                    box-shadow: 0 0 0 0 #7cb9cc;
                                }

                                to {
                                    box-shadow: 0 0 5px 5px #7cb9cc;
                                }
                            }

                        }
                        p{
                            text-align: center;
                            color: #DDD;
                            font-size: 14px;
                            margin-top: 5px;
                            &:hover{
                                color: #CCC;
                            }
                        }
                    }
                }
            }
            .meText{
                display: none;
                width: 90%;
                height: auto;
                margin: 0 auto;
                margin-top: 10px;
                overflow: hidden;
                position: relative;
                p{
                    padding: 10px;
                    text-indent:2em;
                    color: #DDD;
                    font-size: 15px;
                    box-sizing: border-box;
                }
                &::after{
                    content: '';
                    z-index: 1113;
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-top: 2px solid red;
                    border-left: 2px solid red;
                }
                &::before{
                    content: '';
                    z-index: 1113;
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    border-right: 2px solid red;
                    border-bottom: 2px solid red;
                }
            }
        }
        @media (min-width: 992px) {
            .minContent2{
                margin-top: 100px;
                .container{
                    margin-top: 50px;
                    .row{
                        width: 60%;
                        .col{
                            .meImg {
                                height: 80px;
                                width: 80px;
                                i{
                                    font-size: 48px;
                                    line-height:80px;
                                }
                            }
                            p{
                                font-size: 20px;
                            }
                        }
                    }
                }
                .meText{
                    margin-top: 50px;
                    width: 50%;
                    p{
                        padding: 20px 30px 20px 30px;
                        margin-top: 30px;
                    }
                }
            }
        }
    }
</style>