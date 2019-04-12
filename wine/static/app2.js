d3.json("/csv").then(function(data) {
    console.log(data);

    // Creating img tag within container one
    var container1 = d3.select(".one");

    for(var i = 0; i < 82; i++){
        container1.append("img")
            .attr("class", "item rear-window")
            .attr("data-order", i)
            .attr("src", data[i]['winePhotos'])
    }
    
    // Pulling image from file and layering them with the correct width
    
    var picPosition = 1;
    //var pics = data.winePhotos;

    // wineData.forEach(function(data) {
            
    // });
        

    $(".rear-window").each(function() {

        $(this).css({left: (picPosition-1) * 15});
        
        $(this).css("background-image", `${data.winePhotos}`);
        // $(this).css("background-image", `url()`);
        picPosition++;

    });
      
        // console.log(pics);
});