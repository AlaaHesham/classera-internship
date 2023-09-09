const dashboardPage = document.getElementById("dashboard"),
    ticketsPage = document.getElementById("tickets"),
    addTicketPage = document.getElementById("add-ticket");


let dumbbellCharts = [];

sidebarFields.forEach(sidebarField => {
    sidebarField.onfocus = () => {
        let selectedField = sidebarField.innerText.toLowerCase();

        sidebarFields.forEach(sidebarField => {
            sidebarField.classList.remove("selected");
        });
        pages.forEach(page => {
            if (page.id === selectedField)
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

// ------------- Add Ticket Page ----------------
const addTicketBtn = document.querySelector(".add-btn");
addTicketBtn.addEventListener("click", () => {
    addTicketPage.classList.remove("inactive");
    ticketsPage.classList.add("inactive");
});


// save button
const saveBtn = document.querySelector(".add-ticket-btns .save-btn");

saveBtn.addEventListener("click", () => {
    saveBtn.innerHTML = "<p class='loading'></p>";
    setTimeout(() => {
        saveBtn.innerHTML = "<i class='bx bx-check'></i>";
    }, 3000);

    setTimeout(() => {
        document.querySelector(".sidebar li a.tickets-section").focus();
        addTicketPage.classList.add("inactive");
    }, 3500);
});

//cancel button 
const cancelBtn = document.querySelector(".add-ticket-btns .cancel-btn");

cancelBtn.addEventListener("click", () => {
    document.querySelector(".sidebar li a.tickets-section").focus();
    addTicketPage.classList.add("inactive");
});