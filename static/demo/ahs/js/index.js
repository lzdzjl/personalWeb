$(function ($) {
    //来回飘的方块
    ;(function () {
        const $fly = $('.fly')

        function Fly(dom) {
            //操作对象
            this.dom = dom
            //起始位置
            this.left = 10
            this.top = 10
            //当前屏幕的宽高
            this.width = $(window).width()
            this.height = $(window).height()
            //速度
            this.speedX = 1
            this.speedY = 1
        }

        Fly.prototype.init = function () {
            //每秒60帧做动画
            window.setInterval(function () {
                this.width = $(window).width()
                this.height = $(window).height()
                //碰撞检测
                const checkX = this.width - this.dom.offset().left - this.dom.width() + $(document).scrollLeft()
                if(checkX <= 0 || this.left <= 0){
                    this.speedX = -this.speedX
                }
                const checkY = this.height - this.dom.offset().top - this.dom.height() + $(document).scrollTop()
                if(checkY <= 0 || this.top <= 0){
                    this.speedY = -this.speedY
                }
                //获得移动后的位置
                this.left += this.speedX
                this.top += this.speedY
                //元素移动
                this.dom.css({
                    'top': this.top + 'px',
                    'left': this.left + 'px'
                })
            }.bind(this), 1000/60)
        }

        const fly = new Fly($fly)
        fly.init()
    }())

    //科室导航选项卡
    ;(function(){
        const li = $('.sec2_left li')
        $(li).each(function(index,item){
            $(item)
                .data('color',window.getComputedStyle(item,"before").backgroundColor)
                .on('mouseenter',function(){
                    $(item).css('backgroundColor',$(item).data('color'))
                })
                .on('mouseleave',function(){
                    $(item).css('backgroundColor','rgb(231, 240, 247)')
                })
        })
    }())
})