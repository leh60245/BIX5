BIX5.setAssetsPath("../../BIX5/Assets/");

//대시보드 객체는 비동기적으로 생성하므로 대시보드가 준비된 이후에 대시보드 객체를 사용할수 있습니다. 
//BIX5.dashboard.create 의 readyHandler 에 등록된 콜백함수가 대시보드가 준비가 되면 호출됩니다.
BIX5.dashboard.create("dashboard1", "dashboardHolder", function(dashboard){


    // getSideBar(): 사이드바 obejct를 리턴
    // setSlideLayouts(): 슬라이드 레이아웃을 설정
    // 사이드바의 setSlideLayouts()로 위젯 만들기에 위젯을 설정할 수 있다. 
     //기본적으로 제품에서 slidelayouts.js를 제공하고 있으며 이를 설정할 수 있다.
    dashboard.getSideBar().setSlideLayouts(slidelayouts);   

    // id : 위젯의 id
    // x : 위젯의 x좌표
    // y : 위젯의 y좌표
    // width : 위젯의 너비
    // height : 위젯의 높이
    // layoutType : 위젯 레이아웃 종류
    // title : 위젯의 타이틀
    // type : 컨텐트 영역에 설정할 타입. 유효값: “chart”, “grid”, “mapchart”, “html”, “text”, “clock”
    // contentUrl : html url
    // contentHtml : html string
    // options
    // border : 보더를 설정합니다.
    // borderColor : 보더의 색상을 설정합니다.
    // borderWidth : 보더의 굵기를 설정합니다.
    var slides =  [
        {slideName:"slide1",
        widgets:[
            {id:"Column_2D1",x:0,y:370,width:450,height:160, 
            contentUrl:"./Widgets/Chart/Column_2D1.html",type:"chart",title:"Column_2D",
            options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Column_2D2",x:1,y:370,width:450,height:160, 
            contentUrl:"./Widgets/Chart/Column_2D2.html",type:"chart",title:"Column_2D",
            options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Column_2D3",x:2,y:370,width:450,height:160, 
            contentUrl:"./Widgets/Chart/Column_2D3.html",type:"chart",title:"Column_2D",
            options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Column_2D4",x:3,y:370,width:450,height:160, 
            contentUrl:"./Widgets/Chart/Column_2D4.html",type:"chart",title:"Column_2D",
            options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Column_2D5",x:4,y:370,width:450,height:160, 
            contentUrl:"./Widgets/Chart/Column_2D5.html",type:"chart",title:"Column_2D",
            options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}

            ,{id:"Grid1",x:0,y:600,width:450,height:160, 
            contentUrl:"./Widgets/Grid/grid1.html",type:"grid",title:"Column_2D",
            options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Grid2",x:0,y:600,width:450,height:160, 
            contentUrl:"./Widgets/Grid/grid2.html",type:"grid",title:"Column_2D",
            options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
        ]}
    ];
    dashboard.setSlides(slides);
//  dashboard.setData(slides);도 대시보드에 슬라이드를 설정해주는 같은 작업을 해주는 듯 하다.
//  dashboard pdf p.45

}, "100%","100%", {enabled:false, gridlines:false, slideNavigator:false, sideBarBtn:false});
//대시보드 수정, 격자선, 슬라이드 네비게이터, 사이드바 버튼 - false