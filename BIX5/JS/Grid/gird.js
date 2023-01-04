// ----------------------- 그리드 설정 시작 -------------------------------------

// BIX5 레이아웃 URL 경로로 반드시 설정
var layoutURL = "~~";
var jsVars = "layoutURL=" + layoutURL;

// 데이터를 URL경로를 통해 가져올 경우 설정
 //배열형태로 데이터를 삽입할 경우 주석처리나 삭제
 //배열형태와 같이 사용할 경우, 우선순위는 배열형태 데이터 삽입.
var dataURL = "~~";
jsVars += "&dataURL=" + dataURL;

// BIX5 그리드 생성 준비가 완료된 상태 시 호출할 함수를 지정합니다.
jsVars += "&BIX5OnLoadCallFunction=gridReadyHandler";


// BIX5 를 생성합니다.
// 파라메터 (순서대로)
 //1. 그리드의 id ( 임의로 지정하십시오. )
 //2. 그리드가 위치할 div 의 id (즉, 그리드의 부모 div 의 id 입니다.)
 //3. 그리드 생성 시 필요한 환경 변수들의 묶음인 jsVars
 //4. 그리드의 가로 사이즈 (생략 가능, 생략 시 100%)
 //5. 그리드의 세로 사이즈 (생략 가능, 생략 시 100%)
BIX5.grid.create("grid1", "gridHolder", jsVars, "100%", "100%");


// 그리드의 속성인 BIX5OnLoadCallFunction 으로 설정된 함수.
 //BIX5 그리드의 준비가 완료된 경우 이 함수가 호출됩니다.
 //이 함수를 통해 그리드에 레이아웃과 데이터를 삽입합니다.
 //파라메터 : id - BIX5.grid.create() 사용 시 사용자가 지정한 id 입니다.
// girdApp: 그리드 BIX5 기초 div
// gridRoot: 데이터와 그리드를 포함하는 객체. 레이아웃과 데이터를 설정한 내용에 따라 로딩하고 그리드를 생성하는 객체이다.
//          그리드가 로딩된 후 데이터를 읽어 들이게 되면 "dataComplete" 이벤트가 발생하고 layout에 의해 그리드가 만들어 지면 "layoutComplete" 이벤트가 발생하게 된다.
// dataGrid: 설정된 레이아웃에 따라 그리드가 생성되면 넣어지는 변수
var gridApp, gridRoot, dataGrid, collection;

function gridReadyHandler(id) {
    //BIX5Grid 관련 객체
    gridApp = document.getElementById(id);  //그리드를 포함하는 div 객체
    gridRoot = gridApp.getRoot();           //데이터와 그리드를 포함하는 객체

    gridApp.setLayout(layoutStr);
    gridApp.setDataURLEx(gridDataURL);

    //dataGrid 변수는 로딩과 동시에 반들어지는 것이 아니므로 이벤트를 통해 그리드가 만들어진 후에 세팅되도록 한다.
     //도한 생성된 객체들에 이벤트를 걸어야 하는 경우 해당 객체에 적합한 이벤트를 찾아 연동할 함수와 함께 addEventListener를 통하여 지정하도록 한다.
     //ex) dataGrid.addEventlistner("scroll", function);
    var layoutCompleteHandler = function(event) {
        //getDataGrid(): 설정된 레이아웃에 의해 생성된 DataGrid 객체를 반환합니다.
         //return: DataGrid(object)
        dataGrid = gridRoot.getDataGrid();  //그리드 객체
    }
    //addEventListener(type, listener): type에 선언된 이벤트가 발생할 경우 이벤트를 받을 수 있는 listener함수를 등록합니다.
    gridRoot.addEventListener("layoutComplete", layoutCompleteHandler);
}

//----------------------- 그리드 설정 끝 -----------------------@nd
