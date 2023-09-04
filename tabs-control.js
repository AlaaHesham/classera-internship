const dashboardPage = document.getElementsByClassName("dashboard")[0],
    ticketsPage = document.getElementsByClassName("tickets")[0];

let dumbbellCharts = [];

sidebarFields.forEach(sidebarField => {
    sidebarField.onfocus = () => {
        let selectedField = sidebarField.innerText.toLowerCase();

        sidebarFields.forEach(sidebarField => {
            sidebarField.classList.remove("selected");
        });
        pages.forEach(page => {
            if (page.classList.contains(selectedField))
                page.classList.remove("inactive");
            else
                page.classList.add("inactive");
        });

        sidebarField.classList.add("selected");

        // rerendering dashboard page charts
        // if (!dashboardPage.classList.contains("inactive")) {
        //     console.log("rendering");
        //     var barChart = new ApexCharts(document.querySelector("#chart3"), options3);
        //     barChart.render();
        //     var donutChart = new ApexCharts(document.querySelector("#chart2"), options2);
        //     donutChart.render();
        //     var chart = new ApexCharts(document.querySelector("#chart"), options);
        //     chart.render();
        // }
        // else {
        //     console.log("destroying");
        //     // x
        // }

        // rerendering tickets page charts
        if (!ticketsPage.classList.contains("inactive")) {
            let i = 0;
            dumbchartDivs.forEach(dumbchartDiv => {
                options4.colors = dumbchartColors[i++];
                var dumbbellChart = new ApexCharts(dumbchartDiv, options4);
                dumbbellCharts.push(dumbbellChart);
                dumbbellChart.render();
            });
        }
        else {
            dumbbellCharts.forEach(dumbbellChart => {
                dumbbellChart.destroy();
            });
        }
    };
});
