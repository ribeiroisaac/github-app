//  Criação do mapa
var map = L.map('map').setView([-22.78, -43.3096], 10.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//  Conjunto GeoJSON de Estações
var geojsonEstacoes = {
    "type": "FeatureCollection",
    "features": [
    { 
        "type": "Feature", 
        "properties": { 
            "objectid": 1, 
            "cod": 60, 
            "nome": "Nova Iguaçu", 
            "flg_integraonibus": null, 
            "flg_integrametro": null, 
            "flg_terminal": 1, 
            "flg_transframal": null, 
            "flg_transfcentral": null, 
            "flg_integratele": null, 
            "flg_mun": 0, 
            "flg_ativa": null, 
            "status": null, 
            "flg_belfordroxo": null, 
            "flg_saracuruna": null, 
            "flg_deodoro": null, 
            "flg_santacruz": null, 
            "flg_japeri": 1, 
            "flg_paracambi": null, 
            "flg_vilainhomirim": null, 
            "flg_guapimirim": null, 
            "data_inc": null, 
            "integra_brt": null, 
            "corredor_brt": null 
        }, 
        "geometry": { 
            "type": "Point", 
            "coordinates": [ -43.449436168705333, -22.760743070849077 ] 
        } 
    },
    { "type": "Feature", "properties": { "objectid": 2, "cod": 20, "nome": "Comendador Soares", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.488991839671286, -22.744159956903395 ] } },
    { "type": "Feature", "properties": { "objectid": 3, "cod": 4, "nome": "Austin", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.522756662332789, -22.720321443121655 ] } },
    { "type": "Feature", "properties": { "objectid": 4, "cod": 81, "nome": "Queimados", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.556146917208963, -22.716257290424608 ] } },
    { "type": "Feature", "properties": { "objectid": 5, "cod": 29, "nome": "Engenheiro Pedreira", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.606102279366311, -22.678758378455345 ] } },
    { "type": "Feature", "properties": { "objectid": 6, "cod": 41, "nome": "Japeri", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": 1, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.652983281848179, -22.644289089733508 ] } },
    { "type": "Feature", "properties": { "objectid": 7, "cod": 96, "nome": "Silva Freire", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.275609917790014, -22.90394103348385 ] } },
    { "type": "Feature", "properties": { "objectid": 8, "cod": 46, "nome": "Lages", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": 1, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.704391165073766, -22.622064996535645 ] } },
    { "type": "Feature", "properties": { "objectid": 9, "cod": 66, "nome": "Paracambi", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": 1, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.711155564426235, -22.611969681127967 ] } },
    { "type": "Feature", "properties": { "objectid": 10, "cod": 103, "nome": "Vila Militar", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": "Transolímpica" }, "geometry": { "type": "Point", "coordinates": [ -43.401868396394448, -22.86249044952347 ] } },
    { "type": "Feature", "properties": { "objectid": 11, "cod": 48, "nome": "Magalhães Bastos", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.413225265663264, -22.867997835007191 ] } },
    { "type": "Feature", "properties": { "objectid": 12, "cod": 84, "nome": "Realengo", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.429452565142782, -22.874774481245584 ] } },
    { "type": "Feature", "properties": { "objectid": 13, "cod": 65, "nome": "Padre Miguel", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.447424866810984, -22.875101748901564 ] } },
    { "type": "Feature", "properties": { "objectid": 14, "cod": 5, "nome": "Bangu", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.464882236644364, -22.875351058301163 ] } },
    { "type": "Feature", "properties": { "objectid": 15, "cod": 35, "nome": "Guilherme da Silveira", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.456025803561438, -22.875228483359322 ] } },
    { "type": "Feature", "properties": { "objectid": 16, "cod": 90, "nome": "Santíssimo", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.511643784011966, -22.879815353846293 ] } },
    { "type": "Feature", "properties": { "objectid": 17, "cod": 95, "nome": "Senador Camará", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.486638752424305, -22.875817196589896 ] } },
    { "type": "Feature", "properties": { "objectid": 18, "cod": 3, "nome": "Augusto Vasconcelos", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.537154135918811, -22.89284756600269 ] } },
    { "type": "Feature", "properties": { "objectid": 19, "cod": 89, "nome": "Santa Cruz", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": "Transoeste" }, "geometry": { "type": "Point", "coordinates": [ -43.684691728320772, -22.915947560389224 ] } },
    { "type": "Feature", "properties": { "objectid": 20, "cod": 64, "nome": "Paciência", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": "Transoeste" }, "geometry": { "type": "Point", "coordinates": [ -43.632692382491818, -22.916320168643725 ] } },
    { "type": "Feature", "properties": { "objectid": 21, "cod": 98, "nome": "Tancredo Neves", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.649386036983579, -22.91890512588051 ] } },
    { "type": "Feature", "properties": { "objectid": 22, "cod": 23, "nome": "Cosmos", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.614606785670425, -22.912811589124839 ] } },
    { "type": "Feature", "properties": { "objectid": 23, "cod": 38, "nome": "Inhoaíba", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.595737549992222, -22.909130634203869 ] } },
    { "type": "Feature", "properties": { "objectid": 24, "cod": 13, "nome": "Campo Grande", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": "Transoeste" }, "geometry": { "type": "Point", "coordinates": [ -43.560275191774188, -22.902275429666087 ] } },
    { "type": "Feature", "properties": { "objectid": 25, "cod": 9, "nome": "Benjamin do Monte", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": 1, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.580688701683606, -22.906229423022317 ] } },
    { "type": "Feature", "properties": { "objectid": 26, "cod": 51, "nome": "Manguinhos", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.250883769897953, -22.879741922170517 ] } },
    { "type": "Feature", "properties": { "objectid": 27, "cod": 11, "nome": "Bonsucesso", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": 1, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.255455880437154, -22.867307389102464 ] } },
    { "type": "Feature", "properties": { "objectid": 28, "cod": 83, "nome": "Ramos", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.260092461960141, -22.855091222809978 ] } },
    { "type": "Feature", "properties": { "objectid": 29, "cod": 61, "nome": "Olaria", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": "Transcarioca" }, "geometry": { "type": "Point", "coordinates": [ -43.266363310331776, -22.847186665677075 ] } },
    { "type": "Feature", "properties": { "objectid": 30, "cod": 74, "nome": "Penha", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": "Transcarioca" }, "geometry": { "type": "Point", "coordinates": [ -43.278626032060622, -22.840383967060625 ] } },
    { "type": "Feature", "properties": { "objectid": 31, "cod": 75, "nome": "Penha Circular", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.28504288396995, -22.836634243663973 ] } },
    { "type": "Feature", "properties": { "objectid": 32, "cod": 12, "nome": "Brás de Pina", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.293002865025933, -22.830387729038055 ] } },
    { "type": "Feature", "properties": { "objectid": 33, "cod": 21, "nome": "Cordovil", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.295924778436273, -22.824015074858508 ] } },
    { "type": "Feature", "properties": { "objectid": 34, "cod": 69, "nome": "Parada de Lucas", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.300743814420606, -22.816661760748747 ] } },
    { "type": "Feature", "properties": { "objectid": 35, "cod": 101, "nome": "Vigário Geral", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.30546508321482, -22.805130681102231 ] } },
    { "type": "Feature", "properties": { "objectid": 36, "cod": 27, "nome": "Duque de Caxias", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.309591464824486, -22.78770107269678 ] } },
    { "type": "Feature", "properties": { "objectid": 37, "cod": 22, "nome": "Corte 8", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.306777630818061, -22.772814982368093 ] } },
    { "type": "Feature", "properties": { "objectid": 38, "cod": 33, "nome": "Gramacho", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.304120245371237, -22.751737702016936 ] } },
    { "type": "Feature", "properties": { "objectid": 39, "cod": 91, "nome": "São Bento", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.300291171164112, -22.732035600888057 ] } },
    { "type": "Feature", "properties": { "objectid": 40, "cod": 14, "nome": "Campos Elíseos", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.281273031553042, -22.70434224303979 ] } },
    { "type": "Feature", "properties": { "objectid": 41, "cod": 44, "nome": "Jardim Primavera", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.262822792032409, -22.690724182169799 ] } },
    { "type": "Feature", "properties": { "objectid": 42, "cod": 94, "nome": "Saracuruna", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.247535465002379, -22.678185547827432 ] } },
    { "type": "Feature", "properties": { "objectid": 43, "cod": 17, "nome": "Central do Brasil (antiga Dom Pedro II )", "flg_integraonibus": 1, "flg_integrametro": 1, "flg_terminal": 1, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": 1, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": 1, "flg_deodoro": 1, "flg_santacruz": 1, "flg_japeri": 1, "flg_paracambi": 1, "flg_vilainhomirim": 1, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.191856781540622, -22.903535618369766 ] } },
    { "type": "Feature", "properties": { "objectid": 44, "cod": 58, "nome": "Morabi", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.230506548056759, -22.658890212182875 ] } },
    { "type": "Feature", "properties": { "objectid": 45, "cod": 37, "nome": "Imbariê", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.21995431691974, -22.6426137992521 ] } },
    { "type": "Feature", "properties": { "objectid": 46, "cod": 52, "nome": "Manoel Belo", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.210868743173535, -22.630984388589262 ] } },
    { "type": "Feature", "properties": { "objectid": 47, "cod": 67, "nome": "Parada Angélica", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.203151121345947, -22.621141254118317 ] } },
    { "type": "Feature", "properties": { "objectid": 48, "cod": 76, "nome": "Piabetá", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.179733161605448, -22.609829958231817 ] } },
    { "type": "Feature", "properties": { "objectid": 49, "cod": 32, "nome": "Fragoso", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.184227085138026, -22.589012723919556 ] } },
    { "type": "Feature", "properties": { "objectid": 50, "cod": 102, "nome": "Vila Inhomirim", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 0, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": 1, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.184723469015942, -22.571332052316187 ] } },
    { "type": "Feature", "properties": { "objectid": 51, "cod": 36, "nome": "Honório Gurgel", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.356328269843225, -22.850395889446194 ] } },
    { "type": "Feature", "properties": { "objectid": 52, "cod": 87, "nome": "Rocha Miranda", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.351939948561949, -22.854446854412526 ] } },
    { "type": "Feature", "properties": { "objectid": 53, "cod": 56, "nome": "Mercadão de Madureira (antiga Magno)", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": 1, "corredor_brt": "Transcarioca" }, "geometry": { "type": "Point", "coordinates": [ -43.336938031595949, -22.873026302176431 ] } },
    { "type": "Feature", "properties": { "objectid": 54, "cod": 16, "nome": "Cavalcanti", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.315752090811436, -22.87461757613406 ] } },
    { "type": "Feature", "properties": { "objectid": 55, "cod": 99, "nome": "Tomás Coelho", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.303978148764038, -22.869012330011632 ] } },
    { "type": "Feature", "properties": { "objectid": 56, "cod": 78, "nome": "Pilares (antiga Cintra Vidal)", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.291565426776572, -22.880947053716596 ] } },
    { "type": "Feature", "properties": { "objectid": 57, "cod": 25, "nome": "Del Castilho", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.269766181053882, -22.880414235950678 ] } },
    { "type": "Feature", "properties": { "objectid": 58, "cod": 7, "nome": "Barros Filho", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.366560443219996, -22.833211364460453 ] } },
    { "type": "Feature", "properties": { "objectid": 59, "cod": 24, "nome": "Costa Barros", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.370178767388268, -22.821687055561512 ] } },
    { "type": "Feature", "properties": { "objectid": 60, "cod": 73, "nome": "Pavuna", "flg_integraonibus": null, "flg_integrametro": 1, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.366733903824077, -22.805759863254732 ] } },
    { "type": "Feature", "properties": { "objectid": 61, "cod": 40, "nome": "Jacarezinho (antiga Vieira Fazenda)", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.255082518021126, -22.883767098382407 ] } },
    { "type": "Feature", "properties": { "objectid": 62, "cod": 100, "nome": "Triagem", "flg_integraonibus": null, "flg_integrametro": 1, "flg_terminal": null, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": 1, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.244140310081193, -22.896695014211449 ] } },
    { "type": "Feature", "properties": { "objectid": 63, "cod": 1, "nome": "Agostinho Porto", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.381618680894881, -22.788601487226241 ] } },
    { "type": "Feature", "properties": { "objectid": 64, "cod": 104, "nome": "Vila Rosali", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.375380260147764, -22.793857321201163 ] } },
    { "type": "Feature", "properties": { "objectid": 65, "cod": 19, "nome": "Coelho da Rocha", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.387479242301481, -22.778762165278781 ] } },
    { "type": "Feature", "properties": { "objectid": 66, "cod": 8, "nome": "Belford Roxo", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": 1, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.399931589628139, -22.763866742418166 ] } },
    { "type": "Feature", "properties": { "objectid": 67, "cod": 50, "nome": "Mangueira", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.236778396192086, -22.908466671639864 ] } },
    { "type": "Feature", "properties": { "objectid": 68, "cod": 79, "nome": "Praça da Bandeira (antiga Lauro Muller)", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.212833202759981, -22.909833778622797 ] } },
    { "type": "Feature", "properties": { "objectid": 69, "cod": 53, "nome": "Maracanã", "flg_integraonibus": 1, "flg_integrametro": 1, "flg_terminal": null, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": 1, "flg_deodoro": 1, "flg_santacruz": 1, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.233743840274009, -22.909284074631312 ] } },
    { "type": "Feature", "properties": { "objectid": 70, "cod": 55, "nome": "Méier", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.278033872133847, -22.901729765683719 ] } },
    { "type": "Feature", "properties": { "objectid": 71, "cod": 30, "nome": "Engenho de Dentro", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.29374281927732, -22.895505952249831 ] } },
    { "type": "Feature", "properties": { "objectid": 72, "cod": 77, "nome": "Piedade", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.309352035290367, -22.890693375300877 ] } },
    { "type": "Feature", "properties": { "objectid": 73, "cod": 82, "nome": "Quintino Bocaiúva", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.320542166142026, -22.888700080479051 ] } },
    { "type": "Feature", "properties": { "objectid": 74, "cod": 15, "nome": "Cascadura", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.328068760503641, -22.882695498102592 ] } },
    { "type": "Feature", "properties": { "objectid": 75, "cod": 47, "nome": "Madureira", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": 1, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": "Transcarioca" }, "geometry": { "type": "Point", "coordinates": [ -43.337545243050677, -22.876646152403172 ] } },
    { "type": "Feature", "properties": { "objectid": 76, "cod": 63, "nome": "Osvaldo Cruz", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.350139621632415, -22.869192756433748 ] } },
    { "type": "Feature", "properties": { "objectid": 77, "cod": 10, "nome": "Bento Ribeiro", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.361009025487299, -22.864433082515717 ] } },
    { "type": "Feature", "properties": { "objectid": 78, "cod": 54, "nome": "Marechal Hermes", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.371068434057719, -22.860766189171098 ] } },
    { "type": "Feature", "properties": { "objectid": 79, "cod": 26, "nome": "Deodoro", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": 1, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": 1, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": "Transolímpica" }, "geometry": { "type": "Point", "coordinates": [ -43.38349320081187, -22.855021711374867 ] } },
    { "type": "Feature", "properties": { "objectid": 80, "cod": 31, "nome": "Engenho Novo", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.270829211530703, -22.903453095951072 ] } },
    { "type": "Feature", "properties": { "objectid": 81, "cod": 88, "nome": "Sampaio", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.262751683993336, -22.902015125517149 ] } },
    { "type": "Feature", "properties": { "objectid": 82, "cod": 85, "nome": "Riachuelo", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.255256743702255, -22.901422155293172 ] } },
    { "type": "Feature", "properties": { "objectid": 83, "cod": 93, "nome": "São Francisco Xavier", "flg_integraonibus": 1, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": 1, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.24426361207324, -22.902608397770969 ] } },
    { "type": "Feature", "properties": { "objectid": 84, "cod": 92, "nome": "São Cristóvão", "flg_integraonibus": 1, "flg_integrametro": 1, "flg_terminal": null, "flg_transframal": 1, "flg_transfcentral": 1, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": 1, "flg_saracuruna": 1, "flg_deodoro": 1, "flg_santacruz": 1, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.221986658324717, -22.909383848592228 ] } },
    { "type": "Feature", "properties": { "objectid": 85, "cod": 72, "nome": "Parque Estrela", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.208765441472231, -22.650630926017502 ] } },
    { "type": "Feature", "properties": { "objectid": 86, "cod": 6, "nome": "Barão de Mauá", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.166877572554768, -22.654768207533852 ] } },
    { "type": "Feature", "properties": { "objectid": 87, "cod": 34, "nome": "Guapimirim", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": 1, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -42.97756250399668, -22.520248382392985 ] } },
    { "type": "Feature", "properties": { "objectid": 88, "cod": 71, "nome": "Parada Modelo", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -42.985311655471968, -22.546664913578248 ] } },
    { "type": "Feature", "properties": { "objectid": 89, "cod": 68, "nome": "Parada Bananal", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -42.982227872105597, -22.537402009068764 ] } },
    { "type": "Feature", "properties": { "objectid": 90, "cod": 42, "nome": "Jardim Guapimirim", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -42.995101797030728, -22.563115344683315 ] } },
    { "type": "Feature", "properties": { "objectid": 91, "cod": 70, "nome": "Parada Ideal", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.005803108730895, -22.58031433192204 ] } },
    { "type": "Feature", "properties": { "objectid": 92, "cod": 18, "nome": "Citrolândia", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.015698145100139, -22.593934878255347 ] } },
    { "type": "Feature", "properties": { "objectid": 93, "cod": 45, "nome": "Jorará", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.025027012456391, -22.605886118660454 ] } },
    { "type": "Feature", "properties": { "objectid": 94, "cod": 43, "nome": "Jardim Nova Marilia", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.030385351776872, -22.636411187849838 ] } },
    { "type": "Feature", "properties": { "objectid": 95, "cod": 49, "nome": "Magé", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.040566328786078, -22.653014546208226 ] } },
    { "type": "Feature", "properties": { "objectid": 96, "cod": 39, "nome": "Iriri", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.066687558435611, -22.653189462489003 ] } },
    { "type": "Feature", "properties": { "objectid": 97, "cod": 97, "nome": "Sururuí", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": null, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": 1, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.129450218984502, -22.662979457470545 ] } },
    { "type": "Feature", "properties": { "objectid": 98, "cod": 2, "nome": "Anchieta", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.402946093664603, -22.824651941744886 ] } },
    { "type": "Feature", "properties": { "objectid": 99, "cod": 28, "nome": "Edson Passos", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.422631890094898, -22.796216067107981 ] } },
    { "type": "Feature", "properties": { "objectid": 100, "cod": 59, "nome": "Nilópolis", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.414699886750839, -22.809227067831777 ] } },
    { "type": "Feature", "properties": { "objectid": 101, "cod": 57, "nome": "Mesquita", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.428635754807559, -22.782564007105677 ] } },
    { "type": "Feature", "properties": { "objectid": 102, "cod": 62, "nome": "Olinda", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.409997648218592, -22.817411612763994 ] } },
    { "type": "Feature", "properties": { "objectid": 103, "cod": 86, "nome": "Ricardo de Albuquerque", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": 1, "flg_ativa": 1, "status": 1, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.39825142908925, -22.839665031994624 ] } },
    { "type": "Feature", "properties": { "objectid": 104, "cod": 80, "nome": "Presidente Juscelino", "flg_integraonibus": null, "flg_integrametro": null, "flg_terminal": null, "flg_transframal": null, "flg_transfcentral": null, "flg_integratele": null, "flg_mun": null, "flg_ativa": null, "status": null, "flg_belfordroxo": null, "flg_saracuruna": null, "flg_deodoro": null, "flg_santacruz": null, "flg_japeri": 1, "flg_paracambi": null, "flg_vilainhomirim": null, "flg_guapimirim": null, "data_inc": null, "integra_brt": null, "corredor_brt": null }, "geometry": { "type": "Point", "coordinates": [ -43.434177301134362, -22.770330323723574 ] } }
    ]
}

