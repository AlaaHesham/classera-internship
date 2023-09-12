const dashboardPage = document.getElementById("dashboard"),
    ticketsPage = document.getElementById("tickets"),
    addTicketPage = document.getElementById("add-ticket");


let dumbbellCharts = [];
let barChart, donutChart, chart;
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
        if (!dashboardPage.classList.contains("inactive")) {
            barChart = new ApexCharts(document.querySelector("#chart3"), options3);
            barChart.render();
            donutChart = new ApexCharts(document.querySelector("#chart2"), options2);
            donutChart.render();
            chart = new ApexCharts(document.querySelector("#chart"), options);
            chart.render();
        }
        else {
            barChart.destroy();
            donutChart.destroy();
            chart.destroy();
        }

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
        resetAddTicketPage();
    }, 3500);
});

//cancel button 
const cancelBtn = document.querySelector(".add-ticket-btns .cancel-btn");

cancelBtn.addEventListener("click", () => {
    resetAddTicketPage();
});

// functions

function resetAddTicketPage() {
    document.querySelector(".sidebar li a.tickets-section").focus();
    addTicketPage.classList.add("inactive");
    saveBtn.innerHTML = "Save";
    document.querySelector(".add-ticket-content .field-container input").value = "";
    document.querySelector(".add-ticket-content .field-container textarea").value = "";
    brandSelectorContent.innerHTML = "<span class='selector'> Select Product</span>";
    moduleSelectorContent.innerHTML = "<span class='selector'> Select Module</span>";
}