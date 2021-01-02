<template>
    <div class="v-tag" :style="{backgroundColor:color}">
        <div class="icon" :style="{backgroundColor:leftColor}">
            <img src="../../icon/v/v-local.png">
        </div>
        <div class="text">
            <p>{{value}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VLocal",
        props:{
            value:{
                default:"中国",
            },
            color:{
                default:"#4280E7"
            },
            leftColor:{
                default:"#2667D5"
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-tag{
        height: 25px;
        opacity: 1;
        border-radius: 2px;
        display: inline-flex;
        justify-content: space-around;
    }
    .icon{
        width: 25px;
        height: 25px;
        opacity: 1;
        border-radius: 2px;
        display: inline-block;
        position: relative;
        img{
            width: 15px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .text{
        height: 25px;
        padding: 0 10px 0 10px;
        p{
            font-size: .8rem;
            font-family: Microsoft YaHei;
            font-weight: bold;
            display: inline-block;
            color: #FFFFFF;
            line-height: 25px;
            opacity: 1;
        }
    }
</style>
