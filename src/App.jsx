import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import AboutPages from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionPage"
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import '../src/App.css' // Importing global styles
import Homepage from "./pages/HomePage"


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);

  };
  return (
   <>
   <div>
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Omkar Nilesh Kolekar"
          studentPhotoUrl="public/Images/omkar.png"
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
   <Router>
    <div className="main-layout">
    <Header/>
    <div className="content">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutPages/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/>
      </Routes>
      <ChatbotComponent/>
      </div>
      <Footer/>
      </div>
     </Router>
  </>

  )
}

export default App;