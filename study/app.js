new Vue({
    el:"#vue-app",
    data(){
        return {
            name:"谢",
            qq:"1662053777",
            wechat:"TOUHOU_LOLI"
        };
    },
    methods:{
        greet(username){
            return `Thank you ${username}` ;
        },
        times(time){
            return `现在时间是${time}`;
        }
    }
});