import React from 'react';
import './styles.css'
import Header from './components/Header'; //importando o componente Header
import Main from './pages/main';
import Routes from './routes'

//stateless component
const App = () => (
  
    <div className="App"> 
    {/* chamando o componente Header */}
      <Header /> 
      <Routes />
    </div>
  
)

export default App;
