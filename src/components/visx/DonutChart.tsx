import React from 'react'
import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { donutData } from '@/utils/data'
import { useMeasure } from 'react-use'
import { scaleOrdinal } from '@visx/scale'
import { LegendOrdinal } from '@visx/legend'

type Data = typeof donutData[number]

// accessors
const label = (d: Data) => d.label
const value = (d: Data) => d.value

const colorScale = scaleOrdinal({
  domain: donutData.map(label),
  range: ['#FEC84B', '#D1FADF', '#CA8504', '#DC6803', '#1570EF', '#6938EF'],
})

const donutThickness = 0.5 // as a percentage of the radius (0.5 = 50%)
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
    <div className="w-full h-full flex flex-col">
      <div ref={ref} className="flex-1 min-h-0">
        <svg width={width} height={height}>
          <Group top={top} left={left}>
            <Pie
              data={donutData}
              pieValue={value}
              outerRadius={radius}
              innerRadius={radius - radius * donutThickness}
              padAngle={0.02}
            >
              {(pie) => {
                return pie.arcs.map((arc, index) => {
                  const { label } = arc.data
                  const arcPath = pie.path(arc) ?? undefined
                  const arcFill = colorScale(arc.data.label)

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
      <div className="flex flex-wrap gap-x-3 gap-y-0 justify-center">
        <LegendOrdinal scale={colorScale}>
          {(legends) =>
            legends.map((legend) => (
              <div key={legend.datum} className="flex gap-1 items-center">
                <div className="w-3 h-3 rounded-full" style={{ background: legend.value }} />
                {legend.text}
              </div>
            ))
          }
        </LegendOrdinal>
      </div>
    </div>
  )
}
