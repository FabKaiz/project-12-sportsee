import styles from './users.module.scss'
import { Link } from "react-router-dom";


function Users() {
  return (
      <div className={styles.userContainer}>
        <h1 className={styles.title}>Select user (for demo purpose)</h1>

        <Link to={`/user/mock`}>
          User mock page (no api)
        </Link>
        <Link to={`/user/12`}>
          User 12 Karl
        </Link>
        <Link to={`/user/18`}>
          User 18 Cecilia
        </Link>
      </div>
  )
}

export default Users
