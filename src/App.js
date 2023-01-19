import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddPost from './posts/AddPost'
import EditPost from './posts/EditPost'
import ViewPost from './posts/ViewPost'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addpost" element={<AddPost />} />
          <Route exact path="/editpost/:id" element={<EditPost />} />
          <Route exact path="/viewpost/:id" element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
