$(function ($) {
    /*初始化fullpage组件*/
    /*1.设置每一个屏幕的背景颜色*/
    /*2.设置每一个屏幕的内容对齐方式,默认垂直居中,改成顶部对齐*/
    /*3.设置指示器 点容器*/
    /*4.页面切换的时间，默认700*/
    /*5.监听进入某一屏的时候 回调函数*/
    /*6.组件初始化完毕或页面生成的时候 回调函数*/
    /*7.离开某一页面的时候 回调函数*/
    $('.container').fullpage({
        /*配置参数*/
        sectionsColor:['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060'],
        verticalCentered:false,
        navigation:true,
        scrollingSpeed:1000,
        afterLoad:function (link,index) {
            /*index当前屏幕的序号，从1开始*/
            $(".section").eq(index-1).addClass('now');
        },
        afterRender:function () {
            /*在组件初始化完毕或页面生成之后触发*/
            /*点击更多切换到下一页*/

            /*jquery插件初始化的时候封装了这个方法*/
            /*1.回想jquery插件的封装 $.fn.fullpage=fn */
            /* $.fn=$.prototype */
            /*jquery本身没有的方法，可以通过$.fn.fnName=fn的方式追加方法*/

            $(".more").on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
            //注册动画结束事件
            $('.screen04 .cart').on('transitionend',function () {
                /*:last :first :visible :hidden :checked :selected 这些都是jquery拓展选择器，css中不能使用*/
                $('.screen04 .address').show().find('img:last').fadeIn();
                $('.screen04 .text').addClass('show');
            });

            //手跟着鼠标移动
            $('.screen08').on('mousemove',function (e) {
                $hand=$('.hand');
                $hand.css({
                    left:e.clientX+$hand.width()/2-65,
                    top:e.clientY+$hand.height()/2+40
                });
            });

            //再来一次重置动画跳回第一页
            $('.again').on('click',function () {
                /*
                * 动画是怎么执行的？
                * 1.添加now类
                * 2.添加leaved类
                * 3.添加show类
                */
                //删除这些类
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');

                //4.添加css属性
                //5.使用过jquery show() 和fadein()
                $('.content [style]').removeAttr('style');

                //回到第一页
                $.fn.fullpage.moveTo(1);
            });

        },
        onLeave:function (index,nextIndex,direction) {
            var current=$(".section").eq(index-1);
            /*离开某一页面时触发函数*/
            if(index===2&&nextIndex===3){
                /*当前是从第二页到第三页时(离开第二页)触发事件*/
                current.addClass('leaved');
            }else if(index===3&&nextIndex===4){
                current.addClass('leaved');
            }else if(index===5&&nextIndex===6){
                current.addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if(index===6&&nextIndex===7){
                //五角星出现(0.5s) 自己做的 闭包
                // function star() {
                //     var index = 0;
                //     window.setInterval(function () {
                //         $(".screen07 .star img").eq(index).stop().fadeIn();
                //         index++;
                //         if(index === 5){
                //             $('.screen07 .text').addClass('show');
                //             return;
                //         }
                //     },500);
                // }
                // star();
                //也可以通过jquery的delay(500)延时触发
                // $(img).each(function(i,item){$(this).delay(500).fadeIn();})

                //五角星出现(0.5s)
                $('.screen07 .text').addClass('show');
                $('.screen07 .star').addClass('show');
                $(".screen07 .star img").each(function (i,item) {
                    $(this).css('transition-delay',i*0.5+'s');
                });
            }
        }
    });

});
