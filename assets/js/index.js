var Index = function () {

   // function to initiate Revolution Slider
    var runRevolution = function () {
        var api;
        api = jQuery('.fullwidthabnner').revolution({
            delay: 9000,
            startheight: 450,
           	startwidth:1120,
            hideThumbs: 10,
            thumbWidth: 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
            thumbHeight: 50,
            thumbAmount: 5,
            videoJsPath:"assets/plugins/revolution_slider/rs-plugin/videojs",
            navigationType: "bullet", // bullet, thumb, none
            navigationArrows: "solo", // nexttobullets, solo (old name verticalcentered), none
            navigationStyle: "round", // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
            navigationHAlign: "center", // Vertical Align top,center,bottom
            navigationVAlign: "bottom", // Horizontal Align left,center,right
            navigationHOffset: 0,
            navigationVOffset: 20,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            touchenabled: "on", // Enable Swipe Function : on/off
            onHoverStop: "on", // Stop Banner Timet at Hover on Slide on/off
            stopAtSlide: -1,
            stopAfterLoops: -1,
            shadow: 0, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
            fullWidth: "on", // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
            forceFullWidth: "on"
        });
    };
    // function to initiate Full Calendar
    var runColorbox = function () {
        $(".group1").colorbox({
            rel: 'group1',
            width:"85%"
        });
    };
   
    //being admin additions
     // function to initiate Chart 1
    var runChart1 = function () {
        function randValue() {
            return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
        };
        var pageviews = [
            [1, randValue()],
            [2, randValue()],
            [3, 2 + randValue()],
            [4, 3 + randValue()],
            [5, 5 + randValue()],
            [6, 10 + randValue()],
            [7, 15 + randValue()],
            [8, 20 + randValue()],
            [9, 25 + randValue()],
            [10, 30 + randValue()],
            [11, 35 + randValue()],
            [12, 25 + randValue()],
            [13, 15 + randValue()],
            [14, 20 + randValue()],
            [15, 45 + randValue()],
            [16, 50 + randValue()],
            [17, 65 + randValue()],
            [18, 70 + randValue()],
            [19, 85 + randValue()],
            [20, 80 + randValue()],
            [21, 75 + randValue()],
            [22, 80 + randValue()],
            [23, 75 + randValue()],
            [24, 70 + randValue()],
            [25, 65 + randValue()],
            [26, 75 + randValue()],
            [27, 80 + randValue()],
            [28, 85 + randValue()],
            [29, 90 + randValue()],
            [30, 95 + randValue()]
        ];
        var visitors = [
            [1, randValue() - 5],
            [2, randValue() - 5],
            [3, randValue() - 5],
            [4, 6 + randValue()],
            [5, 5 + randValue()],
            [6, 20 + randValue()],
            [7, 25 + randValue()],
            [8, 36 + randValue()],
            [9, 26 + randValue()],
            [10, 38 + randValue()],
            [11, 39 + randValue()],
            [12, 50 + randValue()],
            [13, 51 + randValue()],
            [14, 12 + randValue()],
            [15, 13 + randValue()],
            [16, 14 + randValue()],
            [17, 15 + randValue()],
            [18, 15 + randValue()],
            [19, 16 + randValue()],
            [20, 17 + randValue()],
            [21, 18 + randValue()],
            [22, 19 + randValue()],
            [23, 20 + randValue()],
            [24, 21 + randValue()],
            [25, 14 + randValue()],
            [26, 24 + randValue()],
            [27, 25 + randValue()],
            [28, 26 + randValue()],
            [29, 27 + randValue()],
            [30, 31 + randValue()]
        ];
        var plot = $.plot($("#placeholder-h1"), [{
            data: pageviews,
            label: "Unique Visits"
        }, {
            data: visitors,
            label: "Page Views"
        }], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.05
                        }, {
                            opacity: 0.01
                        }]
                    }
                },
                points: {
                    show: false
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#eee",
                borderWidth: 0
            },
            colors: ["#d12610", "#37b7f3", "#52e136"],
            xaxis: {
                ticks: 11,
                tickDecimals: 0
            },
            yaxis: {
                ticks: 11,
                tickDecimals: 0
            }
        });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 15,
                border: '1px solid #333',
                padding: '4px',
                color: '#fff',
                'border-radius': '3px',
                'background-color': '#333',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }
        var previousPoint = null;
        $("#placeholder-h1").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);
                    showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });
    };
    
    // function to initiate Chart 2
    var runChart2 = function () {
        var data_pie = [],
            series = Math.floor(Math.random() * 6) + 3;
        for (var i = 0; i < series; i++) {
            data_pie[i] = {
                label: "Series" + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            };
        }
        $.plot('#placeholder-h2', data_pie, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    tilt: 0.5,
                    label: {
                        show: true,
                        radius: 1,
                        formatter: labelFormatter,
                        background: {
                            opacity: 0.8
                        }
                    },
                    combine: {
                        color: '#999',
                        threshold: 0.1
                    }
                }
            },
            legend: {
                show: false
            }
        });

        function labelFormatter(label, series) {
            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
        }
    };
    
    
    // function to initiate Chart 3
    var runChart3 = function () {
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
                res.push([i, data[i]]);
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function () {
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
        var plot = $.plot("#placeholder-h3", [getRandomData()], {
            grid: {
                borderWidth: 1,
                borderColor: '#eeeeee'
            },
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
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
    };
     // function to initiate Chart 4
    var runChart4 = function () {
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
                res.push([i, data[i]]);
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function () {
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
        var plot = $.plot("#placeholder-h4", [getRandomData()], {
            grid: {
                borderWidth: 1,
                borderColor: '#eeeeee'
            },
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
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
    };
    
    // function to initiate Chart 4
    var runChart5 = function () {
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
                res.push([i, data[i]]);
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function () {
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
        var plot = $.plot("#placeholder-h5", [getRandomData()], {
            grid: {
                borderWidth: 1,
                borderColor: '#eeeeee'
            },
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
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
    };
    
     // function to initiate Chart 4
    var runChart6 = function () {
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
                res.push([i, data[i]]);
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function () {
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
        var plot = $.plot("#placeholder-h6", [getRandomData()], {
            grid: {
                borderWidth: 1,
                borderColor: '#eeeeee'
            },
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
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
    };
    
     // function to initiate Chart 7
    var runChart7 = function () {
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
                res.push([i, data[i]]);
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function () {
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
        var plot = $.plot("#placeholder-h7", [getRandomData()], {
            grid: {
                borderWidth: 1,
                borderColor: '#eeeeee'
            },
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
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
    };
    
    // function to initiate Sparkline
    var runSparkline = function () {
        $(".sparkline_line_good span").sparkline("html", {
            type: "line",
            fillColor: "#B1FFA9",
            lineColor: "#459D1C",
            width: "50",
            height: "24"
        });
        $(".sparkline_line_bad span").sparkline("html", {
            type: "line",
            fillColor: "#FFC4C7",
            lineColor: "#BA1E20",
            width: "50",
            height: "24"
        });
        $(".sparkline_line_neutral span").sparkline("html", {
            type: "line",
            fillColor: "#CCCCCC",
            lineColor: "#757575",
            width: "50",
            height: "24"
        });
        $(".sparkline_bar_good span").sparkline('html', {
            type: "bar",
            barColor: "#459D1C",
            barWidth: "5",
            height: "24"
        });
        $(".sparkline_bar_bad span").sparkline('html', {
            type: "bar",
            barColor: "#BA1E20",
            barWidth: "5",
            height: "24"
        });
        $(".sparkline_bar_neutral span").sparkline('html', {
            type: "bar",
            barColor: "#757575",
            barWidth: "5",
            height: "24"
        });
    };
    // function to initiate EasyPieChart
    var runEasyPieChart = function () {
        if (isIE8 || isIE9) {
            if (!Function.prototype.bind) {
                Function.prototype.bind = function (oThis) {
                    if (typeof this !== "function") {
                        // closest thing possible to the ECMAScript 5 internal IsCallable function
                        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    }
                    var aArgs = Array.prototype.slice.call(arguments, 1),
                        fToBind = this,
                        fNOP = function () {}, fBound = function () {
                            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                        };
                    fNOP.prototype = this.prototype;
                    fBound.prototype = new fNOP();
                    return fBound;
                };
            }
        }
        $('.easy-pie-chart .bounce').easyPieChart({
            animate: 1000,
            size: 70
        });
        $('.easy-pie-chart .cpu').easyPieChart({
            animate: 1000,
            lineWidth: 3,
            barColor: '#35aa47',
            size: 70
            
        });
    };
    //end admin aditions
    return {
        init: function () {
            runRevolution();
            runColorbox();
            /*  added from admin panel */
            runChart1(); //people analsyis
            //runChart2();
            runChart3(); //room analysis
            runChart4(); // slider moving chart
            runChart5(); // data flow - iops
            runChart6(); // data flow - throughput
            runChart7(); // data flow - connections
            runSparkline();
            runEasyPieChart();
        }
    };
}();