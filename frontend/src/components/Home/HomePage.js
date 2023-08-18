import UserEvents from './UserEvents'
import EventsList from './EventsList'
import styles from './Home.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <UserEvents />
      <EventsList />
    </div>
  )
}

export default HomePage
