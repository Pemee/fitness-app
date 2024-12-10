import { IconTextInputProps } from "./IconTextInputProps";
import './styles/IconTextInput.less'
/**
 * A IconTextInput komponens megvalósítása.
 * @param name - A tartalmazandó ikon neve(Google Fonts).
 * @param value - Input text értéke.
 * @param onChange - Ha változik a value, akkor mi történik - függvény.
 * @param type - Az input típusa.
 * @param placeholder - Helyettesítő szöveg.
 * @param onEnter - Mi történik az Enter megnyomására - függvény.
 * @param autofocus - Automatikus fokuszt kap-e ha betölt az oldal.
 * @returns Egy div az ikonnal egy span-ben és az inputtal.
 */
export function IconTextInput({ name, value, onChange, type, placeholder, onEnter, autofocus }:
    IconTextInputProps) {
        
    return <div class="IconTextInput">
        <span class="material-symbols-outlined">
                {name}
        </span>
        <input type={type} value={value} placeholder={placeholder} onInput={e => onChange(e.currentTarget.value)}
            autofocus={autofocus}>
        </input>
        
    </div> 
    
}