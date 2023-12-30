import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { AppLayout, Main, Profile, RateIdeas } from './components'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Main />} />
        <Route path="/rate" element={<RateIdeas />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
