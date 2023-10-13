import styles from './userPage.module.scss'
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const UserPage = ({ user }) => {
  // const { title, description, equipments, host, location, pictures, rating, tags } = logement

  return (
      <div className={styles.user}>
        <Sidebar />
        <main>
          <div className={styles.intro}>
            <h1 className={styles.title}>Bonjour <span className={styles.userName}>User</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        </main>
      </div>
  )
}

export default UserPage