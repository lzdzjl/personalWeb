<template>
    <div class="section screen05">
        <div class="minContent5 baseCenter">
            <h2>个人作品</h2>
            <h4>Demo</h4>
            <div class="myDemo" id="demo">
                <ul class="accordion__ul">
                    <li class="accordion__li">
                        <div class="accordion__content">
                            <div class="accordion_title">
                                安徽省公安厅刑事警察总队主页
                            </div>
                            <div class="accordion_footer">
                                <a href="/static/demo/ahs/index.html" target="_blank">点击查看</a>
                            </div>
                        </div>
                    </li>
                    <li class="accordion__li">
                        <div class="accordion__content">
                            <div class="accordion_title">
                                PC端购物车宣传页
                            </div>
                            <div class="accordion_footer">
                                <a href="/static/demo/gouwuye/index.html" target="_blank">点击查看</a>
                            </div>
                        </div>
                    </li>
                    <li class="accordion__li">
                        <div class="accordion__content">
                            <div class="accordion_title">
                                流式布局京东商城主页
                            </div>
                            <div class="accordion_footer">
                                <a href="/static/demo/jdM/index.html" target="_blank">点击查看</a>
                            </div>
                        </div>
                    </li>
                    <li class="accordion__li">
                        <div class="accordion__content">
                            <div class="accordion_title">
                                响应式微金所首页
                            </div>
                            <div class="accordion_footer">
                                <a href="/static/demo/weijinsuo/index.html" target="_blank">点击查看</a>
                            </div>
                        </div>
                    </li>
                    <li class="accordion__li">
                        <div class="accordion__content">
                            <div class="accordion_title">
                                基于Vue的TodoMVC
                            </div>
                            <div class="accordion_footer">
                                <a href="/static/demo/todomvc/index.html" target="_blank">点击查看</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <p class="moreDemo">更多作品 等待更新...</p>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        mounted() {
            $('#demo').zA7n();
        }
    }
</script>

<style scoped lang="less">
    .screen05 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgba(3,54,73,1);
        .minContent5 {
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
            .myDemo {
                width: 80%;
                margin: 0 auto;
                margin-top: 25px;
                height: 300px;
                overflow: hidden;
                position: relative;
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: #fff;
                }
                ul {
                    display: block;
                    width: 105%;
                    height: 300px;
                    overflow: hidden;
                    position: absolute;
                    left: 0;
                    top: 0;
                    li {
                        width: 85%;
                        display: block;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        height: 300px;
                        float: left;
                        overflow: hidden;
                        box-shadow: 0 0 10px 0 #000;
                        transition: all 0.3s ease-out;
                        .accordion__content {
                            width: 100%;
                            height: 100%;
                            background-color: #00a2d4;
                            display: block;
                            position: relative;
                            .accordion_title {
                                width: 100%;
                                height: 40px;
                                overflow: hidden;
                                background-color: rgba(0, 0, 0, .7);
                                line-height: 40px;
                                color: white;
                                padding-left: 20px;
                            }
                            .accordion_footer {
                                position: absolute;
                                left: 0;
                                bottom: 0;
                                width: 100%;
                                height: 40px;
                                overflow: hidden;
                                background-color: rgba(0, 0, 0, .7);
                                line-height: 40px;
                                color: white;
                                padding-left: 20px;
                                a{
                                    color: white;
                                }
                            }
                        }
                        &:nth-child(1) {
                            .accordion__content {
                                background: url("../../assets/images/05img_1.jpg");
                            }
                        }
                        &:nth-child(2) {
                            .accordion__content {
                                background: url("../../assets/images/05img_2.jpg");
                            }
                        }
                        &:nth-child(3) {
                            .accordion__content {
                                background: url("../../assets/images/05img_3.jpg");
                            }
                        }
                        &:nth-child(4) {
                            .accordion__content {
                                background: url("../../assets/images/05img_4.jpg");
                            }
                        }
                        &:nth-child(5) {
                            .accordion__content {
                                background: url("../../assets/images/05img_5.jpg");
                            }
                        }
                    }
                }
            }
            .myDemo._create:after {
                display: none;
            }

            .moreDemo {
                display: none;
                text-align: center;
                font-size: 14px;
                color: #FFF;
                margin-top: 50px;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: -10px;
                    width: 100%;
                    height: 1px;
                    border-top: 1px solid red;
                }
            }
        }
        @media (min-width: 992px) {
            .minContent5 {
                margin-top: 100px;
                .myDemo {
                    margin-top: 100px;
                }
            }
        }
    }
</style>