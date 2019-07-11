(function () {
    var uiExpression={
        install:function (Vue, options) {
            var baseUrl="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal";
           
            Vue.component("ui-expression",{
                template:"#tpl",
                data:function () {
                    return{
                        expressions:expressions,
                        baseUrl:baseUrl,
                        isShow:false
                    }
                },
                created:function () {
                    var _this=this;
                    document.addEventListener("click",function (e) {
                        _this.isShow=false;
                    })
                },
                methods:{
                    pickerExpression:function (expression) {
                        this.$emit("picker-expression",expression)
                    }
                }
            })
            function getIndex(str) {
                var index=-1;
                expressions.forEach(function (item,i) {
                    if(item.title==str){
                        index=i;
                    }
                })
                return index
            }
            // 4. 添加事例方法
            Vue.prototype.$parseExpression= function (text) {
                if(typeof (text) != "undefined") {
                    var sArr = text.match(/\[.*?\]/g);
                    if(sArr&&sArr.length>0){
                        for(var i = 0; i < sArr.length; i++){
                            var index=getIndex(sArr[i]);
                            if(index!=-1) {
                                var reStr = "<img src="+baseUrl+expressions[index].url + " height='20' width='20' />";
                                text = text.replace(sArr[i], reStr);
                            }
                        }
                    }
                }
                return text;
            }
        }
    }
    if (window.Vue) {
        Vue.use(uiExpression)
    }else {
        window.uiExpression=uiExpression;
    }
})()
var socket=io.connect();
Vue.component("ui-login",{
    template:"#imLogin",

    created:function () {
        var _this=this;
        document.addEventListener("click",function (e) {
            _this.isShow=false;
        })
        _this.initSocketEvent();
    },
    methods:{
        userLogin:function () {
            var _this=this;
            var name=_this.trim(_this.name);
            if(name!=""){
                socket.emit("login",{
                    name:name,
                    avatarUrl:this.avatarUrl
                })
            }else {
                _this.name="";
                this.showError("请输入用户昵称！")
            }
        },
        showError:function (err) {
            var _this=this;
            if(this.interval){
                clearTimeout(_this.interval)
            }
            this.errorMsg=err;
            this.interval=setTimeout(function () {
                _this.errorMsg="";
            },3000)
        },
        initSocketEvent:function () {
            var _this=this;
            socket.on("loginSuccess",function (user,users) {
                _this.$emit("user-login",{
                    user:user,
                    users:users
                })
            })
            socket.on("loginFail",function (msg) {
                _this.showError(msg)
            })
        },
        trim:function (string) {
            return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    }
})
new Vue({
    el:"#webChatBox",
    template:"#webChat",
    data:function () {
        return {
           
            threads:{},
            channelId:"group",
            text:"",
            setting:{
                isShowTime:true,
                isVoice:true,
                isShowName:true
            },
            keyWord:"",
            isLogin:false
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
            return user;
        }
    },
    created:function () {
        this.initBg();
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
        },
        receiveMessage:function (text,from,channelId) {
            var isRead=this.channelId==channelId?true:false;
            var message={
                threadId:channelId,
                from:from,
                to:this.loginUser,
                content:text,
                time:new Date().getTime(),
                type:"receive",
                isRead:isRead
            }
            this.addMessage(message)
            if(this.setting.isVoice&&channelId!="group"){
                this.$refs.audio.play();
            }
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
            if(text!=""&&this.isLogin){
                this.sendMessage(text,this.channel);
                if(this.channelId=="group"){
                    socket.emit("groupMessage",text,this.loginUser)
                }else {
                    socket.emit("message",this.channelId,text,this.loginUser)
                }
            }
            this.text="";
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
        getUnReaderNum:function (id){
            var num=0;
            var messgaes=this.threads[id];
            if(messgaes&&(messgaes.length>0)){
                messgaes.forEach(function (item) {
                    if(!item.isRead){
                        num++;
                    }
                })
            }
            return num;
        },
        picker:function(expression){
            this.text+=expression.title;
        },
        trim:function (string) {
            return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        },
        searchUser:function () {
            var arr=[],_this=this;
            this.users.forEach(function (item ){
                if((item.name.indexOf(_this.keyWord)!=-1)||(item.id.indexOf(_this.keyWord)!=-1)){
                    arr.push(item)
                }
            })
            return arr;
        },
        changeChannel:function (channelId) {
            var _this=this;
            this.channelId=channelId;
            document.querySelector("title").innerHTML=_this.loginUser.name+" | 与"+this.channel.name+"聊天中";
            _this.setMessageReader(channelId);
            this.$nextTick(function () {
                _this.scrollFooter()
            })
        },
        setMessageReader:function (id) {
            var messgaes=this.threads[id],_this=this;
            if(messgaes&&(messgaes.length>0)){
                messgaes.forEach(function (item,index) {
                    if(!item.isRead){
                        _this.threads[id][index].isRead=true;
                    }
                })
            }
        },
        initBg:function () {
            this.$http.jsonp("https://api.asilu.com/bg/").then(function (response) {
                var images=response.body.images,
                  len=images.length;
                setInterval(function () {
                    var index=parseInt(Math.random()*len);
                    var img=new Image();
                    img.addEventListener('load',function () {
                        document.body.style.backgroundImage="url("+images[index].url+")";
                    })
                    img.src=images[index].url;
                },30000)
            })
        },

        initSocketEvent:function () {
            var _this=this;
            socket.on('system',function (user,type) {
                if(type=="join"){
                    user.messages=[]
                    _this.users.push(user)
                }
                if(type=="logout"){
                    _this.users.forEach(function (item,index) {
                        if(item.id==user.id){
                            _this.users.splice(index, 1);
                        }
                    })
                    if(user.id==_this.channelId){
                        _this.changeChannel("group");
                    }
                }
            })
            socket.on("message",function (user,text) {
                _this.receiveMessage(text,user,user.id)
            })
            socket.on("groupMessage",function (user,text) {
                _this.receiveMessage(text,user,"group")
            })
        }
    }
})