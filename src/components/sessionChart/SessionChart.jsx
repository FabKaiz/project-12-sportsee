import styles from './sessionChart.module.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import SessionCustomTooltip from "../sessionCustomTooltip/SessionCustomTooltip.jsx";

const SessionChart = ({averageSession}) => {
  const formatLabel = (value) => {
    const dayMap = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D'
    };

    return dayMap[value] || value;
  }
  return (
      <>
        {averageSession?.sessions && (
            <div className={styles.sessionChart}>
              <h2 className={styles.title}>
                Durée moyenne des <br />
                sessions
              </h2>
              <ResponsiveContainer width="100%" height="80%" className={styles.sessionChartContainer}>

                <LineChart data={averageSession.sessions}>
                  <Line
                      type="natural"
                      dataKey="sessionLength"
                      stroke="url(#colorUv)"
                      strokeWidth={2}
                      activeDot={{
                        stroke: '#FFF',
                        strokeWidth: 4,
                        r: 2,
                      }}
                      dot={false}
                  />
                  <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: 'rgba(255,255,255,0.6)',
                        fontSize: '1.2rem'
                      }}
                      tickFormatter={formatLabel}
                      tickMargin={20}
                      padding={{left: 20, right: 20}}
                  />
                  <Tooltip content={<SessionCustomTooltip />} cursor={false} />
                  <YAxis hide domain={['dataMin-10', 'dataMax+10']} />

                  {/* Create gradient for the line
               with svg defs https://developer.mozilla.org/fr/docs/Web/SVG/Element/defs
               ex : https://codepen.io/LeanyLabs/pen/jOWYpJx
               sources : https://stackoverflow.com/questions/72108791/how-to-use-linear-gradient-in-rechart */
                  }
                  <defs>
                    <linearGradient
                        id="colorUv"
                        x1="0%"
                        y1="0"
                        x2="100%"
                        y2="0"
                    >
                      <stop
                          offset="0%"
                          stopColor="rgba(255, 255, 255, 0.3)"
                      />
                      <stop
                          offset="20%"
                          stopColor="rgba(255, 255, 255, 0.4)"
                      />
                      <stop
                          offset="40%"
                          stopColor="rgba(255, 255, 255, 0.5)"
                      />
                      <stop
                          offset="60%"
                          stopColor="rgba(255, 255, 255, 0.6)"
                      />
                      <stop
                          offset="100%"
                          stopColor="rgba(255, 255, 255, 1)"
                      />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
        )}
      </>

  );
};

export default SessionChart;