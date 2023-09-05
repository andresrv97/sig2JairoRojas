var wms_layers = [];

var lyr_IDW_pisapo_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "IDW_pisapo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IDW_pisapo_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557256.407104, 4397515.042599, -549517.774950, 4404879.263380]
                            })
                        });
var lyr_aspecto_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "aspecto",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/aspecto_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557256.673292, 4397515.029910, -549517.779866, 4404891.767767]
                            })
                        });
var lyr_proximidad_canales_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "proximidad_canales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/proximidad_canales_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557256.381869, 4397515.568832, -549518.244995, 4404891.345914]
                            })
                        });
var lyr_Shannon_10_10_corte_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Shannon_10_10_corte",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Shannon_10_10_corte_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557252.900643, 4397524.916338, -549529.940454, 4404889.127761]
                            })
                        });
var lyr_SEGMENTACION_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "SEGMENTACION",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SEGMENTACION_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557256.673265, 4397512.398901, -549516.360593, 4404891.795626]
                            })
                        });
var format_canales_corte_5 = new ol.format.GeoJSON();
var features_canales_corte_5 = format_canales_corte_5.readFeatures(json_canales_corte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canales_corte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canales_corte_5.addFeatures(features_canales_corte_5);
var lyr_canales_corte_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_canales_corte_5, 
                style: style_canales_corte_5,
                interactive: false,
                title: '<img src="styles/legend/canales_corte_5.png" /> canales_corte'
            });
var format_pinsapo_6 = new ol.format.GeoJSON();
var features_pinsapo_6 = format_pinsapo_6.readFeatures(json_pinsapo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pinsapo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pinsapo_6.addFeatures(features_pinsapo_6);
var lyr_pinsapo_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pinsapo_6, 
                style: style_pinsapo_6,
                interactive: true,
                title: '<img src="styles/legend/pinsapo_6.png" /> pinsapo'
            });

lyr_IDW_pisapo_0.setVisible(false);lyr_aspecto_1.setVisible(true);lyr_proximidad_canales_2.setVisible(false);lyr_Shannon_10_10_corte_3.setVisible(false);lyr_SEGMENTACION_4.setVisible(true);lyr_canales_corte_5.setVisible(true);lyr_pinsapo_6.setVisible(false);
var layersList = [lyr_IDW_pisapo_0,lyr_aspecto_1,lyr_proximidad_canales_2,lyr_Shannon_10_10_corte_3,lyr_SEGMENTACION_4,lyr_canales_corte_5,lyr_pinsapo_6];
lyr_canales_corte_5.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', 'NOMBRE': 'NOMBRE', 'CODIGO_JA': 'CODIGO_JA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'CAUCE': 'CAUCE', });
lyr_pinsapo_6.set('fieldAliases', {'PARCELA': 'PARCELA', 'Nparc': 'Nparc', 'Y': 'Y', 'X': 'X', 'PROX': 'PROX', 'Nparc_N': 'Nparc_N', });
lyr_canales_corte_5.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO_JA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'CAUCE': 'Range', });
lyr_pinsapo_6.set('fieldImages', {'PARCELA': 'TextEdit', 'Nparc': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'PROX': 'TextEdit', 'Nparc_N': 'TextEdit', });
lyr_canales_corte_5.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', 'NOMBRE': 'no label', 'CODIGO_JA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'CAUCE': 'no label', });
lyr_pinsapo_6.set('fieldLabels', {'PARCELA': 'no label', 'Nparc': 'no label', 'Y': 'no label', 'X': 'no label', 'PROX': 'no label', 'Nparc_N': 'no label', });
lyr_pinsapo_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});