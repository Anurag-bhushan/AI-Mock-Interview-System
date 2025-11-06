import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/auth'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'

export const ServerUrl  = "http://localhost:8000"