
function grafic() {
    //console.log(params)
    document.addEventListener("DOMContentLoaded", function(){
        // Create liteChart.js Object
        
        let d = new liteChart("chart", {
        animate: {
            show: false,
            duration: 0.5,
        },
        axisX: {
            show: true,
            color: "#e9edf1",
            width: 2,
            value: "",
            minValue: 0,
            maxValue: 0,
        },
        axisY: {
            show: true,
            color: "#e9edf1",
            width: 2,
            value: "",
            minValue: 0,
            maxValue: 0,
        },
        eventCoord: {
            x: 0,
            y: 0,
        },
        fill: "null",
        gridX: {
            show: true,
            interval: 0,
            fill: 1,
            label: {
                show: true
            },
            stroke:"#e9edf1",
            width:1,
            dasharray:"0 10.04",
            linecap:"round",
        },
        gridY: {
            show: true,
            interval: 0,
            fill: 1,
            label: {
                show: true
            },
            stroke:"#e9edf1",
            width:0,
            dasharray:"0 10.04",
            linecap:"round",
        },
        labels: {
            show: true,
            fontColor: "#c5c6d0",
            fontSize: 12,
            fontFamily: "sans-serif",
            fontWeight: "normal",
        },
        legends: {
            table: {
                show: true,
                position: {
                    x: "center",
                    y: 370,
                },
                direction: "horizontal",
            },
            fill: "#c5c6d0",
        },
        line: {
            width: 3,
            style: "curve",
            shadow: true,
            dasharray: null,
        },
        padding: {
            top: 55,
            right: 15,
            bottom: 40,
            left: 20,
        },
        point: {
            show: false,
            radius: 5,
            strokeWidth: 5,
            stroke: "#ffffff",
        },
        tooltip: {
            show: true,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            fontColor: "#000000",
        },
        valueOnliteChart: {
            show: false,
        },
    } );
    
        
    d.setLabels(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);

	// Set legends and values
	d.addLegend({"name": "Day", "stroke": "#CDDC39", "fill": "#fff", "values": [100, 200, 450, 400, 500, 300, 700, 800, 601, 705, 604, 803]});
	

	// Inject chart into DOM object
	let div = document.getElementById("your-id");
	d.inject(div);

	// Draw
	d.draw();
    });


}
//grafic()
    