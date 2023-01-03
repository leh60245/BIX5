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
//BIX5.grid.create("grid1", "gridHolder", jsVars, "100%", "100%");


// 그리드의 속성인 BIX5OnLoadCallFunction 으로 설정된 함수.
 //BIX5 그리드의 준비가 완료된 경우 이 함수가 호출됩니다.
 //이 함수를 통해 그리드에 레이아웃과 데이터를 삽입합니다.
 //파라메터 : id - BIX5.grid.create() 사용 시 사용자가 지정한 id 입니다.
function gridReadyHandler(id) {
    //BIX5Grid 관련 객체
    gridApp = document.getElementById(id);  //그리드를 포함하는 div 객체
    gridRoot = gridApp.getRoot();           //데이터와 그리드를 포함하는 객체

//  gridApp.setLayout(layoutStr);
//  gridApp.setData(gridData);

    var layoutCompleteHandler = function(event) {
        //getDataGrid(): 설정된 레이아웃에 의해 생성된 DataGrid 객체를 반환합니다.
        //return: object(DataGrid)
        dataGrid = gridRoot.getDataGrid();  //그리드 객체
    }
    //addEventListener(type, listener): type에 선언된 이벤트가 발생할 경우 이벤트를 받을 수 있는 listener함수를 등록합니다.
    gridRoot.addEventListener("layoutComplete", layoutCompleteHandler);
}

var gridApp, gridRoot, dataGrid;
var objFlag=false, layoutFlag=false, dataFlag=false;
function girdCreate(){
    BIX5.grid.create("grid1", "gridHolder", jsVars, "100%", "100%");
    objFlag = true;
}

function setLayout(){
    if (objFlag) {
        gridApp.setLayout(layoutStr);
        layoutFlag = true;
    }
}

function setData() {
    if (layoutFlag) {
        gridApp.setData(gridData);
    }
}

//----------------------- 그리드 설정 끝 -----------------------@nd
var layoutStr =
'<BIX5>\
    <NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
    <PercentFormatter id="percfmt"/>\
    <DataGrid id="dg1" sortableColumns="true" headerHeight="50" rowHeight="30" draggableColumns="true" showHeaders="true" horizontalScrollPolicy="auto" variableRowHeight="false" selectionMode="singleRow">\
        <columns>\
            <DataGridColumn id="dg1col1" dataField="Year" textAlign="center"/>\
            <DataGridColumn id="dg1col2" dataField="Quarter" textAlign="center"/>\
            <DataGridColumn id="dg1col3" dataField="Month" textAlign="center"/>\
            <DataGridColumn id="dg1col4" dataField="Seoul" textAlign="right" formatter="{numfmt}"/>\
            <DataGridColumn id="dg1col5" dataField="Pusan" textAlign="right" formatter="{numfmt}"/>\
            <DataGridColumn id="dg1col6" dataField="Incheon" textAlign="right" formatter="{numfmt}"/>\
            <DataGridColumn id="dg1col7" dataField="NewYork" textAlign="right" formatter="{numfmt}"/>\
            <DataGridColumn id="dg1col8" dataField="LA" textAlign="right" formatter="{numfmt}"/>\
            <DataGridColumn id="dg1col9" dataField="Washington" textAlign="right" formatter="{numfmt}"/>\
            <DataGridColumn id="dg1col10" dataField="Revenue" textAlign="right" formatter="{numfmt}"/>\
            <DataGridColumn id="dg1col11" dataField="Percent" width="80" textAlign="right" formatter="{percfmt}"/>\
        </columns>\
    </DataGrid>\
</BIX5>';

