BIX5.dashboard.create("dashboard1", "dashboardHolder", function(dashboard){


    // getSideBar(): 사이드바 obejct를 리턴
    // setSlideLayouts(): 슬라이드 레이아웃을 설정
    dashboard.getSideBar().setSlideLayouts(slidelayouts);   


    var slides =  [
        {slideName:"slide1",
        widgets:[
            {id:"Column_2D1",x:0,y:370,width:450,height:160, contentUrl:"./Widgets/Chart/Column_2D1.html",type:"chart",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
//            ,{id:"Column_2D2",x:1,y:370,width:450,height:160, contentUrl:"./Widgets/Chart/Column_2D2.html",type:"chart",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
//            ,{id:"Column_2D3",x:2,y:370,width:450,height:160, contentUrl:"./Widgets/Chart/Column_2D3.html",type:"chart",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
//            ,{id:"Column_2D4",x:3,y:370,width:450,height:160, contentUrl:"./Widgets/Chart/Column_2D4.html",type:"chart",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
//            ,{id:"Column_2D5",x:4,y:370,width:450,height:160, contentUrl:"./Widgets/Chart/Column_2D5.html",type:"chart",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Grid1",x:0,y:600,width:450,height:160, contentUrl:"./Widgets/Grid/Grid1.html",type:"grid",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
//            ,{id:"Grid2",x:0,y:600,width:450,height:160, contentUrl:"./Widgets/Grid/Gird2.html",type:"grid",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
        ]}
    ];
    dashboard.setSlides(slides);


}, "100%","100%", {enabled:false, gridlines:false});