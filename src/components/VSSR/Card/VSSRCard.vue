<template>
    <div class="vssr-card">
        <v-tag class="card_local" color="#4280E7" leftColor="#2667D5" value="香港"/>
        <div class="vssr-card_title">
            <h3>{{vssr.title}}</h3>
        </div>
        <div class="vssr-card_ms">
            <span>53ms</span>
        </div>
        <v-tag class="card_time" color="#35DF9A" leftColor="#1BCF75" value="运行 6666 小时"/>
        <img class="code_image" :src="vssr.code"/>
        <div class="vssr-card_link" @click="copy">
            <img src="../../../icon/v/v-link.png"/>
        </div>
        <div class="vssr-card_bottom">
            <span class="user_head" :style="{backgroundImage:`url(${vssr.user})`}"/>
            <span class="user_name">
                分享者: {{vssr.userName}}
            </span>
            <span class="user_home_goto">
                Go to his huse >>
            </span>
        </div>
    </div>
</template>

<script>
    import VTag from "../../Icon/VTag";
    import {textCopy} from "../../../tools/textTools";
    export default {
        name: "VSSRCard",
        components: {VTag},
        props:['vssr'],
        methods:{
            copy(){
                if (textCopy(this.vssr.vssr)){
                    this.$message({
                        message: '复制SSR连接成功  (๑•́ ₃ •̀๑) ',
                        type: 'success'
                    });
                }else{
                    this.$message({
                        message: '复制SSR连接失败 v(ﾟｰﾟ)',
                        type: 'warning'
                    });
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .vssr-card{
        width: 300px;
        height: 400px;
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 15px;
        position: relative;
        overflow: hidden;
    }
    .vssr-card_title{
        padding: 0 10px 0 10px;
        height: 40px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
        opacity: 1;
        display: flex;
        justify-content: center;
        align-content: center;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        h3{
            font-size: .8rem;
            font-family: Microsoft YaHei;
            font-weight: bold;
            line-height: 40px;
            color: #000000;
        }
    }
    .card_local{
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 3px;
        overflow: hidden;
    }
    .card_time{
        position: absolute;
        top: 65px;
        left: 50%;
        transform: translateX(-50%);
    }
    .vssr-card_ms{
        width: 120px;
        height: 30px;
        background: #09BC31;
        opacity: 1;
        position: absolute;
        right: -30px;
        top: 15px;
        transform:  rotateZ(45deg);
        span{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            font-size: 1rem;
            font-family: Segoe UI;
            font-weight: bold;
            line-height: 21px;
            color: #FBEFEF;
        }
    }
    .code_image{
        width: 150px;
        height: 150px;
        position: absolute;
        left: 50%;
        top: 110px;
        transform: translateX(-50%);
        border: #F7F6FB solid 5px;
        border-radius: 5px;
    }
    .vssr-card_link{
        position: absolute;
        bottom: 50px;
        right: -50px;
        width: 100px;
        height: 100px;
        transform: rotate(45deg);
        background: #4E7FDB;
        box-shadow: -3px -3px 6px rgba(0, 0, 0, 0.16);
        opacity: 1;
        z-index: 1;
        img{
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%) rotate(-45deg);
            width: 20px;
        }
    }
    .vssr-card_bottom{
        width: 100%;
        height: 100px;
        background: #4E7FDB;
        box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.16);
        opacity: 1;
        position: absolute;
        bottom: 0;
        .user_head{
            width: 63px;
            height: 63px;
            display: inline-block;
            background-size: 100%;
            border: 3px solid #7596D4;
            border-radius: 50%;
            opacity: 1;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 30px;
        }
        .user_name{
            position: absolute;
            left: 120px;
            top: 17px;
            font-size: 1.2rem;
            font-family: Segoe UI;
            font-weight: bold;
            line-height: 21px;
            color: #FFFFFF;
            opacity: 1;
            z-index: 1;
        }
        .user_home_goto{
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            line-height: 16px;
            color: #FFFFFF;
            opacity: 1;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
</style>
