### BIX5 실험 단계 파일
- __BIX5__: bix5에 필요한 각종 자원 파일이 있다.
    - __Assets__: CSS, Image, Fonts 등 자원에 관련된 파일이 있다.
    - __JS__: 라이브러리 및 각종 JS파일이 있다.
- __Data__: 사용하는 data가 있다.
- __LicenseKey__: BIX5 라이선스 파일이 있다.
- __Samples__: 각 제품의 샘플들이 있다.
    - __Dashboard__: 대시보드 샘플이 있는 폴더다.
        - __Widgets__: 위젯 관련 파일들이 있다.
            - __Chart__: 차트 위젯과 관련된 파일이 있다.
                - __layout__: 컴포넌트 레이아웃 파일이 있다. 확장자는 xml이다.
            - __Grid__: 그리드 위젯과 관련된 파일이 있다.
                - __layout__: 컴포넌트 레이아웃 파일이 있다. 확장자는 xml이다.
            - __Html__: html 위젯과 관련되 파일이 있다.

### 추가로 필요한 기능 모음
- JSON string 형식 데이터를 html 위젯으로 데시보드에 구현 (http://demo.bix5.net/SDK/Samples/Chart/Embeding_URL_Array.html)
- 버튼 클릭 시 이벤트 발생
    1. map 위젯 위 버튼 클릭 시 차트 변경 및 그리드 강조 효과.
    (현제 구현된 map이 BIX5가 아닌 일반 Javascript라 연동 가능 여부 확인 필요)
    2. 그리드 클릭 시 map 위젯 위 버튼 강조 및 차트 변경
    3. 차트 클릭 시 다른 차트 생성 (http://demo.bix5.net/SDK/Samples/Chart/Click_Pie3D_CreateChart.html)  
- 

### 아직 모르는 부분
- chart나 grid를 생성할 때 사용되는 widget.~ 은 대시보드에 생성을 해야 하는지, 아니면 각 위젯에 각자 생성을 해야 하는지를 모르겠다.
