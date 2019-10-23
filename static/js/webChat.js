
    var saveChannel
    var uiExpression={
        install:function (Vue, options) {

            // 4. 添加事例方法
            Vue.prototype.$parseExpression= function (text) {
       //          alert("jj");
               
                return text;
            }
        }
    }
    
    
    
  
    

    if (window.Vue) {
        Vue.use(uiExpression)
    }else {
        window.uiExpression=uiExpression;
    }



var mainCon = new Vue({
    el:"#webChatBox",
    template:"#webChat",
    data:function () {
        return {
            loginUser:{
                id:"u001",
                avatarUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551421203161&di=3230a8dd85c7d64cb20c346dff6711fc&imgtype=0&src=http%3A%2F%2Ftvax3.sinaimg.cn%2Fcrop.0.0.480.480.1024%2F006ktVA0ly8fyqdscao3fj30dc0dcaaq.jpg",
                name:"我",
                type:"user"
            },
            tab:"chat",
            users:[
                {
                    id:"r001",
                    avatarUrl:"./static/images/group-icon.png",
                    name:"法律援助助手",
                    type:"room"
                }
            ],
            threads:{},
            channelId:"r001",
            text:"",
            setting:{
                isShowTime:true,
                isVoice:true,
                isShowName:true
            },
            keyWord:"",
            isLogin:true,
            star:0,
            starUser:[]
        }
    },
    computed: {
        messages: function () {
            var messages = [];
            if (this.threads[this.channelId]) {
                messages = this.threads[this.channelId];
            }
            return messages;
        },
        channel:function () {
            var user={},_this=this;
            this.users.forEach(function (item) {
                if(_this.channelId==item.id){
                    user=item
                }
            })
           // console.log(user)
           // alert(user)
            return user;
        }
    },

    filters:{
        time:function (value) {
            function two(str) {
                var s;
                s = "" + str;
                if (s.length === 1) {
                    s = "0" + s;
                }
                return s;
            };
            var time=new Date(value);
            var hour=time.getHours();
            var m=time.getMinutes();
            var s=time.getSeconds();
            return two(hour)+":"+two(m)+":"+two(s);
        }
    },
    methods:{
        sendMessage:function (text,to) {
            var isRead=this.channelId==to.id?true:false;
            var message={
                threadId:to.id,
                from:this.loginUser,
                to:to,
                content:text,
                time:new Date().getTime(),
                type:"send",
                isRead:isRead
            }
            this.addMessage(message)
            this.getMessage(to,text)
        },
        receiveMessage:function (text,from) {
            var isRead=this.channelId==from.id?true:false;
            var message={
                threadId:from.id,
                from:from,
                to:this.loginUser,
                content:text,
                time:new Date().getTime(),
                type:"receive",
                isRead:isRead
            }
            this.addMessage(message)
           // console.log(from)
            console.log(saveChannel)
        },
        addMessage:function (message) {
            var _this=this;
            if(!this.threads[message.threadId]){
                this.$set(this.threads,message.threadId,[])
            }
            this.threads[message.threadId].push(message)
            this.$nextTick(function () {
                _this.scrollFooter()
            })
        },
        send:function (){
            var text=this.trim(this.text);
            //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  c
            if(text!=""){
                this.sendMessage(text,this.channel)
            }
            this.text="";
        },
        getMessage:function (channel,text) {
            var _this=this;
           var datatext
                var pre0="自我介绍一下 我是消费者投诉自动回复系统。<br>很高兴为您服务，请选择您的问题类型：<br><a href='javascript:;' class='res-link' target='_self' onclick='flagg_=1,appendText()' >1.快递问题  </a><br> <a href='javascript:;' class='res-link' target='_self' onclick='flagg_=2,appendText()'>2.网络贷款问题</a> <br> <a href='javascript:;' class='res-link' target='_self' onclick='flagg_=3,appendText()' >3.手机软件扣费  </a><br>  <a href='javascript:;' class='res-link' target='_self' onclick='flagg_=4,appendText()' >4.医疗问题 </a><br> <a href='javascript:;' class='res-link' target='_self' onclick='flagg_=5,appendText()' >5.商标或关键词侵权问题 </a><br> <a href='javascript:;' class='res-link' target='_self' onclick='flagg_=6,appendText()' >6.网络购物问题</a><br><a href='javascript:;' class='res-link' target='_self' onclick='flagg_=7,appendText()' >7.投资理财被诈骗问题</a><br> <a href='javascript:;' class='res-link' target='_self' onclick='flagg_=8,appendText()' >8. 发票问题</a><br><a href='https://koubei.baidu.com/m2' target='_self' >9.其他问题</a>" 

               // data.text="xxx   <a href='javascript:;' class='res-link' target='_blank' onclick='appendText()'  class='ui-sendBtn' @keyup.enter='send' @click='send'>打开页页面</a>  <a href='javasript:;' onclick=''>shishi</a>"
               datatext=pre0


             
            _this.receiveMessage(datatext,_this.channel)
                  //  console.log(_this.channel)

              
                saveChannel=_this.channel
                console.log(saveChannel)
            
        },
        
        scrollFooter:function () {
            var ul = this.$refs.list;
            ul.scrollTop = ul.scrollHeight;
        },
        getLastMsg:function (id) {
            var message={};
            var messgaes=this.threads[id];
            if(messgaes&&(messgaes.length>0)){
                message=messgaes[messgaes.length-1];
            }
            return message;
        },

        picker:function(expression){
            this.text+=expression.title;
        },
        trim:function (string) {
            return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        },

    }
})
