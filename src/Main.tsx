import './styles/Main.less';
import { RightPane } from './RightPane';
import { LeftPane } from './LeftPane';
import { useState } from 'preact/hooks';
import { IconButton } from './IconButton';
import { SideBar } from './SideBar';

/**
 * A fő nézetet megvalósító komponens.
 * @returns - Egy div, amiben két div van, amik közül mindig a megfelelő látszik a képernyőméret függvényében.
 */
export function Main(){
    let [refreshCount, setRefreshCount] = useState(0);
    let [sideSelected, setSideSelected] = useState(false);
    return <div class="main-container">
        
        <div class="normal-screen">
        <LeftPane/>
        <RightPane onAdded={ () => setRefreshCount(x => x +1 )}/>
        </div>
        <div class="small-screen">
            <SideBar showExs={() => setSideSelected(!sideSelected)}/>
        { sideSelected ? <LeftPane/> : <RightPane onAdded={ () => setRefreshCount(x => x +1 )}/>}
        </div>
        
    </div>
}