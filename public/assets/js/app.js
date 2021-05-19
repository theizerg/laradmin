(function(window, document, $, undefined) {

    $(function() {
        var apexChart = jQuery(".apexchart-wrapper");
    if (apexChart.length > 0) {
        var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

            // analytics1
            var apexdemo1 = jQuery('#apexdemo1')
                if (apexdemo1.length > 0) {
                  var options = {
                    chart: {
                        height: 350,
                        type: 'line',
                        shadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 1
                        },
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#8E54E9', '#2bcbba'],
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    series: [{
                            name: "High - 2013",
                            data: [28, 29, 33, 36, 32, 32, 33]
                        },
                        {
                            name: "Low - 2013",
                            data: [12, 11, 14, 18, 17, 13, 13]
                        }
                    ],
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    markers: {
                        
                        size: 6
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        title: {
                            text: 'Month'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Temperature'
                        },
                        min: 5,
                        max: 40
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5
                    }
                }
        
                var chart = new ApexCharts(
                    document.querySelector("#apexdemo1"),
                    options
                );
        
                chart.render();
                }

            // anaylytics 2
            var analytics2 = jQuery('#analytics2')
            if (analytics2.length > 0) {
                var optionsBar = {
                  chart: {
                    type: 'bar',
                    height: 250,
                    width: '100%',
                    stacked: true,
                    foreColor: '#999',
                    toolbar: {
                        show: false
                        },
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        enabled: false
                      },
                      columnWidth: '60%',
                      endingShape: 'rounded'
                    }
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#4776E6", '#eceef3'],
                  series: [{
                    name: "Sessions",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }, {
                    name: "Views",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }],
                  xaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      show: false
                    },
                    labels: {
                      show: false,
                      style: {
                        fontSize: '14px'
                      }
                    },
                  },
                  grid: {
                    xaxis: {
                      lines: {
                        show: false
                      },
                    },
                    yaxis: {
                      lines: {
                        show: false
                      },
                    }
                  },
                  yaxis: {
                    axisBorder: {
                      show: false
                    },
                    labels: {
                      show: false
                    },
                  },
                  legend: {
                    floating: false,
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -36
                  },
                  title: {
                    text: '10 days left',
                    align: 'left',
                  },
                  tooltip: {
                    shared: true
                  }
                }
                var chartBar = new ApexCharts(document.querySelector('#analytics2'), optionsBar);
                chartBar.render();
             }
            var analytics3 = jQuery('#analytics3')
            if (analytics3.length > 0) {

                    var options = {
                          chart: {
                            height: 200,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [5, 4],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ["#8E54E9", '#2bcbba'],
                          series: [{
                              name: "Total revenue",
                              data: [45, 52, 38, 24, 33, 26, 21, 20]
                            },
                            {
                              name: "Total cost",
                              data: [35, 41, 62, 42, 13, 18, 29, 37]
                            }
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: true,
                                  offsetX: 10,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'],
                   
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " per click"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per click"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          },
                          responsive: [{
                            breakpoint: 480,
                            options: {
                              xaxis: {
                                labels: {
                                  rotate: -45,
                                  hideOverlappingLabels: true,
                                }
                              }
                            },
                          }]
                        }

            var chart = new ApexCharts(
                document.querySelector("#analytics3"),
                options
            );

            chart.render();

        }

        // analytics4
                var analytics4 = jQuery('#analytics4')
                if (analytics4.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics4"),
                    options
                );

                chart.render();
                }

                // analytics5
                var analytics5 = jQuery('#analytics5')
                if (analytics5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#fb0792'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics5"),
                    options
                );

                chart.render();
                }

                // analytics6
                  var analytics6 = jQuery('#analytics6')
                if (analytics6.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#32b432'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics6"),
                    options
                );

                chart.render();
                }

        // analytics7
        var analytics7 = jQuery('#analytics7')
            if (analytics7.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#8E54E9'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics7"),
                        options
                    );
                    chart.render();
               }

               // analytics8
                var analytics8 = jQuery('#analytics8')
            if (analytics8.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#2bcbba'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics8"),
                        options
                    );
                    chart.render();
               }
               // analytics9
                var analytics9 = jQuery('#analytics9')
            if (analytics9.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#fb0792'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics9"),
                        options
                    );
                    chart.render();
               }

            // analytics10
                var analytics10 = jQuery('#analytics10')
            if (analytics10.length > 0) {

               var optionsDonutTop = {
                      chart: {
                        height: 115,
                        width: 140,
                        type: 'donut',
                      },
                      colors: ['#8E54E9', '#f7b731', '#45aaf2'],
                      labels: ['Redirect Visists', 'New Visits', 'Direct Visits'],
                      series: [456, 256, 128],
                      legend: {
                        show: false
                      },
                      dataLabels: {
                        enabled: false
                      },
                      plotOptions: {
                        pie: {
                          size: 35,
                          donut: {
                            size: '72%',
                          },
                          offsetX: 10,
                          offsetY: -10,
                          dataLabels: {
                            enabled: false
                          },
                        }
                      },
                      responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:250,
                                height:250
                            },
                            plotOptions: {
                                pie: {
                                  size: 70,
                                  donut: {
                                    size: '72%',
                                  },
                                  offsetX: 0,
                                  offsetY: -20,
                                  dataLabels: {
                                    enabled: false
                                  },
                                }
                              },
                        },
                      }]
                    }
                    var chartDonut2 = new ApexCharts(document.querySelector('#analytics10'), optionsDonutTop);
                    chartDonut2.render().then(function () {
                    });
                    }

                // ecommerce
                var ecommerce5 = jQuery('#ecommerce5')
                if (ecommerce5.length > 0) {
                var options = {
                    chart: {
                        height: 340,
                        type: 'bar',
                        toolbar: {
                          show: false,
                        },
                    },
                    colors:['#8E54E9', '#eceef3'],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            endingShape: 'rounded',
                            columnWidth: '40%',
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    series: [{
                        name: 'Annual Sales',
                        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                    }, {
                        name: 'Annual Revenue',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }],
                    xaxis: {
                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        axisBorder: {
                             show: false,
                        },
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: 0,
                        }
                    },
                       yaxis: {
                            labels: {
                                show: false,
                                style: {
                                    colors: ['#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-yaxis-label',
                                }
                            }
                    },
                    fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.6,
                        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100]
                    }
                    },
                    legend: {
                        fontFamily: 'Roboto',
                        labels: {
                            colors: ['#949494', '#949494','#949494'],
                            useSeriesColors: false
                        },
                        itemMargin: {
                            horizontal: 20
                        },
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return "$ " + val + " thousands"
                            }
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                          plotOptions: {
                            bar: {
                                horizontal: false,
                                endingShape: 'rounded',
                                columnWidth: '70%',
                            },
                        },
                        },
                    }]

                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommerce5"),
                    options
                );

                chart.render();
                }



                var ecommercedemo1 = jQuery('#ecommercedemo1')
                if (ecommercedemo1.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo1"),
                    options
                );

                chart.render();
                }

                var ecommercedemo2 = jQuery('#ecommercedemo2')
                if (ecommercedemo2.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#fbaf54'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo2"),
                    options
                );

                chart.render();
                }

                var ecommercedemo3 = jQuery('#ecommercedemo3')
                if (ecommercedemo3.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#e3324c'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo3"),
                    options
                );

                chart.render();
                }

                var ecommercedemo4 = jQuery('#ecommercedemo4')
                if (ecommercedemo4.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#32b432'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo4"),
                    options
                );

                chart.render();
                }

                var ecommercedemo5 = jQuery('#ecommercedemo5')
            if (ecommercedemo5.length > 0) {
                var options = {
                    chart: {
                        width: 260,
                        height: 230,
                        type: 'pie',
                    },
                    colors:['#8E54E9','#fbaf54','#4776E6','#e3324c','#444444'],
                    labels: ['Direct', 'Referral', 'Organic Search','Social Network', 'Other Advertising'],
                    series: [44, 55, 13,53,35],
                    legend: {
                        show: false
                    },
                    dataLabels: {
                      enabled: false
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                            chart: {
                                offsetY:0,
                                offsetX:0,
                                width: 250,
                            }
                        },
                    },
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                offsetY:0,
                                offsetX:0,
                                width: 300,
                            }
                        },
                    }]
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo5"),
                    options
                );

                chart.render();
              }


                var cardealerdemo1 = jQuery('#cardealerdemo1')
                if (cardealerdemo1.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true
                        }
                      },
                      stroke: {
                        width: '1',
                        curve: 'smooth'
                      },
                      fill: {
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 0.2,
                            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                            inverseColors: true,
                            opacityFrom: 0.4,
                            opacityTo: .4,
                            stops: [0, 50, 100]
                          }
                      },
                      markers: {
                        style: 'inverted',
                        size: 2
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#ffffff'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo1"),
                    options
                );

                chart.render();
                }

                var pageview = jQuery('#pageview')
                if (pageview.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [0, 2, 7, 5, 10, 9, 13, 15];

                var options = {
                    chart: {
                        type: 'area',
                        height: 355,
                        width: 600,
                        sparkline: {
                          enabled: true
                        }
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      markers: {
                        strokeColor: '#8E54E9',
                        size: 3
                      },
                      series: [{
                        data: sparklineData
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#pageview"),
                    options
                );

                chart.render();
                }

                 // cardealerdemo2
                var cardealerdemo2 = jQuery('#cardealerdemo2')
                if (cardealerdemo2.length > 0) {
                var options = {
                    chart: {
                        height: 260,
                        type: 'bar',
                        toolbar: {
                          show: false,
                        },
                    },
                    colors:['#8E54E9'],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '16%',
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    series: [{
                        name: 'Annual Revenue',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }],
                    xaxis: {
                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        axisBorder: {
                             show: false,
                        },
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: 0,
                        }
                    },
                       yaxis: {
                            labels: {
                                show: false,
                                style: {
                                    colors: ['#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-yaxis-label',
                                }
                            }
                    },
                    fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0,
                        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100]
                    }
                    },
                    legend: {
                        fontFamily: 'Roboto',
                        labels: {
                            colors: ['#949494', '#949494','#949494'],
                            useSeriesColors: false
                        }
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return "$ " + val + " thousands"
                            }
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: '#f5f5f5',
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                            yaxis: {
                                show: false
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    endingShape: 'rounded',
                                    columnWidth: '90%',
                                },
                            },
                            yaxis: {
                                show: false
                            }
                        },
                    }]

                }

                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo2"),
                    options
                );

                chart.render();
                }




                // cardealerdemo3
                var cardealerdemo3 = jQuery('#cardealerdemo3')
                if (cardealerdemo3.length > 0) {
                    var options = {
                            chart: {
                                height: 350,
                                type: 'line',
                                shadow: {
                                    enabled: true,
                                    color: '#000',
                                    top: 18,
                                    left: 7,
                                    blur: 10,
                                    opacity: 1
                                },
                                toolbar: {
                                    show: false
                                }
                            },
                            colors: ['#8E54E9', '#4776E6'],
                            dataLabels: {
                                enabled: true,
                            },
                            stroke: {
                                curve: 'smooth'
                            },
                            series: [{
                                    name: "User - 208",
                                    data: [28, 29, 33, 36, 32, 32, 33]
                                },
                                {
                                    name: "Page View - 208",
                                    data: [12, 11, 14, 18, 17, 13, 13]
                                }
                            ],
                            grid: {
                                borderColor: '#dee0ea',
                                row: {
                                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                    opacity: 0.5
                                },
                            },
                            markers: {
                                size: 6
                            },
                            xaxis: {
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
                            },
                            yaxis: {
                                min: 5,
                                max: 40
                            },
                            legend: {
                                show: false,
                                position: 'top',
                                horizontalAlign: 'right',
                                floating: true,
                                offsetY: -25,
                                offsetX: -5
                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#cardealerdemo3"),
                        options
                    );

                    chart.render();
                }


                // cardealerdemo4
                var cardealerdemo4 = jQuery('#cardealerdemo4')
                if (cardealerdemo4.length > 0) {
                    var options = {
                        chart: {
                            width: 260,
                            type: 'donut',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        series:[60, 40, 25, 15],
                        labels: ['Direct', 'Referral', 'Organic', 'Social'],
                        colors:['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'dark',
                                type: "vertical",
                                shadeIntensity: 1,
                                opacityFrom: 1,
                                opacityTo: 1,
                                gradientToColors: ['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                                stops: [0, 90, 100]
                              }
                        },
                        legend: {
                            show: false,
                            position: 'left',
                            horizontalAlign: 'center',
                             fontSize: '14px',
                             itemMargin: {
                                horizontal: 20,
                                vertical: 5
                            },
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]

                    }

                    var chart = new ApexCharts(
                        document.querySelector("#cardealerdemo4"),
                        options
                    );

                    chart.render();

                    var paper = chart.paper()

            }


             var cardealerdemo5 = jQuery('#cardealerdemo5')
                if (cardealerdemo5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.9,
                          opacityTo: 0.1,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#d270f9'],
                }
                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo5"),
                    options
                );

                chart.render();
                }

                // Stock Market
                var stockmarket5 = jQuery('#stockmarket5')
                if (stockmarket5.length > 0) {
                    var ts2 = 1484418600000;
                    var dates = [];
                    var spikes = [5, -5, 3, -3, 8, -8]
                    for (var i = 0; i < 120; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dates.push(innerArr)
                    }

                    var options = {
                    chart: {
                        type: 'area',
                        stacked: false,
                        height: 350,
                        zoom: {
                        type: 'x',
                        enabled: true
                        },
                        toolbar: {
                        autoSelected: 'zoom'
                        }
                    },
                    plotOptions: {
                        line: {
                        curve: 'smooth',
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    series: [{
                        name: 'Nifty 50',
                        data: dates
                    }],
                    markers: {
                        size: 0,
                        style: 'full',
                    },
                    colors: ['#8E54E9'],
                    fill: {
                        gradient: {
                        enabled: true,
                        shadeIntensity: 0,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0
                        },
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    yaxis: {
                        min: 20000000,
                        max: 250000000,
                        labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                        },
                        title: {
                        text: 'Price'
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                        },
                        axisBorder: {
                            show: false
                        },
                    },
                    tooltip: {
                        shared: false,
                        y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                        }
                    }
                    }

                    var chart = new ApexCharts(
                    document.querySelector("#stockmarket5"),
                    options
                    );

                    chart.render();
            }
            var stockmarket6 = jQuery('#stockmarket6')
                if (stockmarket6.length > 0) {
                    var options = {
                        chart: {
                            height: 300,
                            type: 'bar',
                            toolbar: {
                            show: false,
                         }
                        },
                        legend: {
                            show: true,
                            position: "top",
                            containerMargin: {
                              top: -20
                            }
                          },
                         plotOptions: {
                            bar: {
                                horizontal: true,
                                barHeight: '20%',

                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors: ['#8E54E9'],
                        fill: {
                            gradient: {
                                enabled: true,
                                shade: 'light',
                                type: "vertical",
                                shadeIntensity: 0.1,
                                gradientToColors: undefined,
                                inverseColors: true,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [50, 0, 100, 100]
                            },
                        },
                        series: [{
                            data: [400, 430, 448, 470, 540, 430, 448]
                        }],
                        grid: {
                            show: true,
                            borderColor: '#fff',
                        },
                        xaxis: {
                            categories: ['Tata', 'Reliance', 'ONGC', 'GAIL', 'Tata Motors', 'ACC', 'Mind Tree'],
                            labels: {
                                style: {
                                    colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-xaxis-label',
                                },
                            },
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                        }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#stockmarket6"),
                        options
                    );

                    chart.render();
             }

                // stockmarket7
                function generateData(baseval, count, yrange) {
                  var i = 0;
                  var series = [];
                  while (i < count) {
                      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
                      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

                      series.push([x, y, z]);
                      baseval += 86400000;
                      i++;
                  }
                  return series;
              }
                var stockmarket7 = jQuery('#stockmarket7')
                      if (stockmarket7.length > 0) {
                      
                    var options = {
                        chart: {
                            height: 390,
                            type: 'bubble',
                            toolbar: {
                        show: false
                        },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        legend: {
                            show: false,
                            position: "top",
                            containerMargin: {
                              top: -20
                            }
                          },
                        series: [{
                                name: 'Actual',
                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 12, {
                                    min: 10,
                                    max: 60
                                })
                            },
                            {
                                name: 'Budget',
                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 12, {
                                    min: 10,
                                    max: 60
                                })
                            }
                        ],
                         colors: ['#8E54E9', '#45aaf2'],
                        fill: {
                            opacity: 0.8,

                            gradient: {
                                enabled: false
                            }
                        },
                        xaxis: {
                            tickAmount: 12,
                            type: 'category',
                            axisBorder: {
                              show: false
                            },
                            label: {
                              offsetX: 10
                            }
                        },
                        yaxis: {
                            max: 70
                        }
                    }

                    var chart = new ApexCharts(
                        document.querySelector("#stockmarket7"),
                        options
                    );

                    chart.render();

                }


            // stockmarketdemo1
             var stockmarketdemo1 = jQuery('#stockmarketdemo1')
            if (stockmarketdemo1.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fb0792'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 1, 2, 3, 2, 1, 3, 8, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo1"),
                options
            );

            chart.render();

        }

             var stockmarketdemo2 = jQuery('#stockmarketdemo2')
            if (stockmarketdemo2.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#8E54E9'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3, 2, 1, 3, 2, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo2"),
                options
            );

            chart.render();

        }
         var stockmarketdemo3 = jQuery('#stockmarketdemo3')
            if (stockmarketdemo3.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fd9644'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 1, 2, 8, 2, 1, 3, 1, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo3"),
                options
            );

            chart.render();

        }
         var stockmarketdemo4 = jQuery('#stockmarketdemo4')
            if (stockmarketdemo4.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#2bcbba'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 8, 1, 3, 1, 2, 3, 2, 1, 3, 4, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo4"),
                options
            );

            chart.render();

        }

            var stockmarketdemo5 = jQuery('#stockmarketdemo5')
                if (stockmarketdemo5.length > 0) {
                    var options = {
                        chart: {
                            type: 'bar',
                            height: 100,
                            sparkline: {
                              enabled: true
                            }
                          },
                          plotOptions: {
                            bar: {
                              columnWidth: '80%'
                            }
                          },
                          colors:['#8E54E9'],
                          series: [{
                            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54,44, 12, 36, 9, 54, 66, 41, 89, 63, 25,25, 44, 12, 36, 9, 54,44, 12, 36, 9]
                          }],
                          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          xaxis: {
                            crosshairs: {
                              width: 1
                            },
                          },
                          tooltip: {
                            fixed: {
                              enabled: false
                            },
                            x: {
                              show: false
                            },
                            y: {
                              title: {
                                formatter: function (seriesName) {
                                  return ''
                                }
                              }
                            },
                            marker: {
                              show: false
                            }
                          }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#stockmarketdemo5"),
                        options
                    );

                    chart.render();
            }


            // stockmarketdemo6
             var stockmarketdemo6 = jQuery('#stockmarketdemo6')
                if (stockmarketdemo6.length > 0) {
                    var options = {
                            chart: {
                                height: 100,
                                width: 150,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 1
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#stockmarketdemo6"),
                    options
                );

                chart.render();
                }
                // stockmarketdemo7
             var stockmarketdemo7 = jQuery('#stockmarketdemo7')
                if (stockmarketdemo7.length > 0) {
                    var options = {
                            chart: {
                                height: 100,
                                width: 150,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 1
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#stockmarketdemo7"),
                    options
                );

                chart.render();
                }

                // stockmarketdemo8

                 var stockmarketdemo8 = jQuery('#stockmarketdemo8')
                 if (stockmarketdemo8.length > 0) {
                  var data = generateDayWiseTimeSeries(new Date('10 Feb 2018').getTime(), 185, {
                    min: 30,
                    max: 90
                  })
                  var optionsline2 = {
                    chart: {
                      id: 'stockmarketdemo8',
                      type: 'line',
                      height: 230,
                      toolbar: {
                        autoSelected: 'pan',
                        show: false
                      }
                    },
                    colors: ['#8E54E9'],
                    stroke: {
                      width: 2,
                      curve: 'smooth'
                    },
                    dataLabels: {
                      enabled: false
                    },
                    fill: {
                      opacity: 1,
                    },
                    markers: {
                      size: 0
                    },
                    series: [{
                      data: data
                    }],
                    xaxis: {
                      type: 'datetime'
                    }
                  }

                  var chartline2 = new ApexCharts(
                    document.querySelector("#stockmarketdemo8"),
                    optionsline2
                  );

                  chartline2.render();
              }


            // stockmarketdemo8bottom
             var stockmarketdemo8bottom = jQuery('#stockmarketdemo8bottom')
                if (stockmarketdemo8bottom.length > 0) {
                var options = {
                      chart: {
                        id: 'stockmarketdemo8bottom',
                        height: 130,
                        type: 'area',
                        brush:{
                          target: 'stockmarketdemo8',
                          enabled: true
                        },
                        selection: {
                          enabled: true,
                          xaxis: {
                            min: new Date('19 Jun 2018').getTime(),
                            max: new Date('14 Aug 2018').getTime()
                          }
                        },
                      },
                      colors: ['#8E54E9'],
                      series: [{
                        data: data
                      }],
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.91,
                          opacityTo: 0.1,
                        }
                      },
                      xaxis: {
                        type: 'datetime',
                        offsetX: 10,
                        tooltip: {
                          enabled: false
                        }
                      },
                      yaxis: {
                        tickAmount: 2
                      }
                    }

                    var chart = new ApexCharts(
                      document.querySelector("#stockmarketdemo8bottom"),
                      options
                    );

                    chart.render();
                }

                function generateDayWiseTimeSeries(baseval, count, yrange) {
                  var i = 0;
                  var series = [];
                  while (i < count) {
                    var x = baseval;
                    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                    series.push([x, y]);
                    baseval += 86400000;
                    i++;
                  }
                  return series;
                }


                 // stockmarketdemo9
             var stockmarketdemo9 = jQuery('#stockmarketdemo9')
                if (stockmarketdemo9.length > 0) {

                    var options = {
                          chart: {
                            height: 354,
                            type: 'line',
                            toolbar: {
                                  show: false,
                                },
                            zoom: {
                              enabled: false
                            },
                            animations: {
                              enabled: false
                            }
                          },
                          colors: ['#45aaf2', '#32b432', '#fd9644'],
                          legend: {
                            show: true,
                            showForSingleSeries: true,
                            showForZeroSeries: true,
                            position: 'top',
                            horizontalAlign: 'right'
                          },
                          stroke: {
                            width: [5,5,4],
                            curve: 'straight'
                          },
                          series: [{
                            name: 'Peter',
                            data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
                          }, {
                            name: 'Johnny',
                            data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
                          }, {
                            name: 'David',
                            data: [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
                          }],
                          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                          xaxis: {
                          },
                        }
                        var chart = new ApexCharts(
                          document.querySelector("#stockmarketdemo9"),
                          options
                        );

                        chart.render();
                      }

             // datingdemo1
             var datingdemo1 = jQuery('#datingdemo1')
                    if (datingdemo1.length > 0) {

                       var options = {
                            chart: {
                                height: 440,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                shadow: {
                                    enabled: false,
                                    color: '#bbb',
                                    top: 3,
                                    left: 2,
                                    blur: 3,
                                    opacity: 1
                                },
                            },
                            stroke: {
                                width: 4,
                                curve: 'smooth'
                            },
                            series: [{
                                name: 'Likes',
                                data: [1, 35, 10, 30, 8, 25, 6, 40, 10, 34, 8, 30]
                            }],
                            xaxis: {
                                type: 'datetime',
                                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000'],
                                 labels: {
                                    show: true,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            title: {
                                 align: 'left',
                                style: {
                                    fontSize: "16px",
                                    color: '#666'
                                }
                            },
                            grid: {
                            show: true,
                           borderColor: '#eceef3',
                             },
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'dark',
                                    gradientToColors: [ '#ff0792'],
                                    shadeIntensity: 1,
                                    type: 'horizontal',
                                    opacityFrom: 1,
                                    opacityTo: 1,
                                    stops: [0, 100, 100, 100]
                                },
                            },
                            markers: {
                                size: 5,
                                opacity: 0.9,
                                colors: ["#ffffff"],
                                strokeColor: "#ff0792",
                                strokeWidth: 2,

                                hover: {
                                    size: 7,
                                }
                            },
                            yaxis: {
                                min: -10,
                                max: 40,
                                title: {
                                    show: false,
                                },
                                labels: {
                                    show: false,
                                },
                                axisBorder: {
                                     show: false,
                                 },

                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#datingdemo1"),
                        options
                    );

                    chart.render();
            }

            // datingdemo2
             var datingdemo2 = jQuery('#datingdemo2')
                if (datingdemo2.length > 0) {
                    var options = {
                        chart: {
                            height: 350,
                            type: 'radialBar',
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '22px',
                                    },
                                    value: {
                                        fontSize: '16px',
                                    },
                                    total: {
                                        show: true,
                                        label: 'Total',
                                        formatter: function (w) {
                                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                            return 249
                                        }
                                    }
                                }
                            }
                        },
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  shade: 'dark',
                                  type: "vertical",
                                  shadeIntensity: 1,
                                  opacityFrom: 1,
                                  opacityTo:1,
                                  gradientToColors: ['#8E54E9', '#45aaf2' , '#2bcbba'],
                                  stops: [0, 90, 100]
                                }
                          },
                        colors:['#8E54E9','#45aaf2', '#2bcbba'],
                        series: [45, 55, 80],
                        labels: ['Desktop', 'Tablet', 'Mobile'],
                        responsive: [{
                            breakpoint: 400,
                            options: {
                                chart: {
                                    offsetY:0,
                                    offsetX:0,
                                    height: 300,
                                }
                            },
                        }]

                    }

                   var chart = new ApexCharts(
                        document.querySelector("#datingdemo2"),
                        options
                    );

                    chart.render();
            }

            // datingdemo3
            function generateDayWiseTimeSeries(baseval, count, yrange) {
              var i = 0;
              var series = [];
              while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
              }
              return series;
            }

             var datingdemo3 = jQuery('#datingdemo3')
                if (datingdemo3.length > 0) {
                     var options = {
                      chart: {
                        height: 320,
                        type: 'area',
                        stacked: true,
                        toolbar: {
                              show: false,
                            },
                        events: {
                          selection: function(chart, e) {
                            console.log(new Date(e.xaxis.min) )
                          }
                        },

                      },
                      colors: ['#8c66e8', '#8ea4e8', '#efecf1'],
                      dataLabels: {
                          enabled: false
                      },
                      stroke: {
                        curve: 'smooth',
                        width: '4'
                      },
                      series: [{
                          name: 'Male',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 60
                          })
                        },
                        {
                          name: 'Female',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 20
                          })
                        },

                        {
                          name: 'Non Registered',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 15
                          })
                        }
                      ],
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.9,
                          opacityTo: 0.4,
                        }
                      },
                      legend: {
                        show: false,
                        showForSingleSeries: false,
                        showForZeroSeries: false,
                        position: 'top',
                        horizontalAlign: 'right'
                      },
                      xaxis: {
                        type: 'datetime'
                      },
                       yaxis: {
                        labels: {
                            show: false,
                        },
                        },
                    }

                    /*
                      // this function will generate output in this format
                      // data = [
                          [timestamp, 23],
                          [timestamp, 33],
                          [timestamp, 12]
                          ...
                      ]
                      */
                    
                   var chart = new ApexCharts(
                            document.querySelector("#datingdemo3"),
                            options
                        );

                        chart.render();
                    }

             // datingdemo4
                var datingdemo4 = jQuery('#datingdemo4')
                    if (datingdemo4.length > 0) {
                  var optionsArea = {
                      chart: {
                        height: 340,
                        type: 'area',
                        toolbar: {
                          show: false,
                        },
                        zoom: {
                          enabled: false
                        },
                      },
                      stroke: {
                        curve: 'straight'
                      },
                      colors:['#8E54E9', '#45aaf2'],
                      series: [
                        {
                          name: "Blog",
                          data: [{
                            x: 0,
                            y: 0
                          }, {
                            x: 4,
                            y: 5
                          }, {
                            x: 5,
                            y: 3
                          }, {
                            x: 9,
                            y: 8
                          }, {
                            x: 14,
                            y: 4
                          }, {
                            x: 18,
                            y: 5
                          }, {
                            x: 25,
                            y: 0
                          }]
                        },
                        {
                          name: "External",
                          data: [{
                            x: 0,
                            y: 0
                          }, {
                            x: 2,
                            y: 5
                          }, {
                            x: 5,
                            y: 4
                          }, {
                            x: 10,
                            y: 11
                          }, {
                            x: 14,
                            y: 4
                          }, {
                            x: 18,
                            y: 8
                          }, {
                            x: 25,
                            y: 0
                          }]
                        }
                      ],
                      fill: {
                        opacity: 1,
                        gradient: {
                          enabled: false,
                        }
                      },
                      markers: {
                        size: 0,
                        style: 'hollow',
                        hover: {
                          opacity: 5,
                        }
                      },
                      grid: {
                        show: true,
                       borderColor: '#eceef3',
                         },
                      tooltip: {
                        intersect: true,
                        shared: false,
                      },
                      xaxis: {
                        tooltip: {
                          enabled: false
                        },
                        labels: {
                          show: false
                        },
                        axisBorder: {
                          show: false
                        },
                        axisTicks: {
                          show: false
                        }
                      },
                      yaxis: {
                        tickAmount: 4,
                        max: 12,
                        axisBorder: {
                          show: false
                        },
                        axisTicks: {
                          show: false
                        },
                        labels: {
                          style: {
                            color: '#78909c'
                          }
                        }
                      },
                      legend: {
                        show: false
                      }
                    }

                    var chartArea = new ApexCharts(document.querySelector('#datingdemo4'), optionsArea);
                    chartArea.render();
                   }


              // datingdemo5
                var datingdemo5 = jQuery('#datingdemo5')
                    if (datingdemo5.length > 0) {
                        var options = {
                            chart: {
                                type: 'bar',
                                width: 120,
                                height: 50,
                                sparkline: {
                                  enabled: true
                                }
                              },
                              colors:['#8E54E9'],
                              plotOptions: {
                                bar: {
                                  columnWidth: '20%',
                                   endingShape: 'rounded',
                                }
                              },
                              series: [{
                                data: [15, 55, 60, 69, 53, 35, 54]
                              }],
                              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                              xaxis: {
                                crosshairs: {
                                  width: 1
                                },
                              },
                              tooltip: {
                                fixed: {
                                  enabled: false
                                },
                                x: {
                                  show: false
                                },
                                y: {
                                  title: {
                                    formatter: function (seriesName) {
                                      return ''
                                    }
                                  }
                                },
                                marker: {
                                  show: false
                                }
                              },
                              responsive: [{
                                breakpoint: 360,
                                options: {
                                    chart: {
                                        width:60,
                                        height:60
                                    }
                                },
                            },{
                                breakpoint: 480,
                                options: {
                                    chart: {
                                        width:100,
                                        height:80
                                    }
                                },
                            }]
                        }

                      var chart = new ApexCharts(
                                document.querySelector("#datingdemo5"),
                                options
                            );
                            chart.render();
                       }

               // datingdemo6
                var datingdemo6 = jQuery('#datingdemo6')
            if (datingdemo6.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#2bcbba'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo6"),
                        options
                    );
                    chart.render();
               }
               // datingdemo7
                var datingdemo7 = jQuery('#datingdemo7')
            if (datingdemo7.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#fb0792'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo7"),
                        options
                    );
                    chart.render();
               }

               // datingdemo8
                var datingdemo8 = jQuery('#datingdemo8')
            if (datingdemo8.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#32b432'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo8"),
                        options
                    );
                    chart.render();
               }

            // Job Portal
            var jobportaldemo1 = jQuery('#jobportaldemo1')
                if (jobportaldemo1.length > 0) {

                    var options = {
                        chart: {
                            height: 350,
                            type: 'bar'
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors:['#4776E6'],
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  type: "vertical",
                                  shadeIntensity: 0,
                                  opacityFrom: 1,
                                  opacityTo: 0,
                                  gradientToColors: ['#8E54E9'],
                                  stops: [0, 90, 100]
                                }
                          },
                        series: [{
                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                        }],
                        grid: {
                            show: true,
                            borderColor: '#fff',
                        },
                        xaxis: {
                            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                            labels: {
                                style: {
                                    colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-xaxis-label',
                                },
                            },
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                        }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo1"),
                        options
                    );

                    chart.render();

            }
            var jobportaldemo2 = jQuery('#jobportaldemo2')
                if (jobportaldemo2.length > 0) {
                    var options = {
                        chart: {
                            width: 260,
                            type: 'donut',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        series:[60, 40, 25, 15],
                        labels: ['Direct', 'Referral', 'Organic', 'Social'],
                        colors:['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'dark',
                                type: "vertical",
                                shadeIntensity: 1,
                                opacityFrom: 1,
                                opacityTo: 1,
                                gradientToColors: ['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                                stops: [0, 90, 100]
                              }
                        },
                        legend: {
                            show: false,
                            position: 'left',
                            horizontalAlign: 'center',
                             fontSize: '14px',
                             itemMargin: {
                                horizontal: 20,
                                vertical: 5
                            },
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]

                    }

                    var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo2"),
                        options
                    );

                    chart.render();

                    var paper = chart.paper()

            }

            // jobportaldemo3
             var jobportaldemo3 = jQuery('#jobportaldemo3')
                if (jobportaldemo3.length > 0) {
                    var options = {
                        chart: {
                            height: 280,
                            type: 'radialBar',
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '18px',
                                    },
                                    value: {
                                        fontSize: '16px',
                                    },
                                    total: {
                                        show: true,
                                        label: 'Total',
                                        formatter: function (w) {
                                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                            return 100 + '%'
                                        }
                                    }
                                }
                            }
                        },
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  shade: 'dark',
                                  type: "vertical",
                                  shadeIntensity: 1,
                                  opacityFrom: 1,
                                  opacityTo:0.5,
                                  gradientToColors: ['#8E54E9', '#4776E6'],
                                  stops: [0, 90, 100]
                                }
                          },
                        colors:['#8E54E9','#4776E6'],
                        series: [45, 55],
                        labels: ['Job Seekers', 'Job Providers'],
                        responsive: [{
                            breakpoint: 400,
                            options: {
                                chart: {
                                    offsetY:0,
                                    offsetX:0,
                                    height: 300,
                                }
                            },
                        }]

                    }

                   var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo3"),
                        options
                    );

                    chart.render();
            }
            // jobportaldemo4
            function generateDayWiseTimeSeries(baseval, count, yrange) {
              var i = 0;
              var series = [];
              while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
              }
              return series;
            }
             var jobportaldemo4 = jQuery('#jobportaldemo4')
                if (jobportaldemo4.length > 0) {
                     var options = {
                          chart: {
                            height: 300,
                            type: 'area',
                            stacked: true,
                            toolbar: {
                                  show: false,
                                },
                            events: {
                              selection: function(chart, e) {
                                console.log(new Date(e.xaxis.min) )
                              }
                            },
                          },
                          colors: ['#e231ad', '#9e06e7', '#efecf1'],
                          dataLabels: {
                              enabled: false
                          },
                          stroke: {
                            curve: 'smooth',
                            width: '4'
                          },
                          series: [{
                              name: 'Applicants',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 60
                              })
                            },
                            {
                              name: 'Interviews',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 20
                              })
                            },

                            {
                              name: 'Forwards',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 15
                              })
                            }
                          ],
                          fill: {
                            gradient: {
                              enabled: true,
                              opacityFrom: 0.9,
                              opacityTo: 0.4,
                            }
                          },
                          legend: {
                            show: false,
                            showForSingleSeries: false,
                            showForZeroSeries: false,
                            position: 'top',
                            horizontalAlign: 'right'
                          },
                          xaxis: {
                            type: 'datetime',
                            labels: {
                                offsetX: -5,
                            }
                          },
                           yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            responsive: [{
                              breakpoint: 480,
                              options: {
                                xaxis: {
                                  type: 'datetime',
                                  labels: {
                                      offsetX: 0,
                                  }
                                },
                              },
                          }]
                        }

                        /*
                          // this function will generate output in this format
                          // data = [
                              [timestamp, 23],
                              [timestamp, 33],
                              [timestamp, 12]
                              ...
                          ]
                          */
                       

                       var chart = new ApexCharts(
                                document.querySelector("#jobportaldemo4"),
                                options
                            );

                            chart.render();
                        }

                var jobportaldemo5 = jQuery('#jobportaldemo5')
                if (jobportaldemo5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.9,
                          opacityTo: 0.1,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#d270f9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#jobportaldemo5"),
                    options
                );

                chart.render();
                }


                // jobportaldemo6
             var jobportaldemo6 = jQuery('#jobportaldemo6')
                if (jobportaldemo6.length > 0) {
                    var options = {
                            chart: {
                                height: 200,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 3
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#jobportaldemo6"),
                    options
                );

                chart.render();
                }

                // CRM
                var crmdemo1 = jQuery('#crmdemo1')
                    if (crmdemo1.length > 0) {

                       var options = {
                            chart: {
                                height: 390,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                shadow: {
                                    enabled: false,
                                    color: '#bbb',
                                    top: 3,
                                    left: 2,
                                    blur: 3,
                                    opacity: 1
                                },
                            },
                            stroke: {
                                width: 4,
                                curve: 'smooth'
                            },
                            series: [{
                                name: 'Likes',
                                data: [1, 35, 10, 30, 8, 25, 6, 40, 10, 34, 8, 30]
                            }],
                            xaxis: {
                                type: 'datetime',
                                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000'],
                                axisBorder: {
                                 show: false,
                             },
                            },
                            title: {
                                 align: 'left',
                                style: {
                                    fontSize: "16px",
                                    color: '#666'
                                }
                            },
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'dark',
                                    gradientToColors: [ '#ff0792'],
                                    shadeIntensity: 1,
                                    type: 'horizontal',
                                    opacityFrom: 1,
                                    opacityTo: 1,
                                    stops: [0, 100, 100, 100]
                                },
                            },
                            markers: {
                                size: 5,
                                opacity: 0.9,
                                colors: ["#ffffff"],
                                strokeColor: "#ff0792",
                                strokeWidth: 2,

                                hover: {
                                    size: 7,
                                }
                            },
                            yaxis: {
                                min: -10,
                                max: 40,
                                title: {
                                    show: false,
                                },

                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#crmdemo1"),
                        options
                    );

                    chart.render();
            }

            var crmdemo2 = jQuery('#crmdemo2')
                if (crmdemo2.length > 0) {

                    var options = {
                        chart: {
                            height: 400,
                            type: 'bar',
                            toolbar: {
                                  show: false,
                                },
                        },
                        plotOptions: {
                            bar: {
                                 barHeight: '20%',
                                horizontal: true,
                            }
                        },
                        legend: {
                            show: true,
                            position: "top",
                            containerMargin: {
                              top: -10
                            }
                          },
                        grid: {
                        show: true,
                        borderColor: '#ebedf2',
                        },
                        colors:['#8E54E9'],
                        dataLabels: {
                            enabled: false
                        },
                        series: [{
                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200]
                        }],
                        xaxis: {
                            categories: ['Deal lost', 'Lead', 'Negotiating', 'Qualified', 'Proposal submitted', 'Sale agreed', 'Running projects', 'Closed projects', 'Payment received'],
                            axisBorder: {
                                 show: false,
                             },
                        },
                        
                        responsive: [{
                          breakpoint: 400,
                          options: {
                            chart: {
                              height: 400,
                              type: 'bar',
                              toolbar: {
                                    show: false,
                                  },
                          },
                            plotOptions: {
                              bar: {
                                  horizontal: true,
                              }
                          },
                          
                          },
                      }]
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#crmdemo2"),
                        options
                    );

                    chart.render();
                }


            // Real Estate
            var realestatedemo1 = jQuery('#realestatedemo1')
                if (realestatedemo1.length > 0) {
                       var options = {
                            chart: {
                                height: 340,
                                type: 'area',
                                toolbar: {
                                show: false
                                },
                            },
                            dataLabels: {
                                enabled: false
                            },
                            legend: {
                                offsetY: -10,
                            },
                            colors:['#fb0792', '#8E54E9'],
                            fill: {
                            type: 'gradient',
                                gradient: {
                                  type: "vertical",
                                  shadeIntensity: 0,
                                  opacityFrom: 0.3,
                                  opacityTo: 0.2,
                                  gradientToColors: ['#fbacd9'],
                                  stops: [0, 90, 100]
                                }
                          },
                            stroke: {
                                curve: 'smooth',
                                width: 2
                            },
                            series: [{
                                name: 'Sale income',
                                data: [30, 50, 32, 33, 42, 30, 50, 42, 33, 42, 30, 50, 34]
                            },
                            {
                                name: 'Rent income',
                                data: [20, 30, 22, 23, 32, 20, 30, 22, 23, 32, 20, 30, 24]
                            }],
                            tooltip: {
                                x: {
                                    format: 'dd/MM/yy HH:mm'
                                },
                            },
                            xaxis: {
                                show: true,
                                labels: {
                                    show: true,
                                },
                                 axisBorder: {
                                     color: '#fafbfb',
                                     show: true,
                                 },
                                 axisTicks: {
                                 color: '#fafbfb',
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: true,
                            },
                            axisBorder: {
                                 color: '#fff',
                                 show: true,
                             },
                            },
                            grid: {
                            show: true,
                            borderColor: '#fafbfb',
                            },
                        }
                    var chart = new ApexCharts(
                        document.querySelector("#realestatedemo1"),
                        options
                    );
                    chart.render();
                 }

            var realestatedemo3 = jQuery('#realestatedemo3')
            if (realestatedemo3.length > 0) {
                var optionsBar = {
                  chart: {
                    type: 'bar',
                    height: 250,
                    width: '100%',
                    stacked: true,
                    foreColor: '#999',
                    toolbar: {
                        show: false
                        },
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        enabled: false
                      },
                      columnWidth: '60%',
                      endingShape: 'rounded'
                    }
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#8E54E9", '#eceef3'],
                  series: [{
                    name: "Sessions",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }, {
                    name: "Views",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }],
                  xaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      show: false
                    },
                    labels: {
                      show: false,
                      style: {
                        fontSize: '14px'
                      }
                    },
                  },
                  grid: {
                    xaxis: {
                      lines: {
                        show: false
                      },
                    },
                    yaxis: {
                      lines: {
                        show: false
                      },
                    }
                  },
                  yaxis: {
                    axisBorder: {
                      show: false
                    },
                    labels: {
                      show: false
                    },
                  },
                  legend: {
                    floating: false,
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -36
                  },
                  title: {
                    text: '10 days left',
                    align: 'left',
                  },
                  tooltip: {
                    shared: true
                  }

                }


                var chartBar = new ApexCharts(document.querySelector('#realestatedemo3'), optionsBar);
                chartBar.render();


                }

            // Crypto Currency
            var cryptodemo1 = jQuery('#crypto-demo1-candlestick')
                if (cryptodemo1.length > 0) {
                    var seriesData = [{
                            x: new Date(2016, 01, 01),
                            y: [51.98, 56.29, 51.59, 53.85]
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: [53.66, 54.99, 51.35, 52.95]
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: [52.96, 53.78, 51.54, 52.48]
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: [52.54, 52.79, 47.88, 49.24]
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: [49.10, 52.86, 47.70, 52.78]
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: [52.83, 53.48, 50.32, 52.29]
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: [52.20, 54.48, 51.64, 52.58]
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: [52.76, 57.35, 52.15, 57.03]
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: [57.04, 58.15, 48.88, 56.19]
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: [56.09, 58.85, 55.48, 58.79]
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: [58.78, 59.65, 58.23, 59.05]
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: [59.37, 61.11, 59.35, 60.34]
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: [60.40, 60.52, 56.71, 56.93]
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: [57.02, 59.71, 56.04, 56.82]
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: [56.97, 59.62, 54.77, 59.30]
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: [59.11, 62.29, 59.10, 59.85]
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: [59.97, 60.11, 55.66, 58.42]
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: [58.34, 60.93, 56.75, 57.42]
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: [57.76, 58.08, 51.18, 54.71]
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: [54.80, 61.42, 53.18, 57.35]
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: [57.56, 63.09, 57.00, 62.99]
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: [62.89, 63.42, 59.72, 61.76]
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: [61.71, 64.15, 61.29, 63.04]
                          }
                        ]

                        var seriesDataLinear = [{
                            x: new Date(2016, 01, 01),
                            y: 3.85
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: 2.95
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: -12.48
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: 19.24
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: 12.78
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: 22.29
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: -12.58
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: -17.03
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: -19.19
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: -28.79
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: -39.05
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: 20.34
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: 36.93
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: 36.82
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: 29.30
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: 39.85
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: 28.42
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: 37.42
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: 24.71
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: 37.35
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: 32.99
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: 31.76
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: 43.04
                          }
                        ]

                        var seriesData7 = [{
                            x: new Date(2016, 01, 01),
                            y: [1151.98, 1156.29, 1151.59, 1153.85]
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: [1153.66, 1154.99, 1151.35, 1152.95]
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: [1152.96, 1153.78, 1151.54, 1152.48]
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: [1152.54, 1152.79, 1147.88, 1149.24]
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: [1149.10, 1152.86, 1147.70, 1152.78]
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: [1152.83, 1153.48, 1150.32, 1152.29]
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: [1152.20, 1154.48, 1151.64, 1152.58]
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: [1152.76, 1157.35, 1152.15, 1157.03]
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: [1157.04, 1158.15, 1148.88, 1156.19]
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: [1156.09, 1158.85, 1155.48, 1158.79]
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: [1158.78, 1159.65, 1158.23, 1159.05]
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: [1159.37, 1161.11, 1159.35, 1160.34]
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: [1160.40, 1160.52, 1156.71, 1156.93]
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: [1157.02, 1159.71, 1156.04, 1156.82]
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: [1156.97, 1159.62, 1154.77, 1159.30]
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: [1159.11, 1162.29, 1159.10, 1159.85]
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: [1159.97, 1160.11, 1155.66, 1158.42]
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: [1158.34, 1160.93, 1156.75, 1157.42]
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: [1157.76, 1158.08, 1151.18, 1154.71]
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: [1154.80, 1161.42, 1153.18, 1157.35]
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: [1157.56, 1163.09, 1157.00, 1162.99]
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: [1162.89, 1163.42, 1159.72, 1161.76]
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: [1161.71, 1164.15, 1161.29, 1163.04]
                          }
                        ]

                        var seriesData2 = [{
                            x: new Date(1538778600000),
                            y: [6629.81, 6650.5, 6623.04, 6633.33]
                          },
                          {
                            x: new Date(1538780400000),
                            y: [6632.01, 6643.59, 6620, 6630.11]
                          },
                          {
                            x: new Date(1538782200000),
                            y: [6630.71, 6648.95, 6623.34, 6635.65]
                          },
                          {
                            x: new Date(1538784000000),
                            y: [6635.65, 6651, 6629.67, 6638.24]
                          },
                          {
                            x: new Date(1538785800000),
                            y: [6638.24, 6640, 6620, 6624.47]
                          },
                          {
                            x: new Date(1538787600000),
                            y: [6624.53, 6636.03, 6621.68, 6624.31]
                          },
                          {
                            x: new Date(1538789400000),
                            y: [6624.61, 6632.2, 6617, 6626.02]
                          },
                          {
                            x: new Date(1538791200000),
                            y: [6627, 6627.62, 6584.22, 6603.02]
                          },
                          {
                            x: new Date(1538793000000),
                            y: [6605, 6608.03, 6598.95, 6604.01]
                          },
                          {
                            x: new Date(1538794800000),
                            y: [6604.5, 6614.4, 6602.26, 6608.02]
                          },
                          {
                            x: new Date(1538796600000),
                            y: [6608.02, 6610.68, 6601.99, 6608.91]
                          },
                          {
                            x: new Date(1538798400000),
                            y: [6608.91, 6618.99, 6608.01, 6612]
                          },
                          {
                            x: new Date(1538800200000),
                            y: [6612, 6615.13, 6605.09, 6612]
                          },
                          {
                            x: new Date(1538802000000),
                            y: [6612, 6624.12, 6608.43, 6622.95]
                          },
                          {
                            x: new Date(1538803800000),
                            y: [6623.91, 6623.91, 6615, 6615.67]
                          },
                          {
                            x: new Date(1538805600000),
                            y: [6618.69, 6618.74, 6610, 6610.4]
                          },
                          {
                            x: new Date(1538807400000),
                            y: [6611, 6622.78, 6610.4, 6614.9]
                          },
                          {
                            x: new Date(1538809200000),
                            y: [6614.9, 6626.2, 6613.33, 6623.45]
                          },
                          {
                            x: new Date(1538811000000),
                            y: [6623.48, 6627, 6618.38, 6620.35]
                          },
                          {
                            x: new Date(1538812800000),
                            y: [6619.43, 6620.35, 6610.05, 6615.53]
                          },
                          {
                            x: new Date(1538814600000),
                            y: [6615.53, 6617.93, 6610, 6615.19]
                          },
                          {
                            x: new Date(1538816400000),
                            y: [6615.19, 6621.6, 6608.2, 6620]
                          },
                          {
                            x: new Date(1538818200000),
                            y: [6619.54, 6625.17, 6614.15, 6620]
                          },
                          {
                            x: new Date(1538820000000),
                            y: [6620.33, 6634.15, 6617.24, 6624.61]
                          },
                          {
                            x: new Date(1538821800000),
                            y: [6625.95, 6626, 6611.66, 6617.58]
                          },
                          {
                            x: new Date(1538823600000),
                            y: [6619, 6625.97, 6595.27, 6598.86]
                          },
                          {
                            x: new Date(1538825400000),
                            y: [6598.86, 6598.88, 6570, 6587.16]
                          },
                          {
                            x: new Date(1538827200000),
                            y: [6588.86, 6600, 6580, 6593.4]
                          },
                          {
                            x: new Date(1538829000000),
                            y: [6593.99, 6598.89, 6585, 6587.81]
                          },
                          {
                            x: new Date(1538830800000),
                            y: [6587.81, 6592.73, 6567.14, 6578]
                          },
                          {
                            x: new Date(1538832600000),
                            y: [6578.35, 6581.72, 6567.39, 6579]
                          },
                          {
                            x: new Date(1538834400000),
                            y: [6579.38, 6580.92, 6566.77, 6575.96]
                          },
                          {
                            x: new Date(1538836200000),
                            y: [6575.96, 6589, 6571.77, 6588.92]
                          },
                          {
                            x: new Date(1538838000000),
                            y: [6588.92, 6594, 6577.55, 6589.22]
                          },
                          {
                            x: new Date(1538839800000),
                            y: [6589.3, 6598.89, 6589.1, 6596.08]
                          },
                          {
                            x: new Date(1538841600000),
                            y: [6597.5, 6600, 6588.39, 6596.25]
                          },
                          {
                            x: new Date(1538843400000),
                            y: [6598.03, 6600, 6588.73, 6595.97]
                          },
                          {
                            x: new Date(1538845200000),
                            y: [6595.97, 6602.01, 6588.17, 6602]
                          },
                          {
                            x: new Date(1538847000000),
                            y: [6602, 6607, 6596.51, 6599.95]
                          },
                          {
                            x: new Date(1538848800000),
                            y: [6600.63, 6601.21, 6590.39, 6591.02]
                          },
                          {
                            x: new Date(1538850600000),
                            y: [6591.02, 6603.08, 6591, 6591]
                          },
                          {
                            x: new Date(1538852400000),
                            y: [6591, 6601.32, 6585, 6592]
                          },
                          {
                            x: new Date(1538854200000),
                            y: [6593.13, 6596.01, 6590, 6593.34]
                          },
                          {
                            x: new Date(1538856000000),
                            y: [6593.34, 6604.76, 6582.63, 6593.86]
                          },
                          {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6604.2, 6590, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6595, 6583.27, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6598.21, 6587.6, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6605, 6596.61, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.99, 6597.5, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6606]
                          },
                        ]

                        var seriesData3 = [{
                            x: new Date(1538867400000),
                            y: [6591.08, 6592.22, 6588.9, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6592, 6593.51]
                          },
                          {
                            x: new Date(1538868000000),
                            y: [6593.51, 6596.03, 6588.04, 6588.04]
                          },
                          {
                            x: new Date(1538868300000),
                            y: [6588.26, 6592.78, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6593.99, 6587.6, 6593.99]
                          },
                          {
                            x: new Date(1538868900000),
                            y: [6594, 6596.76, 6593.02, 6594.01]
                          },
                          {
                            x: new Date(1538869200000),
                            y: [6596, 6597, 6593.05, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6596.3, 6590.04, 6591.68]
                          },
                          {
                            x: new Date(1538869800000),
                            y: [6593.26, 6597.97, 6590.37, 6595.43]
                          },
                          {
                            x: new Date(1538870100000),
                            y: [6595.43, 6598.21, 6593.49, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594.15, 6594.8]
                          },
                          {
                            x: new Date(1538870700000),
                            y: [6595.01, 6599.8, 6594, 6598.78]
                          },
                          {
                            x: new Date(1538871000000),
                            y: [6598.77, 6598.79, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6596.2, 6591.92, 6594.01]
                          },
                          {
                            x: new Date(1538871600000),
                            y: [6594.51, 6601, 6590, 6599.59]
                          },
                          {
                            x: new Date(1538871900000),
                            y: [6593.6, 6599.58, 6593.6, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6602.05, 6596.61, 6601.65]
                          },
                          {
                            x: new Date(1538872500000),
                            y: [6602.05, 6602.94, 6597.5, 6600.05]
                          },
                          {
                            x: new Date(1538872800000),
                            y: [6602.96, 6603, 6600.37, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6601.43, 6600.5, 6601.4]
                          },
                          {
                            x: new Date(1538873400000),
                            y: [6601.42, 6605, 6600.5, 6600.64]
                          },
                          {
                            x: new Date(1538873700000),
                            y: [6600.64, 6603.84, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.48]
                          },
                          {
                            x: new Date(1538874300000),
                            y: [6601.73, 6605, 6600.59, 6601.54]
                          },
                          {
                            x: new Date(1538874600000),
                            y: [6602.8, 6605, 6600, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.19, 6590.64]
                          },
                          {
                            x: new Date(1538875200000),
                            y: [6593.95, 6598, 6589.14, 6591.44]
                          },
                          {
                            x: new Date(1538875500000),
                            y: [6591.48, 6593.45, 6589.15, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6598, 6592, 6595.85]
                          },
                          {
                            x: new Date(1538876100000),
                            y: [6595.85, 6601.76, 6595.83, 6601.72]
                          },
                          {
                            x: new Date(1538876400000),
                            y: [6601.69, 6605, 6598.52, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6604.4, 6601.51, 6601.62]
                          },
                          {
                            x: new Date(1538877000000),
                            y: [6601.74, 6602.88, 6599.09, 6600]
                          },
                          {
                            x: new Date(1538877300000),
                            y: [6599.35, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6604.13]
                          },
                          {
                            x: new Date(1538877900000),
                            y: [6603.06, 6604.45, 6601.25, 6602.06]
                          },
                          {
                            x: new Date(1538878200000),
                            y: [6602.06, 6604, 6600.93, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6602.41, 6599.09, 6602.41]
                          },
                          {
                            x: new Date(1538878800000),
                            y: [6602.41, 6603.95, 6600.02, 6603.89]
                          },
                          {
                            x: new Date(1538879100000),
                            y: [6603.89, 6604.44, 6602.52, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538879700000),
                            y: [6600.02, 6602.99, 6600, 6600.23]
                          },
                          {
                            x: new Date(1538880000000),
                            y: [6600.85, 6604.43, 6600.2, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6601.7, 6603.97]
                          },
                          {
                            x: new Date(1538880600000),
                            y: [6602.49, 6603.99, 6600.07, 6600.32]
                          },
                          {
                            x: new Date(1538880900000),
                            y: [6600.32, 6603.5, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.61, 6600.31, 6602.62]
                          },
                          {
                            x: new Date(1538881500000),
                            y: [6601.57, 6603.9, 6597.5, 6601.74]
                          },
                          {
                            x: new Date(1538881800000),
                            y: [6600, 6601.73, 6598.01, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.9, 6598.61, 6600.09]
                          },
                          {
                            x: new Date(1538882400000),
                            y: [6600.09, 6603.99, 6600, 6602.08]
                          },
                          {
                            x: new Date(1538882700000),
                            y: [6602.07, 6603.99, 6602.07, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6604.41, 6602.09, 6602.26]
                          },
                          {
                            x: new Date(1538883300000),
                            y: [6602.6, 6605, 6602.24, 6603.02]
                          },
                          {
                            x: new Date(1538883600000),
                            y: [6603.01, 6604.98, 6600, 6601.03]
                          },
                          {
                            x: new Date(1538883900000),
                            y: [6601.81, 6602.6, 6601.02, 6602.3]
                          },
                          {
                            x: new Date(1538884200000),
                            y: [6601.72, 6604.98, 6601.1, 6604.03]
                          },
                          {
                            x: new Date(1538884500000),
                            y: [6604.17, 6604.98, 6604.02, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6605.01]
                          },
                          {
                            x: new Date(1538885100000),
                            y: [6605, 6607.52, 6605, 6607.28]
                          },
                        ]



                        var seriesData4 = [{
                            x: new Date(1538858700000),
                            y: [6603.08, 6604.28, 6596.01, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6597, 6599.76]
                          },
                          {
                            x: new Date(1538860500000),
                            y: [6597.53, 6599.75, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6603, 6590, 6603]
                          },
                          {
                            x: new Date(1538862300000),
                            y: [6602.73, 6604.2, 6596.72, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6591.06, 6591.06]
                          },
                          {
                            x: new Date(1538864100000),
                            y: [6591.06, 6598.4, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6594.99, 6583.27, 6592.43]
                          },
                          {
                            x: new Date(1538865900000),
                            y: [6592.46, 6595, 6587.07, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6592.22, 6588.62, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6597, 6587.6, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6598.21, 6590.04, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6603, 6596.61, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6605, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6604.44, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.9, 6597.5, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.99, 6598.61, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6601.03]
                          },
                          {
                            x: new Date(1538883900000),
                            y: [6601.81, 6604.98, 6601.02, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6605.24, 6604.07, 6605.24]
                          },
                        ]


                        var seriesData5 = [{
                          x: 1538876100000,
                          y: [6595.85, 6601.76, 6595.83, 6601.72]
                        },
                        {
                          x: 1538876400000,
                          y: [6601.69, 6605, 6598.52, 6602.01]
                        },
                        {
                          x: 1538876700000,
                          y: [6602.02, 6604.4, 6601.51, 6601.62]
                        },
                        {
                          x: 1538877000000,
                          y: [6601.74, 6602.88, 6599.09, 6600]
                        },
                        {
                          x: 1538877300000,
                          y: [6599.35, 6605, 6599.09, 6603.06]
                        },
                        {
                          x: 1538877600000,
                          y: [6603.07, 6604.5, 6600.79, 6604.13]
                        },
                        {
                          x: 1538877900000,
                          y: [6603.06, 6604.45, 6601.25, 6602.06]
                        },
                        {
                          x: 1538878200000,
                          y: [6602.06, 6604, 6600.93, 6602.11]
                        },
                        {
                          x: 1538878500000,
                          y: [6602.25, 6602.41, 6599.09, 6602.41]
                        },
                        {
                          x: 1538878800000,
                          y: [6602.41, 6603.95, 6600.02, 6603.89]
                        },
                        {
                          x: 1538879100000,
                          y: [6603.89, 6604.44, 6602.52, 6603.89]
                        },
                        {
                          x: 1538879400000,
                          y: [6604.44, 6604.44, 6600, 6600.02]
                        },
                        {
                          x: 1538879700000,
                          y: [6600.02, 6602.99, 6600, 6600.23]
                        },
                        {
                          x: 1538880000000,
                          y: [6600.85, 6604.43, 6600.2, 6602.1]
                        },
                        {
                          x: 1538880300000,
                          y: [6602.19, 6604.42, 6601.7, 6603.97]
                        },
                        {
                          x: 1538880600000,
                          y: [6602.49, 6603.99, 6600.07, 6600.32]
                        },
                        {
                          x: 1538880900000,
                          y: [6600.32, 6603.5, 6600, 6603.5]
                        },
                        {
                          x: 1538881200000,
                          y: [6603.5, 6603.61, 6600.31, 6602.62]
                        },
                        {
                          x: 1538881500000,
                          y: [6601.57, 6603.9, 6597.5, 6601.74]
                        },
                        {
                          x: 1538881800000,
                          y: [6600, 6601.73, 6598.01, 6598.62]
                        },
                        {
                          x: 1538882100000,
                          y: [6598.61, 6603.9, 6598.61, 6600.09]
                        },
                        {
                          x: 1538882400000,
                          y: [6600.09, 6603.99, 6600, 6602.08]
                        },
                        {
                          x: 1538882700000,
                          y: [6602.07, 6603.99, 6602.07, 6603.86]
                        },
                        {
                          x: 1538883000000,
                          y: [6603.85, 6604.41, 6602.09, 6602.26]
                        },
                        {
                          x: 1538883300000,
                          y: [6602.6, 6605, 6602.24, 6603.02]
                        },
                        {
                          x: 1538883600000,
                          y: [6603.01, 6604.98, 6600, 6601.03]
                        },
                        {
                          x: 1538883900000,
                          y: [6601.81, 6602.6, 6601.02, 6602.3]
                        },
                        {
                          x: 1538884200000,
                          y: [6601.72, 6604.98, 6601.1, 6604.03]
                        },
                        {
                          x: 1538884500000,
                          y: [6604.17, 6604.98, 6604.02, 6604.07]
                        },
                        {
                          x: 1538884800000,
                          y: [6604.98, 6605.7, 6604.07, 6604.28]
                        },
                        ]



                        // var seriesData5 = [[1538856000000, [6593.34, 6600, 6582.63, 6600]], [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]]

                        var seriesData6 = [{
                            x: new Date(1538856000000),
                            y: [6593.34, 6600, 6582.63, 6600]
                          },
                          {
                            x: new Date(1538856900000),
                            y: [6595.16, 6604.76, 6590.73, 6593.86]
                          },
                          {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6601.17]
                          },
                          {
                            x: new Date(1538858700000),
                            y: [6603.08, 6604.28, 6596.01, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6597, 6599.76]
                          },
                          {
                            x: new Date(1538860500000),
                            y: [6597.53, 6599.75, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6603, 6590, 6603]
                          },
                          {
                            x: new Date(1538862300000),
                            y: [6602.73, 6604.2, 6596.72, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6591.06, 6591.06]
                          },
                          {
                            x: new Date(1538864100000),
                            y: [6591.06, 6598.4, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6594.99, 6583.27, 6592.43]
                          },
                          {
                            x: new Date(1538865900000),
                            y: [6592.46, 6595, 6587.07, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6592.22, 6588.62, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6597, 6587.6, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6598.21, 6590.04, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6603, 6596.61, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6605, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6604.44, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.9, 6597.5, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.9, 6598.61, 6600.09]
                          },
                        ]

                    var optionsCandlestick = {
                        chart: {
                            id: 'candles',
                            height: 360,
                            type: 'candlestick',
                            toolbar: {
                                autoSelected: 'pan',
                                show: false
                            },
                            zoom: {
                                enabled: false
                            },
                        },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                upward: '#32b432',
                                downward: '#e3324c'
                                }
                            }
                        },
                        series: [{
                            data: seriesData
                        }],
                        xaxis: {
                            type: 'datetime'
                        }
                    }
            
                    var chartCandlestick = new ApexCharts(
                        document.querySelector("#crypto-demo1-candlestick"),
                        optionsCandlestick
                    );
            
                    chartCandlestick.render();
            
                    var options = {
                        chart: {
                            height: 160,
                            type: 'bar',
                            brush: {
                                enabled: true,
                                target: 'candles'
                            },
                            selection: {
                                enabled: true,
                                xaxis: {
                                    min: new Date('20 Jan 2017').getTime(),
                                    max: new Date('10 Dec 2017').getTime()
                                },
                                fill: {
                                    color: '#ccc',
                                    opacity: 0.4
                                },
                                stroke: {
                                    color: '#0D47A1',
                                }
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: '80%',
                                colors: {
                                    ranges: [
                                        {
                                            from: -1000,
                                            to: 0,
                                            color: '#F15B46'
                                        }, {
                                            from: 1,
                                            to: 10000,
                                            color: '#FEB019'
                                        }
                                    ],
                                   
                                },
                            }        
                        },
                        stroke: {
                            width: 0
                        },
                        series: [{
                            name: 'volume',
                            data: seriesDataLinear
                        }],
                        xaxis: {
                            type: 'datetime',
                            axisBorder: {
                                offsetX: 13
                            }
                        },
                        yaxis: {
                            labels: {
                                show: false
                            }
                        }
                    }
            
                    var chart = new ApexCharts(
                        document.querySelector("#crypto-demo1-bar"),
                        options
                    );
            
                    chart.render();
                }
            // cryptodemo2
             var cryptodemo2 = jQuery('#cryptodemo2')
            if (cryptodemo2.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fb0792'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo2"),
                options
            );

            chart.render();

        }
        // cryptodemo3
             var cryptodemo3 = jQuery('#cryptodemo3')
            if (cryptodemo3.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#2bcbba'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo3"),
                options
            );

            chart.render();

        }
        // cryptodemo4
             var cryptodemo4 = jQuery('#cryptodemo4')
            if (cryptodemo4.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#45aaf2'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo4"),
                options
            );

            chart.render();

        }
        // cryptodemo5
             var cryptodemo5 = jQuery('#cryptodemo5')
            if (cryptodemo5.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fd9644'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#cryptodemo5"),
                        options
                    );

                    chart.render();
                  }

            // cryptodemo6
              var cryptodemo6 = jQuery('#cryptodemo6')
                if (cryptodemo6.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 45, 30, 31, 37, 39, 62, 30, 35, 41];

                var options = {
                    chart: {
                        type: 'area',
                        height: 266,
                        width : 410,
                        sparkline: {
                          enabled: true,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 5,
                        colors: ['#ce83f2']
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 1,
                          opacityTo: 0.6,
                          stops: [100, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8300c2'],
                      responsive: [{
                        breakpoint: 1440,
                        options: {
                          chart: {
                            type: 'area',
                            width : 900,
                            sparkline: {
                              enabled: true,
                            },
                          },
                        
                        },
                    }]
                }

                var chart = new ApexCharts(
                    document.querySelector("#cryptodemo6"),
                    options
                );

                chart.render();
                }

                var cryptodemo7 = jQuery('#cryptodemo7');
                    if (cryptodemo7.length > 0) {
        
                       var optionsDonutTop = {
                              chart: {
                                height: 140,
                                width: 300,
                                type: 'donut',
                              },
                              colors: ['#2bcbba', '#eceef3'],
                              labels: ['Active Deal', 'Unconfirmed Deals'],
                              series: [456, 128],
                              legend: {
                                show: false
                              },
                              dataLabels: {
                                enabled: false
                              },
                              plotOptions: {
                                pie: {
                                  size: 60,
                                  donut: {
                                    size: '72%',
                                  },
                                  offsetX: 10,
                                  offsetY: 0,
                                  dataLabels: {
                                    enabled: false
                                  },
                                }
                              },
                              responsive: [{
                                breakpoint: 400,
                                options: {
                                 plotOptions: {
                                  pie: {
                                    offsetX: -35,
                                  }
                                },
                                
                                },
                            }]
                            }
                            var cryptodemo7 = new ApexCharts(document.querySelector('#cryptodemo7'), optionsDonutTop);
                            cryptodemo7.render();
                            }
               
             // irregular
             var irregular = jQuery('#irregular')
                if (irregular.length > 0) {

                    var dataSeries = [
                        [{
                            "date": "2014-01-01",
                            "value": 20000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 10379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 30493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 10785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 33901904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 11576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 14413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 15177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 16622100
                          },
                          {
                            "date": "2014-01-10",
                            "value": 17381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 18802310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 15531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 15748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 18706437
                          },
                          {
                            "date": "2014-01-15",
                            "value": 19752685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 21016418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 25622924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 25337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 22258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 23829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 24245689
                          },
                          {
                            "date": "2014-01-22",
                            "value": 26429711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 26259017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 25396183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 23107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 28659852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 25270783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 26270783
                          },
                          {
                            "date": "2014-01-29",
                            "value": 27270783
                          },
                          {
                            "date": "2014-01-30",
                            "value": 28270783
                          },
                          {
                            "date": "2014-01-31",
                            "value": 29270783
                          },
                          {
                            "date": "2014-02-01",
                            "value": 30270783
                          },
                          {
                            "date": "2014-02-02",
                            "value": 31270783
                          },
                          {
                            "date": "2014-02-03",
                            "value": 32270783
                          },
                          {
                            "date": "2014-02-04",
                            "value": 33270783
                          },
                          {
                            "date": "2014-02-05",
                            "value": 28270783
                          },
                          {
                            "date": "2014-02-06",
                            "value": 27270783
                          },
                          {
                            "date": "2014-02-07",
                            "value": 35270783
                          },
                          {
                            "date": "2014-02-08",
                            "value": 34270783
                          },
                          {
                            "date": "2014-02-09",
                            "value": 28270783
                          },
                          {
                            "date": "2014-02-10",
                            "value": 35270783
                          },
                          {
                            "date": "2014-02-11",
                            "value": 36270783
                          },
                          {
                            "date": "2014-02-12",
                            "value": 34127078
                          },
                          {
                            "date": "2014-02-13",
                            "value": 33124078
                          },
                          {
                            "date": "2014-02-14",
                            "value": 36227078
                          },
                          {
                            "date": "2014-02-15",
                            "value": 37827078
                          },
                          {
                            "date": "2014-02-16",
                            "value": 36427073
                          },
                          {
                            "date": "2014-02-17",
                            "value": 37570783
                          },
                          {
                            "date": "2014-02-18",
                            "value": 38627073
                          },
                          {
                            "date": "2014-02-19",
                            "value": 37727078
                          },
                          {
                            "date": "2014-02-20",
                            "value": 38827073
                          },
                          {
                            "date": "2014-02-21",
                            "value": 40927078
                          },
                          {
                            "date": "2014-02-22",
                            "value": 41027078
                          },
                          {
                            "date": "2014-02-23",
                            "value": 42127073
                          },
                          {
                            "date": "2014-02-24",
                            "value": 43220783
                          },
                          {
                            "date": "2014-02-25",
                            "value": 44327078
                          },
                          {
                            "date": "2014-02-26",
                            "value": 40427078
                          },
                          {
                            "date": "2014-02-27",
                            "value": 41027078
                          },
                          {
                            "date": "2014-02-28",
                            "value": 45627078
                          },
                          {
                            "date": "2014-03-01",
                            "value": 44727078
                          },
                          {
                            "date": "2014-03-02",
                            "value": 44227078
                          },
                          {
                            "date": "2014-03-03",
                            "value": 45227078
                          },
                          {
                            "date": "2014-03-04",
                            "value": 46027078
                          },
                          {
                            "date": "2014-03-05",
                            "value": 46927078
                          },
                          {
                            "date": "2014-03-06",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-07",
                            "value": 46227078
                          },
                          {
                            "date": "2014-03-08",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-09",
                            "value": 48027078
                          },
                          {
                            "date": "2014-03-10",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-11",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-12",
                            "value": 48017078
                          },
                          {
                            "date": "2014-03-13",
                            "value": 48077078
                          },
                          {
                            "date": "2014-03-14",
                            "value": 48087078
                          },
                          {
                            "date": "2014-03-15",
                            "value": 48017078
                          },
                          {
                            "date": "2014-03-16",
                            "value": 48047078
                          },
                          {
                            "date": "2014-03-17",
                            "value": 48067078
                          },
                          {
                            "date": "2014-03-18",
                            "value": 48077078
                          },
                          {
                            "date": "2014-03-19",
                            "value": 48027074
                          },
                          {
                            "date": "2014-03-20",
                            "value": 48927079
                          },
                          {
                            "date": "2014-03-21",
                            "value": 48727071
                          },
                          {
                            "date": "2014-03-22",
                            "value": 48127072
                          },
                          {
                            "date": "2014-03-23",
                            "value": 48527072
                          },
                          {
                            "date": "2014-03-24",
                            "value": 48627027
                          },
                          {
                            "date": "2014-03-25",
                            "value": 48027040
                          },
                          {
                            "date": "2014-03-26",
                            "value": 48027043
                          },
                          {
                            "date": "2014-03-27",
                            "value": 48057022
                          },
                          {
                            "date": "2014-03-28",
                            "value": 49057022
                          },
                          {
                            "date": "2014-03-29",
                            "value": 50057022
                          },
                          {
                            "date": "2014-03-30",
                            "value": 51057022
                          },
                          {
                            "date": "2014-03-31",
                            "value": 52057022
                          },
                          {
                            "date": "2014-04-01",
                            "value": 53057022
                          },
                          {
                            "date": "2014-04-02",
                            "value": 54057022
                          },
                          {
                            "date": "2014-04-03",
                            "value": 52057022
                          },
                          {
                            "date": "2014-04-04",
                            "value": 55057022
                          },
                          {
                            "date": "2014-04-05",
                            "value": 58270783
                          },
                          {
                            "date": "2014-04-06",
                            "value": 56270783
                          },
                          {
                            "date": "2014-04-07",
                            "value": 55270783
                          },
                          {
                            "date": "2014-04-08",
                            "value": 58270783
                          },
                          {
                            "date": "2014-04-09",
                            "value": 59270783
                          },
                          {
                            "date": "2014-04-10",
                            "value": 60270783
                          },
                          {
                            "date": "2014-04-11",
                            "value": 61270783
                          },
                          {
                            "date": "2014-04-12",
                            "value": 62270783
                          },
                          {
                            "date": "2014-04-13",
                            "value": 63270783
                          },
                          {
                            "date": "2014-04-14",
                            "value": 64270783
                          },
                          {
                            "date": "2014-04-15",
                            "value": 65270783
                          },
                          {
                            "date": "2014-04-16",
                            "value": 66270783
                          },
                          {
                            "date": "2014-04-17",
                            "value": 67270783
                          },
                          {
                            "date": "2014-04-18",
                            "value": 68270783
                          },
                          {
                            "date": "2014-04-19",
                            "value": 69270783
                          },
                          {
                            "date": "2014-04-20",
                            "value": 70270783
                          },
                          {
                            "date": "2014-04-21",
                            "value": 71270783
                          },
                          {
                            "date": "2014-04-22",
                            "value": 72270783
                          },
                          {
                            "date": "2014-04-23",
                            "value": 73270783
                          },
                          {
                            "date": "2014-04-24",
                            "value": 74270783
                          },
                          {
                            "date": "2014-04-25",
                            "value": 75270783
                          },
                          {
                            "date": "2014-04-26",
                            "value": 76660783
                          },
                          {
                            "date": "2014-04-27",
                            "value": 77270783
                          },
                          {
                            "date": "2014-04-28",
                            "value": 78370783
                          },
                          {
                            "date": "2014-04-29",
                            "value": 79470783
                          },
                          {
                            "date": "2014-04-30",
                            "value": 80170783
                          }
                        ],
                        [{
                            "date": "2014-01-01",
                            "value": 150000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 160379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 170493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 160785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 167391904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 161576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 161413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 152177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 143762210
                          },
                          {
                            "date": "2014-01-10",
                            "value": 144381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 154352310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 165531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 175748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 187064037
                          },
                          {
                            "date": "2014-01-15",
                            "value": 197520685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 210176418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 196122924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 207337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 200258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 186829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 192456897
                          },
                          {
                            "date": "2014-01-22",
                            "value": 204299711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 192759017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 203596183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 208107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 196359852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 192570783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 177967768
                          },
                          {
                            "date": "2014-01-29",
                            "value": 190632803
                          },
                          {
                            "date": "2014-01-30",
                            "value": 203725316
                          },
                          {
                            "date": "2014-01-31",
                            "value": 218226177
                          },
                          {
                            "date": "2014-02-01",
                            "value": 210698669
                          },
                          {
                            "date": "2014-02-02",
                            "value": 217640656
                          },
                          {
                            "date": "2014-02-03",
                            "value": 216142362
                          },
                          {
                            "date": "2014-02-04",
                            "value": 201410971
                          },
                          {
                            "date": "2014-02-05",
                            "value": 196704289
                          },
                          {
                            "date": "2014-02-06",
                            "value": 190436945
                          },
                          {
                            "date": "2014-02-07",
                            "value": 178891686
                          },
                          {
                            "date": "2014-02-08",
                            "value": 171613962
                          },
                          {
                            "date": "2014-02-09",
                            "value": 157579773
                          },
                          {
                            "date": "2014-02-10",
                            "value": 158677098
                          },
                          {
                            "date": "2014-02-11",
                            "value": 147129977
                          },
                          {
                            "date": "2014-02-12",
                            "value": 151561876
                          },
                          {
                            "date": "2014-02-13",
                            "value": 151627421
                          },
                          {
                            "date": "2014-02-14",
                            "value": 143543872
                          },
                          {
                            "date": "2014-02-15",
                            "value": 136581057
                          },
                          {
                            "date": "2014-02-16",
                            "value": 135560715
                          },
                          {
                            "date": "2014-02-17",
                            "value": 122625263
                          },
                          {
                            "date": "2014-02-18",
                            "value": 112091484
                          },
                          {
                            "date": "2014-02-19",
                            "value": 98810329
                          },
                          {
                            "date": "2014-02-20",
                            "value": 99882912
                          },
                          {
                            "date": "2014-02-21",
                            "value": 94943095
                          },
                          {
                            "date": "2014-02-22",
                            "value": 104875743
                          },
                          {
                            "date": "2014-02-23",
                            "value": 116383678
                          },
                          {
                            "date": "2014-02-24",
                            "value": 125028841
                          },
                          {
                            "date": "2014-02-25",
                            "value": 123967310
                          },
                          {
                            "date": "2014-02-26",
                            "value": 133167029
                          },
                          {
                            "date": "2014-02-27",
                            "value": 128577263
                          },
                          {
                            "date": "2014-02-28",
                            "value": 115836969
                          },
                          {
                            "date": "2014-03-01",
                            "value": 119264529
                          },
                          {
                            "date": "2014-03-02",
                            "value": 109363374
                          },
                          {
                            "date": "2014-03-03",
                            "value": 113985628
                          },
                          {
                            "date": "2014-03-04",
                            "value": 114650999
                          },
                          {
                            "date": "2014-03-05",
                            "value": 110866108
                          },
                          {
                            "date": "2014-03-06",
                            "value": 96473454
                          },
                          {
                            "date": "2014-03-07",
                            "value": 104075886
                          },
                          {
                            "date": "2014-03-08",
                            "value": 103568384
                          },
                          {
                            "date": "2014-03-09",
                            "value": 101534883
                          },
                          {
                            "date": "2014-03-10",
                            "value": 115825447
                          },
                          {
                            "date": "2014-03-11",
                            "value": 126133916
                          },
                          {
                            "date": "2014-03-12",
                            "value": 116502109
                          },
                          {
                            "date": "2014-03-13",
                            "value": 130169411
                          },
                          {
                            "date": "2014-03-14",
                            "value": 124296886
                          },
                          {
                            "date": "2014-03-15",
                            "value": 126347399
                          },
                          {
                            "date": "2014-03-16",
                            "value": 131483669
                          },
                          {
                            "date": "2014-03-17",
                            "value": 142811333
                          },
                          {
                            "date": "2014-03-18",
                            "value": 129675396
                          },
                          {
                            "date": "2014-03-19",
                            "value": 115514483
                          },
                          {
                            "date": "2014-03-20",
                            "value": 117630630
                          },
                          {
                            "date": "2014-03-21",
                            "value": 122340239
                          },
                          {
                            "date": "2014-03-22",
                            "value": 132349091
                          },
                          {
                            "date": "2014-03-23",
                            "value": 125613305
                          },
                          {
                            "date": "2014-03-24",
                            "value": 135592466
                          },
                          {
                            "date": "2014-03-25",
                            "value": 123408762
                          },
                          {
                            "date": "2014-03-26",
                            "value": 111991454
                          },
                          {
                            "date": "2014-03-27",
                            "value": 116123955
                          },
                          {
                            "date": "2014-03-28",
                            "value": 112817214
                          },
                          {
                            "date": "2014-03-29",
                            "value": 113029590
                          },
                          {
                            "date": "2014-03-30",
                            "value": 108753398
                          },
                          {
                            "date": "2014-03-31",
                            "value": 99383763
                          },
                          {
                            "date": "2014-04-01",
                            "value": 100151737
                          },
                          {
                            "date": "2014-04-02",
                            "value": 94985209
                          },
                          {
                            "date": "2014-04-03",
                            "value": 82913669
                          },
                          {
                            "date": "2014-04-04",
                            "value": 78748268
                          },
                          {
                            "date": "2014-04-05",
                            "value": 63829135
                          },
                          {
                            "date": "2014-04-06",
                            "value": 78694727
                          },
                          {
                            "date": "2014-04-07",
                            "value": 80868994
                          },
                          {
                            "date": "2014-04-08",
                            "value": 93799013
                          },
                          {
                            "date": "2014-04-09",
                            "value": 99042416
                          },
                          {
                            "date": "2014-04-10",
                            "value": 97298692
                          },
                          {
                            "date": "2014-04-11",
                            "value": 83353499
                          },
                          {
                            "date": "2014-04-12",
                            "value": 71248129
                          },
                          {
                            "date": "2014-04-13",
                            "value": 75253744
                          },
                          {
                            "date": "2014-04-14",
                            "value": 68976648
                          },
                          {
                            "date": "2014-04-15",
                            "value": 71002284
                          },
                          {
                            "date": "2014-04-16",
                            "value": 75052401
                          },
                          {
                            "date": "2014-04-17",
                            "value": 83894030
                          },
                          {
                            "date": "2014-04-18",
                            "value": 90236528
                          },
                          {
                            "date": "2014-04-19",
                            "value": 99739114
                          },
                          {
                            "date": "2014-04-20",
                            "value": 96407136
                          },
                          {
                            "date": "2014-04-21",
                            "value": 108323177
                          },
                          {
                            "date": "2014-04-22",
                            "value": 101578914
                          },
                          {
                            "date": "2014-04-23",
                            "value": 115877608
                          },
                          {
                            "date": "2014-04-24",
                            "value": 112088857
                          },
                          {
                            "date": "2014-04-25",
                            "value": 112071353
                          },
                          {
                            "date": "2014-04-26",
                            "value": 101790062
                          },
                          {
                            "date": "2014-04-27",
                            "value": 115003761
                          },
                          {
                            "date": "2014-04-28",
                            "value": 120457727
                          },
                          {
                            "date": "2014-04-29",
                            "value": 118253926
                          },
                          {
                            "date": "2014-04-30",
                            "value": 117956992
                          }
                        ],
                        [{
                            "date": "2014-01-01",
                            "value": 50000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 60379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 40493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 60785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 67391904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 61576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 61413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 82177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 103762210
                          },
                          {
                            "date": "2014-01-10",
                            "value": 84381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 54352310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 65531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 75748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 47064037
                          },
                          {
                            "date": "2014-01-15",
                            "value": 67520685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 60176418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 66122924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 57337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 100258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 46829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 92456897
                          },
                          {
                            "date": "2014-01-22",
                            "value": 94299711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 62759017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 103596183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 108107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 66359852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 62570783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 77967768
                          },
                          {
                            "date": "2014-01-29",
                            "value": 60632803
                          },
                          {
                            "date": "2014-01-30",
                            "value": 103725316
                          },
                          {
                            "date": "2014-01-31",
                            "value": 98226177
                          },
                          {
                            "date": "2014-02-01",
                            "value": 60698669
                          },
                          {
                            "date": "2014-02-02",
                            "value": 67640656
                          },
                          {
                            "date": "2014-02-03",
                            "value": 66142362
                          },
                          {
                            "date": "2014-02-04",
                            "value": 101410971
                          },
                          {
                            "date": "2014-02-05",
                            "value": 66704289
                          },
                          {
                            "date": "2014-02-06",
                            "value": 60436945
                          },
                          {
                            "date": "2014-02-07",
                            "value": 78891686
                          },
                          {
                            "date": "2014-02-08",
                            "value": 71613962
                          },
                          {
                            "date": "2014-02-09",
                            "value": 107579773
                          },
                          {
                            "date": "2014-02-10",
                            "value": 58677098
                          },
                          {
                            "date": "2014-02-11",
                            "value": 87129977
                          },
                          {
                            "date": "2014-02-12",
                            "value": 51561876
                          },
                          {
                            "date": "2014-02-13",
                            "value": 51627421
                          },
                          {
                            "date": "2014-02-14",
                            "value": 83543872
                          },
                          {
                            "date": "2014-02-15",
                            "value": 66581057
                          },
                          {
                            "date": "2014-02-16",
                            "value": 65560715
                          },
                          {
                            "date": "2014-02-17",
                            "value": 62625263
                          },
                          {
                            "date": "2014-02-18",
                            "value": 92091484
                          },
                          {
                            "date": "2014-02-19",
                            "value": 48810329
                          },
                          {
                            "date": "2014-02-20",
                            "value": 49882912
                          },
                          {
                            "date": "2014-02-21",
                            "value": 44943095
                          },
                          {
                            "date": "2014-02-22",
                            "value": 104875743
                          },
                          {
                            "date": "2014-02-23",
                            "value": 96383678
                          },
                          {
                            "date": "2014-02-24",
                            "value": 105028841
                          },
                          {
                            "date": "2014-02-25",
                            "value": 63967310
                          },
                          {
                            "date": "2014-02-26",
                            "value": 63167029
                          },
                          {
                            "date": "2014-02-27",
                            "value": 68577263
                          },
                          {
                            "date": "2014-02-28",
                            "value": 95836969
                          },
                          {
                            "date": "2014-03-01",
                            "value": 99264529
                          },
                          {
                            "date": "2014-03-02",
                            "value": 109363374
                          },
                          {
                            "date": "2014-03-03",
                            "value": 93985628
                          },
                          {
                            "date": "2014-03-04",
                            "value": 94650999
                          },
                          {
                            "date": "2014-03-05",
                            "value": 90866108
                          },
                          {
                            "date": "2014-03-06",
                            "value": 46473454
                          },
                          {
                            "date": "2014-03-07",
                            "value": 84075886
                          },
                          {
                            "date": "2014-03-08",
                            "value": 103568384
                          },
                          {
                            "date": "2014-03-09",
                            "value": 101534883
                          },
                          {
                            "date": "2014-03-10",
                            "value": 95825447
                          },
                          {
                            "date": "2014-03-11",
                            "value": 66133916
                          },
                          {
                            "date": "2014-03-12",
                            "value": 96502109
                          },
                          {
                            "date": "2014-03-13",
                            "value": 80169411
                          },
                          {
                            "date": "2014-03-14",
                            "value": 84296886
                          },
                          {
                            "date": "2014-03-15",
                            "value": 86347399
                          },
                          {
                            "date": "2014-03-16",
                            "value": 31483669
                          },
                          {
                            "date": "2014-03-17",
                            "value": 82811333
                          },
                          {
                            "date": "2014-03-18",
                            "value": 89675396
                          },
                          {
                            "date": "2014-03-19",
                            "value": 95514483
                          },
                          {
                            "date": "2014-03-20",
                            "value": 97630630
                          },
                          {
                            "date": "2014-03-21",
                            "value": 62340239
                          },
                          {
                            "date": "2014-03-22",
                            "value": 62349091
                          },
                          {
                            "date": "2014-03-23",
                            "value": 65613305
                          },
                          {
                            "date": "2014-03-24",
                            "value": 65592466
                          },
                          {
                            "date": "2014-03-25",
                            "value": 63408762
                          },
                          {
                            "date": "2014-03-26",
                            "value": 91991454
                          },
                          {
                            "date": "2014-03-27",
                            "value": 96123955
                          },
                          {
                            "date": "2014-03-28",
                            "value": 92817214
                          },
                          {
                            "date": "2014-03-29",
                            "value": 93029590
                          },
                          {
                            "date": "2014-03-30",
                            "value": 108753398
                          },
                          {
                            "date": "2014-03-31",
                            "value": 49383763
                          },
                          {
                            "date": "2014-04-01",
                            "value": 100151737
                          },
                          {
                            "date": "2014-04-02",
                            "value": 44985209
                          },
                          {
                            "date": "2014-04-03",
                            "value": 52913669
                          },
                          {
                            "date": "2014-04-04",
                            "value": 48748268
                          },
                          {
                            "date": "2014-04-05",
                            "value": 23829135
                          },
                          {
                            "date": "2014-04-06",
                            "value": 58694727
                          },
                          {
                            "date": "2014-04-07",
                            "value": 50868994
                          },
                          {
                            "date": "2014-04-08",
                            "value": 43799013
                          },
                          {
                            "date": "2014-04-09",
                            "value": 4042416
                          },
                          {
                            "date": "2014-04-10",
                            "value": 47298692
                          },
                          {
                            "date": "2014-04-11",
                            "value": 53353499
                          },
                          {
                            "date": "2014-04-12",
                            "value": 71248129
                          },
                          {
                            "date": "2014-04-13",
                            "value": 75253744
                          },
                          {
                            "date": "2014-04-14",
                            "value": 68976648
                          },
                          {
                            "date": "2014-04-15",
                            "value": 71002284
                          },
                          {
                            "date": "2014-04-16",
                            "value": 75052401
                          },
                          {
                            "date": "2014-04-17",
                            "value": 83894030
                          },
                          {
                            "date": "2014-04-18",
                            "value": 50236528
                          },
                          {
                            "date": "2014-04-19",
                            "value": 59739114
                          },
                          {
                            "date": "2014-04-20",
                            "value": 56407136
                          },
                          {
                            "date": "2014-04-21",
                            "value": 108323177
                          },
                          {
                            "date": "2014-04-22",
                            "value": 101578914
                          },
                          {
                            "date": "2014-04-23",
                            "value": 95877608
                          },
                          {
                            "date": "2014-04-24",
                            "value": 62088857
                          },
                          {
                            "date": "2014-04-25",
                            "value": 92071353
                          },
                          {
                            "date": "2014-04-26",
                            "value": 81790062
                          },
                          {
                            "date": "2014-04-27",
                            "value": 105003761
                          },
                          {
                            "date": "2014-04-28",
                            "value": 100457727
                          },
                          {
                            "date": "2014-04-29",
                            "value": 98253926
                          },
                          {
                            "date": "2014-04-30",
                            "value": 67956992
                          }
                        ]
                      ]
                    var ts1 = 1388534400000;
                var ts2 = 1388620800000;
                var ts3 = 1389052800000;

                var dataSet = [[],[],[]];

                for(var i=0; i<12; i++) {
                    ts1 = ts1 + 86400000;
                    var innerArr = [ts1, dataSeries[2][i].value];
                    dataSet[0].push(innerArr)
                }
                for(var i=0; i<18; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dataSet[1].push(innerArr)
                }
                for(var i=0; i<12; i++) {
                    ts3 = ts3 + 86400000;
                    var innerArr = [ts3, dataSeries[0][i].value];
                    dataSet[2].push(innerArr)
                }

                var options = {
                    chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        enabled: false
                    },
                    },
                    plotOptions: {
                    line: {
                        curve: 'smooth',
                    }
                    },
                    dataLabels: {
                    enabled: false
                    },
                    series: [{
                    name: 'PRODUCT A',
                    data: dataSet[0]
                    }, {
                    name: 'PRODUCT B',
                    data: dataSet[1]
                    }, {
                    name: 'PRODUCT C',
                    data: dataSet[2]
                    }],
                    markers: {
                    size: 0,
                    style: 'full',
                    },
                    fill: {
                    gradient: {
                        enabled: true,
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                        },
                },
                    yaxis: {
                    labels: {
                        style: {
                            color: '#8e8da4',
                        },
                        offsetX: 0,
                        formatter: function(val) {
                            return (val / 1000000).toFixed(2);
                        },
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                    },
                    xaxis: {
                    type: 'datetime',
                    tickAmount: 8,
                    min: new Date("01/01/2014").getTime(),
                    max: new Date("01/20/2014").getTime(),
                    labels: {
                        rotate: -15,
                        rotateAlways: true,
                        formatter: function(val, timestamp) {
                            return moment(new Date(timestamp)).format("DD MMM YYYY")
                        }
                    }
                    },
                    title: {
                    text: 'Irregular Data in Time Series',
                    align: 'left',
                    offsetX: 14
                    },
                    tooltip: {
                    shared: true
                    },
                    legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetX: -10
                    }
                }

                var chart = new ApexCharts(
                        document.querySelector("#irregular"),
                        options
                    );

                    chart.render();

                            }
                  
                    
        
    }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){
    $(function(){
        var autonumeric = jQuery(".autonumber");
        if (autonumeric.length > 0) {
             /****** Spanish-numeric ******/
                new AutoNumeric('#Spanish', 'Spanish');
                /****** NorthAmerican-numeric ******/
                new AutoNumeric('#NorthAmerican', 'NorthAmerican');
                /****** British-numeric ******/
                new AutoNumeric('#British', 'British');
                /****** Swiss-numeric ******/
                new AutoNumeric('#Swiss', 'Swiss');
                /****** Japanese-numeric ******/
                new AutoNumeric('#Japanese', 'Japanese');
                /****** Chinese-numeric ******/
                new AutoNumeric('#Chinese', 'Chinese');
                /****** Brazilian-numeric ******/
                new AutoNumeric('#Brazilian', 'Brazilian');
                /****** Turkish-numeric ******/
                new AutoNumeric('#Turkish', 'Turkish');
                /****** DecimalCharCommaSeparator-numeric ******/
                new AutoNumeric('#DecimalCharCommaSeparator', 'dotDecimalCharCommaSeparator');
                /****** commaDecimalCharDotSeparator-numeric ******/
                new AutoNumeric('#commaDecimalCharDotSeparator', 'commaDecimalCharDotSeparator');
                /****** integer-numeric ******/
                new AutoNumeric('#integer', 'integer');
                /****** integerPos-numeric ******/
                new AutoNumeric('#integerPos', 'integerPos');
                /****** integerNeg-numeric ******/
                new AutoNumeric('#integerNeg', 'integerNeg');
                /****** float-numeric ******/
                new AutoNumeric('#float', 'float');
                /****** floatPos-numeric ******/
                new AutoNumeric('#floatPos', 'floatPos');
                /****** floatNeg-numeric ******/
                new AutoNumeric('#floatNeg', 'floatNeg');
                /****** numeric-numeric ******/
                new AutoNumeric('#numeric', 'numeric');
                /****** numericPos-numeric ******/
                new AutoNumeric('#numericPos', 'numericPos');
                /****** numericNeg-numeric ******/
                new AutoNumeric('#numericNeg', 'numericNeg');
                /****** euro-numeric ******/
                new AutoNumeric('#euro', 'euro');
                /****** euroPos-numeric ******/
                new AutoNumeric('#euroPos', 'euroPos');
                /****** euroNeg-numeric ******/
                new AutoNumeric('#euroNeg', 'euroNeg');
                /****** euroSpace-numeric ******/
                new AutoNumeric('#euroSpace', 'euroSpace');
                /****** euroSpacePos-numeric ******/
                new AutoNumeric('#euroSpacePos', 'euroSpacePos');
                /****** euroSpaceNeg-numeric ******/
                new AutoNumeric('#euroSpaceNeg', 'euroSpaceNeg');
                /****** dollar-numeric ******/
                new AutoNumeric('#dollar', 'dollar');
                /****** dollarPos-numeric ******/
                new AutoNumeric('#dollarPos', 'dollarPos');
                /****** dollarNeg-numeric ******/
                new AutoNumeric('#dollarNeg', 'dollarNeg');
                /****** french-numeric ******/
                new AutoNumeric('#percentageEU2dec', 'percentageEU2dec');
                /****** percentageEU2decPos-numeric ******/
                new AutoNumeric('#percentageEU2decPos', 'percentageEU2decPos');
                /****** percentageEU2decNeg-numeric ******/
                new AutoNumeric('#percentageEU2decNeg', 'percentageEU2decNeg');
                /****** percentageUS2dec-numeric ******/
                new AutoNumeric('#percentageUS2dec', 'percentageUS2dec');
                /****** percentageUS3decPos-numeric ******/
                new AutoNumeric('#percentageUS3decPos', 'percentageUS3decPos');
                /****** percentageUS3decNeg-numeric ******/
                new AutoNumeric('#percentageUS3decNeg', 'percentageUS3decNeg');
        }

    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var customfile = jQuery(".custom-file-input");
        if (customfile.length > 0) {
                bsCustomFileInput.init();
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var c3Chart = jQuery(".c3chart-wrapper");
        if (c3Chart.length > 0) {
                    var c3demo1 = jQuery("#c3demo1");
                    if (c3demo1.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo1',
                            data: {
                                columns: [
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 50, 20, 10, 40, 15, 25]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6'
                                },
                            }
                        });
                    }
                    var c3demo2 = jQuery("#c3demo2");
                    if (c3demo2.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo2',
                            data: {
                                columns: [
                                    ['data1', 300, 350, 300, 0, 0, 0],
                                    ['data2', 130, 100, 140, 200, 150, 50]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6'
                                },
                                types: {
                                    data1: 'area',
                                    data2: 'area-spline'
                                }
                            }
                        });
                    }
                    var c3demo3 = jQuery("#c3demo3");
                    if (c3demo3.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo3',
                            data: {
                                columns: [
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 130, 100, 140, 200, 150, 50],
                                    ['data3', 130, 150, 200, 300, 200, 100]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6',
                                    data3: '#ffbc1d'
                                },
                                type: 'bar'
                            },
                            bar: {
                                width: {
                                    ratio: 0.5 // this makes bar width 50% of length between ticks
                                }
                            }
                        });
                    }
                    var c3demo4 = jQuery("#c3demo4");
                    if (c3demo4.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo4',
                            data: {
                                columns: [
                                    ['data1', -30, 200, 200, 400, -150, 250],
                                    ['data2', 130, 100, -100, 200, -150, 50],
                                    ['data3', -230, 200, 200, -300, 250, 250],
                                    ['data4', 100, -50, 150, 200, -300, -100]
                                ],
                                type: 'bar',
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6',
                                    data3: '#ffbc1d',
                                    data4: '#25d09a'
                                },
                                groups: [
                                    ['data1', 'data2', 'data3', 'data4']
                                ]
                            },
                            grid: {
                                y: {
                                    lines: [{ value: 0 }]
                                }
                            }
                        });
                    }
                    var c3demo5 = jQuery("#c3demo5");
                    if (c3demo5.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo5',
                            data: {
                                columns: [
                                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                                ],
                                colors: {
                                    setosa: '#8E54E9',
                                    versicolor: '#4776E6',
                                    virginica: '#ffbc1d'
                                },
                                type: 'pie'
                            }
                        });
                    }
                    var c3demo6 = jQuery("#c3demo6");
                    if (c3demo6.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo6',
                            data: {
                                columns: [
                                    ["desktop", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["tablet", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                    ["mobile", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                                ],
                                colors: {
                                    desktop: '#8E54E9',
                                    tablet: '#4776E6',
                                    mobile: '#ffbc1d'
                                },
                                type: 'donut',
                            },
                            donut: {
                                title: "Browser Statistic"
                            }
                        });
                    }
        }
    });

})(window, document, window.jQuery, document.ready);
(function(window, document, $, undefined){

    $(function(){
        var chartistChart = jQuery(".chartist-wrapper");
        if (chartistChart.length > 0) {

                //simple line chart
                var chartistdemo1 = jQuery("#chartistdemo1");
                if (chartistdemo1.length > 0) {
                    new Chartist.Line('.ct-chart-line', {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        series: [
                            [12, 9, 7, 8, 5],
                            [2, 1, 3.5, 7, 3],
                            [1, 3, 4, 5, 6]
                        ]
                    }, {
                        fullWidth: true,
                        chartPadding: {
                            right: 30,
                            left:0
                          },
                          axisY: {
                            offset: 30
                        },
                    });

                }
                var chartistdemo2 = jQuery("#chartistdemo2");
                if (chartistdemo2.length > 0) {
                    new Chartist.Line('.ct-chart-area', {
                        labels: [1, 2, 3, 4, 5, 6, 7, 8],
                        series: [
                            [5, 9, 7, 8, 5, 3, 5, 4]
                        ]
                    }, {
                        low: 0,
                        showArea: true,
                        fullWidth: true,
                        axisY: {
                            offset: 20
                        },
                        chartPadding: {
                            right: 10,
                            left:0
                          }
                    });
                }
                var chartistdemo3 = jQuery("#chartistdemo3");
                if (chartistdemo3.length > 0) {
                    var data = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        series: [
                            [6, 4, 8, 7, 6, 4, 8, 7, 6, 4, 8, 7],
                            [4, 3, 7, 6.5, 4, 3, 7, 6.5, 4, 3, 7, 6.5],
                            [8, 3, 1, 6, 8, 3, 1, 6, 8, 3, 1, 6]
                        ]
                    };

                    var options = {
                        seriesBarDistance: 20,
                        axisY: {
                            offset: 20,
                            scaleMinSpace: 15
                        },
                    };



                    var responsiveOptions = [
                        ['screen and (max-width: 640px)', {
                            seriesBarDistance: 0,
                            axisX: {
                                labelInterpolationFnc: function(value) {
                                    return value[0];
                                }
                            }
                        }]
                    ];

                    new Chartist.Bar('.ct-chart-bar', data, options, responsiveOptions);
                }
                var chartistdemo4 = jQuery("#chartistdemo4");
                if (chartistdemo4.length > 0) {
                    new Chartist.Bar('.ct-chart-stacked', {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        series: [
                            [800000, 1200000, 1400000, 1300000],
                            [200000, 400000, 500000, 300000],
                            [100000, 200000, 400000, 600000]
                        ]
                    }, {
                        stackBars: true,
                        axisY: {
                            labelInterpolationFnc: function(value) {
                                return (value / 1000) + 'k';
                            }
                        }
                    }).on('draw', function(data) {
                        if (data.type === 'bar') {
                            data.element.attr({
                                style: 'stroke-width: 30px'
                            });
                        }
                    });
                }
                var chartistdemo5 = jQuery("#chartistdemo5");
                if (chartistdemo5.length > 0) {
                    new Chartist.Bar('.ct-chart-horizontalbar', {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        series: [
                            [5, 4, 3, 7, 5, 10, 3],
                            [3, 2, 9, 5, 4, 6, 4]
                        ]
                    }, {
                        seriesBarDistance: 10,
                        reverseData: true,
                        horizontalBars: true,
                        axisY: {
                            offset: 50
                        },
                        chartPadding: {
                            right: 20,
                            left:0
                          }
                    });
                }
                var chartistdemo6 = jQuery("#chartistdemo6");
                if (chartistdemo6.length > 0) {
                    var data = {
                        series: [4, 3, 4, 3, 2]
                    };

                    var sum = function(a, b) { return a + b };

                    new Chartist.Pie('.ct-chart-pie', data, {
                        labelInterpolationFnc: function(value) {
                            return Math.round(value / data.series.reduce(sum) * 100) + '%';
                        }
                    });
                }
                var chartistdemo7 = jQuery("#chartistdemo7");
                if (chartistdemo7.length > 0) {
                    new Chartist.Pie('.ct-chart-donut', {
                        series: [20, 10, 30, 40]
                    }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        showLabel: true
                    });
                }
                var chartistdemo8 = jQuery("#chartistdemo8");
                if (chartistdemo8.length > 0) {
                    new Chartist.Pie('.ct-chart-gauge', {
                        series: [20, 10, 30, 40]
                    }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        total: 200,
                        showLabel: true
                    });
                }
                //analytical dashboard chart
                var analytical1 = jQuery("#analytical1");
                if (analytical1.length > 0) {
                    var data = {
                        series: [
                            [6, -5, 7, -6, 4, -3]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical1', data, options);
                }
                //analytical dashboard chart
                var analytical2 = jQuery("#analytical2");
                if (analytical2.length > 0) {
                    var data = {
                        series: [
                            [4, -7, 6, -3, 5, -2]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical2', data, options);
                }
                //analytical dashboard chart
                var analytical3 = jQuery("#analytical3");
                if (analytical3.length > 0) {
                    var data = {
                        series: [
                            [6, -3, 5, -7, 2, -4]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical3', data, options);
                }
                //analytical dashboard chart
                var analytical4 = jQuery("#analytical4");
                if (analytical4.length > 0) {
                    var data = {
                        series: [
                            [5, -3, 6, -8, 3, -5]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical4', data, options);
                }
                //analytical dashboard chart
                var analytical5 = jQuery("#analytical5");
                if (analytical5.length > 0) {
                    var data = {
                        series: [
                            [3, -5, 2, -6, 7, -3]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical5', data, options);
                }
                //analytical dashboard chart
                var analytical6 = jQuery("#analytical6");
                if (analytical6.length > 0) {
                    var data = {
                        series: [
                            [7, -4, 6, -3, 8, -2]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical6', data, options);
                }
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var chartJS = jQuery(".chartjs-wrapper");
        if (chartJS.length > 0) {
                    /* Utils */
                    window.chartColors = {
                        red: 'rgb(233, 84, 84)',
                        orange: 'rgb(253, 153, 68)',
                        yellow: 'rgb(255, 188, 29)',
                        green: 'rgb(37, 208, 154)',
                        blue: 'rgb(71, 118, 230)',
                        purple: 'rgb(142, 84, 233)',
                        grey: 'rgb(148, 148, 148)'
                    };

                    (function(global) {
                        var Months = [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December'
                        ];

                        var COLORS = [
                            '#4dc9f6',
                            '#f67019',
                            '#f53794',
                            '#537bc4',
                            '#acc236',
                            '#166a8f',
                            '#00a950',
                            '#58595b',
                            '#8549ba'
                        ];

                        var Samples = global.Samples || (global.Samples = {});
                        var Color = global.Color;

                        Samples.utils = {
                            // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
                            srand: function(seed) {
                                this._seed = seed;
                            },

                            rand: function(min, max) {
                                var seed = this._seed;
                                min = min === undefined ? 0 : min;
                                max = max === undefined ? 1 : max;
                                this._seed = (seed * 9301 + 49297) % 233280;
                                return min + (this._seed / 233280) * (max - min);
                            },

                            numbers: function(config) {
                                var cfg = config || {};
                                var min = cfg.min || 0;
                                var max = cfg.max || 1;
                                var from = cfg.from || [];
                                var count = cfg.count || 8;
                                var decimals = cfg.decimals || 8;
                                var continuity = cfg.continuity || 1;
                                var dfactor = Math.pow(10, decimals) || 0;
                                var data = [];
                                var i, value;

                                for (i = 0; i < count; ++i) {
                                    value = (from[i] || 0) + this.rand(min, max);
                                    if (this.rand() <= continuity) {
                                        data.push(Math.round(dfactor * value) / dfactor);
                                    } else {
                                        data.push(null);
                                    }
                                }

                                return data;
                            },

                            labels: function(config) {
                                var cfg = config || {};
                                var min = cfg.min || 0;
                                var max = cfg.max || 100;
                                var count = cfg.count || 8;
                                var step = (max - min) / count;
                                var decimals = cfg.decimals || 8;
                                var dfactor = Math.pow(10, decimals) || 0;
                                var prefix = cfg.prefix || '';
                                var values = [];
                                var i;

                                for (i = min; i < max; i += step) {
                                    values.push(prefix + Math.round(dfactor * i) / dfactor);
                                }

                                return values;
                            },

                            months: function(config) {
                                var cfg = config || {};
                                var count = cfg.count || 12;
                                var section = cfg.section;
                                var values = [];
                                var i, value;

                                for (i = 0; i < count; ++i) {
                                    value = Months[Math.ceil(i) % 12];
                                    values.push(value.substring(0, section));
                                }

                                return values;
                            },

                            color: function(index) {
                                return COLORS[index % COLORS.length];
                            },

                            transparentize: function(color, opacity) {
                                var alpha = opacity === undefined ? 0.5 : 1 - opacity;
                                return Color(color).alpha(alpha).rgbString();
                            }
                        };

                        // DEPRECATED
                        window.randomScalingFactor = function() {
                            return Math.round(Samples.utils.rand(-100, 100));
                        };

                        // INITIALIZATION

                        Samples.utils.srand(Date.now());

                    }(this));
                    /*Custom Points*/
                    var customTooltips = function(tooltip) {
                        $(this._chart.canvas).css("cursor", "pointer");
                        var positionY = this._chart.canvas.offsetTop;
                        var positionX = this._chart.canvas.offsetLeft;
                        $(".chartjs-tooltip").css({
                            opacity: 0,
                        });
                        if (!tooltip || !tooltip.opacity) {
                            return;
                        }
                        if (tooltip.dataPoints.length > 0) {
                            tooltip.dataPoints.forEach(function(dataPoint) {
                                var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
                                var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

                                $tooltip.html(content);
                                $tooltip.css({
                                    opacity: 1,
                                    top: positionY + dataPoint.y + "px",
                                    left: positionX + dataPoint.x + "px",
                                });
                            });
                        }
                    };
                    var color = Chart.helpers.color;
                    var lineChartData = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            backgroundColor: color(window.chartColors.purple).alpha(0.2).rgbString(),
                            borderColor: window.chartColors.purple,
                            pointBackgroundColor: window.chartColors.purple,
                            data: [
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor()
                            ]
                        }, {
                            label: "My Second dataset",
                            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                            borderColor: window.chartColors.blue,
                            pointBackgroundColor: window.chartColors.blue,
                            data: [
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor()
                            ]
                        }]
                    };
                    //simple line chart
                    var chartjsdemo1 = jQuery("#chartjsdemo1");
                    if (chartjsdemo1.length > 0) {
                        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var config = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "Facebook",
                                    borderColor: window.chartColors.blue,
                                    backgroundColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Twitter",
                                    borderColor: window.chartColors.green,
                                    backgroundColor: window.chartColors.green,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "LinkedIn",
                                    borderColor: window.chartColors.purple,
                                    backgroundColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Google+",
                                    borderColor: window.chartColors.yellow,
                                    backgroundColor: window.chartColors.yellow,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: false,
                                    text: "Line Chart - Stacked Area"
                                },
                                tooltips: {
                                    mode: 'index',
                                },
                                hover: {
                                    mode: 'index'
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12,
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12,
                                            stepSize: 1,
                                            beginAtZero: true
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Price',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx1 = document.getElementById("chartjsdemo1").getContext("2d");
                        window.myLine1 = new Chart(ctx1, config);
                    }
                    var chartjsdemo2 = jQuery("#chartjsdemo2");
                    if (chartjsdemo2.length > 0) {
                        // Line chart
                        var config2 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "Unfilled",
                                    fill: false,
                                    backgroundColor: window.chartColors.yellow,
                                    borderColor: window.chartColors.yellow,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Dashed",
                                    fill: false,
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    borderDash: [5, 5],
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Filled",
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    fill: true,
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: false,
                                    text: 'Line Chart - Line styles'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false,
                                },
                                hover: {
                                    mode: 'nearest',
                                    intersect: true
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12,
                                            stepSize: 1,
                                            beginAtZero: true
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx2 = document.getElementById("chartjsdemo2").getContext("2d");
                        window.myLine2 = new Chart(ctx2, config2);
                    }
                    var chartjsdemo3 = jQuery("#chartjsdemo3");
                    if (chartjsdemo3.length > 0) {
                        // Donut chart
                        var config3 = {
                            type: 'doughnut',
                            data: {
                                datasets: [{
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                    ],
                                    backgroundColor: [
                                        window.chartColors.red,
                                        window.chartColors.purple,
                                        window.chartColors.yellow,
                                        window.chartColors.green,
                                        window.chartColors.blue,
                                    ],
                                    label: 'Dataset 1'
                                }],
                                labels: [
                                    "Red",
                                    "Purple",
                                    "Yellow",
                                    "Green",
                                    "Blue"
                                ]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                title: {
                                    display: false,
                                    text: 'Doughnut Chart'
                                },
                                animation: {
                                    animateScale: true,
                                    animateRotate: true
                                }
                            }
                        };
                        var ctx3 = document.getElementById("chartjsdemo3").getContext("2d");
                        window.myLine3 = new Chart(ctx3, config3);
                    }
                    var chartjsdemo4 = jQuery("#chartjsdemo4");
                    if (chartjsdemo4.length > 0) {
                        // Combo
                        var timeFormat = 'MM/DD/YYYY HH:mm';

                        function newDateString(days) {
                            return moment().add(days, 'd').format(timeFormat);
                        }
                        var color = Chart.helpers.color;
                        var config4 = {
                            type: 'bar',
                            data: {
                                labels: [
                                    newDateString(0),
                                    newDateString(1),
                                    newDateString(2),
                                    newDateString(3),
                                    newDateString(4),
                                    newDateString(5),
                                    newDateString(6)
                                ],
                                datasets: [{
                                    type: 'bar',
                                    label: 'Dataset 1',
                                    backgroundColor: color(window.chartColors.purple).alpha(1).rgbString(),
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    type: 'bar',
                                    label: 'Dataset 2',
                                    backgroundColor: color(window.chartColors.blue).alpha(1).rgbString(),
                                    borderColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    type: 'line',
                                    label: 'Dataset 3',
                                    backgroundColor: color(window.chartColors.yellow).alpha(1).rgbString(),
                                    borderColor: window.chartColors.yellow,
                                    fill: false,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, ]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Combo Time Scale"
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        type: "time",
                                        display: true,
                                        time: {
                                            format: timeFormat
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                            }
                        };
                        var ctx4 = document.getElementById("chartjsdemo4").getContext("2d");
                        window.myLine4 = new Chart(ctx4, config4);
                    }
                    var chartjsdemo5 = jQuery("#chartjsdemo5");
                    if (chartjsdemo5.length > 0) {
                        var chartEl = document.getElementById("chartjsdemo5");
                        var chart = new Chart(chartEl, {
                            type: "line",
                            data: lineChartData,
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Custom Tooltips using Data Points"
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                tooltips: {
                                    enabled: false,
                                    mode: 'index',
                                    intersect: false,
                                    custom: customTooltips
                                },
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                            }
                        });
                    }
                    var chartjsdemo6 = jQuery("#chartjsdemo6");
                    if (chartjsdemo6.length > 0) {
                        // chart basic
                        var config6 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "My First dataset",
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    fill: false,
                                }, {
                                    label: "My Second dataset",
                                    fill: false,
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: 'Line Chart - Basic'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false,
                                },
                                hover: {
                                    mode: 'nearest',
                                    intersect: true
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx6 = document.getElementById("chartjsdemo6").getContext("2d");
                        window.myLine6 = new Chart(ctx6, config6);
                    }
                    var chartjsdemo7 = jQuery("#chartjsdemo7");
                    if (chartjsdemo7.length > 0) {
                        var config7 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "dataset - big points",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    fill: false,
                                    borderDash: [5, 5],
                                    pointRadius: 15,
                                    pointHoverRadius: 10,
                                }, {
                                    label: "dataset - individual point sizes",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    fill: false,
                                    borderDash: [5, 5],
                                    pointRadius: [2, 4, 6, 18, 0, 12, 20],
                                }, {
                                    label: "dataset - large pointHoverRadius",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.green,
                                    borderColor: window.chartColors.green,
                                    fill: false,
                                    pointHoverRadius: 30,
                                }, {
                                    label: "dataset - large pointHitRadius",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.yellow,
                                    borderColor: window.chartColors.yellow,
                                    fill: false,
                                    pointHitRadius: 20,
                                }]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                      
                                hover: {
                                    mode: 'index'
                                },
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                                title: {
                                    display: false,
                                    text: 'Line Chart - Different point sizes'
                                }
                            }
                        };
                        var ctx7 = document.getElementById("chartjsdemo7").getContext("2d");
                        window.myLine7 = new Chart(ctx7, config7);
                    }
                    var chartjsdemo8 = jQuery("#chartjsdemo8");
                    if (chartjsdemo8.length > 0) {
                        // Stacked bar chart
                        var barChartData = {
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [{
                                label: 'Dataset 1',
                                backgroundColor: window.chartColors.purple,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }, {
                                label: 'Dataset 2',
                                backgroundColor: window.chartColors.blue,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }, {
                                label: 'Dataset 3',
                                backgroundColor: window.chartColors.yellow,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }]
                        };
                        var ctx8 = document.getElementById("chartjsdemo8").getContext("2d");
                        window.myBar = new Chart(ctx8, {
                            type: 'bar',
                            data: barChartData,
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Bar Chart - Stacked"
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false
                                },
                                
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        stacked: true,
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: true,
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        });
                    }
                    
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

$(function(){
    var comingsoon = $('.comingsoon')
    if (comingsoon.length > 0) {
        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        let countDown = new Date('dec 30, 2019 00:00:00').getTime(),
        x = setInterval(function() {
        let now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)
}
});

})(window, document, window.jQuery);

(function(window, document, $, undefined){

    $(function(){
        var dataTable = jQuery(".datatable-wrapper");
        if (dataTable.length > 0) {
            $('#datatable').DataTable({
                "bLengthChange": false,
                "searching": false,
                "bPaginate":true,
                "bSortable": true
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$('.date-picker-default').datepicker({
        format: 'mm-dd-yyyy',
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });


    $('.display-years').datepicker({
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('.display-months').datepicker({
        format: 'mm-dd',
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });
    

    $('#datepicker-inline').datepicker({
        todayHighlight: true,
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });


    $('#datepicker-action').datepicker({
        todayBtn: "linked",
        clearBtn: true,
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });


    $('#datepicker-top-left').datepicker({
        orientation: "top left",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('#datepicker-top-right').datepicker({
        orientation: "top right",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('#datepicker-bottom-left').datepicker({
        orientation: "bottom left",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('#datepicker-bottom-right').datepicker({
        orientation: "bottom right",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

var checkin = $('.range-from').datepicker({
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();

        $('.range-to')[0].focus();
    }).data('datepicker');
    var checkout = $('.range-to').datepicker({
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        checkout.hide();
    }).data('datepicker');

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var dualListBox = jQuery(".duallistbox");
        if (dualListBox.length > 0) {
            $('#duallistbox').bootstrapDualListbox({
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var dualListBox = jQuery("#tableedit");
        if (dualListBox.length > 0) {
        $('#tableedit').Tabledit({
            deleteButton: false,
            saveButton: false,
            autoFocus: false,
            buttons: {
                edit: {
                    class: 'btn btn-sm btn-primary',
                    html: '<span class="fa fa-pencil"></span> &nbsp EDIT',
                    action: 'edit'
                }
            },
            columns: {
                identifier: [0, 'id'],
                editable: [[1, 'car'], [2, 'color']]
            }
        });
    }
});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var eventCalendar = jQuery(".event-calendar");
        if (eventCalendar.length > 0) {
            $('#external-events .fc-event').each(function() {

                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()), // use the element's text as the event title
                    stick: true, // maintain when user navigates (see docs on the renderEvent method)
                    className: $(this).data('color')
                });

                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 999,
                    revert: true,      // will cause the event to go back to its
                    revertDuration: 0  //  original position after the drag
                });

            });

            $('#event-calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true,
                droppable: true,
                drop: function() {
                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                      // if so, remove the element from the "Draggable Events" list
                      $(this).remove();
                    }
                  },
                events: [{
                        title: 'Simple Event',
                        start: '2019-02-22',
                        end: '2019-02-25',
                        className: 'fc-event-danger'
                    },
                    {
                        title: 'Google',
                        url: 'https://www.google.com/',
                        start: '2019-02-18',
                        className: 'fc-event-success'
                    },
                    {
                        title: 'Family Vacation',
                        start: '2019-02-14',
                        end: '2019-02-18',
                        className: 'fc-event-primary'
                    }
                ]
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var eventListCalendar = jQuery(".event-list-calendar");
        if (eventListCalendar.length > 0) {
            $('#event-list-calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'listDay,listWeek,month'
                },
                views: {
                    listDay: { buttonText: 'list day' },
                    listWeek: { buttonText: 'list week' }
                },
                height: 650,
                defaultView: 'listWeek',
                defaultDate: '2018-09-12',
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: [{
                        title: 'All Day Event',
                        start: '2018-09-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2018-09-07',
                        end: '2018-09-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2018-09-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2018-09-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2018-09-11',
                        end: '2018-09-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-09-12T10:30:00',
                        end: '2018-09-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2018-09-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-09-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2018-09-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2018-09-12T20:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2018-09-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2018-09-28'
                    }
                ]
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var exportTable = jQuery(".export-table-wrapper");
        if (exportTable.length > 0) {
            $("#export-table").tableExport({
                headers: true,
                footers: true,
                formats: ["xlsx", "csv", "txt"],
                bootstrap: true,
                exportButtons: true,
                position: "top"                
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var flotChart = jQuery(".flot-chart-wrapper");
        if (flotChart.length > 0) {
                        var d1 = [];
                        for (var i = 0; i <= 10; i += 1) {
                            d1.push([i, parseInt(Math.random() * 30)]);
                        }

                        var d2 = [];
                        for (var i = 0; i <= 10; i += 1) {
                            d2.push([i, parseInt(Math.random() * 30)]);
                        }

                        var d3 = [];
                        for (var i = 0; i <= 10; i += 1) {
                            d3.push([i, parseInt(Math.random() * 30)]);
                        }

                        var stack = 0,
                            bars = true,
                            lines = false,
                            steps = false;

                        function plotWithOptions() {
                            $.plot("#flot-stacked", [d1, d2, d3], {
                                grid: { borderWidth: 0, labelMargin: 5, axisMargin: 0, minBorderMargin: 0 },
                                series: {
                                    stack: stack,
                                    lines: {
                                        show: lines,
                                        fill: true,
                                        steps: steps
                                    },
                                    bars: {
                                        show: bars,
                                        barWidth: 0.6,
                                        align: "center"
                                    }
                                },
                                colors: ["#4776E6", "#8E54E9", "#fbaf54"]
                            });
                        }

                        plotWithOptions();


                        // flot-real-time

                        var data = [],
                            totalPoints = 300;

                        function getRandomData() {

                            if (data.length > 0)
                                data = data.slice(1);

                            // Do a random walk

                            while (data.length < totalPoints) {

                                var prev = data.length > 0 ? data[data.length - 1] : 50,
                                    y = prev + Math.random() * 10 - 5;

                                if (y < 0) {
                                    y = 0;
                                } else if (y > 100) {
                                    y = 100;
                                }

                                data.push(y);
                            }

                            // Zip the generated y values with the x values

                            var res = [];
                            for (var i = 0; i < data.length; ++i) {
                                res.push([i, data[i]])
                            }

                            return res;
                        }

                        // Set up the control widget

                        var updateInterval = 100;
                        $("#flot-real-time").val(updateInterval).change(function() {
                            var v = $(this).val();
                            if (v && !isNaN(+v)) {
                                updateInterval = +v;
                                if (updateInterval < 1) {
                                    updateInterval = 1;
                                } else if (updateInterval > 2000) {
                                    updateInterval = 2000;
                                }
                                $(this).val("" + updateInterval);
                            }
                        });

                        var plot = $.plot("#flot-real-time", [getRandomData()], {
                            grid: { borderWidth: 0, labelMargin: 0, axisMargin: 0, minBorderMargin: 0 },
                            series: {
                                shadowSize: 0 // Drawing is faster without shadows
                            },
                            colors: [" #8E54E9"],
                            yaxis: {
                                min: 0,
                                max: 100
                            },
                            xaxis: {
                                show: false
                            }
                        });

                        function update() {

                            plot.setData([getRandomData()]);

                            // Since the axes don't change, we don't need to call plot.setupGrid()

                            plot.draw();
                            setTimeout(update, updateInterval);
                        }

                        update();

                        // Add the Flot version string to the footer

                        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");


                        //flot-series-toggle

                        var datasets = {
                            "usa": {
                                label: "USA",
                                data: [
                                    [1988, 483994],
                                    [1989, 479060],
                                    [1990, 457648],
                                    [1991, 401949],
                                    [1992, 424705],
                                    [1993, 402375],
                                    [1994, 377867],
                                    [1995, 357382],
                                    [1996, 337946],
                                    [1997, 336185],
                                    [1998, 328611],
                                    [1999, 329421],
                                    [2000, 342172],
                                    [2001, 344932],
                                    [2002, 387303],
                                    [2003, 440813],
                                    [2004, 480451],
                                    [2005, 504638],
                                    [2006, 528692]
                                ]
                            },
                            "russia": {
                                label: "Russia",
                                data: [
                                    [1988, 218000],
                                    [1989, 203000],
                                    [1990, 171000],
                                    [1992, 42500],
                                    [1993, 37600],
                                    [1994, 36600],
                                    [1995, 21700],
                                    [1996, 19200],
                                    [1997, 21300],
                                    [1998, 13600],
                                    [1999, 14000],
                                    [2000, 19100],
                                    [2001, 21300],
                                    [2002, 23600],
                                    [2003, 25100],
                                    [2004, 26100],
                                    [2005, 31100],
                                    [2006, 34700]
                                ]
                            },
                            "uk": {
                                label: "UK",
                                data: [
                                    [1988, 62982],
                                    [1989, 62027],
                                    [1990, 60696],
                                    [1991, 62348],
                                    [1992, 58560],
                                    [1993, 56393],
                                    [1994, 54579],
                                    [1995, 50818],
                                    [1996, 50554],
                                    [1997, 48276],
                                    [1998, 47691],
                                    [1999, 47529],
                                    [2000, 47778],
                                    [2001, 48760],
                                    [2002, 50949],
                                    [2003, 57452],
                                    [2004, 60234],
                                    [2005, 60076],
                                    [2006, 59213]
                                ]
                            },
                            "germany": {
                                label: "Germany",
                                data: [
                                    [1988, 55627],
                                    [1989, 55475],
                                    [1990, 58464],
                                    [1991, 55134],
                                    [1992, 52436],
                                    [1993, 47139],
                                    [1994, 43962],
                                    [1995, 43238],
                                    [1996, 42395],
                                    [1997, 40854],
                                    [1998, 40993],
                                    [1999, 41822],
                                    [2000, 41147],
                                    [2001, 40474],
                                    [2002, 40604],
                                    [2003, 40044],
                                    [2004, 38816],
                                    [2005, 38060],
                                    [2006, 36984]
                                ]
                            },
                            "denmark": {
                                label: "Denmark",
                                data: [
                                    [1988, 3813],
                                    [1989, 3719],
                                    [1990, 3722],
                                    [1991, 3789],
                                    [1992, 3720],
                                    [1993, 3730],
                                    [1994, 3636],
                                    [1995, 3598],
                                    [1996, 3610],
                                    [1997, 3655],
                                    [1998, 3695],
                                    [1999, 3673],
                                    [2000, 3553],
                                    [2001, 3774],
                                    [2002, 3728],
                                    [2003, 3618],
                                    [2004, 3638],
                                    [2005, 3467],
                                    [2006, 3770]
                                ]
                            },
                            "sweden": {
                                label: "Sweden",
                                data: [
                                    [1988, 6402],
                                    [1989, 6474],
                                    [1990, 6605],
                                    [1991, 6209],
                                    [1992, 6035],
                                    [1993, 6020],
                                    [1994, 6000],
                                    [1995, 6018],
                                    [1996, 3958],
                                    [1997, 5780],
                                    [1998, 5954],
                                    [1999, 6178],
                                    [2000, 6411],
                                    [2001, 5993],
                                    [2002, 5833],
                                    [2003, 5791],
                                    [2004, 5450],
                                    [2005, 5521],
                                    [2006, 5271]
                                ]
                            },
                            "norway": {
                                label: "Norway",
                                data: [
                                    [1988, 4382],
                                    [1989, 4498],
                                    [1990, 4535],
                                    [1991, 4398],
                                    [1992, 4766],
                                    [1993, 4441],
                                    [1994, 4670],
                                    [1995, 4217],
                                    [1996, 4275],
                                    [1997, 4203],
                                    [1998, 4482],
                                    [1999, 4506],
                                    [2000, 4358],
                                    [2001, 4385],
                                    [2002, 5269],
                                    [2003, 5066],
                                    [2004, 5194],
                                    [2005, 4887],
                                    [2006, 4891]
                                ]
                            }
                        };

                        // hard-code color indices to prevent them from shifting as
                        // countries are turned on/off

                        var i = 0;
                        $.each(datasets, function(key, val) {
                            val.color = i;
                            ++i;
                        });

                        // insert checkboxes
                        var choiceContainer = $("#flot-series-toggle");
                        $.each(datasets, function(key, val) {
                            choiceContainer.append("<br/><input type='checkbox' name='" + key +
                                "' checked='checked' id='id" + key + "'></input>" +
                                "<label for='id" + key + "'>" +
                                val.label + "</label>");
                        });

                        choiceContainer.find("input").click(plotAccordingToChoices);

                        function plotAccordingToChoices() {

                            var data = [];

                            choiceContainer.find("input:checked").each(function() {
                                var key = $(this).attr("name");
                                if (key && datasets[key]) {
                                    data.push(datasets[key]);
                                }
                            });

                            if (data.length > 0) {
                                $.plot("#flot-series-toggle", data, {
                                    grid: { borderWidth: 0, labelMargin: 10, axisMargin: 0, minBorderMargin: 0 },
                                    colors: ["#f7b731", "#fd9644", "#32b432", "#8E54E9", "#4776E6", "#e3324c", "#fb0792"],
                                    yaxis: {
                                        min: 0
                                    },
                                    xaxis: {
                                        tickDecimals: 0
                                    }
                                });
                            }
                        }

                        plotAccordingToChoices();

                        // Add the Flot version string to the footer

                        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

                        var oilprices = [
                            [1167692400000, 61.05],
                            [1167778800000, 58.32],
                            [1167865200000, 57.35],
                            [1167951600000, 56.31],
                            [1168210800000, 55.55],
                            [1168297200000, 55.64],
                            [1168383600000, 54.02],
                            [1168470000000, 51.88],
                            [1168556400000, 52.99],
                            [1168815600000, 52.99],
                            [1168902000000, 51.21],
                            [1168988400000, 52.24],
                            [1169074800000, 50.48],
                            [1169161200000, 51.99],
                            [1169420400000, 51.13],
                            [1169506800000, 55.04],
                            [1169593200000, 55.37],
                            [1169679600000, 54.23],
                            [1169766000000, 55.42],
                            [1170025200000, 54.01],
                            [1170111600000, 56.97],
                            [1170198000000, 58.14],
                            [1170284400000, 58.14],
                            [1170370800000, 59.02],
                            [1170630000000, 58.74],
                            [1170716400000, 58.88],
                            [1170802800000, 57.71],
                            [1170889200000, 59.71],
                            [1170975600000, 59.89],
                            [1171234800000, 57.81],
                            [1171321200000, 59.06],
                            [1171407600000, 58.00],
                            [1171494000000, 57.99],
                            [1171580400000, 59.39],
                            [1171839600000, 59.39],
                            [1171926000000, 58.07],
                            [1172012400000, 60.07],
                            [1172098800000, 61.14],
                            [1172444400000, 61.39],
                            [1172530800000, 61.46],
                            [1172617200000, 61.79],
                            [1172703600000, 62.00],
                            [1172790000000, 60.07],
                            [1173135600000, 60.69],
                            [1173222000000, 61.82],
                            [1173308400000, 60.05],
                            [1173654000000, 58.91],
                            [1173740400000, 57.93],
                            [1173826800000, 58.16],
                            [1173913200000, 57.55],
                            [1173999600000, 57.11],
                            [1174258800000, 56.59],
                            [1174345200000, 59.61],
                            [1174518000000, 61.69],
                            [1174604400000, 62.28],
                            [1174860000000, 62.91],
                            [1174946400000, 62.93],
                            [1175032800000, 64.03],
                            [1175119200000, 66.03],
                            [1175205600000, 65.87],
                            [1175464800000, 64.64],
                            [1175637600000, 64.38],
                            [1175724000000, 64.28],
                            [1175810400000, 64.28],
                            [1176069600000, 61.51],
                            [1176156000000, 61.89],
                            [1176242400000, 62.01],
                            [1176328800000, 63.85],
                            [1176415200000, 63.63],
                            [1176674400000, 63.61],
                            [1176760800000, 63.10],
                            [1176847200000, 63.13],
                            [1176933600000, 61.83],
                            [1177020000000, 63.38],
                            [1177279200000, 64.58],
                            [1177452000000, 65.84],
                            [1177538400000, 65.06],
                            [1177624800000, 66.46],
                            [1177884000000, 64.40],
                            [1178056800000, 63.68],
                            [1178143200000, 63.19],
                            [1178229600000, 61.93],
                            [1178488800000, 61.47],
                            [1178575200000, 61.55],
                            [1178748000000, 61.81],
                            [1178834400000, 62.37],
                            [1179093600000, 62.46],
                            [1179180000000, 63.17],
                            [1179266400000, 62.55],
                            [1179352800000, 64.94],
                            [1179698400000, 66.27],
                            [1179784800000, 65.50],
                            [1179871200000, 65.77],
                            [1179957600000, 64.18],
                            [1180044000000, 65.20],
                            [1180389600000, 63.15],
                            [1180476000000, 63.49],
                            [1180562400000, 65.08],
                            [1180908000000, 66.30],
                            [1180994400000, 65.96],
                            [1181167200000, 66.93],
                            [1181253600000, 65.98],
                            [1181599200000, 65.35],
                            [1181685600000, 66.26],
                            [1181858400000, 68.00],
                            [1182117600000, 69.09],
                            [1182204000000, 69.10],
                            [1182290400000, 68.19],
                            [1182376800000, 68.19],
                            [1182463200000, 69.14],
                            [1182722400000, 68.19],
                            [1182808800000, 67.77],
                            [1182895200000, 68.97],
                            [1182981600000, 69.57],
                            [1183068000000, 70.68],
                            [1183327200000, 71.09],
                            [1183413600000, 70.92],
                            [1183586400000, 71.81],
                            [1183672800000, 72.81],
                            [1183932000000, 72.19],
                            [1184018400000, 72.56],
                            [1184191200000, 72.50],
                            [1184277600000, 74.15],
                            [1184623200000, 75.05],
                            [1184796000000, 75.92],
                            [1184882400000, 75.57],
                            [1185141600000, 74.89],
                            [1185228000000, 73.56],
                            [1185314400000, 75.57],
                            [1185400800000, 74.95],
                            [1185487200000, 76.83],
                            [1185832800000, 78.21],
                            [1185919200000, 76.53],
                            [1186005600000, 76.86],
                            [1186092000000, 76.00],
                            [1186437600000, 71.59],
                            [1186696800000, 71.47],
                            [1186956000000, 71.62],
                            [1187042400000, 71.00],
                            [1187301600000, 71.98],
                            [1187560800000, 71.12],
                            [1187647200000, 69.47],
                            [1187733600000, 69.26],
                            [1187820000000, 69.83],
                            [1187906400000, 71.09],
                            [1188165600000, 71.73],
                            [1188338400000, 73.36],
                            [1188511200000, 74.04],
                            [1188856800000, 76.30],
                            [1189116000000, 77.49],
                            [1189461600000, 78.23],
                            [1189548000000, 79.91],
                            [1189634400000, 80.09],
                            [1189720800000, 79.10],
                            [1189980000000, 80.57],
                            [1190066400000, 81.93],
                            [1190239200000, 83.32],
                            [1190325600000, 81.62],
                            [1190584800000, 80.95],
                            [1190671200000, 79.53],
                            [1190757600000, 80.30],
                            [1190844000000, 82.88],
                            [1190930400000, 81.66],
                            [1191189600000, 80.24],
                            [1191276000000, 80.05],
                            [1191362400000, 79.94],
                            [1191448800000, 81.44],
                            [1191535200000, 81.22],
                            [1191794400000, 79.02],
                            [1191880800000, 80.26],
                            [1191967200000, 80.30],
                            [1192053600000, 83.08],
                            [1192140000000, 83.69],
                            [1192399200000, 86.13],
                            [1192485600000, 87.61],
                            [1192572000000, 87.40],
                            [1192658400000, 89.47],
                            [1192744800000, 88.60],
                            [1193004000000, 87.56],
                            [1193090400000, 87.56],
                            [1193176800000, 87.10],
                            [1193263200000, 91.86],
                            [1193612400000, 93.53],
                            [1193698800000, 94.53],
                            [1193871600000, 95.93],
                            [1194217200000, 93.98],
                            [1194303600000, 96.37],
                            [1194476400000, 95.46],
                            [1194562800000, 96.32],
                            [1195081200000, 93.43],
                            [1195167600000, 95.10],
                            [1195426800000, 94.64],
                            [1195513200000, 95.10],
                            [1196031600000, 97.70],
                            [1196118000000, 94.42],
                            [1196204400000, 90.62],
                            [1196290800000, 91.01],
                            [1196377200000, 88.71],
                            [1196636400000, 88.32],
                            [1196809200000, 90.23],
                            [1196982000000, 88.28],
                            [1197241200000, 87.86],
                            [1197327600000, 90.02],
                            [1197414000000, 92.25],
                            [1197586800000, 90.63],
                            [1197846000000, 90.63],
                            [1197932400000, 90.49],
                            [1198018800000, 91.24],
                            [1198105200000, 91.06],
                            [1198191600000, 90.49],
                            [1198710000000, 96.62],
                            [1198796400000, 96.00],
                            [1199142000000, 99.62],
                            [1199314800000, 99.18],
                            [1199401200000, 95.09],
                            [1199660400000, 96.33],
                            [1199833200000, 95.67],
                            [1200351600000, 91.90],
                            [1200438000000, 90.84],
                            [1200524400000, 90.13],
                            [1200610800000, 90.57],
                            [1200956400000, 89.21],
                            [1201042800000, 86.99],
                            [1201129200000, 89.85],
                            [1201474800000, 90.99],
                            [1201561200000, 91.64],
                            [1201647600000, 92.33],
                            [1201734000000, 91.75],
                            [1202079600000, 90.02],
                            [1202166000000, 88.41],
                            [1202252400000, 87.14],
                            [1202338800000, 88.11],
                            [1202425200000, 91.77],
                            [1202770800000, 92.78],
                            [1202857200000, 93.27],
                            [1202943600000, 95.46],
                            [1203030000000, 95.46],
                            [1203289200000, 101.74],
                            [1203462000000, 98.81],
                            [1203894000000, 100.88],
                            [1204066800000, 99.64],
                            [1204153200000, 102.59],
                            [1204239600000, 101.84],
                            [1204498800000, 99.52],
                            [1204585200000, 99.52],
                            [1204671600000, 104.52],
                            [1204758000000, 105.47],
                            [1204844400000, 105.15],
                            [1205103600000, 108.75],
                            [1205276400000, 109.92],
                            [1205362800000, 110.33],
                            [1205449200000, 110.21],
                            [1205708400000, 105.68],
                            [1205967600000, 101.84],
                            [1206313200000, 100.86],
                            [1206399600000, 101.22],
                            [1206486000000, 105.90],
                            [1206572400000, 107.58],
                            [1206658800000, 105.62],
                            [1206914400000, 101.58],
                            [1207000800000, 100.98],
                            [1207173600000, 103.83],
                            [1207260000000, 106.23],
                            [1207605600000, 108.50],
                            [1207778400000, 110.11],
                            [1207864800000, 110.14],
                            [1208210400000, 113.79],
                            [1208296800000, 114.93],
                            [1208383200000, 114.86],
                            [1208728800000, 117.48],
                            [1208815200000, 118.30],
                            [1208988000000, 116.06],
                            [1209074400000, 118.52],
                            [1209333600000, 118.75],
                            [1209420000000, 113.46],
                            [1209592800000, 112.52],
                            [1210024800000, 121.84],
                            [1210111200000, 123.53],
                            [1210197600000, 123.69],
                            [1210543200000, 124.23],
                            [1210629600000, 125.80],
                            [1210716000000, 126.29],
                            [1211148000000, 127.05],
                            [1211320800000, 129.07],
                            [1211493600000, 132.19],
                            [1211839200000, 128.85],
                            [1212357600000, 127.76],
                            [1212703200000, 138.54],
                            [1212962400000, 136.80],
                            [1213135200000, 136.38],
                            [1213308000000, 134.86],
                            [1213653600000, 134.01],
                            [1213740000000, 136.68],
                            [1213912800000, 135.65],
                            [1214172000000, 134.62],
                            [1214258400000, 134.62],
                            [1214344800000, 134.62],
                            [1214431200000, 139.64],
                            [1214517600000, 140.21],
                            [1214776800000, 140.00],
                            [1214863200000, 140.97],
                            [1214949600000, 143.57],
                            [1215036000000, 145.29],
                            [1215381600000, 141.37],
                            [1215468000000, 136.04],
                            [1215727200000, 146.40],
                            [1215986400000, 145.18],
                            [1216072800000, 138.74],
                            [1216159200000, 134.60],
                            [1216245600000, 129.29],
                            [1216332000000, 130.65],
                            [1216677600000, 127.95],
                            [1216850400000, 127.95],
                            [1217282400000, 122.19],
                            [1217455200000, 124.08],
                            [1217541600000, 125.10],
                            [1217800800000, 121.41],
                            [1217887200000, 119.17],
                            [1217973600000, 118.58],
                            [1218060000000, 120.02],
                            [1218405600000, 114.45],
                            [1218492000000, 113.01],
                            [1218578400000, 116.00],
                            [1218751200000, 113.77],
                            [1219010400000, 112.87],
                            [1219096800000, 114.53],
                            [1219269600000, 114.98],
                            [1219356000000, 114.98],
                            [1219701600000, 116.27],
                            [1219788000000, 118.15],
                            [1219874400000, 115.59],
                            [1219960800000, 115.46],
                            [1220306400000, 109.71],
                            [1220392800000, 109.35],
                            [1220565600000, 106.23],
                            [1220824800000, 106.34]
                        ];

                        var exchangerates = [
                            [1167606000000, 0.7580],
                            [1167692400000, 0.7580],
                            [1167778800000, 0.75470],
                            [1167865200000, 0.75490],
                            [1167951600000, 0.76130],
                            [1168038000000, 0.76550],
                            [1168124400000, 0.76930],
                            [1168210800000, 0.76940],
                            [1168297200000, 0.76880],
                            [1168383600000, 0.76780],
                            [1168470000000, 0.77080],
                            [1168556400000, 0.77270],
                            [1168642800000, 0.77490],
                            [1168729200000, 0.77410],
                            [1168815600000, 0.77410],
                            [1168902000000, 0.77320],
                            [1168988400000, 0.77270],
                            [1169074800000, 0.77370],
                            [1169161200000, 0.77240],
                            [1169247600000, 0.77120],
                            [1169334000000, 0.7720],
                            [1169420400000, 0.77210],
                            [1169506800000, 0.77170],
                            [1169593200000, 0.77040],
                            [1169679600000, 0.7690],
                            [1169766000000, 0.77110],
                            [1169852400000, 0.7740],
                            [1169938800000, 0.77450],
                            [1170025200000, 0.77450],
                            [1170111600000, 0.7740],
                            [1170198000000, 0.77160],
                            [1170284400000, 0.77130],
                            [1170370800000, 0.76780],
                            [1170457200000, 0.76880],
                            [1170543600000, 0.77180],
                            [1170630000000, 0.77180],
                            [1170716400000, 0.77280],
                            [1170802800000, 0.77290],
                            [1170889200000, 0.76980],
                            [1170975600000, 0.76850],
                            [1171062000000, 0.76810],
                            [1171148400000, 0.7690],
                            [1171234800000, 0.7690],
                            [1171321200000, 0.76980],
                            [1171407600000, 0.76990],
                            [1171494000000, 0.76510],
                            [1171580400000, 0.76130],
                            [1171666800000, 0.76160],
                            [1171753200000, 0.76140],
                            [1171839600000, 0.76140],
                            [1171926000000, 0.76070],
                            [1172012400000, 0.76020],
                            [1172098800000, 0.76110],
                            [1172185200000, 0.76220],
                            [1172271600000, 0.76150],
                            [1172358000000, 0.75980],
                            [1172444400000, 0.75980],
                            [1172530800000, 0.75920],
                            [1172617200000, 0.75730],
                            [1172703600000, 0.75660],
                            [1172790000000, 0.75670],
                            [1172876400000, 0.75910],
                            [1172962800000, 0.75820],
                            [1173049200000, 0.75850],
                            [1173135600000, 0.76130],
                            [1173222000000, 0.76310],
                            [1173308400000, 0.76150],
                            [1173394800000, 0.760],
                            [1173481200000, 0.76130],
                            [1173567600000, 0.76270],
                            [1173654000000, 0.76270],
                            [1173740400000, 0.76080],
                            [1173826800000, 0.75830],
                            [1173913200000, 0.75750],
                            [1173999600000, 0.75620],
                            [1174086000000, 0.7520],
                            [1174172400000, 0.75120],
                            [1174258800000, 0.75120],
                            [1174345200000, 0.75170],
                            [1174431600000, 0.7520],
                            [1174518000000, 0.75110],
                            [1174604400000, 0.7480],
                            [1174690800000, 0.75090],
                            [1174777200000, 0.75310],
                            [1174860000000, 0.75310],
                            [1174946400000, 0.75270],
                            [1175032800000, 0.74980],
                            [1175119200000, 0.74930],
                            [1175205600000, 0.75040],
                            [1175292000000, 0.750],
                            [1175378400000, 0.74910],
                            [1175464800000, 0.74910],
                            [1175551200000, 0.74850],
                            [1175637600000, 0.74840],
                            [1175724000000, 0.74920],
                            [1175810400000, 0.74710],
                            [1175896800000, 0.74590],
                            [1175983200000, 0.74770],
                            [1176069600000, 0.74770],
                            [1176156000000, 0.74830],
                            [1176242400000, 0.74580],
                            [1176328800000, 0.74480],
                            [1176415200000, 0.7430],
                            [1176501600000, 0.73990],
                            [1176588000000, 0.73950],
                            [1176674400000, 0.73950],
                            [1176760800000, 0.73780],
                            [1176847200000, 0.73820],
                            [1176933600000, 0.73620],
                            [1177020000000, 0.73550],
                            [1177106400000, 0.73480],
                            [1177192800000, 0.73610],
                            [1177279200000, 0.73610],
                            [1177365600000, 0.73650],
                            [1177452000000, 0.73620],
                            [1177538400000, 0.73310],
                            [1177624800000, 0.73390],
                            [1177711200000, 0.73440],
                            [1177797600000, 0.73270],
                            [1177884000000, 0.73270],
                            [1177970400000, 0.73360],
                            [1178056800000, 0.73330],
                            [1178143200000, 0.73590],
                            [1178229600000, 0.73590],
                            [1178316000000, 0.73720],
                            [1178402400000, 0.7360],
                            [1178488800000, 0.7360],
                            [1178575200000, 0.7350],
                            [1178661600000, 0.73650],
                            [1178748000000, 0.73840],
                            [1178834400000, 0.73950],
                            [1178920800000, 0.74130],
                            [1179007200000, 0.73970],
                            [1179093600000, 0.73960],
                            [1179180000000, 0.73850],
                            [1179266400000, 0.73780],
                            [1179352800000, 0.73660],
                            [1179439200000, 0.740],
                            [1179525600000, 0.74110],
                            [1179612000000, 0.74060],
                            [1179698400000, 0.74050],
                            [1179784800000, 0.74140],
                            [1179871200000, 0.74310],
                            [1179957600000, 0.74310],
                            [1180044000000, 0.74380],
                            [1180130400000, 0.74430],
                            [1180216800000, 0.74430],
                            [1180303200000, 0.74430],
                            [1180389600000, 0.74340],
                            [1180476000000, 0.74290],
                            [1180562400000, 0.74420],
                            [1180648800000, 0.7440],
                            [1180735200000, 0.74390],
                            [1180821600000, 0.74370],
                            [1180908000000, 0.74370],
                            [1180994400000, 0.74290],
                            [1181080800000, 0.74030],
                            [1181167200000, 0.73990],
                            [1181253600000, 0.74180],
                            [1181340000000, 0.74680],
                            [1181426400000, 0.7480],
                            [1181512800000, 0.7480],
                            [1181599200000, 0.7490],
                            [1181685600000, 0.74940],
                            [1181772000000, 0.75220],
                            [1181858400000, 0.75150],
                            [1181944800000, 0.75020],
                            [1182031200000, 0.74720],
                            [1182117600000, 0.74720],
                            [1182204000000, 0.74620],
                            [1182290400000, 0.74550],
                            [1182376800000, 0.74490],
                            [1182463200000, 0.74670],
                            [1182549600000, 0.74580],
                            [1182636000000, 0.74270],
                            [1182722400000, 0.74270],
                            [1182808800000, 0.7430],
                            [1182895200000, 0.74290],
                            [1182981600000, 0.7440],
                            [1183068000000, 0.7430],
                            [1183154400000, 0.74220],
                            [1183240800000, 0.73880],
                            [1183327200000, 0.73880],
                            [1183413600000, 0.73690],
                            [1183500000000, 0.73450],
                            [1183586400000, 0.73450],
                            [1183672800000, 0.73450],
                            [1183759200000, 0.73520],
                            [1183845600000, 0.73410],
                            [1183932000000, 0.73410],
                            [1184018400000, 0.7340],
                            [1184104800000, 0.73240],
                            [1184191200000, 0.72720],
                            [1184277600000, 0.72640],
                            [1184364000000, 0.72550],
                            [1184450400000, 0.72580],
                            [1184536800000, 0.72580],
                            [1184623200000, 0.72560],
                            [1184709600000, 0.72570],
                            [1184796000000, 0.72470],
                            [1184882400000, 0.72430],
                            [1184968800000, 0.72440],
                            [1185055200000, 0.72350],
                            [1185141600000, 0.72350],
                            [1185228000000, 0.72350],
                            [1185314400000, 0.72350],
                            [1185400800000, 0.72620],
                            [1185487200000, 0.72880],
                            [1185573600000, 0.73010],
                            [1185660000000, 0.73370],
                            [1185746400000, 0.73370],
                            [1185832800000, 0.73240],
                            [1185919200000, 0.72970],
                            [1186005600000, 0.73170],
                            [1186092000000, 0.73150],
                            [1186178400000, 0.72880],
                            [1186264800000, 0.72630],
                            [1186351200000, 0.72630],
                            [1186437600000, 0.72420],
                            [1186524000000, 0.72530],
                            [1186610400000, 0.72640],
                            [1186696800000, 0.7270],
                            [1186783200000, 0.73120],
                            [1186869600000, 0.73050],
                            [1186956000000, 0.73050],
                            [1187042400000, 0.73180],
                            [1187128800000, 0.73580],
                            [1187215200000, 0.74090],
                            [1187301600000, 0.74540],
                            [1187388000000, 0.74370],
                            [1187474400000, 0.74240],
                            [1187560800000, 0.74240],
                            [1187647200000, 0.74150],
                            [1187733600000, 0.74190],
                            [1187820000000, 0.74140],
                            [1187906400000, 0.73770],
                            [1187992800000, 0.73550],
                            [1188079200000, 0.73150],
                            [1188165600000, 0.73150],
                            [1188252000000, 0.7320],
                            [1188338400000, 0.73320],
                            [1188424800000, 0.73460],
                            [1188511200000, 0.73280],
                            [1188597600000, 0.73230],
                            [1188684000000, 0.7340],
                            [1188770400000, 0.7340],
                            [1188856800000, 0.73360],
                            [1188943200000, 0.73510],
                            [1189029600000, 0.73460],
                            [1189116000000, 0.73210],
                            [1189202400000, 0.72940],
                            [1189288800000, 0.72660],
                            [1189375200000, 0.72660],
                            [1189461600000, 0.72540],
                            [1189548000000, 0.72420],
                            [1189634400000, 0.72130],
                            [1189720800000, 0.71970],
                            [1189807200000, 0.72090],
                            [1189893600000, 0.7210],
                            [1189980000000, 0.7210],
                            [1190066400000, 0.7210],
                            [1190152800000, 0.72090],
                            [1190239200000, 0.71590],
                            [1190325600000, 0.71330],
                            [1190412000000, 0.71050],
                            [1190498400000, 0.70990],
                            [1190584800000, 0.70990],
                            [1190671200000, 0.70930],
                            [1190757600000, 0.70930],
                            [1190844000000, 0.70760],
                            [1190930400000, 0.7070],
                            [1191016800000, 0.70490],
                            [1191103200000, 0.70120],
                            [1191189600000, 0.70110],
                            [1191276000000, 0.70190],
                            [1191362400000, 0.70460],
                            [1191448800000, 0.70630],
                            [1191535200000, 0.70890],
                            [1191621600000, 0.70770],
                            [1191708000000, 0.70770],
                            [1191794400000, 0.70770],
                            [1191880800000, 0.70910],
                            [1191967200000, 0.71180],
                            [1192053600000, 0.70790],
                            [1192140000000, 0.70530],
                            [1192226400000, 0.7050],
                            [1192312800000, 0.70550],
                            [1192399200000, 0.70550],
                            [1192485600000, 0.70450],
                            [1192572000000, 0.70510],
                            [1192658400000, 0.70510],
                            [1192744800000, 0.70170],
                            [1192831200000, 0.70],
                            [1192917600000, 0.69950],
                            [1193004000000, 0.69940],
                            [1193090400000, 0.70140],
                            [1193176800000, 0.70360],
                            [1193263200000, 0.70210],
                            [1193349600000, 0.70020],
                            [1193436000000, 0.69670],
                            [1193522400000, 0.6950],
                            [1193612400000, 0.6950],
                            [1193698800000, 0.69390],
                            [1193785200000, 0.6940],
                            [1193871600000, 0.69220],
                            [1193958000000, 0.69190],
                            [1194044400000, 0.69140],
                            [1194130800000, 0.68940],
                            [1194217200000, 0.68910],
                            [1194303600000, 0.69040],
                            [1194390000000, 0.6890],
                            [1194476400000, 0.68340],
                            [1194562800000, 0.68230],
                            [1194649200000, 0.68070],
                            [1194735600000, 0.68150],
                            [1194822000000, 0.68150],
                            [1194908400000, 0.68470],
                            [1194994800000, 0.68590],
                            [1195081200000, 0.68220],
                            [1195167600000, 0.68270],
                            [1195254000000, 0.68370],
                            [1195340400000, 0.68230],
                            [1195426800000, 0.68220],
                            [1195513200000, 0.68220],
                            [1195599600000, 0.67920],
                            [1195686000000, 0.67460],
                            [1195772400000, 0.67350],
                            [1195858800000, 0.67310],
                            [1195945200000, 0.67420],
                            [1196031600000, 0.67440],
                            [1196118000000, 0.67390],
                            [1196204400000, 0.67310],
                            [1196290800000, 0.67610],
                            [1196377200000, 0.67610],
                            [1196463600000, 0.67850],
                            [1196550000000, 0.68180],
                            [1196636400000, 0.68360],
                            [1196722800000, 0.68230],
                            [1196809200000, 0.68050],
                            [1196895600000, 0.67930],
                            [1196982000000, 0.68490],
                            [1197068400000, 0.68330],
                            [1197154800000, 0.68250],
                            [1197241200000, 0.68250],
                            [1197327600000, 0.68160],
                            [1197414000000, 0.67990],
                            [1197500400000, 0.68130],
                            [1197586800000, 0.68090],
                            [1197673200000, 0.68680],
                            [1197759600000, 0.69330],
                            [1197846000000, 0.69330],
                            [1197932400000, 0.69450],
                            [1198018800000, 0.69440],
                            [1198105200000, 0.69460],
                            [1198191600000, 0.69640],
                            [1198278000000, 0.69650],
                            [1198364400000, 0.69560],
                            [1198450800000, 0.69560],
                            [1198537200000, 0.6950],
                            [1198623600000, 0.69480],
                            [1198710000000, 0.69280],
                            [1198796400000, 0.68870],
                            [1198882800000, 0.68240],
                            [1198969200000, 0.67940],
                            [1199055600000, 0.67940],
                            [1199142000000, 0.68030],
                            [1199228400000, 0.68550],
                            [1199314800000, 0.68240],
                            [1199401200000, 0.67910],
                            [1199487600000, 0.67830],
                            [1199574000000, 0.67850],
                            [1199660400000, 0.67850],
                            [1199746800000, 0.67970],
                            [1199833200000, 0.680],
                            [1199919600000, 0.68030],
                            [1200006000000, 0.68050],
                            [1200092400000, 0.6760],
                            [1200178800000, 0.6770],
                            [1200265200000, 0.6770],
                            [1200351600000, 0.67360],
                            [1200438000000, 0.67260],
                            [1200524400000, 0.67640],
                            [1200610800000, 0.68210],
                            [1200697200000, 0.68310],
                            [1200783600000, 0.68420],
                            [1200870000000, 0.68420],
                            [1200956400000, 0.68870],
                            [1201042800000, 0.69030],
                            [1201129200000, 0.68480],
                            [1201215600000, 0.68240],
                            [1201302000000, 0.67880],
                            [1201388400000, 0.68140],
                            [1201474800000, 0.68140],
                            [1201561200000, 0.67970],
                            [1201647600000, 0.67690],
                            [1201734000000, 0.67650],
                            [1201820400000, 0.67330],
                            [1201906800000, 0.67290],
                            [1201993200000, 0.67580],
                            [1202079600000, 0.67580],
                            [1202166000000, 0.6750],
                            [1202252400000, 0.6780],
                            [1202338800000, 0.68330],
                            [1202425200000, 0.68560],
                            [1202511600000, 0.69030],
                            [1202598000000, 0.68960],
                            [1202684400000, 0.68960],
                            [1202770800000, 0.68820],
                            [1202857200000, 0.68790],
                            [1202943600000, 0.68620],
                            [1203030000000, 0.68520],
                            [1203116400000, 0.68230],
                            [1203202800000, 0.68130],
                            [1203289200000, 0.68130],
                            [1203375600000, 0.68220],
                            [1203462000000, 0.68020],
                            [1203548400000, 0.68020],
                            [1203634800000, 0.67840],
                            [1203721200000, 0.67480],
                            [1203807600000, 0.67470],
                            [1203894000000, 0.67470],
                            [1203980400000, 0.67480],
                            [1204066800000, 0.67330],
                            [1204153200000, 0.6650],
                            [1204239600000, 0.66110],
                            [1204326000000, 0.65830],
                            [1204412400000, 0.6590],
                            [1204498800000, 0.6590],
                            [1204585200000, 0.65810],
                            [1204671600000, 0.65780],
                            [1204758000000, 0.65740],
                            [1204844400000, 0.65320],
                            [1204930800000, 0.65020],
                            [1205017200000, 0.65140],
                            [1205103600000, 0.65140],
                            [1205190000000, 0.65070],
                            [1205276400000, 0.6510],
                            [1205362800000, 0.64890],
                            [1205449200000, 0.64240],
                            [1205535600000, 0.64060],
                            [1205622000000, 0.63820],
                            [1205708400000, 0.63820],
                            [1205794800000, 0.63410],
                            [1205881200000, 0.63440],
                            [1205967600000, 0.63780],
                            [1206054000000, 0.64390],
                            [1206140400000, 0.64780],
                            [1206226800000, 0.64810],
                            [1206313200000, 0.64810],
                            [1206399600000, 0.64940],
                            [1206486000000, 0.64380],
                            [1206572400000, 0.63770],
                            [1206658800000, 0.63290],
                            [1206745200000, 0.63360],
                            [1206831600000, 0.63330],
                            [1206914400000, 0.63330],
                            [1207000800000, 0.6330],
                            [1207087200000, 0.63710],
                            [1207173600000, 0.64030],
                            [1207260000000, 0.63960],
                            [1207346400000, 0.63640],
                            [1207432800000, 0.63560],
                            [1207519200000, 0.63560],
                            [1207605600000, 0.63680],
                            [1207692000000, 0.63570],
                            [1207778400000, 0.63540],
                            [1207864800000, 0.6320],
                            [1207951200000, 0.63320],
                            [1208037600000, 0.63280],
                            [1208124000000, 0.63310],
                            [1208210400000, 0.63420],
                            [1208296800000, 0.63210],
                            [1208383200000, 0.63020],
                            [1208469600000, 0.62780],
                            [1208556000000, 0.63080],
                            [1208642400000, 0.63240],
                            [1208728800000, 0.63240],
                            [1208815200000, 0.63070],
                            [1208901600000, 0.62770],
                            [1208988000000, 0.62690],
                            [1209074400000, 0.63350],
                            [1209160800000, 0.63920],
                            [1209247200000, 0.640],
                            [1209333600000, 0.64010],
                            [1209420000000, 0.63960],
                            [1209506400000, 0.64070],
                            [1209592800000, 0.64230],
                            [1209679200000, 0.64290],
                            [1209765600000, 0.64720],
                            [1209852000000, 0.64850],
                            [1209938400000, 0.64860],
                            [1210024800000, 0.64670],
                            [1210111200000, 0.64440],
                            [1210197600000, 0.64670],
                            [1210284000000, 0.65090],
                            [1210370400000, 0.64780],
                            [1210456800000, 0.64610],
                            [1210543200000, 0.64610],
                            [1210629600000, 0.64680],
                            [1210716000000, 0.64490],
                            [1210802400000, 0.6470],
                            [1210888800000, 0.64610],
                            [1210975200000, 0.64520],
                            [1211061600000, 0.64220],
                            [1211148000000, 0.64220],
                            [1211234400000, 0.64250],
                            [1211320800000, 0.64140],
                            [1211407200000, 0.63660],
                            [1211493600000, 0.63460],
                            [1211580000000, 0.6350],
                            [1211666400000, 0.63460],
                            [1211752800000, 0.63460],
                            [1211839200000, 0.63430],
                            [1211925600000, 0.63460],
                            [1212012000000, 0.63790],
                            [1212098400000, 0.64160],
                            [1212184800000, 0.64420],
                            [1212271200000, 0.64310],
                            [1212357600000, 0.64310],
                            [1212444000000, 0.64350],
                            [1212530400000, 0.6440],
                            [1212616800000, 0.64730],
                            [1212703200000, 0.64690],
                            [1212789600000, 0.63860],
                            [1212876000000, 0.63560],
                            [1212962400000, 0.6340],
                            [1213048800000, 0.63460],
                            [1213135200000, 0.6430],
                            [1213221600000, 0.64520],
                            [1213308000000, 0.64670],
                            [1213394400000, 0.65060],
                            [1213480800000, 0.65040],
                            [1213567200000, 0.65030],
                            [1213653600000, 0.64810],
                            [1213740000000, 0.64510],
                            [1213826400000, 0.6450],
                            [1213912800000, 0.64410],
                            [1213999200000, 0.64140],
                            [1214085600000, 0.64090],
                            [1214172000000, 0.64090],
                            [1214258400000, 0.64280],
                            [1214344800000, 0.64310],
                            [1214431200000, 0.64180],
                            [1214517600000, 0.63710],
                            [1214604000000, 0.63490],
                            [1214690400000, 0.63330],
                            [1214776800000, 0.63340],
                            [1214863200000, 0.63380],
                            [1214949600000, 0.63420],
                            [1215036000000, 0.6320],
                            [1215122400000, 0.63180],
                            [1215208800000, 0.6370],
                            [1215295200000, 0.63680],
                            [1215381600000, 0.63680],
                            [1215468000000, 0.63830],
                            [1215554400000, 0.63710],
                            [1215640800000, 0.63710],
                            [1215727200000, 0.63550],
                            [1215813600000, 0.6320],
                            [1215900000000, 0.62770],
                            [1215986400000, 0.62760],
                            [1216072800000, 0.62910],
                            [1216159200000, 0.62740],
                            [1216245600000, 0.62930],
                            [1216332000000, 0.63110],
                            [1216418400000, 0.6310],
                            [1216504800000, 0.63120],
                            [1216591200000, 0.63120],
                            [1216677600000, 0.63040],
                            [1216764000000, 0.62940],
                            [1216850400000, 0.63480],
                            [1216936800000, 0.63780],
                            [1217023200000, 0.63680],
                            [1217109600000, 0.63680],
                            [1217196000000, 0.63680],
                            [1217282400000, 0.6360],
                            [1217368800000, 0.6370],
                            [1217455200000, 0.64180],
                            [1217541600000, 0.64110],
                            [1217628000000, 0.64350],
                            [1217714400000, 0.64270],
                            [1217800800000, 0.64270],
                            [1217887200000, 0.64190],
                            [1217973600000, 0.64460],
                            [1218060000000, 0.64680],
                            [1218146400000, 0.64870],
                            [1218232800000, 0.65940],
                            [1218319200000, 0.66660],
                            [1218405600000, 0.66660],
                            [1218492000000, 0.66780],
                            [1218578400000, 0.67120],
                            [1218664800000, 0.67050],
                            [1218751200000, 0.67180],
                            [1218837600000, 0.67840],
                            [1218924000000, 0.68110],
                            [1219010400000, 0.68110],
                            [1219096800000, 0.67940],
                            [1219183200000, 0.68040],
                            [1219269600000, 0.67810],
                            [1219356000000, 0.67560],
                            [1219442400000, 0.67350],
                            [1219528800000, 0.67630],
                            [1219615200000, 0.67620],
                            [1219701600000, 0.67770],
                            [1219788000000, 0.68150],
                            [1219874400000, 0.68020],
                            [1219960800000, 0.6780],
                            [1220047200000, 0.67960],
                            [1220133600000, 0.68170],
                            [1220220000000, 0.68170],
                            [1220306400000, 0.68320],
                            [1220392800000, 0.68770],
                            [1220479200000, 0.69120],
                            [1220565600000, 0.69140],
                            [1220652000000, 0.70090],
                            [1220738400000, 0.70120],
                            [1220824800000, 0.7010],
                            [1220911200000, 0.70050]
                        ];

                        function euroFormatter(v, axis) {
                            return v.toFixed(axis.tickDecimals) + "€";
                        }

                        function doPlot(position) {
                            $.plot("#flot-axes", [
                                { data: oilprices, label: "Oil price ($)" },
                                { data: exchangerates, label: "USD/EUR exchange rate", yaxis: 2 }
                            ], {
                                grid: { borderWidth: 0, labelMargin: 10, axisMargin: 0, minBorderMargin: 0 },
                                colors: ["#8E54E9", "#32b432"],
                                xaxes: [{ mode: "time" }],
                                yaxes: [{ min: 0 }, {
                                    // align if we are to the right
                                    alignTicksWithAxis: position == "right" ? 1 : null,
                                    position: position,
                                    tickFormatter: euroFormatter
                                }],
                                legend: { position: "sw" }
                            });
                        }

                        doPlot("right");

                        $("button").click(function() {
                            doPlot($(this).text());
                        });

                        // Add the Flot version string to the footer

                        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var gmap = jQuery(".gmap");
        if (gmap.length > 0) {
             // Address Marker
                var addressLocation = $('#address');
                if (addressLocation.length > 0) {
                $(addressLocation)
                  new GMaps({
                    div: '#address',
                    lat: -12.043333,
                    lng: -77.028333
                  });
                }
                // Satellite view
                var satelliteView = $('#events');
                if (satelliteView.length > 0) {
                $(satelliteView)
                  var map = new GMaps({
                    div: '#events',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333,
                    click: function(e) {
                      alert('click');
                    },
                    dragend: function(e) {
                      alert('dragend');
                    }
                  });
                }
                // Satellite view
                var marker = $('#marker');
                if (marker.length > 0) {
                $(marker)
                  var markerevents = new GMaps({
                    div: '#marker',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333
                  
                  });

                  markerevents.addMarker({
                    lat: -12.043333,
                    lng: -77.03,
                    title: 'Lima',
                    details: {
                      database_id: 42,
                      author: 'HPNeo'
                    },
                    click: function(e){
                      if(console.log)
                        console.log(e);
                      alert('You clicked in this marker');
                    }
                  });
                  markerevents.addMarker({
                    lat: -12.042,
                    lng: -77.028333,
                    title: 'Marker with InfoWindow',
                    infoWindow: {
                      content: '<p>HTML Content</p>'
                    }
                })
              }
              var marker = $('#polygon');
                if (marker.length > 0) {
                $(marker)
                  var polygon = new GMaps({
                    div: '#polygon',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333

                  });

                  var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511],	[-12.044804866577001,-77.02154422636042]];

                  polygon1 = polygon.drawPolygon({
                    paths: path, // pre-defined polygon shape
                    strokeColor: '#BBD8E9',
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    fillColor: '#BBD8E9',
                    fillOpacity: 0.6
                  });
              }
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var jqueryKnob = jQuery(".jqueryknob-wrapper");
        if (jqueryKnob.length > 0) {
                $(".knob").knob({
                    change: function(value) {
                        //console.log("change : " + value);
                    },
                    release: function(value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel: function() {
                        console.log("cancel : ", this);
                    },
                    /*format : function (value) {
                     return value + '%';
                     },*/
                    draw: function() {

                        // "tron" case
                        if (this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv) // Arc
                                ,
                                pa // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var jQVMap = jQuery(".vectormap-wrapper");
        if (jQVMap.length > 0) {

                //Analytics map
                var world = jQuery('#world')
                if (world.length > 0) {

                        function escapeXml(string) {
                            return string.replace(/[<>]/g, function (c) {
                              switch (c) {
                                case '<': return '\u003c';
                                case '>': return '\u003e';
                              }
                            });
                          }

                        var pins = {
                            mo: escapeXml('<div class="map-pin red"><span>MO</span></div>'),
                            fl: escapeXml('<div class="map-pin blue"><span>FL</span></div>'),
                            or: escapeXml('<div class="map-pin purple"><span>OR</span></div>')
                          };

                        jQuery(world).vectorMap({
                            map: 'world_en',
                            backgroundColor: '#ffff',
                            pins: pins,
                            pinMode: 'content',
                            showTooltip: true,
                            hoverColor: '#8E54E9',
                            borderColor: '#fff',
                            selectedColor: ['#8E54E9'],
                            color: '#eceef3',
                            selectedRegions: ['US', 'AU', 'IN', 'GR'],
                            onRegionClick: function(event){
                                event.preventDefault();
                            }
                        });
                }
                // Australia
                var australia = jQuery('#australia')
                if (australia.length > 0) {
                        jQuery(australia).vectorMap({
                            map: 'australia_en',
                            backgroundColor: '#fff',
                            selectedColor: '#fbaf54',
                            borderColor: '#fff',
                            hoverColor: '#fbaf54',
                            color: '#e8edf1'
                        });
                }
                // Africa
                var africa = jQuery('#africa')
                if (africa.length > 0) {
                        jQuery(africa).vectorMap({
                            map: 'africa_en',
                            backgroundColor: '#fff',
                            selectedColor: '#32b432',
                            borderColor: '#fff',
                            hoverColor: '#32b432',
                            color: '#e8edf1'
                        });
                }
                // USA
                var usa = jQuery('#usa')
                if (usa.length > 0) {
                        jQuery(usa).vectorMap({
                            map: 'usa_en',
                            backgroundColor: '#fff',
                            selectedColor: '#8E54E9',
                            hoverColor: '#8E54E9',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
                // Canada
                var canada = jQuery('#canada')
                if (canada.length > 0) {
                        jQuery(canada).vectorMap({
                            map: 'canada_en',
                            backgroundColor: '#fff',
                            selectedColor: '#fd9644',
                            hoverColor: '#fd9644',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
                // Europe
                var russia = jQuery('#russia')
                if (russia.length > 0) {
                        jQuery(russia).vectorMap({
                            map: 'russia_en',
                            backgroundColor: '#fff',
                            selectedColor: '#e3324c',
                            hoverColor: '#e3324c',
                            borderColor: '#fff',
                            color: '#e8edf1',
                            zoom: 5
                        });
                }
                // Brazil
                var brazil = jQuery('#brazil')
                if (brazil.length > 0) {
                        jQuery(brazil).vectorMap({
                            map: 'brazil_br',
                            backgroundColor: '#fff',
                            selectedColor: '#20bf6b',
                            hoverColor: '#20bf6b',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var magnific = jQuery(".magnific-wrapper");
        if (magnific.length > 0) {
                $('.view').magnificPopup({
                    type: 'image'
                    // other options
                });
                $(document).ready(function() {
                    $('.view2').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                });
                $('.view1').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var mapaelMap = jQuery(".mapaelmap-wrapper");
        if (mapaelMap.length > 0) {
                        // World Map
                        $(mapaelMap).mapael({
                            map: {
                                name: "world_countries"
                            }
                        });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var morrisJS = jQuery(".morris-wrapper");
        if (morrisJS.length > 0) {
                    // morris line chart
                    var morrisdemo1 = jQuery("#morrisdemo1");
                    if (morrisdemo1.length > 0) {
                        Morris.Line({
                            element: morrisdemo1,
                            data: [
                                { y: '2006', a: 40, b: 30 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 60, b: 50 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            lineColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            padding: 20,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris line chart
                    var morrisdemo2 = jQuery("#morrisdemo2");
                    if (morrisdemo2.length > 0) {
                        Morris.Area({
                            element: morrisdemo2,
                            data: [
                                { y: '2006', a: 40, b: 30 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 60, b: 50 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            lineColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 20,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris bar chart
                    var morrisdemo3 = jQuery("#morrisdemo3");
                    if (morrisdemo3.length > 0) {
                        Morris.Bar({
                            element: morrisdemo3,
                            data: [
                                { y: '2006', a: 100, b: 90 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 100, b: 90 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            barColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 15,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris donut chart
                    var morrisdemo4 = jQuery("#morrisdemo4");
                    if (morrisdemo4.length > 0) {
                        Morris.Donut({
                            element: morrisdemo4,
                            data: [
                                { label: "Direct Visits", value: 12 },
                                { label: "Redirect Visits", value: 30 },
                                { label: "Referral Visits", value: 20 }
                            ],
                            colors: ['#45aaf2', '#e3324c', '#fbaf54']
                        });
                    }
                    // morris stacked bar chart
                    var morrisdemo5 = jQuery("#morrisdemo5");
                    if (morrisdemo5.length > 0) {
                        Morris.Bar({
                            element: morrisdemo5,
                            data: [
                                { y: '2006', a: 100, b: 90 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 100, b: 90 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            barColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 15,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10,
                            stacked: true
                        });
                    }
                    // morris donut chart
                    var morrisecommerce1 = jQuery("#morrisecommerce1");
                    if (morrisecommerce1.length > 0) {
                        Morris.Donut({
                            element: morrisecommerce1,
                            data: [
                                { label: "Total sales", value: 680 },
                                { label: "Open campaign", value: 800 },
                                { label: "Daily sales", value: 500 }
                            ],
                            colors: ['#45aaf2', '#8E54E9', '#eceef3']
                        });
                    }
                    
                    // morris cardealer1
                    var cardealer1 = jQuery("#cardealer1");
                    if (cardealer1.length > 0) {
                        Morris.Donut({
                            element: cardealer1,
                            data: [
                                { label: "New cars", value: 680 },
                                { label: "Used cars", value: 800 }
                            ],
                            colors: ['#f7b731', '#2bcbba']
                        });
                    }
                    
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var nestable = jQuery(".nestable-wrapper");
        if (nestable.length > 0) {
                var updateOutput = function(e) {
                    var list = e.length ? e : $(e.target),
                        output = list.data('output');
                    if (window.JSON) {
                        output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
                    } else {
                        output.val('JSON browser support required for this demo.');
                    }
                };

                // activate Nestable for list 1
                $('#nestable').nestable({
                        group: 1
                    })
                    .on('change', updateOutput);

                // activate Nestable for list 2
                $('#nestable2').nestable({
                        group: 1
                    })
                    .on('change', updateOutput);

                // output initial serialised data
                updateOutput($('#nestable').data('output', $('#nestable-output')));
                updateOutput($('#nestable2').data('output', $('#nestable2-output')));

                $('#nestable-menu').on('click', function(e) {
                    var target = $(e.target),
                        action = target.data('action');
                    if (action === 'expand-all') {
                        $('.dd').nestable('expandAll');
                    }
                    if (action === 'collapse-all') {
                        $('.dd').nestable('collapseAll');
                    }
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var owlCarousel = jQuery(".owl-wrapper");
        if (owlCarousel.length > 0) {
                var owlslider = $('.owl-carousel');
                owlslider.each(function () {
                    var $this = $(this),
                        $items = ($this.data('items')) ? $this.data('items') : 1,
                        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                        $space = ($this.attr('data-space')) ? $this.data('space') : 30;
        
                        $(this).owlCarousel({
                            loop: $loop,
                            items: $items,
                            responsive: {
                              0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                              480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                              768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                              980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                              1200:{items: $this.data('lg-items') ? $this.data('lg-items') : 4},
                              1400:{items: $this.data('xl-items') ? $this.data('lg-items') : 5},
                            },
                            dots: $navdots,
                            autoplayTimeout:$autospeed,
                            smartSpeed: $smartspeed,
                            autoHeight:$autohgt,
                            margin:$space,
                            nav: $navarrow,
                            navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                            autoplay: $autoplay,
                            autoplayHoverPause: true
                        });
                   });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var popOvers = jQuery(".popover-wrapper");
        if (popOvers.length > 0) {
            $('[data-toggle="popover"]').popover()
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        jQuery(".loader").fadeOut('slow');
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var quillEditor = jQuery(".quill-editor");
        if (quillEditor.length > 0) {
                var toolbarOptions = [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],

                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                ];
                var editor = new Quill('#editor', {
                    modules: {
                        toolbar: toolbarOptions
                    },
                    theme: 'snow'
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var rangeslider = jQuery(".rangeslider-wrapper");
        if (rangeslider.length > 0) {
                //slider-1
                $("#slider-1").ionRangeSlider();
                //slider-2
                $("#slider-2").ionRangeSlider({
                    min: 100,
                    max: 1000,
                    from: 550
                });
                //slider-3
                $("#slider-3").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: 0,
                    max: 1000,
                    from: 200,
                    to: 800,
                    prefix: "$"
                });
                //slider-4
                $("#slider-4").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500
                });
                //slider-5
                $("#slider-5").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500,
                    step: 250
                });
                //slider-6
                $("#slider-6").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -12.8,
                    max: 12.8,
                    from: -3.2,
                    to: 3.2,
                    step: 0.1
                });
                //slider-7
                $("#slider-7").ionRangeSlider({
                    type: "double",
                    grid: true,
                    from: 1,
                    to: 5,
                    values: [0, 10, 100, 1000, 10000, 100000, 1000000]
                });
                //slider-8
                $("#slider-8").ionRangeSlider({
                    grid: true,
                    from: 5,
                    values: [
                        "zero", "one",
                        "two", "three",
                        "four", "five",
                        "six", "seven",
                        "eight", "nine",
                        "ten"
                    ]
                });
                //slider-9
                $("#slider-9").ionRangeSlider({
                    grid: true,
                    from: 3,
                    values: [
                        "January", "February", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
                    ]
                });
                //slider-10
                $("#slider-10").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 100000,
                    step: 1000,
                    prettify_enabled: false
                });
                //slider-11
                $("#slider-11").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 200000,
                    step: 1000,
                    prettify_enabled: true
                });
                //slider-12
                $("#slider-12").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 300000,
                    step: 1000,
                    prettify_enabled: true,
                    prettify_separator: "."
                });
                //slider-13
                $("#slider-13").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 400000,
                    step: 1000,
                    prettify_enabled: true,
                    prettify: function(num) {
                        return (Math.random() * num).toFixed(0);
                    }
                });
                //slider-14
                $("#slider-14").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: 0,
                    max: 10000,
                    from: 1000,
                    step: 9000,
                    prefix: "$"
                });
                //slider-15
                $("#slider-15").ionRangeSlider({
                    type: "single",
                    grid: true,
                    min: -90,
                    max: 90,
                    from: 0,
                    postfix: "°"
                });
                //slider-16
                $("#slider-16").ionRangeSlider({
                    grid: true,
                    min: 18,
                    max: 70,
                    from: 30,
                    prefix: "Age ",
                    max_postfix: "+"
                });
                //slider-17
                $("#slider-17").ionRangeSlider({
                    type: "double",
                    min: 100,
                    max: 200,
                    from: 145,
                    to: 155,
                    prefix: "Weight: ",
                    postfix: " million pounds",
                    decorate_both: true
                });
                //Slider-inter-1
                var $update = $(".js-update-43");
                $("#slider-inter_1").ionRangeSlider({
                    type: "single",
                    min: 0,
                    max: 100,
                    from: 50,
                    keyboard: true,
                    onStart: function(data) {
                        console.log("onStart");
                    },
                    onChange: function(data) {
                        console.log("onChange");
                    },
                    onFinish: function(data) {
                        console.log("onFinish");
                    },
                    onUpdate: function(data) {
                        console.log("onUpdate");
                    }
                });
                var slider = $("#slider-inter_1").data("ionRangeSlider");
                $update.on("click", function() {
                    slider.update({
                        from: 10
                    });
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var scrollbar = jQuery(".scrollbar");
        if (scrollbar.length > 0) {
                $('.scroll_dark').mCustomScrollbar({
                  theme:"minimal-dark",
                  setHeight: false,
                  mouseWheel: {
                    normalizeDelta: true,
                    scrollAmount: '200px',
                    contentTouchScroll: true,
                    deltaFactor: '200px'
                  },
                  advanced: {
                    autoScrollOnFocus: 'a[tabindex]'
                  }
                });
                $('.scroll_light').mCustomScrollbar({
                  theme:"minimal",
                  setHeight: false,
                  mouseWheel: {
                    normalizeDelta: true,
                    scrollAmount: '200px',
                    contentTouchScroll: true,
                    eltaFactor: '200px'
                  },
                  advanced: {
                    autoScrollOnFocus: 'a[tabindex]'
                  }
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var select = jQuery(".select-wrapper");
        if (select.length > 0) {
                    $('.js-basic-single').select2();
                    $('.js-basic-multiple').select2();
                    $(".bs-select-1").val()
                    $(".bs-input").tagsinput('items')
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var sidebarNav = jQuery(".sidebar-nav");
        if (sidebarNav.length > 0) {
                $('#sidebarNav').metisMenu();
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var sparkline = jQuery(".sparkline-wrapper");
        if (sparkline.length > 0) {
                function Sparkline() {
                    var sparklinedemo1 = jQuery("#sparklinedemo1");
                    if (sparklinedemo1.length > 0) {
                        $(sparklinedemo1).sparkline([20, 30, 25, 40, 40, 50, 56, 37, 50], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 50,
                            lineColor: 'rgba(71, 118, 230, 0.5)',
                            fillColor: 'rgba(71, 118, 230, 0.3)',
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)',
                        });
                        $(sparklinedemo1).sparkline([10, 35, 30, 60, 50, 45, 30, 24, 30], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 40,
                            lineColor: 'rgba(142, 84, 233, 0.5)',
                            fillColor: 'rgba(142, 84, 233, 0.3)',
                            composite: true,
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)',
                        });
                    }
                    var sparklinedemo2 = jQuery("#sparklinedemo2");
                    if (sparklinedemo2.length > 0) {
                        $(sparklinedemo2).sparkline([20, 30, 25, 40, 40, 50, 56, 37, 50], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 50,
                            lineColor: 'rgba(71, 118, 230, 1)',
                            fillColor: 'transparent',
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)'
                        });
                        $(sparklinedemo2).sparkline([10, 35, 30, 60, 50, 45, 30, 24, 30], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 40,
                            lineColor: 'rgba(142, 84, 233, 1)',
                            fillColor: 'transparent',
                            composite: true,
                            highlightLineColor: 'rgba(0,0,0,1)',
                            highlightSpotColor: 'rgba(0,0,0,1)'
                        });
                    }
                    var sparklinedemo3 = jQuery("#sparklinedemo3");
                    if (sparklinedemo3.length > 0) {
                        $(sparklinedemo3).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 2, 8, 5, 10, 11, 10, 1, 6, 5, 7, 8, 10, 8, 12, 7, 9, 5, 6, 10, 7, 8, 5, 6, 8, 5, 9, 3, 7, 1, 6, 4, 8, 4, 9, 10, 13, 7, 8, 6, 4, 11, 5, 6, 4, 7, 10, 4, 7, 4, 9], {
                            type: 'bar',
                            height: '200',
                            barWidth: '10',
                            barSpacing: '3',
                            barColor: '#4776E6'
                        });
                    }
                    
                    //chart widget end

                    var sparklinedemo4 = jQuery("#sparklinedemo4");
                    if (sparklinedemo4.length > 0) {
                        $(sparklinedemo4).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 4, 8, 5, 10, 11, 10, 5, 6, 5, 7, 8, 10], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineColor: 'rgba(142, 84, 233, 0.5)',
                            fillColor: 'rgba(142, 84, 233, 0.3)',
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)'
                        });
                        $(sparklinedemo4).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 2, 8, 5, 10, 11, 10, 5, 6, 5, 7, 8, 10], {
                            type: 'bar',
                            height: '200',
                            barWidth: '10',
                            barSpacing: '5',
                            composite: true,
                            barColor: '#4776E6'
                        });
                    }
                    var sparklinedemo5 = jQuery("#sparklinedemo5");
                    if (sparklinedemo5.length > 0) {
                        $(sparklinedemo5).sparkline([40, 30, 20, 10], {
                            type: 'pie',
                            width: '200',
                            height: '165',
                            sliceColors: ['#4776E6', '#8E54E9', '#ffbc1d', '#25d09a']
                        });
                    }

                };

                Sparkline();

                var resize;
                $window.resize(function(e) {
                    clearTimeout(resize);
                    resize = setTimeout(function() {
                        Sparkline();

                    }, 300);
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var summernote = jQuery(".summernote");
        if (summernote.length > 0) {
                $('#summernote').summernote({
                    tabsize: 2,
                    height: 250
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$('#sweetalert-01').click(function(e) {
    swal({
        text: 'Any fool can use a computer',
        showCloseButton: false,
        showCancelButton: true,
    })
});


$('#sweetalert-02').click(function(e) {
    swal(
        'The Internet?',
        'That thing is still around?',
        'question'
    )
});

$('#sweetalert-03').click(function(e) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
    })
});

$('#sweetalert-04').click(function(e) {
    swal({
        imageUrl: 'assets/img/widget/06.jpg',
        imageHeight: 596,
        imageAlt: 'A tall image'
    })
});

$('#sweetalert-05').click(function(e) {
    swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger'
    })
});

$('#sweetalert-06').click(function(e) {
    swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
});

$('#sweetalert-07').click(function(e) {
    swal({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: 'animated tada'
    })
});

$('#sweetalert-08').click(function(e) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
    }).then((result) => {
        if (result.value) {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
});

$('#sweetalert-09').click(function(e) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
        ) {
            swal(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })
});

$('#sweetalert-10').click(function(e) {
    swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
    })
});

$('#sweetalert-11').click(function(e) {
    swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        background: '#fff url(../images/trees.png)',
        backdrop: `
  rgba(0,0,123,0.4)
  url("/images/nyan-cat.gif")
  center left
  no-repeat
`
    })
});

$('#sweetalert-12').click(function(e) {
    swal({
        title: 'Auto close alert!',
        text: 'I will close in 5 seconds.',
        timer: 5000,
        onOpen: () => {
            swal.showLoading()
        }
    }).then((result) => {
        if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.timer
        ) {
            console.log('I was closed by the timer')
        }
    })
});


$('#sweetalert-13').click(function(e) {
    swal({
        title: 'Ù‡Ù„ ØªØ±ÙŠØ¯ Ø§Ù„Ø§Ø³ØªÙ…Ø±Ø§Ø±ØŸ',
        confirmButtonText: 'Ù†Ø¹Ù…',
        cancelButtonText: 'Ù„Ø§',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        target: document.getElementById('rtl-container')
    })
});

$('#sweetalert-14').click(function(e) {
    swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (email === 'taken@example.com') {
                        swal.showValidationError(
                            'This email is already taken.'
                        )
                    }
                    resolve()
                }, 2000)
            })
        },
        allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
        if (result.value) {
            swal({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + result.value
            })
        }
    })
});

$('#sweetalert-15').click(function(e) {
    swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        progressSteps: ['1', '2', '3']
    })

    var steps = [{
            title: 'Question 1',
            text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
    ]

    swal.queue(steps).then((result) => {
        swal.resetDefaults()

        if (result.value) {
            swal({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result.value) +
                    '</pre>',
                confirmButtonText: 'Lovely!'
            })
        }
    })
});

$('#sweetalert-16').click(function(e) {
    const ipAPI = 'https://api.ipify.org?format=json'
    swal.queue([{
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text: 'Your public IP will be received ' +
            'via AJAX request',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            return fetch(ipAPI)
                .then(response => response.json())
                .then(data => swal.insertQueueStep(data.ip))
                .catch(() => {
                    swal.insertQueueStep({
                        type: 'error',
                        title: 'Unable to get your public IP'
                    })
                })
        }
    }])
});

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        $("#checkAll").click(function () {
            $('input:checkbox').not(this).prop('checked', this.checked);
        });
});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$(function () {
    var i = -1;
    var toastCount = 0;
    var $toastlast;

    var getMessage = function () {
        var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
            '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
            'Are you the six fingered man?',
            'Inconceivable!',
            'I do not think that means what you think it means.',
            'Have fun storming the castle!'
        ];
        i++;
        if (i === msgs.length) {
            i = 0;
        }

        return msgs[i];
    };

    var getMessageWithClearButton = function (msg) {
        msg = msg ? msg : 'Clear itself?';
        msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
        return msg;
    };

    $('#closeButton').on("click", function () {
        if($(this).is(':checked')) {
            $('#addBehaviorOnToastCloseClick').prop('disabled', false);
        } else {
            $('#addBehaviorOnToastCloseClick').prop('disabled', true);
            $('#addBehaviorOnToastCloseClick').prop('checked', false);
        }
    });

    $('#showtoast').on("click", function () {
        var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
        var msg = $('#message').val();
        var title = $('#title').val() || '';
        var $showDuration = $('#showDuration');
        var $hideDuration = $('#hideDuration');
        var $timeOut = $('#timeOut');
        var $extendedTimeOut = $('#extendedTimeOut');
        var $showEasing = $('#showEasing');
        var $hideEasing = $('#hideEasing');
        var $showMethod = $('#showMethod');
        var $hideMethod = $('#hideMethod');
        var toastIndex = toastCount++;
        var addClear = $('#addClear').prop('checked');

        toastr.options = {
            closeButton: $('#closeButton').prop('checked'),
            debug: $('#debugInfo').prop('checked'),
            newestOnTop: $('#newestOnTop').prop('checked'),
            progressBar: $('#progressBar').prop('checked'),
            rtl: $('#rtl').prop('checked'),
            positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
            preventDuplicates: $('#preventDuplicates').prop('checked'),
            onclick: null
        };

        if ($('#addBehaviorOnToastClick').prop('checked')) {
            toastr.options.onclick = function () {
                alert('You can perform some custom action after a toast goes away');
            };
        }

        if ($('#addBehaviorOnToastCloseClick').prop('checked')) {
            toastr.options.onCloseClick = function () {
                alert('You can perform some custom action when the close button is clicked');
            };
        }

        if ($showDuration.val().length) {
            toastr.options.showDuration = parseInt($showDuration.val());
        }

        if ($hideDuration.val().length) {
            toastr.options.hideDuration = parseInt($hideDuration.val());
        }

        if ($timeOut.val().length) {
            toastr.options.timeOut = addClear ? 0 : parseInt($timeOut.val());
        }

        if ($extendedTimeOut.val().length) {
            toastr.options.extendedTimeOut = addClear ? 0 : parseInt($extendedTimeOut.val());
        }

        if ($showEasing.val().length) {
            toastr.options.showEasing = $showEasing.val();
        }

        if ($hideEasing.val().length) {
            toastr.options.hideEasing = $hideEasing.val();
        }

        if ($showMethod.val().length) {
            toastr.options.showMethod = $showMethod.val();
        }

        if ($hideMethod.val().length) {
            toastr.options.hideMethod = $hideMethod.val();
        }

        if (addClear) {
            msg = getMessageWithClearButton(msg);
            toastr.options.tapToDismiss = false;
        }
        if (!msg) {
            msg = getMessage();
        }

        $('#toastrOptions').text('Command: toastr["'
                + shortCutFunction
                + '"]("'
                + msg
                + (title ? '", "' + title : '')
                + '")\n\ntoastr.options = '
                + JSON.stringify(toastr.options, null, 2)
        );

        var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
        $toastlast = $toast;

        if(typeof $toast === 'undefined'){
            return;
        }

        if ($toast.find('#okBtn').length) {
            $toast.delegate('#okBtn', 'click', function () {
                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                $toast.remove();
            });
        }
        if ($toast.find('#surpriseBtn').length) {
            $toast.delegate('#surpriseBtn', 'click', function () {
                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
            });
        }
        if ($toast.find('.clear').length) {
            $toast.delegate('.clear', 'click', function () {
                toastr.clear($toast, { force: true });
            });
        }
    });

    function getLastToast(){
        return $toastlast;
    }
    $('#clearlasttoast').on("click", function () {
        toastr.clear(getLastToast());
    });
    $('#cleartoasts').on("click", function () {
        toastr.clear();
    });
})

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var tootlTips = jQuery(".tooltip-wrapper");
        if (tootlTips.length > 0) {
            $('[data-toggle="tooltip"]').tooltip();
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});

$(document).ready(function() {
    $("#signupForm").validate({
        rules: {
            fname: "required",
            lname: "required",
            uname: {
                required: true,
                minlength: 2
            },
            upassword: {
                required: true,
                minlength: 5
            },
            uconfirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            uemail: {
                required: true,
                email: true
            },
            uagree: "required"
        },
        messages: {
            fname: "Please enter your firstname",
            lname: "Please enter your lastname",
            uname: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            upassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            uconfirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            uemail: "Please enter a valid email address",
            uagree: "Please accept our policy"
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
        }
    });

    $("#signupForm1").validate({
        rules: {
            firstname1: "required",
            lastname1: "required",
            username1: {
                required: true,
                minlength: 2
            },
            password1: {
                required: true,
                minlength: 5
            },
            confirm_password1: {
                required: true,
                minlength: 5,
                equalTo: "#password1"
            },
            email1: {
                required: true,
                email: true
            },
            agree1: "required"
        },
        messages: {
            firstname1: "Please enter your firstname",
            lastname1: "Please enter your lastname",
            username1: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password1: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password1: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email1: "Please enter a valid email address",
            agree1: "Please accept our policy"
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents(".col-sm-5").addClass("has-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }

            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!element.next("span")[0]) {
                $("<span class='fa fa-times form-control-feedback pr-2'></span>").insertAfter(element);
            }
        },
       
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
            $(element).next("span").addClass("fa fa-times").removeClass("fa fa-check");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
            ($(element)).next("span").addClass("fa fa-check").removeClass("fa fa-times");
        }
    });

    $("#signupForm3").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },
        errorPlacement: function(error, element) {
            error.addClass("ui red pointing label transition");
            error.insertAfter(element.parent());
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".row").addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".row").removeClass(errorClass);
        }
    });

});

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);

          getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute('data-target');
        
            if (!selector || selector === '#') {
              selector = element.getAttribute('href') || '';
            }
        
            try {
              return document.querySelector(selector) ? selector : null;
            } catch (err) {
              return null;
            }
        }
    });


    $('.mobile-toggle').on('click', function() {
        $('body').toggleClass('sidebar-toggled');
      });

      $(document).on('click', '.mega-menu.dropdown-menu', function (e) {
        e.stopPropagation();
      });

      $('.sidebar-toggle').on('click', function() {
        $('body').toggleClass('sidebar-mini');
        $('.app-navbar').toggleClass('expand');
      });

      $('.app-navbar').hover(function() {
        if($('body').hasClass('sidebar-mini')) {
          $('.navbar-header').toggleClass('expand');
        }
      });

      $('.search').on('click', function() {
        $('.search-wrapper').fadeIn(200);
      });

       //Search Box Close 
       $('.close-btn').on('click', function() {
        $('.search-wrapper').fadeOut(200);
      });

      $('.mobile-toggle').on('click', function() {
        $('body').toggleClass('sidebar-toggled');
      });

})(window, document, window.jQuery);