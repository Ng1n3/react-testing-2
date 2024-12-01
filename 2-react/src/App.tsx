import './App.css';
import { MuiMode } from './components/mui/mui-mode';
import { AppProviders } from './components/providers/app-providers';
// import { Application } from './components/application/application';
// import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      {/* <Application/> */}
      {/* <Skills skills={["HTML", "CSS"]}/> */}
      <AppProviders>
        <div className='App'>
          <MuiMode/>
        </div>
      </AppProviders>
    </div>
  );
}

export default App;
