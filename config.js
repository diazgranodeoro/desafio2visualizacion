var config = {
    style: 'mapbox://styles/rdiaz90/cmcvtlaex003901qo7t3m25qw',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicmRpYXo5MCIsImEiOiJjbWNscmc0bm4wYzlkMmxzYjU1eDJ2OXp6In0.iimcLLP_2dahVsXovsClHQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'La vivienda: de la burbuja al rebote de los precios',
    subtitle: 'Análisis comparativo de la evolución de los precios de la vivienda en las distintas provincias de España',
    byline: 'Rubén Díaz Grano de Oro',
    footer: 'Fuente: Ministerio de Transportes y Movilidad Sostenible. <br> Creado utilizando la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            hidden: false,
            title: '¿El camino hacia una nueva burbuja?',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Algorta_Salsidu_etxea.jpg/1163px-Algorta_Salsidu_etxea.jpg?20061029221316',
            imageAlt: 'Casas en el País Vasco.',
            description: `<p>Durante los años del boom inmobiliario, el precio de la vivienda en España se disparó, alcanzando cifras récord. Sin embargo, la crisis económica que siguió a 2008 provocó una caída drástica en los precios.</p><p>Ahora, tras años de recuperación, los precios vuelven a subir, aunque aún no se ha alcanzado el nivel de 2007. ¿Estamos ante el inicio de una nueva burbuja inmobiliaria?</p><iframe src='https://flo.uri.sh/visualisation/24133554/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:400px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/24133554/?utm_source=embed&utm_campaign=visualisation/24133554' target='_top' style='text-decoration:none!important'></a></div>`,
            location: {center: [-3.73572, 40.41418],
                 zoom: 4.91,
                 pitch: 0,
                 bearing: 0
                         },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'vista-general',
            alignment: 'center',
            hidden: false,
            title: 'Once territorios superan los precios de 2007',
            description: '<p>Aunque, de acuerdo con el gráfico anterior, los precios de la vivienda no han alcanzado durante el primer trimestre de 2025 (último periodo para el que hay datos disponibles) los niveles de 2007, de acuerdo con los datos del Ministerio de Transportes y Movilidad Sostenible, existe un total de nueve provincias donde los precios de la vivienda ya han superado los niveles precrisis: Málaga, Balears, Las Palmas, Santa Cruz de Tenerife, Barcelona, València, Madrid, Navarra y Gipuzkoa.</p>'+
             '<p>Además, en las dos ciudades autónomas, Ceuta y Melilla, los precios también han superado los niveles de la burbuja inmobiliaria.</p>'+
             '<p>En seis de estos casos (Balears, Melilla, Madrid, Málaga, Santa Cruz de Tenerife y Ceuta), el incremento de los precios ha sido superior al 10 %.</p>',
            location: {center: [-3.73572, 40.41418],
                 zoom: 4.91,
                 pitch: 0,
                 bearing: 0
                         },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Balears',
            alignment: 'right',
            hidden: false,
            title: 'Balears: el territorio en el que más han subido los precios',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Mallorca_-_Kathedrale_von_Palma2.jpg',
            imageAlt: 'Catedral de Palma de Mallorca.',
            description: '<p>Las Illes Balears son el territorio español que ha experimentado un mayor aumento de los precios de la vivienda desde 2007, con un incremento del 41,91 %.</p>'+
            '<p>En el primer trimestre de 2025, el precio medio por metro cuadrado era de 3.436 euros, el segundo precio más caro de España, solo superado por el de la Comunidad de Madrid.</p>'+
            `<iframe src='https://flo.uri.sh/visualisation/24173388/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:400px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>`,
            location: {
                center: [3.65010, 39.28355],
                zoom: 7.14,
                pitch: 56.44,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Melilla',
            alignment: 'left',
            hidden: false,
            title: 'Melilla',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/%28Melilla%29_Aterrizando_en_Melilla_%2816668390111%29.jpg',
            imageAlt: 'Vista de Melilla desde el aire.',
            description: 'La ciudad autónoma de Melilla es el segundo territorio en el que más ha subido el precio cuadrado entre 2007 y 2025: ha pasado de los 1.521,9 euros a los 1.904,4 euros: un incremento del 25,13 %.',
            location: {
                center: [-2.94431, 35.29086],
                zoom: 11.15,
                pitch: 61.99,
                bearing: -117.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Madrid',
            alignment: 'left',
            hidden: false,
            title: 'Comunidad de Madrid',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Gran_V%C3%ADa_-_01.jpg',
            imageAlt: 'Gran Vía de Madrid.',
            description: 'La Comunidad de Madrid es el tercer territorio con un mayor incremento de precio: de los 3.007 euros por metro cuadrado en 2007 a los 3.476,6 en 2025: un 15,60 % más. Además, el precio medio por metro cuadrado era el más caro de España.',
            location: {
                center: [-3.72050, 40.43488],
                zoom: 8.14,
                pitch: 67.94,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Malaga',
            alignment: 'right',
            hidden: false,
            title: 'Málaga',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Torre_del_Mar.jpg',
            imageAlt: 'Playa de la provincia de Málaga.',
            description: 'Málaga, provincia del turismo por antonomasia debido a su clima y playas, ha visto un aumento del 12,97 % en el precio de la vivienda desde 2007, pasando de 2.314 euros por metro cuadrado a 2.614,2 euros en 2025.',
            location: {
                center: [-4.49847, 36.66390],
                zoom: 8.53,
                pitch: 73,
                bearing: -16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'Tenerife',
            alignment: 'left',
            hidden: false,
            title: 'Santa Cruz de Tenerife',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tenerife_Teide5.jpg',
            imageAlt: 'Vista del Teide en la isla de Tenerife.',
            description: 'El precio del metro cuadrado en la provincia de Santa Cruz de Tenerife, que incluye las islas de Tenerife, La Palma, La Gomera y El Hierro, era en el primer trimestre de 2025 de 1.957,10 euros, un 12,97 % más que antes de que estallara la crisis inmobiliaria en España.<br><br>Al igual que ocurre en Málaga, el turismo es un factor clave en el aumento de los precios.<br><br>La otra provincia canaria, Las Palmas, también ha visto un aumento de los precios, aunque más moderado: del 4,86 %.</p>',
            location: {
                center: [-17.31605, 27.79559],
                zoom: 6,
                pitch: 51.42,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'Ceuta',
            alignment: 'right',
            hidden: false,
            title: 'Ceuta',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Puerto_de_Ceuta_1.jpg',
            imageAlt: 'Vista del puerto de Ceuta.',
            description: 'Por último, el sexto territorio español en el que el precio es ya más de un 10 % superior al que había nates de que estallara la crisis es la ciudad autónoma de Ceuta.</p>'+
            '<p>En el primer trimestre de 2025, el precio medio por metro cuadrado era de 2.048,1 euros, un 10,49 % más que en 2007.</p>'   ,
            location: {
                center: [-5.30458, 35.88912],
                zoom: 11.01,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,
        {
            id: 'Final',
            alignment: 'fully',
            hidden: false,
            title: 'Consulta todos los datos',
            description: 'Aunque esta narrativa se ha centrado en los territorios que están experimentando unas subidas de precio sustantivas con respecto a los que había antes de la crisis, en otras provincias los precios son similares a los de hace 18 años o incluso siguen siendo más bajos, como ocurre en muchas zonas de la España vaciada.<br><br> Puedes consultar todos los datos para el conjunto de provincias. comunidades autónomas y ciudades autónomas en este gráfico interactivo (los datos de Ceuta y Melilla solo están disponibles desde 2004).' +
            `<iframe src='https://flo.uri.sh/visualisation/24176942/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:400px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>`,
            location: {
                center: [-3.73572, 40.41418],
                 zoom: 4.91,
                 pitch: 0,
                 bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

