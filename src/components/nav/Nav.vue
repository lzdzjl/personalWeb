<template>
    <div>
        <app-login
                :loginShow="loginShow"
                @loginShow_change="newShow => loginShow = newShow"
        ></app-login>
        <app-register
                :regShow="regShow"
                @regShow_change="newShow => regShow = newShow"
        ></app-register>
        <app-comment
                :commentShow="commentShow"
                @commentShow_change="newShow => commentShow = newShow"
        ></app-comment>
        <div id="clickNav">
            <span class="heng"></span>
            <span class="heng"></span>
            <span class="heng"></span>
        </div>
        <nav class="nav">
            <div class="pcNav hidden-xs hidden-sm">
                <ul class="pcNavUl">
                    <li><a href="#">首页</a></li>
                    <li><a href="#">关于我</a></li>
                    <li><a href="#">技术栈</a></li>
                    <li><a href="#">经历</a></li>
                    <li><a href="#">个人作品</a></li>
                    <li><a href="#">联系我</a></li>
                    <!--<li @click="loginShow = true" class="nav_left"><a href="#">登录</a></li>-->
                    <li @click="production" class="nav_left"><a href="#">登录</a></li>
                    <!--<li @click="regShow = true" class="nav_left"><a href="#">注册</a></li>-->
                    <li @click="production" class="nav_left"><a href="#">注册</a></li>
                </ul>
            </div>
            <div class="mobileNav hidden-md hidden-lg">
                <ul class="mobileNavUl">
                    <li><a href="#">首页</a></li>
                    <li><a href="#">关于我</a></li>
                    <li><a href="#">技术栈</a></li>
                    <li><a href="#">经历</a></li>
                    <li><a href="#">个人作品</a></li>
                    <li><a href="#">联系我</a></li>
                    <!--<li @click="loginShow = true" class="nav_left"><a href="#">登录</a></li>-->
                    <li @click="production" class="nav_left"><a href="#">登录</a></li>
                    <!--<li @click="regShow = true" class="nav_left"><a href="#">注册</a></li>-->
                    <li @click="production" class="nav_left"><a href="#">注册</a></li>
                </ul>
            </div>
        </nav>
        <div @click="control" class="au">
            <span class="start baseCenter" v-if="music==='start'"></span>
            <span class="stop baseCenter" v-if="music==='stop'"></span>
            <audio src="/static/music/bgm.mp3" id="music" loop autoplay controls></audio>
        </div>
        <!--<div @click="commentShow = true" class="comment_btn hidden-xs hidden-sm">点我评论</div>-->
        <div @click="production" class="comment_btn hidden-xs hidden-sm">点我评论</div>
    </div>
</template>

<script>
    import AppLogin from '../other/Login.vue'
    import AppRegister from '../other/Register.vue'
    import AppComment from '../other/Comment.vue'

    export default {
        data() {
            return {
                music: 'stop',
                regShow: false,
                loginShow: false,
                commentShow: false
            }
        },
        methods: {
            production(){
              console.log('正在努力制作中...')
            },
            control() {
                const audio = document.getElementById('music');
                if (audio !== null) {
                    if (audio.paused) {
                        audio.play()
                        this.music = 'stop'
                    } else {
                        audio.pause()
                        this.music = 'start'
                    }
                }
            }
        },
        components: {
            AppLogin,
            AppRegister,
            AppComment
        }
    }
</script>

<style scoped lang="less">
    .comment_btn {
        position: absolute;
        z-index: 9999;
        left: 30px;
        bottom: 30px;
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 100px;
        height: 40px;
        line-height: 40px;
        background-color: #a90cd0;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        color: white;
        &:hover {
            background-color: #a00cc7;
        }
    }

    .au {
        position: absolute;
        width: 50px;
        height: 50px;
        right: 25px;
        top: 25px;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #ccc;
        background-color: white;
        z-index: 1114;
        background: url("../../assets/images/music_bg.jpg") center no-repeat;
        background-size: cover;
        animation: au 20s linear infinite;
        .start {
            position: absolute;
            display: block;
            width: 30px;
            height: 30px;
            background: url("../../assets/images/musci_start.png") center no-repeat;
            background-size: cover;
            z-index: 1115;
        }
        .stop {
            position: absolute;
            display: block;
            width: 30px;
            height: 30px;
            background: url("../../assets/images/music_stop.png") center no-repeat;
            background-size: cover;
            z-index: 1115;
        }
        audio {
            display: none;
        }
    }

    @keyframes au {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    #clickNav {
        position: absolute;
        z-index: 1113;
        top: 25px;
        left: 25px;
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.71);
        border-radius: 15px;
        cursor: pointer;
        .heng {
            width: 30px;
            height: 3px;
            margin-left: 10px;
            margin-top: 10px;
            background-color: white;
            display: block;
            border-radius: 10px;
        }
    }

    .clickNavBefore {
        animation: clickNavBefore 0.3s linear alternate forwards;
    }

    .clickNavAfter {
        animation: clickNavAfter 0.3s linear alternate forwards;
    }

    @keyframes clickNavBefore {
        from {
            transform: rotate(90deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

    @keyframes clickNavAfter {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(90deg);
        }
    }

    #clickNav:before {
        content: "";
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 15px;
        position: absolute;
        left: 50%;
        margin-left: -25px;
        top: 50%;
        margin-top: -25px;
        animation: scale 1s 0.5s linear infinite alternate;
    }

    @keyframes scale {
        from {
            box-shadow: 0 0 0 #fff;
        }

        to {
            box-shadow: 0 0 20px #fff;
        }
    }

    .pcNav {
        display: none;
        overflow: hidden;
        position: absolute;
        width: 100%;
        margin-left: 60px;
        height: 40px;
        top: 30px;
        background-color: rgba(19, 56, 75, 0.89);
        z-index: 1112;
        padding-top: 20px;
        .pcNavUl {
            display: none;
            line-height: 5px;
            width: 80%;
            height: 100%;
            margin: 0 auto;
            .nav_left {
                float: right;
            }
            li {
                display: block;
                float: left;
                padding-right: 20px;
                padding-left: 15px;
                a {
                    color: white;
                    &:hover {
                        color: #d9eaff;
                    }
                }
                &:nth-child(7) {
                    margin-right: 50px;
                }
            }
        }
    }

    .mobileNav {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 320px;
        z-index: 1112;
        background-color: rgba(19, 56, 75, 0.89);
        text-align: center;
        .mobileNavUl {
            width: 100%;
            height: 100%;
            li {
                display: block;
                width: 100%;
                border-bottom: 1px solid #849ecc;
                height: 40px;
                line-height: 40px;
                a {
                    color: white;
                    &:hover {
                        color: #d9eaff;
                        background-color: rgba(19, 56, 75, 1);
                    }
                }
            }
        }
    }

    .navIn {
        display: block;
        animation: moveNavIn 0.5s linear alternate forwards;
    }

    .navOut {
        display: block;
        animation: moveNavOut 0.5s linear alternate forwards;
    }

    @keyframes moveNavIn {
        from {
            display: none;
            width: 0;
        }
        to {
            display: block;
            width: 100%;
        }
    }

    @keyframes moveNavOut {
        from {
            display: block;
            width: 100%;
        }
        to {
            display: none;
            width: 0;
        }
    }
</style>
