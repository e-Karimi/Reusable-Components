import Route from './Components/Route'
import AccordionPage from './Pages/AccordionPage'
import ButtonPage from './Pages/ButtonPage'
import ImagePage from './Pages/ImagePage'
import DropdownPage from './Pages/DropdownPage'
import ModalPage from './Pages/ModalPage'
import TablePage from './Pages/TablePage'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'


export default function App() {

  return (
    <div className='flex'>
      <Sidebar />

      <div className="p-5">
        <Route path='/'><Home /></Route>
        <Route path='/accordion'><AccordionPage /></Route>
        <Route path='/buttons'><ButtonPage /></Route>
        <Route path='/images'><ImagePage /></Route>
        <Route path='/dropdown'><DropdownPage /></Route>
        <Route path='/modal'><ModalPage /></Route>
        <Route path='/table'><TablePage /></Route>
      </div>
    </div>
  )
}
