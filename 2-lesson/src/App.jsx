import './app.scss'
import Chart1 from './components/charts/chart1';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';


function App() {


  return (
 <div className="page-wrapper">
  <Sidebar/>
<div className="navbar-charts-wrapper">
<Navbar/>
<Chart1/>
</div>
 </div>
  )
}

export default App
