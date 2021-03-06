 new Vue({
    el:'#app',
    data: {
        person:{
        	name:'胡春望',
        	email:'hcw@zju.edu.cn',
        	like:'web前端开发实习生',
        	phone:'(+86)186 6811 2386'
        },
        education:[
        	    {
        		school:'浙江大学',
        		tm_start:'2012.09',
        		tm_end:'2016.06',
        		department:'计算机科学与技术',
        		degree:'本科'
        		  },
        	   {
        		school:'香港科技大学',
        		tm_start:'2016.09',
        		tm_end:'2017.06',
        		department:'资讯科技',
        		degree:'理学硕士'
        	}
        ],
        skill:[
        {skills:"熟悉Javascript,HTML,CSS"},
        {skills:"了解Node.js,MongoDB,Php,Mysql"},
        {skills:"了解gulp,Grunt等前端自动化工具"},
        {skills:"了解CSS预编译语言Sass/Less"},
        ],
        project:[
        {tm_start:'2016.03',
         tm_end:'2016.03',
         name:'blackjack 21点游戏',
         duty:'程序员，前端',
         item:[
            {items:"21点游戏,使用原生js实现"},
            {items:"游戏地址:http://adspoing.github.io/blackjack/index.html"}
         ]},
        {tm_start:'2016.02',
         tm_end:'至今',
         name:'百度IFE前端学院',
         duty:'程序员，前端',
         item:[
            {items:"2048游戏,仿照网络上经典的2048游戏玩法,使用jquery框架"},
			{items:"响应式布局适应了手机端。Github地址:https://github.com/adspoing/2048game"},
			{items:"个人在线简历,http://www.springwon.cn/Resume/cn.html"},
			{items:"其他一些小项目,包括自适应、响应式的布局,Javascript原生开发,表单验证,排 序算法的可视化,模拟行星航空系统等,目前还在跟随春季班学习"}
         ]},
         {tm_start:'2016.02',
         tm_end:'2016.02',
         name:'个人博客',
         duty:'程序员,前端',
         item:[
            {items:"后端使用了基于hexo静态博客框架"},
			{items:"前端定制修改了原主题,风格模仿vue.js首页。http://www.springwon.cn"}
         	]
         },
          {tm_start:'2015.04',
         tm_end:'2015.07',
         name:'基于Node.js和Html5的网页游戏',
         duty:'程序员,前端',
         item:[
            {items:"基于Html5 Canvas的游戏设计,类似于“炸弹超人”,以Node.js作服务器。 Socket.io通信,登录模块,游戏数据以及账号信息用MongoDB作为数据库存储数据"},
			{items:"Github地址:https://github.com/adspoing/html5game"}
         	]
         },
         {tm_start:'2014.09',
         tm_end:'2015.01',
         name:'IEEE VAST 2014 mini Challenge1项目',
         duty:'程序员,前端',
         item:[
            {items:"以Mini Challenge1项目作为数据来源,使用D3.js库对数据进行可视化分析。"},
         	]
         },
         {tm_start:'2014.09',
         tm_end:'2015.01',
         name:'教学管理系统的子系统:智能排课系统',
         duty:'程序员,前端',
         item:[
            {items:"前端利用bootstrap框架,jQuery添加页面交互"},
            {items:"后端利用thinkphp框架,实现多时段手动排课,能对各种异常情况作出分别判断"}
         	]
         }
        ],
        experience:[{
            tm_start:'2015.09',
            tm_end:'2015.12',
            company:'杭州尚青科技有限公司',
            duty:'安卓&web开发'
        },
        {
            tm_start:'2016.03',
            tm_end:'2016.06',
            company:'杭州疆域信息技术有限公司',
            duty:'前端开发'
        }
        ],
        awards:[
            {item:'2013年荣获浙江大学学业三等奖学金'},
            {item:'2013年荣获浙江大学优秀学生三等奖学金'}
        ]
    }
});