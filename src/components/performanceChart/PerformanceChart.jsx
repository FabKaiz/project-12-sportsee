import styles from './performanceChart.module.scss'
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Text} from "recharts";

const PerformanceChart = ({performance}) => {
  /**
   * Function to translate the labels of the chart
   * https://recharts.org/en-US/api/PolarAngleAxis
   *
   * source: https://stackoverflow.com/questions/59361614/custom-label-on-recharts-radar-chart
   * demo : https://jsfiddle.net/dpvqmgf2/
   *
   * y, x, cx, cy are the coordinates of the label ( c for center )
   * payload is the data of the label
   * rest is the rest of the props of the label
   *
   */
  const customPolarAngleAxis = ({payload, x, y, cx, cy, ...rest}) => {
    const formatLabel = (value) => {
      if (value === 'Energy') return 'Energie'
      if (value === 'Strength') return 'Force'
      if (value === 'Speed') return 'Vitesse'
      if (value === 'Intensity') return 'Intensité'
      return value
    }

    return (
        <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 10}
            x={x + (x - cx) / 100}
            fill="#FFFFFF"
            fontSize="1.2rem"
            fontWeight={500}
        >
          {formatLabel(
              performance.kind[payload.value].charAt(0).toUpperCase() +
              performance.kind[payload.value].slice(1)
          )}
        </Text>
    )
  }

  return (
      <>
        <ResponsiveContainer width="100%" height="100%" className={styles.performanceChart}>
          <RadarChart outerRadius={90} data={[...performance.data].reverse()}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
                dataKey="kind"
                tick={(value) => customPolarAngleAxis(value)}
            />
            <PolarRadiusAxis
                tickCount={6}
                tick={false}
                axisLine={false}
            />
            <Radar
                dataKey="value"
                fill="#FF0101"
                fillOpacity={0.58}
            />
          </RadarChart>
        </ResponsiveContainer>
      </>
  );
};

export default PerformanceChart;