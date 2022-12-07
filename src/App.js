import './App.css';
import Header from './components/Header';
import Users from './components/Users';


function App() {
  return (
    <div className = "App">
      <Header> </Header>
      <div className = "app-container">
        <Users />
      </div>
    </div>
  );
}

export default App;
