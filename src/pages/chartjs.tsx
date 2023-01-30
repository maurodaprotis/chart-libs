import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { donutData, barData, barLineDataGrouped } from "@/utils/data";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  Colors,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement,
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const pieData = donutData
  .map((d) => ({ name: d.label, value: d.value }))
  .sort((a, b) => b.value - a.value);
const COLORS = ["#6938EF", "#1570EF", "#D1FADF", "#DC6803", "#CA8504"];

const doughnutData = {
  labels: pieData.map((d) => d.name),
  datasets: [
    {
      label: "%",
      data: pieData.map((d) => d.value),
    },
  ],
};

const barChartData = {
  labels: barData.map((d) => d.label),
  datasets: [
    {
      label: "Value",
      data: barData.map((d) => d.value),
    },
  ],
};

const multiAxisData = {
  labels: barLineDataGrouped.map((d) => d.label),
  datasets: [
    {
      label: "# of Deals",
      data: barLineDataGrouped.map((d) => d.deals),
      yAxisId: "y",
      type: "bar",
    },
    {
      label: "LTV",
      data: barLineDataGrouped.map((d) => d.ltv),
      yAxisId: "y1",
      type: "line",
    },
  ],
};

const Chartjs = () => {
  return (
    <Layout title="Chart.js">
      <div className="flex w-full gap-8">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <Doughnut
              data={doughnutData}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </Card.Root>
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <Bar
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
              data={barChartData}
            />
          </div>
        </Card.Root>
      </div>
      <div className="flex w-full">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <Bar
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    type: "linear",
                    position: "left",
                    display: true,
                  },
                  y1: {
                    type: "linear",
                    position: "right",
                    display: true,
                  },
                },
              }}
              data={multiAxisData}
            />
          </div>
        </Card.Root>
      </div>
    </Layout>
  );
};

export default Chartjs;
