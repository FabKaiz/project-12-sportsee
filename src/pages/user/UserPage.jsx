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

const UserPage = ({ user }) => {
  const { userId } = useParams();

  // const { userId } = useParams();
  // const { title, description, equipments, host, location, pictures, rating, tags } = user
  // const [url, setUrl] = useState('');

  // const { data: users, isPending, error } = useFetch(url);
  // get params from url
  const [userMainData, setUserMainData] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)


  useEffect(() => {

    if (userId === 'mock') {
      setUserActivity(user_activity[0])
      setUserMainData(user_main_data[0])
      // setUserPerformance(user_performance[0])
      // setUserAverageSessions(user_average_sessions[0])
    }
  }, [])

  console.log(userActivity)
  return (
      <div className={styles.user}>
        <Sidebar />
        <main>
          <div className={styles.intro}>
            <h1 className={styles.title}>Bonjour <span
                className={styles.userName}>{userMainData?.userInfos?.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          {userActivity && <ActivityChart userActivity={userActivity} />}
        </main>
      </div>
  )
}

export default UserPage