<template>
    <div class="leftNav">
        <ul>
            <li>
                <i class="icon iconfont icon-wodezichan"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-gouwucheman"></i>
                <div>购物车</div>
            </li>
            <li>
                <i class="icon iconfont icon-kefuyouxian"></i>
                <div>用户</div>
            </li>
            <li>
                <i class="icon iconfont icon-zuanshi"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.leftNav {
    float: left;
    width: 5%;
    height: 100%;
    font-size: 12px;
    color: #FFF;
    background: #1D8CE0;
}
.leftNav ul li:first-of-type {
    margin-top: 10px;
}
.leftNav ul li {
    padding: 15px 0;
    width: 100%;
    text-align: center;
    list-style-type: none;
}
.leftNav ul li div{
    width: 100%;
}
.leftNav .iconfont {
    font-size: 35px;
}
</style>