import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { donutData, barLineDataGrouped, barData } from "@/utils/data";
import type { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";

const donutOption: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Deal Type Breakdown",
      type: "pie",
      radius: ["40%", "70%"],
      data: donutData.map((d) => ({ name: d.label, value: d.value })).reverse(),
      emphasis: {
        itemStyle: {
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

const barOption: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  grid: {
    top: 20,
    left: "7%",
    right: "5%",
    bottom: "20",
  },
  xAxis: {
    type: "category",
    data: barData.map((d) => d.label),
  },
  yAxis: {
    type: "value",
  },
  color: ["#FEC84B"],
  series: [
    {
      data: barData.map((d) => d.value),
      type: "bar",
    },
  ],
};

const barLineOption: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  grid: {
    // show: false,
    top: 20,
    left: "7%",
    right: "5%",
    bottom: "20",
  },
  xAxis: {
    type: "category",
    data: barLineDataGrouped.map((d) => d.label),
  },
  yAxis: [
    {
      type: "value",
      position: "left",
      alignTicks: true,
      id: "y1",
    },
    {
      type: "value",
      position: "right",
      // alignTicks: true,
      axisLine: {
        show: false,
        lineStyle: {
          color: "red",
        },
      },
      id: "y2",
    },
  ],
  // color: ["#FEC84B"],
  series: [
    {
      data: barLineDataGrouped.map((d) => d.deals),
      type: "bar",
      name: "Deals",
      yAxisId: "y1",
    },
    {
      data: barLineDataGrouped.map((d) => d.ltv),
      type: "line",
      smooth: true,
      name: "LTV",
      yAxisId: "y2",
    },
  ],
};

const Echarts = () => {
  return (
    <Layout title="Echarts" url="https://echarts.apache.org">
      <div className="flex w-full gap-8">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <ReactECharts
              option={donutOption}
              style={{ height: 314 }}
              opts={{ renderer: "svg" }}
            />
          </div>
        </Card.Root>
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <ReactECharts
              option={barOption}
              style={{ height: 314 }}
              theme={{}}
              opts={{ renderer: "svg", width: "auto", height: 314 }}
            />
          </div>
        </Card.Root>
      </div>
      <div className="flex w-full">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <ReactECharts
              option={barLineOption}
              style={{ height: 314 }}
              theme={{}}
              opts={{ renderer: "svg", width: "auto", height: 314 }}
            />
          </div>
        </Card.Root>
      </div>
    </Layout>
  );
};

export default Echarts;
