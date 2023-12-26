import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import MyCourses from './Pages/MyCourses';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AllCourses from './Pages/AllCourses';
import MyHome from './Pages/MyHome';
import TermsConditions from './Components/TermsConditions';
import AdminDashboard from './Pages/AdminDashboard';
import Profile from './Pages/Profile';
import InstructorDashboard from './Pages/InstructorDashboard';
import CourseCatalog from './Pages/CourseCatalog';
import AdminHome from './Pages/AdminHome1';
import VideoTutorial from './Pages/VideoTutorial';
import Mail from './Components/Mail';
import AdminHome1 from './Pages/AdminHome1';
import AdminHome2 from './Pages/AdminHome2';
import ResourceLibrary from './Pages/ResourceLibrary';
import ChattApp from './Components/Chat/ChatApp';
import AdminHome3 from './Pages/AdminHome3';
import AdminProfile from './Pages/AdminProfile';
import User from './Layout/User';
import Admin from './Layout/Admin';
import PageNotFound from './Pages/PageNotFound';
import PostTweet from './Pages/PostTweet';
import Feedback from './Pages/Feedback';
import AdminFeedback from './Pages/AdminFeedback';


function App() {
  return (
    <div className="App">
        <Routes>          
          <Route path='/' element={<Home />} />        
          <Route path='/404error' element={<PageNotFound />} />        
          <Route path='/courses' element={<AllCourses/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/termscondition' element={<TermsConditions />} />  


          <Route path='/student' element={<User/>}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='home' element={<MyHome />} />
            <Route path='mycourses' element={<MyCourses />} />
            <Route path='catalog' element={<CourseCatalog />} />
            <Route path='profile' element={<Profile />} />
            <Route path='tutorial' element={<VideoTutorial />} />  
            <Route path='mail' element={<Mail />} />  
            <Route path='community' element={<ChattApp />} />  
            <Route path='library' element={<ResourceLibrary />} /> 
            <Route path='feedback' element={<Feedback />} />
            {/* <Route path='post' element={<PostTweet />} /> */}
          </Route>


          <Route path='/admin' element={<Admin/>}>
            <Route path='adminDashboard' element={<AdminDashboard />} />          
            <Route path='manageUser' element={<AdminHome1 />} />
            <Route path='manageCourse' element={<AdminHome2 />} />
            <Route path='manageInstructor' element={<AdminHome3 />} />
            <Route path='feedback' element={<AdminFeedback />} />
            <Route path='adminProfile' element={<AdminProfile />} />
          </Route>
            


        </Routes>
    </div>
  );
}

export default App;
