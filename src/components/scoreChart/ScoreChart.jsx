import styles from './scoreChart.module.scss'


const ScoreChart = ({averageSession}) => {
  console.log(averageSession)

  const score = averageSession.score || averageSession.todayScore

  return (
      <div>
        {score && (
            <div className={styles.score__container}>
              oui {score}
            </div>
        )}
      </div>
  );
};

export default ScoreChart;