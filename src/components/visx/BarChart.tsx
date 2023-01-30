import { useMemo } from 'react'
import { Bar } from '@visx/shape'
import * as Scale from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis'
import { leftTickLabelProps } from '@visx/axis/lib/axis/AxisLeft'
import { bottomTickLabelProps } from '@visx/axis/lib/axis/AxisBottom'
import { useMeasure } from 'react-use'
import { Grid } from '@visx/grid'
import { Group } from '@visx/group'
import { barData } from '@/utils/data'

// accessors
type Data = typeof barData[number]

const getXValue = (d: Data) => d.label
const getYValue = (d: Data) => d.value

// prop candidates (WIP)
const numTicksY = 5
const highlight = '30M+'
const margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
}

export function BarChart() {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()

  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  // scales
  const xScale = useMemo(
    () =>
      Scale.scaleBand<string>({
        domain: barData.map(getXValue),
        range: [0, xMax],
        padding: 0.3,
      }),
    [xMax],
  )

  const yScale = useMemo(
    () =>
      Scale.scaleLinear<number>({
        domain: [0, Math.max(...barData.map(getYValue)) + 10],
        range: [yMax, 0],
      }),
    [yMax],
  )

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%">
        <Group top={margin.top} left={margin.left}>
          <Grid
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            height={yMax}
            numTicksRows={numTicksY}
            stroke="#F0F0F0"
          />
          {barData.map((d) => {
            const label = getXValue(d)
            const barWidth = xScale.bandwidth()
            const barHeight = yMax - (yScale(getYValue(d)) ?? 0)
            const barX = xScale(label)
            const barY = yMax - barHeight
            const fill = label === highlight ? '#4A1FB8' : '#FEC84B'

            return (
              <Bar
                key={`bar-${label}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={fill}
              />
            )
          })}
          <AxisLeft
            scale={yScale}
            tickFormat={(value) => `${value}%`}
            numTicks={numTicksY}
            hideTicks
            stroke="#F0F0F0"
            tickLabelProps={() => ({
              ...leftTickLabelProps(),
              fill: '#A3A3A3',
            })}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            hideTicks
            stroke="#F0F0F0"
            tickLabelProps={() => ({
              ...bottomTickLabelProps(),
              fill: '#A3A3A3',
            })}
          />
        </Group>
      </svg>
    </div>
  )
}
