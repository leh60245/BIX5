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
        {slideName:"slide1", widgets:[
            {id:"Dash_Lines", x:230,y:140,width:410,height:240, type:"chart", contentUrl:"./Widgets/Chart/Dash_Lines.html", options:{border:true, borderColor:"#ccc"}}
            ,{id:"iframe",x:10,y:30,width:370,height:500, layoutType:"window", type:"iframe", title:"header title", contentsOptions:{url:"http://www.bixsoft.net"}, options:{"border":true,"borderColor":"#ccc","borderWidth":"1px"}}
            ,{id:"Line_2D",x:390,y:30,width:450,height:160, contentUrl:"./Widgets/Chart/Line_2D.html",type:"chart",title:"Line_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Column_2D",x:390,y:200,width:450,height:160, contentUrl:"./Widgets/Chart/Column_2D.html",type:"chart",title:"DesignMap_World",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Plot_2D_Ex",x:390,y:370,width:450,height:160, contentUrl:"./Widgets/Chart/Plot_2D_Ex.html",type:"chart",title:"Plot_2D_Ex",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
        ]},
        {slideName:"slide2", widgets:[
            {id:"w01",x:10,y:10,width:420,height:260,type:"chart", contentUrl :"./Widgets/Chart/Line_2D.html", options:{"border":true}}
            ,{id:"w02",x:440,y:10,width:400,height:260,type:"chart", contentUrl :"./Widgets/Chart/Column_2D.html", options:{"border":true}}
            ,{id:"w03",x:10,y:280,width:420,height:250,type:"chart", contentUrl :"./Widgets/Chart/Combi_2D_Multi.html", options:{"border":true}}
            ,{id:"w04",x:440,y:280,width:400,height:250,type:"chart", contentUrl :"./Widgets/Chart/Dash_Lines.html", options:{"border":true}}
        ]},
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

    //sidebar가 보이도록 설정
    dashboard.showSideBarBtn(true);

    //href는 location 객체에 속해있는 프로퍼티로 현재 접속중인 페이지 정보를 가지고 있음.
     //값을 변경할 수 있는 프로퍼티여서 다른 페이지로 이동하는데도 사용되고 있음.
    var url = checkUrl(location.href);
    //localStorge를 사용하면, 브라우저에 key-value 값을 Storage에 저장할 수 있다. 
     //저장된 데이터는 세션간에 공유한다. 즉, 세션이 바뀌어도 데이터는 유지된다.
    if(typeof localStorage !== "undefined" && localStorage.getItem(url) != null){
        var data = JSON.parse(localStorage.getItem(url));
        var slide = dashboard.getSlideAt(data.idx);
        slide.setData(data.widgets);
    }


}, "100%","100%", {enabled:true, gridlines:false});

function saveLayout(){
    var dashboard = BIX5.dashboard.get("dashboard1");
    var slide = dashboard.getSelectedSlide();
    var data = {};
    data.widgets = slide.getTemplateData();
    data.idx = dashboard.getSelectedIndex();
    var dataStr = JSON.stringify(data);
    var key = checkUrl(location.href);

    localStorage.setItem(key, dataStr);

    alert("저장되었습니다.");
    reload();
}

function reset(){
    var key = checkUrl(location.href);

    localStorage.removeItem(key);
    alert("초기화되었습니다.");
    reload();
}   