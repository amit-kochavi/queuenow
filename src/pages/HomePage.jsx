import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function HomePage() {
  const navigate = useNavigate()
  const [latestReports, setLatestReports] = useState([])

  const places = [
    { name: 'The Coffee Spot', load: 'Low', wait: '5 min', distance: '0.2 mi' },
    { name: 'Grocery Mart', load: 'Medium', wait: '15 min', distance: '0.5 mi' },
    { name: 'Citizens Bank', load: 'High', wait: '30 min', distance: '0.8 mi' },
  ]

  useEffect(() => {
    const fetchLatestReports = async () => {
      const { data, error } = await supabase
        .from('queue_reports')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      if (error) {
        console.error(error)
        return
      }

      setLatestReports(data)
    }

    fetchLatestReports()
  }, [])

  return (
    <>
      <Navbar />

      <main className="page">
        <h1>QueueNow</h1>

        <input className="search-input" placeholder="Search place..." />

        <section
          className="recommendation-card clickable-card"
          onClick={() => navigate('/recommendations')}
        >
          <p>Best time nearby</p>
          <h2>4:00 PM</h2>
        </section>

        <h2>Nearby Places</h2>

        <section className="places-list">
          {places.map((place) => (
            <div
              className="place-card clickable-card"
              key={place.name}
              onClick={() => navigate('/place-details')}
            >
              <h3>{place.name}</h3>
              <p>
                Queue load:{' '}
                <span className={place.load.toLowerCase()}>{place.load}</span>
              </p>
              <p>Wait time: {place.wait}</p>
              <p>Distance: {place.distance}</p>
              <button onClick={() => navigate('/place-details')}>
                View Details
              </button>
            </div>
          ))}
        </section>

        <h2>Latest Queue Reports</h2>

        <section className="places-list">
          {latestReports.length === 0 ? (
            <p className="subtitle">No reports submitted yet.</p>
          ) : (
            latestReports.map((report) => (
              <div className="place-card" key={report.id}>
                <h3>{report.place_name}</h3>
                <p>
                  Queue load:{' '}
                  <span className={report.crowd_level.toLowerCase()}>
                    {report.crowd_level}
                  </span>
                </p>
                <p>Wait time: {report.wait_time} min</p>
              </div>
            ))
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default HomePage