// ----------------------- 그리드 설정 시작 -------------------------------------
// BIX5 그리드 생성 준비가 완료된 상태 시 호출할 함수를 지정합니다.
var jsVars = "BIX5OnLoadCallFunction=gridReadyHandler";


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
var gridApp, gridRoot, dataGrid, collection;
var lastVpos = 0;   //마지막 스크롤 위치
function gridReadyHandler(id) {
    //BIX5Grid 관련 객체
    gridApp = document.getElementById(id);  //그리드를 포함하는 div 객체

    gridApp.setLayout(layoutStr);
    gridApp.setDataURLEx(gridDataURL);

    //scrollHandle함수. 
    var scrollHandler = function(event) {
        //세로 스크롤이 이동될 때만 작동하도록 설정
        if(event.direction == "vertical") {
            var vpos = event.position;  //스크롤의 위치? 
            if (vpos == 0) return;
            if(vpos >= dataGrid.getMaxVerticalScrollPosition()) {
                if (vpos != lastVpos) {
                    lastVpos = vpos;
                    gridAddPage();
                }
            }
        }
    }

    gridRoot = gridApp.getRoot();           //데이터와 그리드를 포함하는 객체
    var layoutCompleteHandler = function(event) {
        //getDataGrid(): 설정된 레이아웃에 의해 생성된 DataGrid 객체를 반환합니다.
        //return: object(DataGrid)
        dataGrid = gridRoot.getDataGrid();  //그리드 객체
        dataGrid.addEventListener("scroll", scrollHandler); //scroll이벤트가 추가되었다.
    }
    //addEventListener(type, listener): type에 선언된 이벤트가 발생할 경우 이벤트를 받을 수 있는 listener함수를 등록합니다.
    gridRoot.addEventListener("layoutComplete", layoutCompleteHandler);
}

var gridTotalRowCount = 300;    // 전체 데이터 건수 - html이 서버에서 작성될 때 반드시 넣어줘야 하는 변수.
var gridRowPerPage = 20;        // 1페이지에서 보여줄 행 수
var gridTotalPage = Math.ceil(gridTotalRowCount / gridRowPerPage);  //전체 페이지 계산
var gridCurrentPage = 1;        // 현재 페이지

function gridAddPage() {
    if (gridCurrentPage >= gridTotalPage) return;

    gridCurrentPage++;
    //addDataURLEx(value, index, checkLast): 추가 데이터URL을 자바스트립트를 통해 등록한다.
     //value(string 데이터URL), index(number, 데이터가 삽입될 행의 인덱스 번호), checkLast(boolean)
    gridApp.addDataURLEx(dataUrl+gridCurrentPage);
}

var layoutURL = "~~";
var dataUrl = "~~";
//----------------------- 그리드 설정 끝 -----------------------@nd
