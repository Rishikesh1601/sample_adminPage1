const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI;
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}


// Get the canvas element
var ctx = document.getElementById('incomeComparisonChart').getContext('2d');

// Data for last year's and this year's income
var lastYearIncomeData = [50000, 55000, 60000, 58000, 54000, 56000, 52000, 53000, 59000, 57000, 61000, 63000];
var thisYearIncomeData = [52000, 53000, 54000, 56000, 57000, 58000, 59000, 60000, 61000, 62000, 63000, 64000];

// Calculate the profit or loss
var profitLossData = thisYearIncomeData.map((thisYearIncome, index) => thisYearIncome - lastYearIncomeData[index]);

// Create the line chart
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'This Year',
      data: thisYearIncomeData,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 1
    }, {
      label: 'Last Year',
      data: lastYearIncomeData,
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


// Get the canvas element
var ctx = document.getElementById('incomeExpenseChart').getContext('2d');

// Data for total income and total expenses
var totalIncome = 50000;
var totalExpense = 45000;

// Calculate the profit (income - expense)
var profit = totalIncome - totalExpense;

// Create the bar chart
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Income', 'Expense'],
    datasets: [{
      label: 'Amount',
      data: [totalIncome, totalExpense],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          if (label) {
            label += ': ';
          }
          label += '$' + tooltipItem.yLabel.toFixed(2);
          return label;
        }
      }
    }
  }
});

// Display profit or loss
var profitLossElement = document.createElement('p');
profitLossElement.textContent = 'Profit: $' + profit;
document.querySelector('.card-body').appendChild(profitLossElement);
