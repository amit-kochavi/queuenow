import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

function ReportQueuePage() {
  const navigate = useNavigate()
  const [selectedLoad, setSelectedLoad] = useState('Medium')
  const [selectedTime, setSelectedTime] = useState('< 5 min')
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')

  const getWaitTimeNumber = (time) => {
    if (time === '< 5 min') return 5
    if (time === '15 min') return 15
    if (time === '30 min') return 30
    if (time === '> 45 min') return 45
    return 0
  }

  const handleSubmitReport = async () => {
    setMessage('Saving report...')

    const { error } = await supabase.from('queue_reports').insert([
      {
        place_name: 'Super-Pharm',
        crowd_level: selectedLoad,
        wait_time: getWaitTimeNumber(selectedTime),
      },
    ])

    if (error) {
      console.error(error)
      setMessage(error.message)
      return
    }

    setMessage('Report saved successfully!')
    setComment('')
  }

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
          <textarea
            placeholder="Add details..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />

          <button className="submit-button" onClick={handleSubmitReport}>
            Submit Report
          </button>

          {message && (
  <p className={`status-message ${message.includes('successfully') ? 'success' : 'error'}`}>
    {message}
  </p>
)}

          <button className="submit-button" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ReportQueuePage