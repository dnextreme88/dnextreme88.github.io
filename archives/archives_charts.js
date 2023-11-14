import { brands, months } from './archives_items.js';

var colors = {
    backgroundColor: ['#08F7FE', '#09FBD3', '#E5F403', '#FF4972', '#DC3545'],
    hoverBackgroundColor: '#FE53BB',
    hoverBorderColor: '#560A86',
}

var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: { color: 'black' },
            position: 'top'
        },
        scales: {
            y: { beginAtZero: true }
        },
    },
    scales: {
        x: {
            ticks: { color: 'black' },
            grid: { display: false }
        },
        y: {
            ticks: { color: 'black' },
            grid: { display: false }
        }
    }
};

/**
 * Display chart for top 5 archive items with the highest prices, also sorted alphabetically
 *
 * @param   {string} archiveItems - Array of archive items
 * @returns void
 */
function getTop5HighestPricesChart(archiveItems) {
    const sortedItems = [...archiveItems].sort((a, b) => b.price - a.price || a.name.localeCompare(b.name)).slice(0, 5);

    const ctx = document.getElementById('top5-highest-prices-chart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedItems.map(item => item.name),
            datasets: [{
                ...colors,
                label: 'Price',
                data: sortedItems.map(item => item.price),
                borderWidth: 3
            }],
        },
        options: chartOptions
    });
}

/**
 * Display chart for top 5 archive items with the most items sold per brand, also sorted alphabetically
 *
 * @param   {string} archiveItems - Array of archive items
 * @returns void
 */
function getTop5BrandsChart(archiveItems) {
    const brandsCount = [];
    brands.forEach(brand => {
        const hasResults = archiveItems.filter(item => item['name'].indexOf(brand) != -1);
        if (hasResults.length > 0) {
            brandsCount.push({ brand: brand, count: hasResults.length });
        }
    });

    const sortedItems = [...brandsCount].sort((a, b) => b.count - a.count || a.brand.localeCompare(b.brand)).slice(0, 5);

    const ctx = document.getElementById('top5-most-items-sold-brands-chart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedItems.map(item => item.brand),
            datasets: [{
                ...colors,
                label: 'Count',
                data: sortedItems.map(item => item.count),
                borderWidth: 3
            }],
        },
        options: chartOptions
    });
}

/**
 * Display chart for top 5 archive items with the most items sold per month, also sorted alphabetically
 *
 * @param   {string} archiveItems - Array of archive items
 * @returns void
 */
function getTop5MonthsChart(archiveItems) {
    const monthsCount = [];
    months.forEach((month, index) => {
        var monthIndex = index + 1;
        monthIndex = `-${monthIndex < 10 ? '0' + monthIndex : monthIndex}-`;

        const hasResults = archiveItems.filter(item => item['dateSold'].indexOf(monthIndex) != -1);
        if (hasResults.length > 0) {
            monthsCount.push({ month: month, count: hasResults.length });
        }
    });

    const sortedItems = [...monthsCount].sort((a, b) => b.count - a.count || a.month.localeCompare(b.month)).slice(0, 5);

    const ctx = document.getElementById('top5-most-items-sold-months-chart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedItems.map(item => item.month),
            datasets: [{
                ...colors,
                label: 'Count',
                data: sortedItems.map(item => item.count),
                borderWidth: 3
            }],
        },
        options: chartOptions
    });
}

export { getTop5HighestPricesChart, getTop5BrandsChart, getTop5MonthsChart };
