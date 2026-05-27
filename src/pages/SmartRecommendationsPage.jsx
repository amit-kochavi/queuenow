import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function SmartRecommendationsPage() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      <main className="page">
        <h1>Smart Recommendations</h1>
        <p className="subtitle">AI-based tips for the best time to visit.</p>

        <section className="recommendation-card">
          <p>AI RECOMMENDATION</p>
          <h2>
            Best time to visit: <span className="low">4:00 PM</span>
          </h2>
          <p className="subtitle">Usually the shortest queue today</p>
        </section>

        <section className="graph-card">
          <h2>Queue Trend Graph</h2>
          <div className="line-graph"></div>
        </section>

        <section className="graph-card">
          <h2>Recommended Hours</h2>
          <div className="bar-chart">
            <div></div>
            <div></div>
            <div></div>
            <div className="active"></div>
            <div></div>
          </div>
        </section>

        <button className="submit-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </main>
      <Footer />
    </>
  )
}

export default SmartRecommendationsPage