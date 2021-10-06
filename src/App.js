import './App.css';
import Profile from "./profile/Profile"
import myself from '../src/assets/images/myself-image.png';



function App() {
  const fullName="Oumayma"
  const bio="sciences"
  const profession="developper"
  const imgg="Me :)"
  const alertme=()=>{
    alert("welcome Oumayma")
  }


  return (
    <div className="App">
      <Profile full={fullName} bioo={bio} profs={profession} image={imgg} alert={alertme}>
      this is my photo 
      <br/>
      <img src={myself} alt="me" />
      </Profile>
    </div>
  );
}

export default App;