//  Declarando Arrays de Latitude e Longitude
var lat = [];
var long = [];

/* //  Função para exibição das Estações do Ramal Deodoro (EM EDIÇÃO)
function mapaDeodoro(){
    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_ativa == 1 && (((geojsonEstacoes).features[i]).properties).flg_deodoro == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'red',
                fillColor: '#f00000',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map);
        }
    }
}

function mapaBelfordRoxo(){    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_ativa == 1 && (((geojsonEstacoes).features[i]).properties).flg_belfordroxo == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'purple',
                fillColor: '#8800f0',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map);
        }
    }
    
}

function mapaSaracuruna(){    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_ativa == 1 && (((geojsonEstacoes).features[i]).properties).flg_saracuruna == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#f07c00',
                fillColor: '#f07c00',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map);
        }
    }
}

function mapaJaperi(){    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_japeri == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#00a8f0',
                fillColor: '#00a8f0',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map);
        }
    }
}

function mapaSantaCruz(){    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_ativa == 1 && (((geojsonEstacoes).features[i]).properties).flg_santacruz == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'green',
                fillColor: '#00f03c',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map);
        }
    }
}

function mapaGuapimirim(){    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_guapimirim == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'yellow',
                fillColor: '#f0e800',
                fillOpacity: 0.6,
                radius: 250
            }).addTo(map);
        }
    }
}

function mapaParacambi(){    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_paracambi == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#7afbff',
                fillColor: '#7afbff',
                fillOpacity: 0.6,
                radius: 400
            }).addTo(map);
        }
    }
}

function mapaVilaInhomirim(){    //  Itera por todos as linhas do GeoJson de Estações
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if((((geojsonEstacoes).features[i]).properties).flg_vilainhomirim == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#b3b000',
                fillColor: '#b3b000',
                fillOpacity: 0.6,
                radius: 250
            }).addTo(map);
        }
    }
}
 */
