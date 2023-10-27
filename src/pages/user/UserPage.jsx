import styles from './userPage.module.scss'
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import { useEffect, useState } from "react";
import user_main_data from "../../mock/user_main_data.js";
import user_activity from "../../mock/user_activity.js";
import user_performance from "../../mock/user_performance.js";
import user_average_sessions from "../../mock/user_average_sessions.js";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/activityChart/ActivityChart.jsx";
import SessionChart from "../../components/sessionChart/SessionChart.jsx";
import PerformanceChart from "../../components/performanceChart/PerformanceChart.jsx";
import ScoreChart from "../../components/scoreChart/ScoreChart.jsx";
import CardChart from "../../components/cardChart/CardChart.jsx";

const UserPage = () => {
  const {userId} = useParams();

  // const { title, description, equipments, host, location, pictures, rating, tags } = user
  const [userUrl, setUserUrl] = useState(`http://localhost:3000/user/${userId}`);

  const {data: userData, isPending, error} = useFetch(userUrl);
  const {data: userActivityData, isPending: isPendingActivity, error: errorActivity} = useFetch(userUrl + '/activity');
  const {
    data: userPerformanceData,
    isPending: isPendingPerformance,
    error: errorPerformance
  } = useFetch(userUrl + '/performance');
  const {
    data: userAverageSessionsData,
    isPending: isPendingAverageSessions,
    error: errorAverageSessions
  } = useFetch(userUrl + '/average-sessions');

  console.log(userData)


  const [userMainData, setUserMainData] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)


  useEffect(() => {
    if (userId === 'mock') {
      setUserActivity(user_activity[0])
      setUserMainData(user_main_data[0])
      setUserAverageSessions(user_average_sessions[0])
      setUserPerformance(user_performance[0])
    }

    if (userData) setUserMainData(userData?.data)
    if (userActivityData) setUserActivity(userActivityData?.data)
    if (userPerformanceData) setUserPerformance(userPerformanceData?.data)
    if (userAverageSessionsData) setUserAverageSessions(userAverageSessionsData?.data)
  }, [userActivityData, userData, userId])


  return (
      <div className={styles.user}>
        <main>
          <div className={styles.intro}>
            <h1 className={styles.title}>Bonjour <span
                className={styles.userName}>{userMainData?.userInfos?.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>


          <div className={styles.dashboard__container}>
            <div className={styles.dashboard__left}>
              {userActivity && <ActivityChart userActivity={userActivity} />}
              <div className={styles.chart__bottom}>
                {userAverageSessions && <SessionChart averageSession={userAverageSessions} />}
                {userPerformance && <PerformanceChart performance={userPerformance} />}
                {userMainData && <ScoreChart averageSession={userMainData} />}
              </div>
            </div>
            <div className={styles.dashboard__right}>
              {userMainData?.keyData && Object.entries(userMainData.keyData).map((data, index) => {
                return <CardChart key={index} data={data} />
              })}
            </div>
          </div>

        </main>
      </div>
  )
}

export default UserPage