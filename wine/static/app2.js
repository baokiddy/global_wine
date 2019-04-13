d3.json("/csv").then(function(data) {
    console.log(data);

    // Creating img tag within container one
    var container1 = d3.select(".one");

    for(var i = 0; i < 82; i++){
        container1.append("img")
            .attr("class", "item rear-window")
            .attr("data-order", i)
            .attr("src", data[i]['winePhotos'])
            .style("width", 113 + 'px')
            .style("height", 200 + 'px');
    //         .on("mouseover", function() {

    //             var current = d3.select(this).attr("data-order");
    //             var pic = d3.select(".item").attr("style", "width: 15px")
    //                 .attr("transform", "translate(0,0)");
                
    //             console.log(d3.select(".item").attr("width"));
                
    //             pic.attr("style", "width: 215px")  
    //                 .attr("transform", "translate(-"+(current/81)*200+"px,0)");

    //             console.log(d3.select(".item").attr("width"));

    //             d3.select(".item")
    //                 .attr("style", function(d, i) { 
                        
    //                     for (k = 1; k< data.length - i; k++) {
                            
    //                         var prevData = d3.select(this)
    //                             .attr("data-order", k)

    //                         return `width :${(215 - (15*(current- prevData)))}`;
        
    //                     } 
                        
    //                     for (k = data.length -1; k> i ; k--) {
                            
    //                         var afterData = d3.select(this)
    //                             .attr("data-order", k)

    //                         return `width: ${(215 - (15*(afterData - current)))}`;
        
    //                     } 
    //                 });
                    
    // })

    }
    
    // Pulling image from file and layering them with the correct width
    
    var picPosition = 1;
        
    $(".rear-window").each(function() {

        $(this).css({left: (picPosition-1) * 15});
        $(this).css("background-image", `${data.winePhotos}`);
        picPosition++;

    });
      
    $(".item").on("mouseover",function() {
          
        var current = $(this).data().order;

        console.log(current);
        var leftdif = ((current/81)*200)/current;
        var rightdif = (200-((current/81)*200))/(80-current);
        var wid = 15-(200-15)/81;

        $(".item").css({"width": "15px", "-webkit-transform": "translate(0,0)"});
        $(this).css({"width": "215px",  "-webkit-transform": "translate(-"+(current/81)*200+"px,0)"});
        $(this).prevAll(".item").each(function() {$( this ).css({"width": wid+"px", "-webkit-transform": "translate(-"+$(this).data().order*leftdif+"px,0)"});});
        $(this).nextAll(".item").each(function() {$( this ).css({"width": wid+"px", "-webkit-transform": "translate("+(81-$(this).data().order)*rightdif+"px,0)"});});
        console.log(current);
    });

    // Mouseout event where image goes back into the carousel
    $(".item").mouseout(function() {
      $(".item").css({"width": "15px", "-webkit-transform": "translate(0,0)"})

    });
});