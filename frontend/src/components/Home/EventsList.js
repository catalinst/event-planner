import styles from './Home.module.css'
import EventItem from './EventItem'
import { useEffect, useState } from 'react'
import api from '../../services/api'

const EventsList = () => {
  const [categories, setCategories] = useState([])
  const [events, setEvents] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()

  useEffect(() => {
    fetchCategories()
    fetchEvents()
  }, [])

  useEffect(() => {
    // reset + togle filtering
    fetchEvents().then(() => {
      if (selectedCategory) {
        setEvents(prevState => [...prevState].filter(
          event => event.categories.some(
            category => category.name === selectedCategory)),
        )
      }
    })
  }, [selectedCategory])

  const fetchCategories = () => {
    api.fetchCategories()
      .then(({ data }) => setCategories(data))
      .catch(err => {
        console.log(err)
        setCategories([])
      })
  }

  const fetchEvents = async () => {
    await api.fetchEvents()
      .then(({ data }) => setEvents(data))
      .catch(err => {
        console.log(err)
        setEvents([])
      })
  }

  const handleSetCategory = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(categoryName)
    }
  }

  return (
    <>
      <div>Discover Upcoming Events:</div>
      <div className={styles.categories}>
        <div>Sort by:</div>
        {categories.map(({ _id, name }) => (
          <div
            className={styles.category}
            key={_id}
            onClick={() => handleSetCategory(name)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className={styles.events}>
        {events.map(({ _id, name, isSubscribed }) => (
          <EventItem key={_id} {...{ _id, name, isSubscribed, setEvents }} />
        ))}
      </div>
    </>
  )
}

export default EventsList
