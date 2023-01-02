BIX5.dashboard.create("dashboard1", "dashboardHolder", function(dashboard){
    dashboard.getSideBar().setSlideLayouts(slidelayouts);

    var slides =  [
        {slideName:"slide1",
        widgets:[]}
    ];
    dashboard.setSlides(slides);

    var items = [];
    dashboard.setWidgetPool(items);
    
}, "100%","100%", {enabled:true, gridlines:false});