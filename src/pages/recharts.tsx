import { Card } from "@/components/Card";
import { Layout } from "@/components/Layout";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { donutData, barData, barLineDataGrouped } from "@/utils/data";

const pieData = donutData
  .map((d) => ({ name: d.label, value: d.value }))
  .sort((a, b) => b.value - a.value);
const COLORS = ["#6938EF", "#1570EF", "#D1FADF", "#DC6803", "#CA8504"];

const Recharts = () => {
  return (
    <Layout title="Recharts" url="https://recharts.org">
      <div className="flex w-full gap-8">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <ResponsiveContainer>
              <PieChart>
                <Tooltip />
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={100}
                  fill="#8884d8"
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  nameKey="name"
                  minAngle={5}
                  label
                >
                  {/* <LabelList
                    dataKey="name"
                    position="outside"
                    offset={20}
                    fill="#666"
                    stroke="#666"
                  /> */}
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      cx="140"
                      cy="120"
                      // strokeWidth={4}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card.Root>
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <ResponsiveContainer>
              <BarChart data={barData}>
                <CartesianGrid />
                <Tooltip />
                <XAxis dataKey="label" />
                <YAxis fill="#666" />
                <Bar data={barData} dataKey="value" fill="#FEC84B">
                  {/* {bdata.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))} */}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card.Root>
      </div>
      <div className="flex w-full">
        <Card.Root>
          <Card.Title>Asset type over the years</Card.Title>
          <div className="h-[314px] w-full">
            <ResponsiveContainer>
              <ComposedChart data={barLineDataGrouped}>
                <CartesianGrid />
                <Tooltip />
                <XAxis dataKey="label" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Bar yAxisId="left" dataKey="deals" fill="#d6bbfb"></Bar>
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="ltv"
                  fill="#1570EF"
                ></Line>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card.Root>
      </div>
    </Layout>
  );
};

export default Recharts;
