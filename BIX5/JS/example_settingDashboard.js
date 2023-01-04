var removeSlide = function() {
    //dashboard의 removeSlideAt 함수를 이용하여 슬라이드를 삭제할 수 있습니다.
    BIX5.dashboard.get("dashboard1").removeSlideAt(0);
}

// 집고 넘어가야 하는 함수 - dashboard의 get함수
 // 이 함수로 대시보드 인스턴스를 얻는다. 해당 인스턴스로 대시보드를 제어할 수 있다.
 // get(id) -- id(type string, 생성된 대시보드의 id)
var movePrev = function() {
    // 이전 슬라이드로 이동
    BIX5.dashboard.get('dashboard1').movePrev();
}

var moveNext = function() {
    // 다음 슬라이드로 이동
    BIX5.dashboard.get('dashboard1').moveNext();
}

var moveFirst = function() {
    // 처음 슬라이드로 이동
    BIX5.dashboard.get('dashboard1').moveFirst();    
}

var moveLast = function() {
    // 마지막 슬라이드로 이동
    BIX5.dashboard.get('dashboard1').moveLast();    
}


var moveSlideAt = function() {
    var idx = document.getElementById("slideIdx").value*1;
    // 해당 인덱스 슬라이드로 이동한다.
    BIX5.dashboard.get('dashboard1').setSelectedIndex(idx);
}


var showSlideNavigator = function(chk) {
    //dashboard의 showSlideNavigator 함수에 인수로 true를 넘기면 하단 슬라이드 네비게이터가 보인다.
     //함수 안에 boolen 값을 넣는다.
    BIX5.dashboard.get("dashboard1").showSlideNavigator(chk);
}


var showSideBarBtn = function(chk){
    //위 showSlildeNavigator와 작동 방식이 같다.
    BIX5.dashboard.get("dashboard1").showSideBarBtn(chk);
}


var setGap = function(px){
    //첫번째 슬라이드의 위젯 간의 간격을 조정한다.
     //gap의 기본 값은 10px로 함수 안에 number 값을 넣는다.
    var dashboard = BIX5.dashboard.get("dashboard1");
    dashboard.setGap(px);
}


// BIX5 Dashboard 를 생성합니다.
 // 파라메터 (순서대로) 
 // 대시보드 생성을 위한 파라메터는 다음과 같습니다.
 // BIX5.dashboard.create(id, target, readyHandler, width, height, options)
 // 1. (string) 생성될 대시보드 id
 // 2. (string) 대시보드가 위치할 div의 id
 // 3. (function) 대시보드가 사용할 준비가 되면 호출되는 함수 -- 위젯의 메타정보를 설정.
 // 4. (number) 대시보드의 가로 사이즈
 // 5. (number) 대시보드의 세로 사이즈
 // 6. (object) options. 
 // 6-1. (boolean) enabled 대시보드 편집 여부. ture면 위젯을 드래그, 리사이징, 삭제를 할 수 있다.
 // 6-2. (boolean) gridlines 대시보드의 격자선 보이기 여부를 설정한다.
