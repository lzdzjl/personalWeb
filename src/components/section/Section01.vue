<template>
    <div class="section screen01">
        <div class="bg"></div>
        <div class="mainContent1">
            <div class="headPhoto">
                <i class="light"></i>
            </div>
            <h1>I'm Thomas Liu</h1>
            <h2>一名积极向上的前端工程师</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "section01"
    }
</script>

<style scoped lang="less">
    .screen01 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        .bg{
            z-index: 1109;
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            left: 0;
            top: 0;
            background: url("../../assets/images/bg_1.jpg") no-repeat center;
            background-size: cover;
        }
        .mainContent1 {
            z-index: 1112;
            width: 100%;
            margin: 0 auto;
            margin-top: 50%;
            position: relative;
            color: #FFF;
            text-align: center;
            .headPhoto {
                position: relative;
                display: none;
                width: 100px;
                height: 100px;
                border: 1px solid #ccc;
                border-radius: 50%;
                background: url("../../assets/images/headPhoto.jpg") no-repeat center;
                background-size: cover;
                margin: 0 auto;
                margin-top: 15px;
                overflow: hidden;
                .light {
                    cursor: pointer;
                    position: absolute;
                    left: -25px;
                    top: 0;
                    width: 20px;
                    height: 100px;

                    background-image: -webkit-linear-gradient(180deg, rgba(178, 255, 9, 0.49), rgba(255, 163, 126, 0.74), rgba(255, 0, 41, 0.53));
                    background-image: -moz-linear-gradient(180deg,rgba(178, 255, 9, 0.49), rgba(255, 163, 126, 0.74), rgba(255, 0, 41, 0.53));
                    background-image: -o-linear-gradient(180deg,rgba(178, 255, 9, 0.49), rgba(255, 163, 126, 0.74), rgba(255, 0, 41, 0.53));
                    background-image: -ms-linear-gradient(180deg,rgba(178, 255, 9, 0.49), rgba(255, 163, 126, 0.74), rgba(255, 0, 41, 0.53));
                    background-image: linear-gradient(180deg,rgba(178, 255, 9, 0.49), rgba(255, 163, 126, 0.74), rgba(255, 0, 41, 0.53));

                    -webkit-transform: skewx(-20deg);
                    -moz-transform: skewx(-20deg);
                    -o-transform: skewx(-20deg);
                    -ms-transform: skewx(-20deg);
                    transform: skewx(-20deg);

                    animation: headPhotoOut 1s alternate forwards;
                    -webkit-animation: headPhotoOut 1s alternate forwards;
                    -moz-animation: headPhotoOut 1s alternate forwards;
                    -o-animation: headPhotoOut 1s alternate forwards;
                    -ms-animation: headPhotoOut 1s alternate forwards;
                }
                &:hover .light {
                    animation: headPhotoIn 1s alternate forwards;
                    -webkit-animation: headPhotoIn 1s alternate forwards;
                    -moz-animation: headPhotoIn 1s alternate forwards;
                    -o-animation: headPhotoIn 1s alternate forwards;
                    -ms-animation: headPhotoIn 1s alternate forwards;
                }
                @keyframes headPhotoIn {
                    from {
                        left: -25px;
                    }
                    to{
                        left: 120px;
                    }
                }
                @keyframes headPhotoOut {
                    from {
                        left: 120px;
                    }
                    to{
                        left: -25px;
                    }
                }
            }
            h1 {
                display: none;
                padding-top: 25px;
                font-family: 'Shepi';
            }
            h2 {
                display: none;
                padding-top: 15px;
                font-family: 'Shepi';
            }
        }
        @media (min-width: 992px) {
            .bg{
                animation: bglunbo 27s linear infinite forwards;
                -webkit-animation: bglunbo 27s linear infinite forwards;
                -webkit-backface-visibility: hidden;
                -webkit-transform-style: preserve-3d;
                -webkit-transform:translate3d(0,0,0);
            }
            .mainContent1{
                margin-top: 300px;
            }
        }
    }

    @keyframes bglunbo {
        0% {
            transform: scale(1);
            opacity: 1;
            background-size: cover;
            background: url("../../assets/images/bg_1.jpg") no-repeat center;
        }
        25% {
            transform: scale(1.1);
            opacity: .8;
            background-size: cover;
            background: url("../../assets/images/bg_2.jpg") no-repeat center;
        }
        50% {
            transform: scale(1);
            opacity: 1;
            background-size: cover;
            background: url("../../assets/images/bg_3.jpg") no-repeat center;
        }
        75% {
            transform: scale(1.1);
            opacity: .8;
            background-size: cover;
            background: url("../../assets/images/bg_4.jpg") no-repeat center;
        }
        100% {
            transform: scale(1);
            opacity: 1;
            background-size: cover;
            background: url("../../assets/images/bg_1.jpg") no-repeat center;
        }
    }
</style>