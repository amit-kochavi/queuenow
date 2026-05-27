import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function ReportQueuePage() {
  const navigate = useNavigate()
  const [selectedLoad, setSelectedLoad] = useState('Medium')
const [selectedTime, setSelectedTime] = useState('< 5 min')

  return (
    <>
      <Navbar />

      <main className="page">
        <h1>Report Queue</h1>
        <p className="subtitle">Help others by sharing the current status.</p>

        <section className="form-card">
          <h3>QUEUE LOAD SELECTOR</h3>

          <div className="selector-row">
  {['Low', 'Medium', 'High'].map((load) => (
    <button
      key={load}
      className={selectedLoad === load ? 'selected' : ''}
      onClick={() => setSelectedLoad(load)}
    >
      {load}
    </button>
  ))}
</div>

          <h3>ESTIMATED WAITING TIME</h3>

          <div className="selector-row">
  {['< 5 min', '15 min', '30 min', '> 45 min'].map((time) => (
    <button
      key={time}
      className={selectedTime === time ? 'selected' : ''}
      onClick={() => setSelectedTime(time)}
    >
      {time}
    </button>
  ))}
</div>

          <h3>OPTIONAL COMMENT</h3>
          <textarea placeholder="Add details..." />

          <button className="submit-button" onClick={() => navigate('/')}>
            Submit Report
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ReportQueuePage