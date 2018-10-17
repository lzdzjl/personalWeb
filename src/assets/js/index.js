$(function ($) {
    //全屏滚动插件
    $('.container2').fullpage({
        /*配置参数*/
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 500,
        afterRender: function () {
            /*在组件初始化完毕或页面生成之后触发*/
            $('.pcNavUl li:lt(6)').each(function (index, item) {
                $(item).on('click', function () {
                    $.fn.fullpage.moveTo(index + 1)
                })
            })
            $('.mobileNavUl li:lt(6)').each(function (index, item) {
                $(item).on('click', function () {
                    $.fn.fullpage.moveTo(index + 1)
                })
            })

            //首页动画
            window.setTimeout(function () {
                $('.headPhoto').show().addClass('animated bounceInDown')
            }, 700)
            window.setTimeout(function () {
                $('.headPhoto').removeClass('bounceInDown')
                $('.mainContent1 h1').show().addClass('animated bounceInDown')
            }, 1400)
            window.setTimeout(function () {
                $('.mainContent1 h1').removeClass('bounceInDown').addClass('pulse')
                $('.mainContent1 h2').show().addClass('animated bounceInDown')
            }, 2100)
            window.setTimeout(function () {
                $('.mainContent1 h2').removeClass('bounceInDown').addClass('pulse')
            }, 2800)
        },
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex === 2) {
                window.setTimeout(function () {
                    $('.col').eq(0).show().addClass('animated bounceIn')
                }, 700)
                window.setTimeout(function () {
                    $('.col').eq(1).show().addClass('animated bounceIn')
                }, 1400)
                window.setTimeout(function () {
                    $('.col').eq(2).show().addClass('animated bounceIn')
                }, 2100)
                window.setTimeout(function () {
                    $('.col').eq(3).show().addClass('animated bounceIn')
                }, 2800)
                window.setTimeout(function () {
                    $('.meText').show().addClass('animated bounceInLeft')
                }, 3500)
            }
            if (nextIndex === 3) {
                window.setTimeout(function () {
                    $('.screen3Head').show().addClass('animated flipInX')
                }, 700)
            }
            if (nextIndex === 4) {
                window.setTimeout(function () {
                    $('.pcJingLiLi').show().addClass('animated fadeIn')
                }, 700)
            }
            if (nextIndex === 5) {
                window.setTimeout(function () {
                    $('.moreDemo').show().addClass('animated fadeIn')
                }, 700)
            }
            if (nextIndex === 6) {
                window.setTimeout(function () {
                    $('.topText').show().addClass('animated pulse')
                }, 700)
            }
        }
    });

    //导航栏
    let navFlag = true
    $('#clickNav').on('click', function () {
        $('.mobileNav').stop().slideToggle(200)
        if (navFlag) {
            $(this).addClass('clickNavAfter').removeClass('clickNavBefore')
            $('.pcNav').addClass('navIn').removeClass('navOut')
            $('.pcNavUl').delay(300).fadeIn(function () {
                navFlag = false
            })
        } else {
            $(this).addClass('clickNavBefore').removeClass('clickNavAfter')
            $('.pcNav').addClass('navOut').removeClass('navIn')
            $('.pcNavUl').fadeOut(100, function () {
                navFlag = true
            })
        }
    })

    //粒子连线
    !function (undefined) {
        "use strict"; //使用严格的标准
        var _global;
        /**
         * 2017-08-18
         * @var star_r:star半径系数，值越大，半径越大；
         * @var star_alpha:star透明度，值越大，越透明；
         * @var initStarNum:初始化star个数；
         * @var move_distance:位移距离，即star向上跑的距离，数值越大，相同时间内，速度越快。
         * @var dot_r:dot半径系数，值越大，半径越大；
         * @var dot_alpha:dot透明度；
         * @var dot_speed:dot运动速度；
         * @var dot_vanish:dot消失条件，透明度小于vanish时消失；
         * @var dot_mindis:dot最小距离；
         * @var dot_maxdis:dot最大距离；
         */
        var config = {
            star_r: 7,
            star_alpha: 1,
            initStarNum: 200,
            move_distance: 0.25,
            dot_r: 10,
            dot_alpha: 0.4,
            dot_speed: 0.5,
            dot_vanish: 0.01,
            dot_mindis: 5,
            dot_maxdis: 50
        };
        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext("2d"),
            W = document.documentElement.clientWidth,
            H = document.documentElement.clientHeight,
            mouseMoving = false,
            mouseMoveChecker, mouseX, mouseY, stars = [],
            dots = [];

        function CanvasStar() {
        };
        canvas.width = W;
        canvas.height = H;

        function initConfig(conf) {
            if (conf instanceof Object) {
                for (var key in conf) {
                    config[key] = conf[key];
                }
            }
        }

        CanvasStar.prototype.init = function (conf) {
            initConfig(conf);
            ctx.fillstyle = "white";
            ctx.shadowColor = "white";
            ctx.shadowBlur = 0;
            for (var i = 0; i < config.initStarNum; i++) {
                stars[i] = new Star(i, Math.floor(Math.random() * W), Math.floor(Math.random() * H), true);
            }
            animate();
        };

        /**
         * [Star 设置单个star]
         * @param {[type]} id       [id]
         * @param {[type]} x        [x坐标]
         * @param {[type]} y        [y坐标]
         * @param {[type]} useCache [是否使用缓存]
         */

        function Star(id, x, y, useCache) {
            this.id = id;
            this.x = x;
            this.y = y;
            this.useCache = useCache;
            this.cacheCns = document.createElement("canvas");
            this.cacheCtx = this.cacheCns.getContext("2d");
            this.r = Math.floor(Math.random() * config.star_r + 1);
            this.cacheCns.width = 7 * this.r;
            this.cacheCns.height = 7 * this.r;
            this.alpha = Math.floor(Math.random() * 10 + 1) / config.star_alpha;
            this.color = randomRgbaColor(this.alpha)
            if (useCache) {
                this.cache();
            }
        }

        function randomRgbaColor(alpha) { //随机生成RGBA颜色
            let r = Math.floor(Math.random() * 256); //随机生成256以内r值
            let g = Math.floor(Math.random() * 256); //随机生成256以内g值
            let b = Math.floor(Math.random() * 256); //随机生成256以内b值
            return `rgba(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
        }

        var colorNum = 0;
        Star.prototype = {
            draw: function () {
                if (!this.useCache) {
                    colorNum++;
                    ctx.save();
                    ctx.fillStyle = this.color;
                    ctx.shadowColor = "white";
                    ctx.shadowBlur = 1;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                } else {
                    ctx.drawImage(this.cacheCns, this.x - this.r, this.y - this.r);
                }
            },

            cache: function () {
                colorNum++;
                this.cacheCtx.save();
                this.cacheCtx.fillStyle = this.color;
                this.cacheCtx.shadowColor = "white";
                this.cacheCtx.shadowBlur = 0;
                this.cacheCtx.beginPath();
                this.cacheCtx.arc(this.r * 3, this.r * 3, this.r / 2, 0, 2 * Math.PI, true);
                this.cacheCtx.closePath();
                this.cacheCtx.fill();
                this.cacheCtx.restore();
            },
            move: function () {
                this.y -= config.move_distance;
                if (this.y <= -10) {
                    this.y = H + 10;
                }
                this.draw();
            },
            die: function () {
                stars[this.id] = null;
                stars.splice(this.id, 1);
                // delete stars[this.id];
            }
        }

        function Dot(id, x, y, useCache) {
            this.id = id;
            this.x = x;
            this.y = y;
            this.useCache = useCache;
            this.dotCns = document.createElement("canvas");
            this.dotCtx = this.dotCns.getContext("2d");
            this.r = Math.floor(Math.random() * config.dot_r + 1);
            // this.dotCns.width=7*this.r;
            // this.dotCns.height=7*this.r;
            this.speed = config.dot_speed;
            this.vanish = config.dot_vanish;
            this.alpha = config.dot_alpha; //线
            this.dotCtx.alpha = 0.7; //点
            this.color = randomRgbaColor(this.alpha)
            this.dotCtx.color = randomRgbaColor(this.dotCtx.alpha)
            this.dir = Math.floor(Math.random() * 140) + 200;
            if (useCache) {
                this.cache();
            }
        }

        Dot.prototype = {
            draw: function () {
                if (!this.useCache) {
                    colorNum++;
                    ctx.save();
                    ctx.fillStyle = this.dotCtx.color;
                    ctx.shadowBlur = 1;
                    ctx.shadowColor = "white";
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                } else {
                    ctx.drawImage(this.dotCns, this.x - this.r * 3, this.y - this.r * 3);
                }
            },
            cache: function () {
                colorNum++;
                this.dotCtx.save();
                this.dotCtx.alpha -= this.vanish;
                this.dotCtx.color = randomRgbaColor(this.dotCtx.alpha)
                this.dotCtx.fillStyle = this.dotCtx.color;
                this.dotCtx.shadowColor = "white";
                this.dotCtx.shadowBlur = 1;
                this.dotCtx.beginPath();
                this.dotCtx.arc(this.r * 3, this.r * 3, this.r / 2, 0, 2 * Math.PI, true);
                this.dotCtx.closePath();
                this.dotCtx.fill();
                this.dotCtx.restore();
            },
            line: function () {
                if (this.id == 0) return;
                var previousDot1 = getPreviousDot(this.id, 1);
                var previousDot2 = getPreviousDot(this.id, 2);
                var previousDot3 = getPreviousDot(this.id, 3);
                var previousDot4 = getPreviousDot(this.id, 4);
                if (!previousDot1) return;
                ctx.strokeStyle = this.color;
                ctx.moveTo(previousDot1.x, previousDot1.y);
                ctx.beginPath();
                ctx.lineTo(this.x, this.y);
                if (previousDot2 != false) ctx.lineTo(previousDot2.x, previousDot2.y);
                if (previousDot3 != false) ctx.lineTo(previousDot3.x, previousDot3.y);
                if (previousDot4 != false) ctx.lineTo(previousDot4.x, previousDot4.y);
                ctx.stroke();
                ctx.closePath();
            },
            move: function () {
                this.alpha -= this.vanish;
                if (this.alpha <= 0) {
                    this.die();
                    return;
                }
                this.dotCtx.alpha -= this.vanish;
                this.color = `rgba(255, 255, 255, ${this.alpha})`
                this.dotCtx.color = `rgba(255, 255, 255, ${this.dotCtx.alpha})`
                this.x = this.x + Math.cos(this.dir * (Math.PI / 180)) * this.speed;
                this.y = this.y + Math.sin(this.dir * (Math.PI / 180)) * this.speed;
                this.draw();
                this.line();
            },
            die: function () {
                dots[this.id] = null;
                // dots.splice(this.id,1);
                delete dots[this.id];
            }
        }

        function getPreviousDot(id, step) {
            if (id == 0 || id - step < 0) return false;
            if (typeof dots[id - step] !== "undefined") {
                return dots[id - step];
            } else {
                return false;
            }
        }

        document.onmousemove = function (e) {
            var e = e || event;
            mouseMoving = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
            // clearInterval(mouseMoveChecker);
            // mouseMoveChecker = setInterval(function () {
            // 	mouseMoving = false;
            // },100)
        }

        function drawIfMouseMoving() {
            if (!mouseMoving) return;
            if (dots.length == 0) {
                dots[0] = new Dot(0, mouseX, mouseY, true);
                dots[0].draw();
                return;
            }
            var previousDot = getPreviousDot(dots.length, 1);
            var diffX = Math.abs(previousDot.x - mouseX);
            var diffY = Math.abs(previousDot.y - mouseY);
            if (diffX < config.dot_mindis || diffY < config.dot_mindis) return;
            var randomX = Math.random() > 0.5 ? -1 : 1;
            randomX = randomX * Math.floor(Math.random() * config.dot_maxdis + 1);
            var randomY = Math.random() > 0.5 ? -1 : 1;
            randomY = randomY * Math.floor(Math.random() * config.dot_maxdis + 1);
            dots[dots.length] = new Dot(dots.length, mouseX + randomX, mouseY + randomY, true);
            dots[dots.length - 1].draw();
            dots[dots.length - 1].line();
        }

        function animate() {
            ctx.clearRect(0, 0, W, H);
            for (var i in stars) {
                stars[i].move();
            }
            for (var i in dots) {
                dots[i].move();
            }
            drawIfMouseMoving();
            requestAnimationFrame(animate);
        }

        _global = (function () {
            return this || (0, eval)("this");
        }());
        if (typeof module !== "undefined" && module.exports) {
            module.exports = CanvasStar;
        } else if (typeof define === "function" && define.amd) {
            define(function () {
                return CanvasStar;
            });
        } else {
            !("CanvasStar" in _global) && (_global.CanvasStar = CanvasStar);
        }
        new CanvasStar().init();
    }();
});