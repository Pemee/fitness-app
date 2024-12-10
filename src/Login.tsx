import { useState } from "preact/hooks";
import "./styles/Login.less"
import { TextInput } from "./TextInput";
import {IconButton} from './IconButton'
/**
 * A bejelentkező felület megvalósítása.
 * @param onLogin - Callback függgvény, ami újrarendereli a szülő komponenst.
 * @returns Egy div, amiben a bejelentezési adatokat meg lehet adni.
 */
export function Login({onLogin}:{ onLogin: () => void})
{
	let [ password, setPassword ] = useState( "" );
	let [ userName, setUserName ] = useState( "" );
	/**
	 * Bejelentkezés gomb megnyomásának hatására fut le és ellenőrzi, hogy a megadott adatok helyesek-e,
	 * ha igen, akkor a SessionStorage-ban eltárolja loggedIn állapotot és meghívja az onLogin, különben alertet dob.
	 */
	function login(){
		if(userName === "admin" && password === "admin"){
			sessionStorage.setItem("loggedIn", "yes");
			onLogin();
		}
		else{
			alert("Incorrect username or password!");
		}
		
	}
	
	return <div>
			<div class='login-container'>
			<span><svg xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 -960 960 960" width="200px" fill="#007bff"><path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z"/></svg></span>
			<TextInput value={userName} type="username" onChange={ setUserName } placeholder="Username"></TextInput>
			<TextInput type="password" placeholder="Password" value={ password } onChange={ setPassword }  onEnter={login}/>
			<IconButton name="login" value="Login" onClick={login}/>
			</div>
		</div>
}