var gridData = [{"Year":2007, "Quarter":"1/4", "Month":1, "Seoul":109520,
"Pusan":40454, "Incheon":82477, "NewYork":47424, "LA":103225,
"Washington":61161, "Revenue":444260, "Percent":40},
{"Year":2007, "Quarter":"1/4", "Month":2, "Seoul":15749, "Pusan":29714,
"Incheon":31393, "NewYork":45006, "LA":17945, "Washington":90148,
"Revenue":229956, "Percent":20},
{"Year":2007, "Quarter":"1/4", "Month":3, "Seoul":14766, "Pusan":97314,
"Incheon":103216, "NewYork":86072, "LA":52863, "Washington":93789,
"Revenue":448020, "Percent":40},
{"Year":2007, "Quarter":"2/4", "Month":4, "Seoul":52352, "Pusan":56859,
"Incheon":15688, "NewYork":65438, "LA":39181, "Washington":109514,
"Revenue":339031, "Percent":31},
{"Year":2007, "Quarter":"2/4", "Month":5, "Seoul":100842, "Pusan":30391,
"Incheon":23745, "NewYork":72742, "LA":102195, "Washington":30407,
"Revenue":360322, "Percent":33},
{"Year":2007, "Quarter":"2/4", "Month":6, "Seoul":19217, "Pusan":75298,
"Incheon":70807, "NewYork":36447, "LA":100805, "Washington":84934,
"Revenue":387508, "Percent":36},
{"Year":2007, "Quarter":"3/4", "Month":7, "Seoul":74324, "Pusan":64947,
"Incheon":101350, "NewYork":34673, "LA":24486, "Washington":57781,
"Revenue":357561, "Percent":28},
{"Year":2007, "Quarter":"3/4", "Month":8, "Seoul":85932, "Pusan":95733,
"Incheon":40327, "NewYork":69255, "LA":80024, "Washington":102739,
"Revenue":474011, "Percent":37},
{"Year":2007, "Quarter":"3/4", "Month":9, "Seoul":101804, "Pusan":65098,
"Incheon":79194, "NewYork":101669, "LA":30608, "Washington":73020,
"Revenue":451393, "Percent":35},
{"Year":2007, "Quarter":"4/4", "Month":10, "Seoul":92130, "Pusan":91881,
"Incheon":45166, "NewYork":65524, "LA":45348, "Washington":72708,
"Revenue":412757, "Percent":36},
{"Year":2007, "Quarter":"4/4", "Month":11, "Seoul":80925, "Pusan":70537,
"Incheon":25347, "NewYork":29360, "LA":76296, "Washington":42766,
"Revenue":325230, "Percent":29},
{"Year":2007, "Quarter":"4/4", "Month":12, "Seoul":99008, "Pusan":30598,
"Incheon":99124, "NewYork":22776, "LA":107805, "Washington":38384,
"Revenue":397696, "Percent":35},
{"Year":2008, "Quarter":"1/4", "Month":1, "Seoul":68503, "Pusan":10155,
"Incheon":47908, "NewYork":60857, "LA":104179, "Washington":109097,
"Revenue":400699, "Percent":31},
{"Year":2008, "Quarter":"1/4", "Month":2, "Seoul":80573, "Pusan":75743,
"Incheon":107750, "NewYork":76243, "LA":79265, "Washington":85345,
"Revenue":504918, "Percent":40},
{"Year":2008, "Quarter":"1/4", "Month":3, "Seoul":23435, "Pusan":30538,
"Incheon":86528, "NewYork":36735, "LA":96031, "Washington":96928,
"Revenue":370196, "Percent":29},
{"Year":2008, "Quarter":"2/4", "Month":4, "Seoul":35657, "Pusan":109415,
"Incheon":45569, "NewYork":87683, "LA":92773, "Washington":53422,
"Revenue":424520, "Percent":45},
{"Year":2008, "Quarter":"2/4", "Month":5, "Seoul":50140, "Pusan":30142,
"Incheon":83992, "NewYork":87292, "LA":72324, "Washington":32520,
"Revenue":356410, "Percent":37},
{"Year":2008, "Quarter":"2/4", "Month":6, "Seoul":39458, "Pusan":10848,
"Incheon":10553, "NewYork":48474, "LA":25642, "Washington":36591,
"Revenue":171565, "Percent":18},
{"Year":2008, "Quarter":"3/4", "Month":7, "Seoul":33761, "Pusan":49046,
"Incheon":31351, "NewYork":46829, "LA":97148, "Washington":42630,
"Revenue":300765, "Percent":31},
{"Year":2008, "Quarter":"3/4", "Month":8, "Seoul":89645, "Pusan":72565,
"Incheon":23678, "NewYork":78847, "LA":62559, "Washington":87722,
"Revenue":415017, "Percent":42},
{"Year":2008, "Quarter":"3/4", "Month":9, "Seoul":14844, "Pusan":30709,
"Incheon":83037, "NewYork":23130, "LA":65006, "Washington":48367,
"Revenue":265093, "Percent":27},
{"Year":2008, "Quarter":"4/4", "Month":10, "Seoul":30598, "Pusan":55523,
"Incheon":90576, "NewYork":79997, "LA":71346, "Washington":63569,
"Revenue":391608, "Percent":34},
{"Year":2008, "Quarter":"4/4", "Month":11, "Seoul":64461, "Pusan":61341,
"Incheon":74479, "NewYork":10715, "LA":40404, "Washington":93611,
"Revenue":345011, "Percent":30},
{"Year":2008, "Quarter":"4/4", "Month":12, "Seoul":99229, "Pusan":95468,
"Incheon":108828, "NewYork":27176, "LA":28673, "Washington":54816,
"Revenue":414191, "Percent":36}];