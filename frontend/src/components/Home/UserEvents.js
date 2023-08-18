import { useEffect, useState } from 'react'
import UserEventsCard from './UserEventsCard'
import api from '../../services/api'

const UserEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchUserEvents()
  }, [])

  const fetchUserEvents = () => {
    api.fetchUserEvents()
      .then(({ data }) => setEvents(data))
      .catch(err => {
        console.log(err)
        setEvents([])
      })
  }

  const filterDate = () => {
    return [...events.sort((d1, d2) => new Date(d1.startDate).getTime() -
      new Date(d2.startDate).getTime())]
  }

  if (!events || !events.length) return null

  return (
    <>
      <div>Your next event:</div>
      <UserEventsCard event={filterDate()[0]} />
    </>
  )
}

export default UserEvents
