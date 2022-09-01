
const trafficNav = document.querySelectorAll(".traffic-nav");
const trafficNavLinks = document.querySelectorAll(".traffic-nav-link");
const trafficChart = document.querySelector("#traffic-chart").getContext('2d');
const dailyBar = document.querySelector("#daily-chart").getContext('2d');
const mobileDoughnut = document.querySelector("#mobile-chart").getContext('2d');

// /----------------Traffic Line Graph Data----------------/
const hourly = {
    labels: ['8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm'],
    datasets: [{
        data: [5, 20, 45, 55, 85, 120, 100, 75, 78, 50],
        backgroundColor: "rgba(213,214,236, 0.5)",
        borderColor: "rgba(15, 4, 145, 0.2)",
        color: "rgb(188, 174, 212)",
        borderWidth: 0,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 30,
                bottom: 30
            },
        },
        scales: {
            y: {
                min: 2,
                max: 200,
                ticks: {
                    stepSize: 25,
                    color: "rgb(8, 2, 79)"
                }
            },
            x: {
                ticks: {
                    color: "rgb(8, 2, 79)"
                }
            }

        },
        plugins: {
            legend: {
                display: false
            }
        },
    }
};

const daily = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        data: [75, 125, 185, 250, 200, 150, 100],
        backgroundColor: "rgba(213,214,236, 0.5)",
        borderColor: "rgba(15, 4, 145, 0.2)",
        color: "rgb(188, 174, 212)",
        borderWidth: 2,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 30
            },
        },
        scales: {
            y: {
                min: 0,
                max: 300,
                ticks: {
                    stepSize: 75,
                    color: "rgb(8, 2, 79)"
                }
            },
            x: {
                ticks: {
                    color: "rgb(8, 2, 79)"
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

const weekly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2450],
        backgroundColor: "rgba(213,214,236, 0.5)",
        borderColor: "rgba(15, 4, 145, 0.2)",
        color: "rgb(188, 174, 212)",
        borderWidth: 2,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
        layout: {
            padding: {
                left: 35,
                right: 35,
                top: 30,
                bottom: 30
            },
        },
        scales: {
            y: {
                min: 0,
                max: 2500,
                ticks: {
                    stepSize: 950,
                    color: "rgb(8, 2, 79)"
                }
            },
            x: {
                ticks: {
                    color: "rgb(8, 2, 79)"
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

const monthly = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        data: [7500, 12550, 15500, 20000, 25000, 28750, 29000, 30000, 32500, 31500, 31000, 31500],
        backgroundColor: "rgba(213,214,236, 0.5)",
        borderColor: "rgba(15, 4, 145, 0.2)",
        color: "rgb(188, 174, 212)",
        borderWidth: 2,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
        layout: {
            padding: {
                left: 40,
                right: 40,
                top: 30,
                bottom: 30
            },
        },
        scales: {
            y: {
                min: 0,
                max: 33000,
                ticks: {
                    stepSize: 7500,
                    color: "rgb(8, 2, 79)"
                }
            },
            x: {
                ticks: {
                    color: "rgb(8, 2, 79)"
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

};

// /------------Variables for Swapping Chart Data---------/
const trafficHourlyLabel = hourly.labels;
const trafficHourlyData = hourly.datasets;
const trafficHourlyOptions = hourly.options;
const trafficDailyLabel = daily.labels;
const trafficDailyData = daily.datasets;
const trafficDailyOptions = daily.options;
const trafficWeeklyLabel = weekly.labels
const trafficWeeklyData = weekly.datasets;
const trafficWeeklyOptions = weekly.options;
const trafficMonthlyLabel = monthly.labels;
const trafficMonthlyData = monthly.datasets;
const trafficMonthlyOptions = monthly.options;
const initialLabels = weekly.labels;
const initialDataSets = weekly.datasets;
const initialOptions = weekly.options;

// /-----------Functions to Create Traffic Charts---------/
function createTrafficLineChart(labels, data, options) {
    trafficLine = new Chart(trafficChart, {
        type: 'line',
        data: {
            labels: labels,
            datasets: data,
        },
        options: options,
    });
};

// /----------Create Initial Traffic Charts---------/
createTrafficLineChart(initialLabels, initialDataSets, initialOptions);

// /----------Create New Traffic Chart based on Choice---------/
trafficNavLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        let click = e.target;

        for (i = 0; i < trafficNavLinks.length; i++) {
            trafficNavLinks[i].classList.remove('active');
            click.classList.add('active');
        };

        if (click.innerText === 'Hourly') {
            trafficLine.data.labels = trafficHourlyLabel;
            trafficLine.data.datasets = trafficHourlyData;
            trafficLine.options = trafficHourlyOptions;
            trafficLine.update();
        } else if (click.innerText === 'Daily') {
            trafficLine.data.labels = trafficDailyLabel;
            trafficLine.data.datasets = trafficDailyData;
            trafficLine.options = trafficDailyOptions;
            trafficLine.update();
        } else if (click.innerText === 'Weekly') {
            trafficLine.data.labels = trafficWeeklyLabel;
            trafficLine.data.datasets = trafficWeeklyData;
            trafficLine.options = trafficWeeklyOptions;
            trafficLine.update();
        } else {
            trafficLine.data.labels = trafficMonthlyLabel;
            trafficLine.data.datasets = trafficMonthlyData;
            trafficLine.options = trafficMonthlyOptions;
            trafficLine.update();
        }

    });
});

// /============Daily Traffic Bar Chart==============/
bar = new Chart(dailyBar, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: [
                '#8e8adb',
            ],

          borderColor: [
            '#8e8adb',
          ],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
            duration: 0
        },
        layout: {
            padding: {
                left: 10,
                right: 5,
                top: 10,
                bottom: 30
            },
        },
        scales: {
            y: {
                min: 0,
                max: 250,
                ticks: {
                    stepSize: 50,
                    color: "#8e8adb"
                }
            },
            x: {
                ticks: {
                    color: "#8e8adb"
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// /============Daily Mobile Doughnut Chart==============/
doughnut = new Chart(mobileDoughnut, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            data: [2000, 550, 500],
            backgroundColor: [
                '#8e8adb',
                'rgb(129,201,143)',
                'rgb(81,182,200)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },

    options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
            duration: 0
        },
        layout: {
            padding: {
                left: 25,
                right: 20,
                top: 30,
                bottom: 30
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
        }
    }
  });

