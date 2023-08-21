import './app.scss'
import Chart1 from './components/charts/chart1';
import Chart2 from './components/charts/chart2';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';


function App() {


  return (
 <div className="page-wrapper">
  <Sidebar/>
<div className="navbar-charts-wrapper">
<Navbar/>
<div className="charts-wrapper">
<Chart1/>
<Chart2/>
</div>
</div>
 </div>
  )
}

export default App
