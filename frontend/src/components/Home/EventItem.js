import styles from './Home.module.css'
import { AiTwotoneStar, AiOutlineStar, AiOutlineGithub } from 'react-icons/ai'
import api from '../../services/api'
import { toast } from 'react-toastify'

const EventItem = ({ _id, name, isSubscribed, setEvents }) => {

  const updateEvent = (status) => {
    setEvents(prevState => {
      const events = [...prevState]
      const idx = events.findIndex(event => event._id === _id)
      events[idx]['isSubscribed'] = status
      return events
    })
  }

  const handleSubscribe = () => {
    api.subscribeEvent(_id)
      .then(({ data }) => {
        updateEvent(data.isSubscribed)
        toast.success('Successfully subscribed!')
      })
      .catch(err => console.log(err))
  }

  const handleUnsubscribe = () => {
    api.unsubscribeEvent(_id)
      .then(({ data }) => {
        updateEvent(data.isSubscribed)
        toast.success('Successfully unsubscribed!')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.event}>
      {/*can add an img or some img component with url, but for demo purpose I use and icon*/}
      <AiOutlineGithub />
      <div className={styles.name}>{name}</div>
      {isSubscribed && <AiTwotoneStar onClick={handleUnsubscribe} />}
      {!isSubscribed && <AiOutlineStar onClick={handleSubscribe} />}
    </div>
  )
}

export default EventItem
