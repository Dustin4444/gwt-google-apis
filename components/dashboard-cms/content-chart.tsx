"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement)

const getComputedColor = (cssVar: string) => {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim()
  }
  return cssVar
}

const contentData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Articles Published",
      data: [45, 52, 48, 61, 55, 67, 73, 69, 76, 82, 78, 85],
      borderColor: "hsl(var(--chart-1))",
      backgroundColor: "hsl(var(--chart-1) / 0.1)",
      tension: 0.4,
    },
    {
      label: "Page Views (K)",
      data: [12, 15, 13, 18, 16, 22, 25, 23, 28, 32, 29, 35],
      borderColor: "hsl(var(--chart-2))",
      backgroundColor: "hsl(var(--chart-2) / 0.1)",
      tension: 0.4,
    },
  ],
}

const categoryData = {
  labels: ["Technology", "Business", "Health", "Sports", "Entertainment", "Politics", "Science"],
  datasets: [
    {
      label: "Articles",
      data: [156, 142, 98, 87, 76, 65, 54],
      backgroundColor: [
        "hsl(var(--chart-1) / 0.8)",
        "hsl(var(--chart-2) / 0.8)",
        "hsl(var(--chart-3) / 0.8)",
        "hsl(var(--chart-4) / 0.8)",
        "hsl(var(--chart-5) / 0.8)",
        "hsl(var(--primary) / 0.8)",
        "hsl(var(--accent) / 0.8)",
      ],
      borderColor: [
        "hsl(var(--chart-1))",
        "hsl(var(--chart-2))",
        "hsl(var(--chart-3))",
        "hsl(var(--chart-4))",
        "hsl(var(--chart-5))",
        "hsl(var(--primary))",
        "hsl(var(--accent))",
      ],
      borderWidth: 1,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
        },
        color: "hsl(var(--foreground))",
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
      backgroundColor: "hsl(var(--card))",
      titleColor: "hsl(var(--foreground))",
      bodyColor: "hsl(var(--foreground))",
      borderColor: "hsl(var(--border))",
      borderWidth: 1,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "hsl(var(--border) / 0.1)",
      },
      ticks: {
        font: {
          size: 11,
        },
        color: "hsl(var(--muted-foreground))",
      },
    },
    x: {
      grid: {
        color: "hsl(var(--border) / 0.1)",
      },
      ticks: {
        font: {
          size: 11,
        },
        color: "hsl(var(--muted-foreground))",
      },
    },
  },
  interaction: {
    mode: "nearest" as const,
    axis: "x" as const,
    intersect: false,
  },
}

const mobileChartOptions = {
  ...chartOptions,
  plugins: {
    ...chartOptions.plugins,
    legend: {
      ...chartOptions.plugins.legend,
      labels: {
        ...chartOptions.plugins.legend.labels,
        padding: 10,
        font: {
          size: 10,
        },
      },
    },
  },
  scales: {
    ...chartOptions.scales,
    y: {
      ...chartOptions.scales.y,
      ticks: {
        font: {
          size: 9,
        },
        maxTicksLimit: 6,
      },
    },
    x: {
      ...chartOptions.scales.x,
      ticks: {
        font: {
          size: 9,
        },
        maxRotation: 45,
        minRotation: 0,
      },
    },
  },
}

export default function ContentChart() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 xl:grid-cols-2">
      {/* Content Performance Chart */}
      <div className="bg-card dark:bg-card rounded-xl p-3 sm:p-6 border border-border dark:border-border w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-foreground">Content Performance</h3>
          <select className="text-xs sm:text-sm border border-border rounded-md px-2 py-1 bg-background dark:bg-card text-foreground w-full sm:w-auto">
            <option>Last 12 months</option>
            <option>Last 6 months</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div className="h-64 sm:h-80 w-full">
          <Line data={contentData} options={window.innerWidth < 640 ? mobileChartOptions : chartOptions} />
        </div>
      </div>

      {/* Content by Category Chart */}
      <div className="bg-card dark:bg-card rounded-xl p-3 sm:p-6 border border-border dark:border-border w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-foreground">Content by Category</h3>
          <span className="text-xs sm:text-sm text-muted-foreground">This year</span>
        </div>
        <div className="h-48 sm:h-64 w-full">
          <Bar data={categoryData} options={window.innerWidth < 640 ? mobileChartOptions : chartOptions} />
        </div>
      </div>
    </div>
  )
}
