import styles from './activityChart.module.scss'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ActivityChart = ({userActivity}) => {
  return (
      <div className={styles.activityChart}>
        <h2 className={styles.title}>Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={userActivity.sessions} barSize={7} barGap={8}>
            <CartesianGrid strokeDasharray="3" vertical={false} />
            <XAxis
                dataKey="day"
                tick={{ fill: '#9B9EAC' }}
                tickLine={false}
                stroke="#DEDEDE"
                strokeWidth={2}
                tickMargin={16}
                tickFormatter={(day) => new Date(day).getDate()}
            />
            <Tooltip cursor={{ fill: '#C4C4C4' }} />
            <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize="10"
                height={80}
            />
            <Bar
                dataKey="kilogram"
                yAxisId="kilogram"
                name="Poids (kg)"
                fill="#282D30"
                radius={[3, 3, 0, 0]}

            />
            <Bar
                dataKey="calories"
                yAxisId="calories"
                name="Calories brûlées (kCal)"
                fill="#E60000"
                radius={[3, 3, 0, 0]}
            />
            <YAxis hide yAxisId="calories" />
            <YAxis
                orientation="right"
                yAxisId="kilogram"
                tickMargin={30}
                tick={{ fill: '#9B9EAC' }}
                tickLine={false}
                axisLine={false}
                domain={['dataMin-2', 'dataMax+1']}
                tickCount={3}

            />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default ActivityChart;