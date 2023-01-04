// ----------------------- 그리드 설정 시작 -------------------------------------
// BIX5 그리드 생성 준비가 완료된 상태 시 호출할 함수를 지정합니다.
var jsVars = "BIX5OnLoadCallFunction=gridReadyHandler";

// 데이터가 CSV형일 경우 넣어줍니다. (설정을 안할경우 xml로 인식하여 오류가 발생합니다)
// csv, fastCsv가 설정가능하며 다른 점은 다음과 같습니다.
// csv : CSV 표준(RFC-4180)에 따라 파싱하며, 필드 데이터가 문자열인 경우 '"',',','/n' 를 포함할 경우 사용합니다.
// fastCsv : CSV 형식으로 파싱하며, 필드 데이터에 '"',',','/n' 가 포함되지 않아 레코드 구분은 '/n', 필드 구분은 ','로만 분리가 가능할 경우 사용합니다.
jsVars += "&dataType=csv";


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
 function gridReadyHandler(id) {
    //BIX5Grid 관련 객체
    gridApp = document.getElementById(id);  //그리드를 포함하는 div 객체
    gridRoot = gridApp.getRoot();           //데이터와 그리드를 포함하는 객체

    gridApp.setLayoutURLEx(layoutStrURL);
    gridApp.setDataURLEx(gridDataURL);

    var layoutCompleteHandler = function(event) {
        // getDataGrid(): 설정된 레이아웃에 의해 생성된 DataGrid 객체를 반환합니다.
         //return: object(DataGrid)
        dataGrid = gridRoot.getDataGrid();  //그리드 객체
    }
    //addEventListener(type, listener): type에 선언된 이벤트가 발생할 경우 이벤트를 받을 수 있는 listener함수를 등록합니다.
    gridRoot.addEventListener("layoutComplete", layoutCompleteHandler);
}
var gridApp, gridRoot, dataGrid;

var layoutStrURL = "C:/Users/roadtech/BIX5Sample/leh60245_BIX5/BIX5/Samples/Dashboard/Widgets/Grid/layout/gird2_xml.xml"

var gridDataURL = "C:/Users/roadtech/BIX5Sample/leh60245_BIX5/BIX5/Samples/Dashboard/Widgets/Chart/data/roadData.csv"