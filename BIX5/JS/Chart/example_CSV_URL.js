// 차트 설정 시작

//BIX5 차트 생성 준비가 완료된 상태 시 호출할 함수 지정.
//BIX5.chart.create() 함수의 세번째 인자인 chartVars 변수에 설정됨.
//규칙
 //1. chartvars 변수는 스트링이다.
 //2. 두 개 이상의 설정을 하기 위해 구분자 &를 사용한다. 
//더 많은 설명은 사용설명서 Docs에 있다.
var chartVars = "BIX5OnLoadCallFunction=chartReadyHandler";


//BIX5Chart를 생성한다.
//파라메터
 //1. 차트의id
 //2. 차트가 위치할 div의 id
 //3. 차트 생성 시 필요한 환경 변수들의 묶음인 chartVars
 //4. 차트의 가로 사이즈
 //5. 차트의 세로 사이즈
BIX5.chart.create("chart1", "chartHolder", chartVars, "100%", "100%");


// 차트의 속성인 BIX5OnLoadCallFunction으로 설정된 함수.
 //BIX5차트 준비가 완료된 경우, 이 함수가 호출됨.
 //이 함수를 통해 차트에 레이아웃과 데이터를 삽입한다.
 //파라메터: id - BIX%.chart.create() 사용 시 사용자가 지정한 id다.
// 차트 콜백함수 4개 존재.
 //1. setLayout(value)      - 차트 생성시 적용될 레이아웃을 설정한다. value에 xml 형태의 string 값을 설정한다. 
 //2. setData(value)        - 차트 생성시 적용될 데이터를 설정한다. 이때 value의 데이터의 형태는 setDataType에 의해 설정된 형태와 같아야 한다.
 //3. setDataType(value)    - 차트 생성시 적용될 데이터의 형태를 설정한다. value의 type은 string이고 유효값은 json, csv, xml이다.
 //4. setLayoutURL(value)   - 차트 생성시 적용될 레이아웃에 대한 경로(URL)를 설정한다. value의 type은 string
 //5. setDataURL(value)     - 차트 생성시 적용될 데이터에 대한 경로(URL)를 설정한다. 해당 경로에 의해서 읽혀지는 데이터의 형태는 setDataType에 의해 설정된 형태와 같아야 한다.
function chartReadyHandler(id) {
    //csv데이터를 가져올 경우 datatype을 csv로 설정한다.
    document.getElementById(id).setDataType("csv");

    //레이아웃 스트링 형태, 데이터 JSON URL경로
    document.getElementById(id).setLayout(layoutStr);
    document.getElementById(id).setDataURL(dataURL);
}

//CSV 데이터 URL 경로 정의.
var dataURL = './DataXml/multiData3.csv'


/*********************************************************************************************************************
 
  CSV 데이터를 사용할 경우는 각각의 데이터 필드명을 F0, F1, F2 .. 와 같이 설정하게 되어있습니다.
   multiData3.csv 내용으로는 0 번째 column에는 categoryField값, 1 번째 column에는 Area2DSeries의 yField 값 으로 설정.
   그리하여 아래 레이아웃에서 F0, F1, F2, F3을 레이아웃에 설정하고 있습니다.
 
*********************************************************************************************************************/

// 라인 차트를 생성하는 레이아웃이다. (string 타입)
//레이아웃은 크게 Options, Chart, Styple 세 부분으로 구분된다.
var layoutStr =
//BIX5 노드의 속성은 차트 전체의 꾸미기를 담당한다.
//아래 Style 노드에서 styleName="" 형식으로 가져올 수 있다.
'<BIX5 styleName="bix5ChartStyle">'
    //1. Options 태그에서 차트의 제목과 부제목, 그리고 범례(Legend)를 삽입할 수 있다.
+   '<Options>'
+       '<Caption text="Annual Report" styleName="captionStyle"/>'
+       '<SubCaption text="2008" styleName="subCaptionStyle"/>'
+       '<Legend/>'
+   '</Options>'

