import { render } from 'preact';
import { Main } from './Main';
import { Login } from './Login';
import "./Pwa";
import { useState } from 'preact/hooks';
/**
 * Ezt gyökérkomonens, ezt a komonenst tartalmazza a html fájl.
 * @returns Bejelentkezettségtől függően vagy a fő nézet vagy a bejelentkező felület.
 */
export function App(){
  Notification.requestPermission();
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("loggedIn") === "yes");
  return(
    
    isLoggedIn ? <Main/> : <Login onLogin={ () => setIsLoggedIn(true)}/>
  )
}
render(<App />, document.getElementById('app'));

