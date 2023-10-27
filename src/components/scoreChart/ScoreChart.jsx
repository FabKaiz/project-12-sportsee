import styles from './scoreChart.module.scss'
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const ScoreChart = ({averageSession}) => {
  const score = averageSession?.score || averageSession?.todayScore
  const dataArray = [{name: 'score', value: score}]

  return (
      <div>
        {score && (
            <div className={styles.score__container}>
              <h3 className={styles.title}>Score</h3>
              <ResponsiveContainer width="100%" height="100%" className={styles.chartContainer}>
                <RadialBarChart
                    innerRadius="0%"
                    outerRadius="0%"
                    data={dataArray}
                    startAngle={90}
                    endAngle={450}
                >
                  <RadialBar
                      data={[{value: 1}]}
                      dataKey="value"
                      barSize={180}
                      fill="#FFF"
                  />
                  <RadialBar
                      dataKey="value"
                      barSize={10}
                      cornerRadius={100}
                      fill="#FF0000"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className={styles.score_label}>
                <p className={styles.percent}>
                  {score && score * 100}%
                </p>
                <p className={styles.label_text}>de votre <br />objectif</p>
              </div>
            </div>
        )}
      </div>
  );
};

export default ScoreChart;