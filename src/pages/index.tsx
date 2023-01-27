import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="React Charting Libraries">
      <li className="">
        <Link href="/recharts" className="text-blue-600 underline">
          Recharts
        </Link>
      </li>
      <li>
        <Link href="/recharts" className="text-blue-600 underline">
          Chart.js
        </Link>
      </li>
      <li>
        <Link href="/vega" className="text-blue-600 underline">
          Vega-Lite
        </Link>
      </li>
      <li>
        <Link href="/visx" className="text-blue-600 underline">
          visx
        </Link>
      </li>
      <li>
        <Link href="/echarts" className="text-blue-600 underline">
          Apache ECharts
        </Link>
      </li>
      <li>
        <Link href="/Plotly" className="text-blue-600 underline">
          Plotly
        </Link>
      </li>
      <li>
        <Link href="/reactcharts" className="text-blue-600 underline">
          React Charts
        </Link>
      </li>
    </Layout>
  );
}
