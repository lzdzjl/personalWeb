$(function ($) {
    //动态轮播图
    banner($);
    //移动端页签
    initMobileTab($);

    //初始化tip提示
    $('[data-toggle="tooltip"]').tooltip();
});
function banner($) {
    //轮播图
    //1.动态轮播图，需要数据，第一步获取轮播图数据 ajax获取
    //2.根据数据动态渲染  根据当前设备渲染(根据屏幕宽度)
    //2.1 准备数据
    //2.2 把数据转化成HTML格式的字符串 (动态创建，模板引擎(artTemplate,)，字符串拼接，框架)
    //2.3 把字符串渲染到页面中
    //3 测试功能 拉伸页面 测试轮播图有没有问题
    //4.移动端手势切换,与滑动切换不同

    //ui框架:bootstrap,妹子UI,jqueryUI,easyUI,jqueryMobile,mui,framework7
    //关于移动端的ui框架:bootstrap,jqueryMobile,mui,framework7
    //模板引擎:artTemplate,handlebars,mustache,baiduTemplate,Velocity,underscore
    //artTemplate原生语法更加灵活

    //做一个数据缓存
    //如果缓存了数据，就使用缓存的数据，没有缓存就会重新发起请求
    function getDate(callback) {
        if(window.xhr){
            callback&&callback(window.xhr);
        }else{
            //强制转换后台返回的数据为json对象
            //如果强制转换失败，jquery不会执行success，会执行error回调函数
            $.getJSON('js/data.json','',function (xhr) {
                window.xhr=xhr;
                callback&&callback(window.xhr);
            });
            //$.getJSON默认就是异步请求，不能设置同步
            //需要同步时，使用$.ajax方法,设置async:false属性即可
        }
    }
    function rander() {
        getDate(function (xhr) {
            //2.根据当前设备渲染，PC/M
            var isMovile=$(window).width() < 768;
            //数据转化字符串.使用模板引擎
            //找到需要动态添加的内容
            //点和图片容器都需要动态渲染
            //template必须使用对象，这里返回的是数组，不是对象，这里我们构建一个对象
            //这个list可以随便取名字
            var pointHtml=template('pointTemplate',{list:xhr});
            var imageHtml=template('imageTemplate',{list:xhr,isM:isMovile});
            //把数据塞到html中
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imageHtml);
        });
    }

    //测试功能 resize是页面尺寸发生改变事件
    //在注册resize事件的时候，顺便调用一次自己,来一次初始化数据
    $(window).on('resize',function () {
       rander();
    }).trigger('resize');

    //4.移动端手势切换  链式绑定
    var startX=0;
    var isMove=false;
    //在jquery中使用touch事件，originalEvent原生事件
    $('.wjs_banner').on('touchstart',function (e) {
        startX=e.originalEvent.touches[0].clientX;
    }).on('touchmove',function (e) {
        isMove=true;
    }).on('touchend',function (e) {
        var distanceX=e.originalEvent.changedTouches[0].clientX-startX;
        if(isMove && Math.abs(distanceX)>50){
            if(distanceX<0){
                //左滑手势
                $('.carousel').carousel('next');
            }else{
                //右滑手势
                $('.carousel').carousel('prev');
            }
        }
        //数据初始化
        isMove=false;
        startX=0;
    });
}

function initMobileTab($) {
    //1.解决换行问题
    var $navTabs=$('.wjs_product .nav-tabs');
    var width=0;
    $navTabs.find('li').each(function (i,item) {
        var $currLi=$(item);
        /*
        * width()          内容
        * innerWidth()     内容+padding
        * outerWidth()     内容+padding+border
        * outerWidth(ture) 内容+padding+border+margin
        * */
        width += $currLi.outerWidth(true);
    });
    $navTabs.width(width);
    //2.修改结构，满足区域滑动需求
    //在这个长条外面加一个父容器来限制显示长度
    var $parent=$('.nav-tabs-parent');

    //3.自己实现或者使用插件(iscroll)来实现效果
    //这里需要传入dom对象
    //这里注册事件可以让滑动过程变的顺滑
    $parent.on('touchmove',function(e){
        e.originalEvent.preventDefault();
    });
    new IScroll($parent[0],{
        scrollX:true,
        scrollY:false,
        click:true
    });
}