BIX5.dashboard.create("dashboard1", "dashboardHolder", function(dashboard){
    // Dashboard readyHandler에서 위젯의 메타정보를 설정한다.


    // getSideBar(): 사이드바 obejct를 리턴
    // setSlideLayouts(): 슬라이드 레이아웃을 설정
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
            {id:"title",x:10,y:0,width:200,height:30, contentUrl :"./Widgets/Html/title.html",type:"html",title:"Untitled"}
            ,{id:"iframe",x:10,y:30,width:370,height:500, layoutType:"window", type:"iframe",title:"header title", componentOptions:{url:"http://www.bixsoft.net"}, options:{"border":true,"borderColor":"#ccc","borderWidth":"1px"}}
            ,{id:"clock",x:590,y:0,width:250,height:30, contentUrl:"",type:"clock",title:"clock", options:{border:false}}
            ,{id:"Dash_Lines",x:390,y:30,width:450,height:160, contentUrl:"./Widgets/Chart/Dash_Lines.html",type:"chart",title:"Dash_Lines",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Plot",x:390,y:200,width:450,height:160, contentUrl:"./Widgets/Chart/Plot_2D_Ex.html",type:"chart",title:"Plot_2D_Ex",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
            ,{id:"Column_2D",x:390,y:370,width:450,height:160, contentUrl:"./Widgets/Chart/Column_2D.html",type:"chart",title:"Column_2D",options:{"border":true,"borderColor":"#EEEEEE","borderWidth":"1px"}}
        ]}
    ];
    
    //dashboard의 setSlideWidth, setSlideHeight()함소로 슬라이드의 너비, 높이 지정할 수 있다.
    dashboard.setSlideWidth(850);
    dashboard.setSlideHeight(560);
    
    dashboard.setSlides(slides);
    
    //dashboard의 addSlide함수를 이용하여 슬라이드를 추가할 수 있다.
     //함수 안에 {} object를 집어 넣는다.
    dashboard.addSlide({
        slideName:"slide2",
        widgets:[{x:390, y:260, width:170, height:40, contentHtml:"<h1>slide2</h1>", type:"html"}]
    });
    //dashboard의 addSlildes함수를 이용하여 여러 슬라이드를 추가할 수 있다.
     //함수 안에 [] array를 집어 넣는다.
    dashboard.addSlides([
        {
            slideName:"slide4",
            widgets:[{x:390, y:260, width:170, height:40, contentHtml:"<h1>slide4</h1>", type:"html"}]
        },
        {
            slideName:"slide5",
            widgets:[{x:390, y:260, width:170, height:40, contentHtml:"<h1>slide5</h1>", type:"html"}]
        }
    ]);
    //dashboard의 addSlideAt함수를 이용하여 슬라이드를 "특정" 인덱스에 추가할 수 있다.
     //addSlide와 비슷하지만, 마지막에 index(type number)을 추가하여 특정 위치를 선정할 수 있다.
    dashboard.setSlideAt({
        slideName:"slide3",
        widgets:[{x:390, y:260, width:170, height:40, contentHtml:"<h1>slide3</h1>", type:"html"}]
    }, 2);


    var items = [
        {label:"Chart Widget", children:[
            {label:"Line 2D", title:"Line_2D", type:"chart", contentUrl:"./Widgets/Chart/Line_2D.html", options:{border:true}},
            {label:"Column 2D", title:"Column_2D", type:"chart", contentUrl:"./Widgets/Chart/Column_2D.html", options:{border:true}},
            {label:"Combi 2D Multi", title:"Combi_2D_Multi", type:"chart", contentUrl:"./Widgets/Chart/Combi_2D_Multi.html", options:{border:true}},
            {label:"Dash Lines", title:"Dash_Lines", type:"chart", contentUrl:"./Widgets/Chart/Dash_Lines.html", options:{border:true}},
            {label:"History", title:"History_2D_Line", type:"chart", contentUrl:"./Widgets/Chart/History_2D_Line.html", options:{border:true}},
            {label:"Pie 3D", title:"Pie_3D", type:"chart", contentUrl:"./Widgets/Chart/Pie_3D.html", options:{border:true}},
            {label:"Plot", title:"Plot_2D_Ex", type:"chart", contentUrl:"./Widgets/Chart/Plot_2D_Ex.html", options:{border:true}},
            {label:"Target Bar", title:"Target_Bar_3D", type:"chart", contentUrl:"./Widgets/Chart/Target_Bar_3D.html", options:{border:true}}
        ]},
        {label:"blank", type:"blank", options: {"border":true,"borderColor":"#a6a6a6","borderWidth":"1px"}}
    ];
    //dashboard의 setWidgetPool 함수에 인수로 위젯 정보가 담긴 array을 넘겨 사이드바의 위젯리스트에 위젯들을 설정할 수 있다.
     //함수 안에 [] array를 집어 넣는다.
    dashboard.setWidgetPool(items);
 
    //dashboard의 setEnabled 함수에 인수로 true를 넘기면 위젯의 이동, 리사이징, 최대화(위젯이 widow 타입인 경우), 닫기버튼이 활성화되고 
     //false를 넘기면 위젯의 이동, 리사이징, 최대화(위젯이 widow 타입인 경우), 닫기버튼이 비활성화 됩니다. 
    dashboard.setEnabled(false);
    // Q.그럼 dashboard의 create 함수 인자 option의 enabled하고 다른 점은 무엇이지????
     // A. 대시보드 편집 여부를 설정합니다. dashboard.create의 enabled옵션보다 우선시 됩니다. 
     //※ 파라미터 타입이 다른 경우 해당 설정을 실행하지 않습니다.

    //이게 왜 갑자기 추가가 되었는지는 모르겠다. 
     //위에 추가된 showSlideNavigator함수와 무슨 연관이 있는지는 나중에 차차 알아가야 할 듯.
     //checked 메서드는 id의 체크 여부를 알아내는 것으로 그 값을 true로 한 것은 아마 초기값을 설정 한 듯 하다.
    document.getElementById("slideControllerChk").checked = true;


    //showSlideNavigator와 마찬가지로 생성된 모습
    document.getElementById("sideBarBtnChk").checked = true;


    //dashboard의 showGridLine 함수에 인수로 true를 넘기면 슬라이드의 격자선이 보이고 false를 넘기면 슬라이드의 격자선이 숨겨집니다. 
     //※ 파라미터 타입이 다른 경우 해당 설정을 실행하지 않습니다.
    dashboard.showGridLine(true);
}, "100%","100%", {enabled:true, gridlines:false});