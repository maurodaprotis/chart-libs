import Link from 'next/link'

export const Navigation = () => {
  return (
    <ul className="mt-12 ml-8">
      <li className="">
        <Link href="/recharts" className="text-blue-600 underline">
          Recharts
        </Link>
      </li>
      <li>
        <Link href="/chartjs" className="text-blue-600 underline">
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
        <Link href="/plotly" className="text-blue-600 underline">
          Plotly
        </Link>
      </li>
    </ul>
  )
}
