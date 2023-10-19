function updateChart(estacao){
    $("#grafico").empty();
    CanvasJS.addColorSet("verde",["#278013"]);
    $.get("../etl_process/datasetFerrov.csv", function(data) {
    var chart = new CanvasJS.Chart("grafico", {
      title: {text: estacao,fontFamily: "tahoma",fontColor: "#278013",fontWeight: "bold",},
      colorSet: "verde",exportEnabled: true,zoomEnabled: true,
      toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
      axisX: {viewportMinimum: 2015, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
      axisY: {labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");}},
      legend: {},
      data: [{type: "line",xValueType: "number",showInLegend:true,legendText:"Passageiros por ano",dataPoints: getDataPointsFromCSV(data, estacao)}],
    });
    chart.render();});
}


function getDataPointsFromCSV(csv, estacao) {
    var dataPoints = csvLines = points = [];
    //Divide dataset em N linhas, separando pela '\n' e atribui à variável "csvLines"
    csvLines = csv.split(/\r?\n|\r/);
        
    //Percorre todas as linhas do CSV
    for (var i = 0; i < csvLines.length; i++)

        if (csvLines[i].length > 0) {
            //Separa linha do CSV com base na vírgula, e atribui valores para o array dataPoints que será retornado no final da função
            points = csvLines[i].split(",");
            if (!(points[1].localeCompare(estacao))){
                dataPoints.push({
                    x: parseInt(points[2]), 
                    y: parseInt(points[3]) 		
                });
            }
        }
    return dataPoints;
}