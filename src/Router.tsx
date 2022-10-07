import { Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { ScheduleList } from './pages/ScheduleList'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/scheduleList" element={<ScheduleList />} />
    </Routes>
  )
}
