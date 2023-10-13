import styles from './home.module.scss'
import { Link } from "react-router-dom";


function Home() {
  return (
      <>
        <h1 className={styles.title}>Home</h1>

        <Link to={`/user/mock`}>
          User mock page
        </Link>
      </>
  )
}

export default Home
