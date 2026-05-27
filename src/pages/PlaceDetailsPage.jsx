import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function PlaceDetailsPage() {
    const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <main className="page">
        <h1>Joe's Pizza Shop</h1>
        <p className="subtitle">123 Main St, Central City</p>

        <section className="status-card">
          <p>QUEUE LOAD STATUS</p>
          <h2>20 min</h2>
          <span className="medium">Medium</span>
        </section>

        <section className="graph-card">
          <h2>Hourly Queue Graph</h2>
          <div className="bar-chart">
            <div></div>
            <div></div>
            <div className="active"></div>
            <div></div>
            <div></div>
          </div>
        </section>

        <section className="recommendation-card">
          <p>AI RECOMMENDATION</p>
          <h2>Best time to visit: <span className="low">4:00 PM</span></h2>
          <p className="subtitle">Usually the shortest queue of the day</p>
        </section>

        <div className="action-row">
  <button
    className="secondary-button"
    onClick={() => navigate('/report')}
  >
    Report Queue
  </button>

  <button
    onClick={() => navigate('/recommendations')}
  >
    Navigate
  </button>
</div>
      </main>
      <Footer />
    </>
  )
}

export default PlaceDetailsPage