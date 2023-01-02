var removeWidget = function(){
    var dashboard = BIX5.dashboard.get("dashboard1");
    var slide = dashboard.getSlideAt(0);
    //Slide의 removeSlide함수는 위젯 아이디를 받아 삭제하는 함수.
     //근데 이렇게 작성을 하면 아이디를 어떻게 받는 거지..?
     //위 함수 인자로 아이디를 받아야 하는거 같은데, 받는 인자가 없다.
     //그리고 함수 인자로 string을 넣는다.
    slide.removeWidget("Dash_Lines");
}
  
var removeWidgetAll = function(){
    var dashboard = BIX5.dashboard.get("dashboard1");
    var slide = dashboard.getSlideAt(0);
    slide.removeWidgetAll();
}


BIX5.dashboard.create("dashboard1", "dashboardHolder", function(dashboard){
    dashboard.getSideBar().setSlideLayouts(slidelayouts);

    var slides =  [
        {slideName:"slide1",
        widgets:[
            {id:"Dash_Lines", x:230,y:140,width:410,height:240, type:"chart", contentUrl:"./Widgets/Chart/Dash_Lines.html", options:{border:true, borderColor:"#ccc"}}
        ]},
        {slideName:"slide2",
        widgets:[]},
        {slideName:"slide3",
        widgets:[]},
        {slideName:"slide4",
        widgets:[]},
    ];
    dashboard.setSlides(slides);

    //첫번째 슬라이드에 위젯을 추가합니다.
     //함수 인자로 object를 넣는다.
    var widget = {x:10,y:10,width:170,height:30, type:"html", contentHtml:"<h1>Slide 1</h1>"}
    dashboard.getSlideAt(0).addWidget(widget);

    //첫번째 슬라이드에 복수의 위젯을 추가합니다.
     //함수 인자로 array를 넣는다.
    var widgets = [
        {x:10,y:280,width:450,height:260, type:"chart", contentUrl:"./Widgets/Chart/Pie_3D.html", options:{border:true, borderColor:"#ccc"}}
        ,{x:470,y:40,width:370,height:500, type:"chart", contentUrl:"./Widgets/Chart/Column_2D.html", options:{"border":true,"borderColor":"#ccc"}}
        ,{x:10,y:40,width:450,height:230, type:"chart", contentUrl:"./Widgets/Chart/Combi_2D_Multi.html", options:{border:true, borderColor:"#ccc"}}
    ];
    dashboard.getSlideAt(0).addWidgets(widgets);


    var items = [];
    dashboard.setWidgetPool(items);

}, "100%","100%", {enabled:true, gridlines:false});