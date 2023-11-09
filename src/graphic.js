
function cleanChart(){
    $("#grafico").empty();
}

function gerenciaRamaisChart(checkDeodoro, checkSantaCruz, checkJaperi, checkSaracuruna, checkBelfordRoxo){
    const ramaisMarcados=[];
    if(!checkDeodoro && !checkBelfordRoxo && !checkSantaCruz && !checkJaperi && !checkSaracuruna){
        updateChart("Estado do Rio de Janeiro", "black");
    }

    if(checkDeodoro){
        ramaisMarcados.push(["Deodoro","#f00000"])
        console.log(ramaisMarcados);
        updateRamalChart("Deodoro","#f00000");
    }
    if(checkSantaCruz){
        ramaisMarcados.push(["Santa Cruz","#00f03c"])
        console.log(ramaisMarcados);
        updateRamalChart("Santa Cruz","#00f03c");
    }
    if(checkJaperi){
        ramaisMarcados.push(["Japeri","#00a8f0"])
        console.log(ramaisMarcados);
        updateRamalChart("Japeri","#00a8f0");
    }
    if(checkSaracuruna){
        ramaisMarcados.push(["Saracuruna","#f07c00"])
        console.log(ramaisMarcados);
        updateRamalChart("Saracuruna","#f07c00");
    }
    if(checkBelfordRoxo){
        ramaisMarcados.push(["Belford Roxo","#8800f0"])
        console.log(ramaisMarcados);
        updateRamalChart("Belford Roxo","#8800f0");
    }
}

function updateRamalChart(estacao, color){
    console.log(estacao);
    console.log(color);
    cleanChart();
    CanvasJS.addColorSet("verde",[color]);
    $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
    var chart = new CanvasJS.Chart("grafico", {
      title: {text: estacao,fontFamily: "tahoma",fontColor: color,fontWeight: "bold",fontSize:25},
      colorSet: "verde",exportEnabled: true,zoomEnabled: true,
      toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
      axisX: {viewportMinimum: 2015, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
      axisY: {labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");}},
      legend: {},
      data: [{type: "line",xValueType: "number",showInLegend:true,legendText:"Passageiros por ano",dataPoints: getDataPointsFromCSVRamal(data, estacao)}],
    });
    chart.render();});
}

function getDataPointsFromCSVRamal(csv, estacao) {
    console.log(estacao);
    var dataPoints = csvLines = points = [];
    //Divide dataset em N linhas, separando pela '\n' e atribui à variável "csvLines"
    csvLines = csv.split(/\r?\n|\r/);
        
    //Percorre todas as linhas do CSV
    for (var i = 0; i < csvLines.length; i++)

        if (csvLines[i].length > 0) {
            //Separa linha do CSV com base na vírgula, e atribui valores para o array dataPoints que será retornado no final da função
            points = csvLines[i].split(",");
            console.log(points);
            if (!(points[0].localeCompare(estacao)) && !(points[1].localeCompare("Subsistema"))){
                dataPoints.push({
                    x: parseInt(points[4]), 
                    y: parseInt(points[5]) 		
                });
            }
        }
    return dataPoints;
}

function updateChart(estacao, color){
    cleanChart();
    CanvasJS.addColorSet("verde",[color]);
    $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
    var chart = new CanvasJS.Chart("grafico", {
      title: {text: estacao,fontFamily: "tahoma",fontColor: color,fontWeight: "bold",fontSize:25},
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
                    x: parseInt(points[4]), 
                    y: parseInt(points[5]) 		
                });
            }
        }
    return dataPoints;
}