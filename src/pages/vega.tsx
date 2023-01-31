import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import { donutData, barLineDataGrouped } from "@/utils/data";
import { Vega, VegaLite } from "react-vega";

const spec = {
  $schema: "https://vega.github.io/schema/vega/v5.json",
  description: "A basic donut chart example.",
  width: "314",
  height: 314,

  signals: [
    {
      name: "innerRadius",
      value: 60,
    },
  ],

  data: [
    {
      name: "table",
      values: [
        { id: 1, field: 4 },
        { id: 2, field: 6 },
        { id: 3, field: 10 },
        { id: 4, field: 3 },
        { id: 5, field: 7 },
        { id: 6, field: 8 },
      ],
      transform: [
        {
          type: "pie",
          field: "field",
          // startAngle: { signal: "startAngle" },
          // endAngle: { signal: "endAngle" },
        },
      ],
    },
  ],

  scales: [
    {
      name: "color",
      type: "ordinal",
      domain: { data: "table", field: "id" },
      range: { scheme: "category20" },
    },
  ],

  marks: [
    {
      type: "arc",
      from: { data: "table" },
      encode: {
        enter: {
          fill: { scale: "color", field: "id" },
          x: { signal: "width / 2" },
          y: { signal: "height / 2" },
        },
        update: {
          startAngle: { field: "startAngle" },
          endAngle: { field: "endAngle" },
          // padAngle: { signal: "padAngle" },
          innerRadius: { signal: "innerRadius" },
          outerRadius: { signal: "width / 2" },
        },
      },
    },
  ],
};

const barChartSpec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 500,
  height: 314,
  data: { name: "table" },
  mark: "bar",
  encoding: {
    x: { field: "a", type: "ordinal" },
    y: { field: "b", type: "quantitative" },
  },
};

const barData = {
  table: [
    { a: "A", b: 28 },
    { a: "B", b: 55 },
    { a: "C", b: 43 },
    { a: "D", b: 91 },
    { a: "E", b: 81 },
    { a: "F", b: 53 },
    { a: "G", b: 19 },
    { a: "H", b: 87 },
    { a: "I", b: 52 },
  ],
};

const VegaChart = () => {
  return (
    <Layout title="Vega">
      <div className="flex w-full gap-8">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <Vega
              spec={spec as any}
              // data={barData}
            />
          </div>
        </Card.Root>
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <VegaLite spec={barChartSpec as any} data={barData} />
          </div>
        </Card.Root>
      </div>
      <div className="flex w-full">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full"></div>
        </Card.Root>
      </div>
    </Layout>
  );
};

export default VegaChart;
