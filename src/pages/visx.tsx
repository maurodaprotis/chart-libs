import { Card } from '@/components/Card'
import { Layout } from '@/components/Layout'
import { BarChart } from '@/components/visx/BarChart'
import { DonutChart } from '@/components/visx/DonutChart'

const Visx = () => {
  return (
    <Layout title="visx">
      <div className="flex gap-8 flex-wrap">
        <div className="flex-1 min-w-0">
          <Card.Root>
            <Card.Title>Donut Chart</Card.Title>
            <div className="h-[300px]">
              <DonutChart />
            </div>
          </Card.Root>
        </div>
        <div className="flex-1">
          <Card.Root>
            <Card.Title>Bar Chart</Card.Title>
            <div className="h-[300px]">
              <BarChart />
            </div>
          </Card.Root>
        </div>
        <Card.Root>
          <Card.Title>Composed Chart</Card.Title>
        </Card.Root>
      </div>
    </Layout>
  )
}

export default Visx
