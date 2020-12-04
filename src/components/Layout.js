import React from 'react'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Freequote from './Freequote'
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles'

import Navbar from './Navbar'
// import './all.sass'
import '../sass/_main.scss'
import OceanShipping from './OceanShipping'
import Warehousing from './Warehousing'
import SlideCard from './SlideCard'
import Header from './Header'
import Location from './Location'
import LatestNews from './LatestNews'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../components/Button'
import BlogCard from './BlogCard'
import HalfCard from './HalfCard'
import TruckType from './TruckType'
import International from './International'
import Navigation from '../components/Navigation'

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
  },
})

const Layout = ({ children }) => (
  // <ThemeProvider theme={theme}>
  <>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navigation />
    {/* <Navbar /> */}
    <div>{children}</div>
  </>
  // </ThemeProvider>
)

export default Layout
