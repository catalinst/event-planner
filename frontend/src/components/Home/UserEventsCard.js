import styles from './Home.module.css'
import { AiOutlineGithub } from 'react-icons/ai'

const UserEventsCard = ({ event }) => {
  const { name, description, startDate } = event
  console.log(event)

  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <AiOutlineGithub />
        </div>
        <div>
          <div className={styles.title}>{name}</div>
          <div>{description}</div>
          <div>John Doe</div>
        </div>
      </div>
      <div className={styles.date}>{startDate}</div>
    </div>
  )
}

export default UserEventsCard
