import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PlaceDetailsPage from './pages/PlaceDetailsPage'
import ReportQueuePage from './pages/ReportQueuePage'
import SmartRecommendationsPage from './pages/SmartRecommendationsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/place-details" element={<PlaceDetailsPage />} />
      <Route path="/report" element={<ReportQueuePage />} />
      <Route path="/recommendations" element={<SmartRecommendationsPage />} />
    </Routes>
  )
}

export default App