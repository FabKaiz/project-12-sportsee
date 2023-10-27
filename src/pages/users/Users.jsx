import styles from './users.module.scss'
import { Link } from "react-router-dom";


function Users() {
  return (
      <>
        <h1 className={styles.title}>Select user (for demo purpose)</h1>

        <Link to={`/user/mock`}>
          User mock page
        </Link>
        <br />
        <Link to={`/user/12`}>
          User 12
        </Link>
        <br />

        <Link to={`/user/18`}>
          User 18
        </Link>
      </>
  )
}

export default Users
