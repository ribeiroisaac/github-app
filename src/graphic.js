function cleanChart(){
    $("#grafico").empty();
}

function gerenciaRamaisChart(checkDeodoro, checkSantaCruz, checkJaperi, checkSaracuruna, checkBelfordRoxo){
    const ramaisMarcados=[];
    if(!checkDeodoro && !checkBelfordRoxo && !checkSantaCruz && !checkJaperi && !checkSaracuruna){
        updateChart("Estado do Rio de Janeiro", "black");
    }
    else {
        if(checkDeodoro){
            ramaisMarcados.push(["Deodoro","#f00000"])
//            updateRamalChart("Deodoro","#f00000");
        }
        if(checkSantaCruz){
            ramaisMarcados.push(["Santa Cruz","#00f03c"])
//            updateRamalChart("Santa Cruz","#00f03c");
        }
        if(checkJaperi){
            ramaisMarcados.push(["Japeri","#00a8f0"])
//            updateRamalChart("Japeri","#00a8f0");
        }
        if(checkSaracuruna){
            ramaisMarcados.push(["Saracuruna","#f07c00"])
//            updateRamalChart("Saracuruna","#f07c00");
        }
        if(checkBelfordRoxo){
            ramaisMarcados.push(["Belford Roxo","#8800f0"])
//            updateRamalChart("Belford Roxo","#8800f0");
        }
        updateRamal(ramaisMarcados)
    }    
}


function updateRamal(ramaisMarcados){
    switch(ramaisMarcados.length){
        case 1:
            CanvasJS.addColorSet("cor",[ramaisMarcados[0][1]]);
            $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
            var chart = new CanvasJS.Chart("grafico", {
              title: {text: ramaisMarcados[0][0],fontFamily: "tahoma",fontColor: ramaisMarcados[0][1],fontWeight: "bold",fontSize:25},
              colorSet: "cor",exportEnabled: true,zoomEnabled: true,
              toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
              axisX: {viewportMinimum: 2010, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
              axisY: {labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");}},
              legend: {},
              data: [{type: "line",xValueType: "number",showInLegend:true,legendText:"Passageiros por ano",dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[0][0])}],
            });
            chart.render();});
            break;

        case 2:
            $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
                var chart = new CanvasJS.Chart("grafico", {
                  title: {text: "Comparaçao de Ramais",fontFamily: "tahoma",fontColor: "black",fontWeight: "bold",fontSize:25},
                  colorSet: "black",exportEnabled: true,zoomEnabled: true,
                  toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
                  axisX: {viewportMinimum: 2010, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
                  axisY: [{
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    }],
                  data: [
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[0][1],
                        legendText: ramaisMarcados[0][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[0][0]),
                    },
                    {
                        type: "line", xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[1][1],
                        legendText: ramaisMarcados[1][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[1][0])
                    }
                  ],
                });
                chart.render();});
                break;
        
        case 3:
            $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
                var chart = new CanvasJS.Chart("grafico", {
                  title: {text: "Comparaçao de Ramais",fontFamily: "tahoma",fontColor: "black",fontWeight: "bold",fontSize:25},
                  colorSet: "black",exportEnabled: true,zoomEnabled: true,
                  toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
                  axisX: {viewportMinimum: 2010, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
                  axisY: [{
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    }],
                  data: [
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[0][1],
                        legendText: ramaisMarcados[0][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[0][0]),
                    },
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[1][1],
                        legendText: ramaisMarcados[1][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[1][0]),
                    },
                    {
                        type: "line", xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[2][1],
                        legendText: ramaisMarcados[2][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[2][0])
                    }
                  ],
                });
                chart.render();});
                break;

        case 4:
            $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
                var chart = new CanvasJS.Chart("grafico", {
                  title: {text: "Comparaçao de Ramais",fontFamily: "tahoma",fontColor: "black",fontWeight: "bold",fontSize:25},
                  colorSet: "black",exportEnabled: true,zoomEnabled: true,
                  toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
                  axisX: {viewportMinimum: 2010, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
                  axisY: [{
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    }],
                  data: [
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[0][1],
                        legendText: ramaisMarcados[0][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[0][0]),
                    },
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[1][1],
                        legendText: ramaisMarcados[1][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[1][0]),
                    },
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[2][1],
                        legendText: ramaisMarcados[2][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[2][0]),
                    },
                    {
                        type: "line", xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[3][1],
                        legendText: ramaisMarcados[3][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[3][0])
                    }
                  ],
                });
                chart.render();});
            break;

        case 5:
            $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
                var chart = new CanvasJS.Chart("grafico", {
                  title: {text: "Comparaçao de Ramais",fontFamily: "tahoma",fontColor: "black",fontWeight: "bold",fontSize:25},
                  colorSet: "black",exportEnabled: true,zoomEnabled: true,
                  toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
                  axisX: {viewportMinimum: 2010, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
                  axisY: [{
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    },
                    {
                    labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},
                    labelFontColor: "black"
                    }],
                data: [
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[0][1],
                        legendText: ramaisMarcados[0][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[0][0]),
                    },
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[1][1],
                        legendText: ramaisMarcados[1][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[1][0]),
                    },
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[2][1],
                        legendText: ramaisMarcados[2][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[2][0]),
                    },
                    {
                        type: "line", xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[3][1],
                        legendText: ramaisMarcados[3][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[3][0])
                    },
                    {
                        type: "line",xValueType: "number",showInLegend:true,
                        color: ramaisMarcados[4][1],
                        legendText: ramaisMarcados[4][0],
                        dataPoints: getDataPointsFromCSVRamal(data, ramaisMarcados[4][0])
                    }
                  ],
                });
                chart.render();});
                break;
    }
}


function updateRamalChart(ramal, color){
    CanvasJS.addColorSet("verde",[color]);
    $.get("../etl_process/datasetFinal_Ferrov.csv", function(data) {
    var chart = new CanvasJS.Chart("grafico", {
      title: {text: ramal,fontFamily: "tahoma",fontColor: color,fontWeight: "bold",fontSize:25},
      colorSet: "verde",exportEnabled: true,zoomEnabled: true,
      toolbar: {itemBackgroundColor: "#d3d3d3", itemBackgroundColorOnHover: "#3e3e3e", buttonBorderColor: "#3e3e3e"},
      axisX: {viewportMinimum: 2015, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
      axisY: {labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");}},
      legend: {},
      data: [{type: "line",xValueType: "number",showInLegend:true,legendText:"Passageiros por ano",dataPoints: getDataPointsFromCSVRamal(data, ramal)}],
    });
    chart.render();});
}

function getDataPointsFromCSVRamal(csv, ramal) {
    var dataPoints = csvLines = points = [];
    //Divide dataset em N linhas, separando pela '\n' e atribui à variável "csvLines"
    csvLines = csv.split(/\r?\n|\r/);
        
    //Percorre todas as linhas do CSV
    for (var i = 0; i < csvLines.length; i++)

        if (csvLines[i].length > 0) {
            //Separa linha do CSV com base na vírgula, e atribui valores para o array dataPoints que será retornado no final da função
            points = csvLines[i].split(",");
            if (!(points[0].localeCompare(ramal)) && !(points[1].localeCompare("Subsistema"))){
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
      axisX: {viewportMinimum: 2010, labelFormatter: function (e) {return CanvasJS.formatNumber(e.value, "#");},},
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