+   '<NumberFormatter id="numFmt" useThousandsSeparator="true"/>'

    //2. Style (CSS)
     //Style 노드는 전반적인 스타일을 미리 정의하는 스타일시트다.
     //규칙
      //1. Style 노드는 반드시 <BIX5> 노드의 자식 위치에 정의하기
      //2. 스타일네임을 정의 할 때 시작은 도트(.)를 찍고 소문자로 시작하는 영문자로 표기하기
      //3. 스타일네임을 정한 후 그에 따른 구체적인 스타일을 정의 할 때는 반드시 중괄호로 시작과 끝을 표시하기
      //4. 속성명과 속성값의 구분은 콜론이며 긑은 세미콜론으로 나타낸다.
+   '<Style>'
+       '.bix5ChartStyle {'
+       'backgroundColor:0xFFFFE; borderColor:0x77EE9E; cornerRadius:12; borderStyle:solid'
+       '}'
+       '.captionStyle {'
+       'fontSize:12; fontFamily:Tahoma; fontWeight:bold; color:#777777;'
+       '}'
+       '.subCaptionStyle {'
+       'fontSize:11; fontFamily:italic; color:#777777;'
+       '}'
+       '.chartStyle {'
+       'fontSize:11; fontFamily:italic; color:#0000FF;'
+       '}'
+   '</Style>'


    //3. Chart
     //Chart vs Series
     //Chart:   실질적인 차트로 외형을 담당한다. 축, 배경, 사이즈 등이 포함된다. 시리즈의 위치를 지정한다.
     //Series:  실질적인 데이터를 표현한다. 표현하고자 하는 수치데이터가 3개인 경우 반드시 시리즈를 3개 정의할 필요가 있다.
+   '<Combination2DChart showDataTips="true" styleName="chartStyle">'      
+       '<horizontalAxis>'
        /* csv데이터의 첫번 째 열 데이터에 할당 되어야 하기 때문에 F0 */
+           '<CategoryAxis categoryField="F0" padding="0.7"/>'
+       '</horizontalAxis>'
+       '<verticalAxis>'
+           '<LinearAxis id="vAxis1" formatter="{numFmt}" maximum="2200"/>'
+       '</verticalAxis>'

+       '<series>'
+           '<Column2DSet type="clustered">'
+               '<series>'
                    /* csv데이터의 두번 째 열 데이터에 할당 되어야 하기 때문에 F1 */
+                   '<Column2DSeries yField="F1" displayName="Profit" labelPosition="outside" showValueLabels="[0]">'
+                       '<fill>'
+                           '<SolidColor color="#40b2e6"/>'
+                       '</fill>'
+                       '<showDataEffect>'
+                           '<SeriesInterpolate/>'
+                       '</showDataEffect>'
+                   '</Column2DSeries>'
                    /* F2 */
+                   '<Column2DSeries yField="F2" displayName="Cost" labelPosition="outside" showValueLabels="[0]">'
+                       '<fill>'
+                           '<SolidColor color="#4453a8"/>'
+                       '</fill>'
+                       '<showDataEffect>'
+                           '<SeriesInterpolate/>'
+                       '</showDataEffect>'
+                   '</Column2DSeries>'
+               '</series>'
+           '</Column2DSet>'
                /* F3 */
+           '<Line2DSeries selectable="true" yField="F3" radius="4" form="curve" displayName="Revenue" itemRenderer="CircleItemRenderer">'
+               '<stroke>'
+                   '<Stroke color="#f9bd03" weight="3"/>'
+               '</stroke>'
+               '<lineStroke>'
+                   '<Stroke color="#f9bd03" weight="3"/>'
+               '</lineStroke>'
+               '<verticalAxis>'
+                   '<LinearAxis id="vAxis2" interval="400" formatter="{numFmt}" maximum="1800"/>'
+               '</verticalAxis>'
+               '<showDataEffect>'
+                   '<SeriesInterpolate/>'
+               '</showDataEffect>'
+           '</Line2DSeries>'
+       '</series>'
+       '<verticalAxisRenderers>'
+           '<Axis2DRenderer axis="{vAxis1}" showLine="false"/>'
+           '<Axis2DRenderer axis="{vAxis2}" showLine="false"/>'
+       '</verticalAxisRenderers>'
+   '</Combination2DChart>'
+'</BIX5>';