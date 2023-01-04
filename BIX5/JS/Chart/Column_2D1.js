var chartVars = "BIX5OnLoadCallFunction=chartReadyHandler";

BIX5.chart.create("chart1", "chartHolder", chartVars, "100%", "100%");

function chartReadyHandler(id) {
    //csv데이터를 가져올 경우 datatype을 csv로 설정한다.
    document.getElementById(id).setDataType("csv");

    //레이아웃 스트링 형태, 데이터 JSON URL경로
    document.getElementById(id).setLayoutURL(layoutUrl);
    document.getElementById(id).setDataURL(dataURL);
}

//CSV 데이터 URL 경로 정의.
var dataURL = 'C:/Users/roadtech/BIX5Sample/leh60245_BIX5/BIX5/Samples/Dashboard/Widgets/Chart/data/roadData.csv';

// 데이터 URL 경로 정의.
var layoutUrl = "C:/Users/roadtech/BIX5Sample/leh60245_BIX5/BIX5/Samples/Dashboard/Widgets/Chart/layout/Column_2D1_xml.xml"

// string형식의 데이터
var chartData = [
    {"length":0.01, "L":11.60, "M":0.30, "H":0.00},
    {"length":0.02, "L":12.10, "M":0.30, "H":0.00},
    {"length":0.03, "L":10.30, "M":0.30, "H":0.00},
    {"length":0.04, "L":9.90, "M":0.30, "H":0.00},
    {"length":0.05, "L":8.30, "M":0.30, "H":0.00},
    {"length":0.06, "L":4.10, "M":0.30, "H":0.00},
]
    
    