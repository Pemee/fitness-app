import { useState } from "preact/hooks";
import { IconButton } from "./IconButton";
/**
 * Ha kis szélességű a képernyő ez az oldalsó elem oldja meg a két nézet közötti váltást.
 * @param showExs - Callback függvény a szülő elemnek, értesíti, hogy a másik nézetet kell mutatni.
 * @returns - Egy divbe ágyazott IconButton. 
 */
export function SideBar({showExs}: { showExs: ()=>void}){
    let [showing, setShowing] = useState(false);
    let iconName = showing ? "arrow_back_ios" : "arrow_forward_ios";
    return <div class="side-bar">
        <IconButton name={iconName} value="" onClick={() => { showExs(); setShowing(!showing)}}/>
    </div> 
};