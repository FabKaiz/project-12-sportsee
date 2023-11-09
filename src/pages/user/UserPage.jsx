import styles from './userPage.module.scss'
import useFetch from "../../hooks/useFetch.jsx";
import { useEffect, useState } from "react";
import user_main_data from "../../mock/user_main_data.js";
import user_activity from "../../mock/user_activity.js";
import user_performance from "../../mock/user_performance.js";
import user_average_sessions from "../../mock/user_average_sessions.js";
import { Navigate, useParams } from "react-router-dom";
import ActivityChart from "../../components/activityChart/ActivityChart.jsx";
import SessionChart from "../../components/sessionChart/SessionChart.jsx";
import PerformanceChart from "../../components/performanceChart/PerformanceChart.jsx";
import ScoreChart from "../../components/scoreChart/ScoreChart.jsx";
import CardChart from "../../components/cardChart/CardChart.jsx";
import UserFormatter from "../../models/user.js";

const UserPage = () => {
  const {userId} = useParams();
  const [formattedUserData, setFormattedUserData] = useState([]);

  const baseUrl = `http://localhost:3000/user/${userId}`;
  const urls = [baseUrl, baseUrl + '/activity', baseUrl + '/performance', baseUrl + '/average-sessions'];
  const {data: fetchedUserData, isPending, error} = useFetch(userId, ...urls);


  useEffect(() => {
    let formattedUser;

    if (userId === 'mock') {
      const userFormatter = new UserFormatter(user_main_data[0], user_activity[0], user_performance[0], user_average_sessions[0]);
      formattedUser = userFormatter.getUser();
    } else if (fetchedUserData) {
      const userFormatter = new UserFormatter(fetchedUserData[0].data, fetchedUserData[1].data, fetchedUserData[2].data, fetchedUserData[3].data);
      formattedUser = userFormatter.getUser();
    }

    if (formattedUser) setFormattedUserData(formattedUser);
  }, [fetchedUserData, userId])

  return (
      <>
        {isPending && <div className={'loading'}>Chargement...</div>}
        {error && <Navigate to={'/error'} replace={true} state={{error: error}} />}
        {Object.keys(formattedUserData).length > 0 && (
            <div className={styles.user}>
              <main>
                <div className={styles.intro}>
                  <h1 className={styles.title}>Bonjour <span
                      className={styles.userName}>{formattedUserData.userInfos?.firstName}</span></h1>
                  <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>

                <div className={styles.dashboard__container}>
                  <div className={styles.dashboard__left}>
                    {formattedUserData.sessions && <ActivityChart userActivity={formattedUserData.sessions} />}
                    <div className={styles.chart__bottom}>
                      {formattedUserData.averageSessions &&
                          <SessionChart averageSession={formattedUserData.averageSessions} />}
                      {formattedUserData.performance &&
                          <PerformanceChart performance={formattedUserData.performance} />}
                      {formattedUserData.score && <ScoreChart score={formattedUserData.score} />}
                    </div>
                  </div>
                  <div className={styles.dashboard__right}>
                    {formattedUserData.keyData && Object.entries(formattedUserData.keyData).map((data, index) => {
                      return <CardChart key={index} data={data} />
                    })}
                  </div>
                </div>
              </main>
            </div>
        )}
      </>
  )
}

export default UserPage