import logo from './logo.svg';
import './App.css';
import icon from './Assets/ICON.png';
import Page_1 from './Pages/Page_1/index';
import Page_2 from './Pages/Page_2/Page_2';
import Page_3 from './Pages/Page_3/Page_3';
import Page_5 from './Pages/Page_5/Page_5';
import Page_6 from './Pages/Page_6/Page_6';
function App() {
  return (
    <div className="App">
      <Page_1/>
      <Page_2/>
      <Page_3/>
      <Page_5/>
      <Page_6/>
    </div>
  );
}

export default App;
