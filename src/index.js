import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/styles/theme'

import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LearningStyle from './pages/LearningStyle'
import NetworkClassification from './pages/NetworkClassification'
import StudentGender from './pages/StudentGender'
import TeacherType from './pages/TeacherType'
import StudentHomeCampus from './pages/StudentHomeCampus'
import LearningStyle2 from './pages/LearningStyle2'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="learning-style" element={<LearningStyle />} />
            <Route path="learning-style-2" element={<LearningStyle2 />} />
            <Route
              path="network-classification"
              element={<NetworkClassification />}
            />
            <Route path="student-gender" element={<StudentGender />} />
            <Route path="teacher-type" element={<TeacherType />} />
            <Route path="student-home-campus" element={<StudentHomeCampus />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
