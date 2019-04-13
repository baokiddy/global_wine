// sample chart

// var chart = c3.generate({
//   bindto: '#chart',
//   data: {
//     columns: [
//       ['data1', 30, 200, 100, 400, 150, 250],
//       ['data2', 50, 20, 10, 40, 15, 25]
//     ]
//   }
// });

// sample chart

var url = '/api'
// Grab the data with d3
d3.json(url).then(function(data) {

var topWines = data.data.filter(x => x.points > 99);

var arr = topWines.map(x =>x.country);

var counts = {}
for(var i =0;i < arr.length;i++){
    counts[arr[i]] = 1 + (counts[arr[i]] || 0);
};
console.log(counts)

// donut chart code

var chart = c3.generate({
    data: {
        columns: [
            ['Australia', counts.Australia],
            ['France', counts.France],
            ['Italy', counts.Italy],
            ['US', counts.US],
        ],
        type : 'donut',
    },
    donut: {
        title: "100pt Wine Wheel"
    }
  });
  
  // donut chart code

})


var chart_2 = c3.generate({
    bindto : '#chart_2',
    data: {
        columns: [
            ['Pinot Noir', 89.91, 52.11],
            ['Chardonnay', 88.94, 39.37],
            ['Red Blend', 88.51, 35.56],
            ['Cabernet Sauvignon', 88.86, 49.01],
            ['Bordeaux-style Red Blend', 88.71, 44.67],
        ],
        type: 'bar',
        }
    }
);









// setTimeout(function () {
//   chart.load({
//       columns: [
//           ["setosa", 2, 2, 2],
//           ["versicolor", 1, 1],
//           ["virginica", 2.0, .01],
//       ]
//   });
// }, 1500);

// setTimeout(function () {
//   chart.unload({
//       ids: 'data1'
//   });
//   chart.unload({
//       ids: 'data2'
//   });
// }, 2500);