function mapaFiltro(checkDeodoro, checkSantaCruz, checkJaperi, checkSaracuruna, checkBelfordRoxo, checkParacambi, checkVilaInhomirim, checkGuapimirim){    //  Itera por todos as linhas do GeoJson de Estações
    if(checkSantaCruz==1){
        checkDeodoro=1;
    }
    if(checkParacambi==1){
        checkJaperi=1;
    }
    if(checkVilaInhomirim==1){
        checkSaracuruna=1;
    }
    if(checkGuapimirim==1){
        checkSaracuruna=1;
    }
    for (var i=0;i<=104;i++){
        //  Filtro de Estação
        if(checkDeodoro==1 && (((geojsonEstacoes).features[i]).properties).flg_deodoro == 1)
        {
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'red',
                fillColor: '#f00000',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map)
                .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }

        else if (checkSantaCruz==1 && (((geojsonEstacoes).features[i]).properties).flg_santacruz == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'green',
                fillColor: '#00f03c',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map)
            .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }

        else if (checkJaperi==1 && (((geojsonEstacoes).features[i]).properties).flg_japeri == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#00a8f0',
                fillColor: '#00a8f0',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map)
            .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }

        else if (checkBelfordRoxo==1 && (((geojsonEstacoes).features[i]).properties).flg_belfordroxo == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'purple',
                fillColor: '#8800f0',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map)
            .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }

        else if (checkGuapimirim==1 && (((geojsonEstacoes).features[i]).properties).flg_guapimirim == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: 'yellow',
                fillColor: '#f0e800',
                fillOpacity: 0.6,
                radius: 250
            }).addTo(map)
            .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }

        else if (checkSaracuruna==1 && (((geojsonEstacoes).features[i]).properties).flg_saracuruna == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#f07c00',
                fillColor: '#f07c00',
                fillOpacity: 0.6,
                radius: 200
            }).addTo(map)
            .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }

        else if(checkVilaInhomirim==1 && (((geojsonEstacoes).features[i]).properties).flg_vilainhomirim == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#b3b000',
                fillColor: '#b3b000',
                fillOpacity: 0.6,
                radius: 250
            }).addTo(map)
            .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }

        else if (checkParacambi==1 && (((geojsonEstacoes).features[i]).properties).flg_paracambi == 1){
            //  Captura Lat e Long das Estações
            long[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[0]);
            lat[i]=((((geojsonEstacoes).features[i]).geometry).coordinates[1]);
            //  Desenha Estações com Cor da Função
            L.circle([lat[i], long[i]], {
                color: '#7afbff',
                fillColor: '#7afbff',
                fillOpacity: 0.6,
                radius: 400
            }).addTo(map)
            .bindPopup((((geojsonEstacoes).features[i]).properties).nome);
        }
    }
}

//  Função para limpeza e recriação do mapa em cada atualização
function cleanMapa(){
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}