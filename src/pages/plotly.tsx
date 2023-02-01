import { Card } from '@/components/Card'
import { Layout } from '@/components/Layout'
import { barData, donutData } from '@/utils/data'
import dynamic from 'next/dynamic'
import { useMeasure } from 'react-use'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

const Plotly = () => {
  const [donutRef, donutSize] = useMeasure<HTMLDivElement>()
  const [barRef, barSize] = useMeasure<HTMLDivElement>()

  return (
    <Layout title="Plotly" url="https://plotly.com/javascript/">
      <div className="flex gap-8 flex-wrap">
        <div className="flex-1 min-w-0">
          <Card.Root>
            <Card.Title>Asset type over the years</Card.Title>
            <div className="h-[300px]" ref={donutRef}>
              <Plot
                data={[
                  {
                    type: 'pie',
                    values: donutData.map((d) => d.value),
                    labels: donutData.map((d) => d.label),
                    hole: 0.4,
                    textinfo: 'label+percent',
                    textposition: 'outside',
                    automargin: true,
                  },
                ]}
                layout={{
                  width: donutSize.width,
                  height: donutSize.height,
                  showlegend: false,

                  margin: { t: 40, r: 40, b: 40, l: 40 },
                }}
                config={{
                  staticPlot: true,
                }}
              />
            </div>
          </Card.Root>
        </div>
        <div className="flex-1 min-w-0">
          <Card.Root>
            <Card.Title>Asset type over the years</Card.Title>
            <div className="h-[300px]" ref={barRef}>
              <Plot
                data={[
                  {
                    type: 'bar',
                    x: barData.map((d) => d.label),
                    y: barData.map((d) => d.value),
                    marker: {
                      color: '#FEC84B',
                    },
                  },
                ]}
                layout={{
                  width: barSize.width,
                  height: barSize.height,
                  showlegend: false,
                  margin: { t: 40, r: 40, b: 40, l: 40 },
                  xaxis: {
                    showgrid: true,
                    color: '#A3A3A3',
                    linecolor: '#F0F0F0',
                  },
                  yaxis: {
                    showline: true,
                    zeroline: false,
                    color: '#A3A3A3',
                    linecolor: '#F0F0F0',
                    ticksuffix: '%',
                  },
                }}
                config={{
                  // disables all the fancy shmancy plot zooming, dragging, etc
                  staticPlot: true,
                }}
              />
            </div>
          </Card.Root>
        </div>
      </div>
    </Layout>
  )
}

export default Plotly
