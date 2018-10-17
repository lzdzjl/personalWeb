/**
 * Created by zhousg on 2017/10/12.
 */
window.onload=function () {
    //顶部搜索
    search();
    //轮播图
    banner();
    //倒计时
    downTime();
};
//顶部搜索
var search=function () {
    //1.默认固定顶部背景透明
    //2.当页面滚动的时候，随着页面的卷曲变大透明度变大
    //3.滚动超过某一个值时，不在更改透明度
    //页面滚动事件
    var searchBox=document.querySelector('.jd_search_box');
    var banner=document.querySelector('.jd_banner');
    var height=banner.offsetHeight;
    window.onscroll=function (e) {
        //需要考虑谷歌浏览器的兼容性问题
        //这里无法使用document.body.scrollTop
        //可以使用document.documentElement.scrollTop
        //和window.pageY0ffset;
        var scrollTop=document.documentElement.scrollTop;
        /*默认透明度*/
        var opacity=0;
        if(scrollTop<height){
            //实现第二点功能
            opacity=scrollTop/height*0.85;
        }else{
            //实现第三点功能
            opacity=0.85;
        }
        searchBox.style.background='rgba(201,21,35,'+opacity+')';
    };
};
//轮播图
var banner=function () {
    //1.自动轮播且无缝 定时器，动画（大胆使用c3过度动画）
    //2.点要随着图片的轮播而改变 根据索引切换
    //3.滑动效果 利用touch事件完成滑动效果
    //4.滑动结束的时候超过屏幕1/3滑动到下/上一张图 过度动画(根据滑动方向)
    //5.滑动不超过1/3屏幕，则吸附回去 过度动画(根据滑动方向)

    //轮播图容器
    var banner=document.querySelector('.jd_banner');
    //屏幕宽度
    var width=banner.offsetWidth;
    //图片容器
    var imageBox=banner.querySelector('ul:first-child');
    //点容器
    var pointBox=banner.querySelector('ul:last-child');
    //所有的点
    var points=pointBox.querySelectorAll('li');

    //轮播图方法
    var addTransition=function () {
        imageBox.style.transition='all 0.2s';
        imageBox.style.webkitTransition='all 0.2s';
    };
    var removeTransition=function () {
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    };
    var setTransLateX=function (translateX) {
        imageBox.style.transform='translateX('+translateX+'px)';
        imageBox.style.webkitTransform='translateX('+translateX+'px)';
    };

    //程序核心index
    var index=1;

    //定时器轮播图
    var timer=setInterval(toggleImg,3000);
    function toggleImg() {
        index++;
        //加过渡 C3属性需要做兼容
        addTransition();
        //做位移
        setTransLateX(-index*width);
    }

    //等最后一张动画结束去判断 是否瞬间定位到第一张
    imageBox.addEventListener('transitionend',function () {
        //自动滚动的无缝
        if(index>=9){
            index=1;
            //瞬间定位
            //清除过渡动画效果
            removeTransition();
            //做位移
            setTransLateX(-index*width);
        }
        //滑动时的无缝
        else if(index<=0){
            index=8;
            //瞬间定位
            //清除过渡动画效果
            removeTransition();
            //做位移
            setTransLateX(-index*width);
        }
        //根据索引设置点  index范围为1-8
        setPoint(index);
    });
    
    //设置点移动的方法
    function setPoint(index) {
        //这里得到的是伪数组，不能使用foreach
        for (var i = 0; i < points.length; i++) {
            var obj=points[i];
            obj.classList.remove('now');
            if(i+1===index){
                obj.classList.add('now');
            }
        }
    }

    //滑动操作
    var startX=0;
    var isMove=false;
    imageBox.addEventListener('touchstart',function (e) {
        //停止定时器
        clearInterval(timer);
        //记录起始位置的X坐标
        startX=e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove',function (e) {
        //记录滑动过程中的X坐标
        var moveX=e.touches[0].clientX;
        //计算位移，手指移动距离
        var distanceX=moveX-startX;
        //计算目标元素的位移 正值就是正方向→，负值反方向
        //元素将要的定位等于当前定位+手指移动距离
        var translateX = -index*width+distanceX;
        //滑动 ---> 让元素随着手指的滑动做位置的改变
        removeTransition();
        setTransLateX(translateX);
        isMove=true;
    });
    imageBox.addEventListener('touchend',function (e) {
        //记录结束位置的X坐标
        if(!isMove)return;
        var endX=e.changedTouches[0].clientX;
        //计算位移，手指移动距离
        var distanceX=endX-startX;
        if(Math.abs(distanceX)<width/3){
            //吸附
            addTransition();
            setTransLateX(-index*width);
        }else{
            //切换
            addTransition();
            if(distanceX>0){
                //往右滑动上一张
                index--;
            }else{
                //往左滑动下一张
                index++;
            }
            setTransLateX(-index*width);
        }
        //做一次参数重置
        startX=0;
        isMove=false;
        //加上定时器，加上之前在清除一次，防止多次添加定时器
        clearInterval(timer);
        timer=setInterval(toggleImg,3000);
    });
};
//倒计时
var downTime=function () {
    //倒计时的时间
    var time=2*60*60;
    //时间盒子
    var spans = document.querySelector('.time').querySelectorAll('span');
    //每一秒去更新显示的时间
    var timer=setInterval(function () {
        time--;
        //格式转换
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = time%60;

        spans[0].innerHTML=Math.floor(h/10);
        spans[1].innerHTML=h%10;

        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=m%10;

        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=s%10;

        if(time <= 0){
            clearInterval(timer);
        }
    },1000);
};