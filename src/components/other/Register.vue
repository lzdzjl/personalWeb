<template>
    <transition name="fade">
        <div v-if="regShow" class="register">
            <div class="reg_content baseCenter">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">昵称</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入您的昵称">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">密码</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入您的密码">
                    </div>
                    <div class="form-group">
                        <label for="ReExampleInputPassword1">确认密码</label>
                        <input type="password" class="form-control" id="ReExampleInputPassword1" placeholder="请确认您的密码">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFile">头像</label>
                        <a class="upload" href="javascript:;">
                            <input class="file_img" type="file" id="exampleInputFile">
                        </a>
                    </div>
                    <input id="btn_register" type="button" value="注册">
                </form>
                <div @click="change" class="close_reg">×</div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            regShow:{
                type:Boolean,
                required:true
            }
        },
        methods: {
            change() {
                this.regShow = false
                let newShow = this.regShow
                this.$emit('regShow_change', newShow);
            }
        }
    }
</script>

<style scoped lang="less">
    //vue过渡动画
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .register {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,.5);
        z-index: 99999999;
        .reg_content{
            width: 80%;
            height: 345px;
            position: absolute;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 25px;
            form{
                .form-group{
                    position: relative;
                    .upload{
                        position: absolute;
                        left: 0;
                        top: 25px;
                        content: '';
                        display: block;
                        width: 45px;
                        height: 45px;
                        border: 1px solid #999;
                        background: #EEE;
                        cursor: pointer;
                        .file_img{
                            position: absolute;
                            overflow: hidden;
                            width: 45px;
                            height: 45px;
                            left: 0;
                            top: 0;
                            opacity: 0;
                            cursor: pointer;
                        }
                        &:hover{
                            background: #9dffbf;
                        }
                    }
                }
                #btn_register{
                    position: absolute;
                    width: 70px;
                    height: 30px;
                    border: 1px solid #6fb5cc;
                    background-color: #43c0ff;
                    line-height: 30px;
                    text-align: center;
                    right: 25px;
                    bottom: 25px;
                    color: white;
                    border-radius: 5px;
                }
            }
            .close_reg{
                position: absolute;
                top: -20px;
                right: -20px;
                width: 50px;
                height: 50px;
                border: 1px solid #ccc;
                border-radius: 50%;
                background-color: white;
                color: #333;
                text-align: center;
                line-height: 50px;
                font-size: 48px;
                cursor: pointer;
            }
        }
        @media (min-width: 992px) {
            .reg_content {
                width: 40%;
                height: 345px;
            }
        }
    }
</style>