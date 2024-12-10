import "./styles/RightPane.less"
import { exercise } from "./Exercise";
import { useState } from "preact/hooks"
import { NumberInput } from "./NumberInput";
import { IconButton } from "./IconButton";
import {pwa} from './Pwa';
import { TextInput } from "./TextInput";
/**
 * A főnézet jobb oldali komponense.
 * @param onAdded - Callback függvény a szülő komponensnek, hogy hozzá lett adva egy új edzés.
 * @returns Egy div, amiben megvalósításra kerültek a különböző elemek. Egy cím, egy szelekciós elem, amiben a különböző edzéstípusok közől lehet választani,
 *  és number input, egy dátum input, valamint egy gomb, amivel hozzá lehet adni az edzést az edzések listájához, ami LocalStaorage-ban van tárolva, illetve push notificationt is küld erről. 
 */
export function RightPane({onAdded}:{ onAdded: () => void}){
    let curDate = new Date();
    let [exTime,setTime] = useState(0);
    let [exDate,setExDate] = useState(curDate.toISOString().split('T')[0])
    let [exType,setType] = useState("Running");
    /**
     * Értesíti a serviceworker-t, hogy küdjön egy push notit.
     * @param message - A push notification "body" részének megadására szolgál.
     */
    function sendMessageToServiceWorker(message:any) {

        const serviceWorker = pwa.getActiveServiceWorker();
        if (serviceWorker) {
            serviceWorker.postMessage(message);
        } else {
            console.error("No active service worker available.");
        }
    }
    return <div class="rp-container">
        
        <h1>Add New Exercise</h1>
        <label for="exercise">Choose an exercise:</label>
        <select  name="exercise" id="exercise" value={exType} onInput={e => setType(e.currentTarget.value)} >
        <optgroup label="Cardio">
            <option value="Running" selected>Running</option>
            <option value="Walking">Walking</option>
            <option value="Cycling">Cycling</option>
        </optgroup>
        <optgroup label="Legs">
            <option value="Squats">Squats</option>
            <option value="Deadlift">Deadlift</option>
            <option value="Leg Push">Leg Push</option>
        </optgroup>
        <optgroup label="Upper Body">
            <option value="Bench Press">Bench Press</option>
            <option value="Biceps Curls">Biceps Curls</option>
            <option value="Triceps Extension">Triceps Extensions</option>
        </optgroup>
        </select>
        <label htmlFor="time">Minutes of exercise:</label>
        <NumberInput type="number" value={exTime} onChange={setTime}/>
        <label htmlFor="date">Time of exercise:</label>
        <TextInput value={exDate} type="date" onChange={setExDate} />
        <IconButton value="Add exercise" name='add'  onClick={() => { 
            if(JSON.parse(localStorage.getItem("exercises")) != null){
                exercisesList = JSON.parse(localStorage.getItem("exercises"));
            }
            else{
                var exercisesList = [];
            }
            sendMessageToServiceWorker({type: "TRIGGER_PUSH", message: `Exercise added: ${exType}`});
            exercise.time = exTime;
            exercise.type = exType;
            exercise.date = exDate;
            exercisesList.push(exercise);
            localStorage.setItem("exercises",JSON.stringify(exercisesList));
            onAdded();
        }
        }></IconButton>
    </div>
}