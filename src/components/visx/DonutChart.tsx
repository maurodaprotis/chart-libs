import React from 'react'
import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { donutData } from '@/utils/data'
import { useMeasure } from 'react-use'
import { scaleOrdinal } from '@visx/scale'

type Data = typeof donutData[number]

// accessors
const label = (d: Data) => d.label
const value = (d: Data) => d.value

const getLabelColor = scaleOrdinal({
  domain: donutData.map(label),
  range: ['#FEC84B', '#D1FADF', '#CA8504', '#DC6803', '#1570EF', '#6938EF'],
})

const donutThickness = 60
const margin = { top: 40, right: 40, bottom: 40, left: 40 }

export function DonutChart() {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()

  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom
  const radius = Math.min(xMax, yMax) / 2
  const xCenter = xMax / 2
  const yCenter = yMax / 2
  const top = yCenter + margin.top
  const left = xCenter + margin.left

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      <svg width={width} height={height}>
        <Group top={top} left={left}>
          <Pie
            data={donutData}
            pieValue={value}
            outerRadius={radius}
            innerRadius={radius - donutThickness}
            padAngle={0.02}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                const { label } = arc.data
                const arcPath = pie.path(arc) ?? undefined
                const arcFill = getLabelColor(arc.data.label)

                return (
                  <g key={`arc-${label}-${index}`}>
                    <path d={arcPath} fill={arcFill} />
                  </g>
                )
              })
            }}
          </Pie>
        </Group>
      </svg>
    </div>
  )
}
