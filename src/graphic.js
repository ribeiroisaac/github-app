function getDataPointsFromCSV(csv) {
    var dataPoints = csvLines = points = [];
    //Divide dataset em N linhas, separando pela '\n' e atribui à variável "csvLines"
    csvLines = csv.split(/\r?\n|\r/);
        
    //Percorre todas as linhas do CSV
    for (var i = 0; i < csvLines.length; i++)

        if (csvLines[i].length > 0) {
            //Separa linha do CSV com base na vírgula, e atribui valores para o array dataPoints que será retornado no final da função
            points = csvLines[i].split(",");
            if (!(points[1].localeCompare("Madureira"))){
                dataPoints.push({
                    x: parseInt(points[2]), 
                    y: parseInt(points[3]) 		
                });
            }
        }
    return dataPoints;
}
