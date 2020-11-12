// AJAX //

// let mydatas = new XMLHttpRequest();
// mydatas.open("get", "https://canvasjs.com/services/data/datapoints.php", true);
// mydatas.send()

// if (mydatas.status === 200) {
//   // parfait !
//   console.log(mydatas.response)
// } else {
//   console.log("erreur")
// }


//==================================================================================================

document.getElementById("firstHeading").insertAdjacentHTML("beforebegin",'<button id="run" style="background-color : blue; color : white">show graphs</button>  ');
document.getElementById("run").addEventListener("click", function(){

  document.getElementById("firstHeading").insertAdjacentHTML("afterend",'<canvas id="graphiqueZero" width="800" height="450"></canvas>');

  setInterval(async function(){
    fetch(`https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=${Math.floor(Math.random()*10)}&length=10&type=json`)
    .then(response => response.json())
    .then(data => {

      let arr = [];

      arr.push(data);

      let labels1 = [];
      let data1 = [];

      arr[0].forEach(element => {
        labels1.push(element[0]);
        data1.push(element[1]);
      });
    
      new Chart(document.getElementById("graphiqueZero"), {
        type: 'line',
        data: {
          labels: labels1,
          datasets: [{ 
            data: data1, 
            borderColor: "#3e95cd",
            fill: false
          }]
        }
      })
    })
  }, 1000);


  //____________________________________________________________________________________________

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //_____________________________________________________________________________________________


  document.getElementById("table1").insertAdjacentHTML("beforebegin",'<canvas id="graphiqueOne" width="800" height="450"></canvas>');

  let years = Array.from(document.querySelectorAll("#table1 tbody tr")[0].children);

  let labelsTableOne = [];

  years.forEach( year => {
    if(year.innerText > 0){
      labelsTableOne.push(Number(year.innerText))
    }
  });

  let datasets =  Array.from(document.querySelectorAll("#table1 tbody tr"));
  datasets.shift()

  let datasetTableOne = [];

  datasets.forEach(datas => {
    let object = {};
    let arrData = [];

    data = Array.from(datas.children)
    data.shift()
    data.shift()

    data.forEach(x => {
      arrData.push(parseInt(x.innerText))
    })

    object.data = arrData;
    object.label = datas.children[1].innerText;
    object.borderColor = getRandomColor();
    object.fill = false;
    datasetTableOne.push(object)
  });

  new Chart(document.getElementById("graphiqueOne"), {
      type: 'line',
      data: {
        labels: labelsTableOne,
        datasets: datasetTableOne
      },
      options: {
        title: {
          display: true,
        }
      }
  });


  //_____________________________________________________________________________________________



  document.getElementById("table2").insertAdjacentHTML("beforebegin",'<canvas id="graphiqueTwo" width="800" height="450"></canvas>');

  let labelsTableTwo = ["2007-09","2010-12"];

  let datasetsT2 =  Array.from(document.querySelectorAll("#table2 tbody tr"));

  let datasetsTableTwo = [];

  datasetsT2.forEach(datas => {
    let object = {};
    let arrData = [];

    data = Array.from(datas.children)
    data.shift()
    data.shift()

    data.forEach(x => {
      arrData.push(parseInt(x.innerText))
    })

    object.data = arrData;
    object.label = datas.children[1].innerText;
    object.type = "bar";
    object.borderColor = getRandomColor();
    object.backgroundColor = getRandomColor();
    object.fill = false;
    datasetsTableTwo.push(object)
  });



  new Chart(document.getElementById("graphiqueTwo"), {
    type: 'bar',
    data: {
      labels: labelsTableTwo,
      datasets: datasetsTableTwo,
    },
  });
})

//_____________________________________________________________________________________________________

document.getElementById("firstHeading").insertAdjacentHTML("beforebegin",'<button id="run2" style="background-color : blue; color : white">not show graphs</button> <br> <br>');

document.getElementById("run2").addEventListener("click", function(){

  document.getElementById("graphiqueZero").remove()
  document.getElementById("graphiqueOne").remove()
  document.getElementById("graphiqueTwo").remove()

})

//===============================================================================================================

// commentaire graphique 0 :

  // fetch('https://canvasjs.com/services/data/datapoints.php')
  // .then(response => response.json())
  // .then(data => {
  //   arr.push(data);
  //   console.log(arr[0]);

  //   let labels1 = [];
  //   let data1 = [];

  //   arr[0].forEach(element => {
  //     labels1.push(element[0]);
  //     data1.push(element[1]);
  //   });
  
  //   new Chart(document.getElementById("line-chart2"), {
  //     type: 'line',
  //     data: {
  //       labels: labels1,
  //       datasets: [{ 
  //         data: data1, 
  //         borderColor: "#3e95cd",
  //         fill: false
  //        }]
  //     }
  //   });
  //   // setTimeout(function(){updateChart()}, 1000);
  // });



  // new Chart(document.getElementById("line-chart2"), {
  //   type: 'line',
  //   data: {
  //     labels: ["0", "1","2", "15","20", "25","30"], 
  //     datasets: [{ 
  //       data: ["100","200","300","400"], 
  //       borderColor: "#3e95cd",
  //       fill: false
  //      }]
  //   }
  // });


// Commentaires graphique 1 : 

          // datasets: [{ 
          //     data: [86,114,106,106,107,111,133,221,783,2478],
          //     label: "Africa",
          //     borderColor: "#3e95cd",
          //     fill: false
          //   }, { 
          //     data: [282,350,411,502,635,809,947,1402,3700,5267],
          //     label: "Asia",
          //     borderColor: "#8e5ea2",
          //     fill: false
          //   }, { 
          //     data: [168,170,178,190,203,276,408,547,675,734],
          //     label: "Europe",
          //     borderColor: "#3cba9f",
          //     fill: false
          //   }, { 
          //     data: [40,20,10,16,24,38,74,167,508,784],
          //     label: "Latin America",
          //     borderColor: "#e8c3b9",
          //     fill: false
          //   }, { 
          //     data: [6,3,2,2,7,26,82,172,312,433],
          //     label: "North America",
          //     borderColor: "#c45850",
          //     fill: false
          //   }
        // ]


// Commentaire graphique 2 :

      // datasets: [{
      //     label: "Europe",
      //     type: "line",
      //     borderColor: "#8e5ea2",
      //     data: [408,547,675,734],
      //     fill: false
      //   }, {
      //     label: "Africa",
      //     type: "line",
      //     borderColor: "#3e95cd",
      //     data: [133,221,783,2478],
      //     fill: false
      //   }, {
      //     label: "Europe",
      //     type: "bar",
      //     backgroundColor: "rgba(0,0,0,0.2)",
      //     data: [408,547,675,734],
      //   }, {
      //     label: "Africa",
      //     type: "bar",
      //     backgroundColor: "rgba(0,0,0,0.2)",
      //     backgroundColorHover: "#3e95cd",
      //     data: [133,221,783,2478]
      //   }
      // ]

      // options: {
      //   title: {
      //     display: true,
      //     text: 'Population growth (millions): Europe & Africa'
      //   },
      //   legend: { display: false }
      // }
