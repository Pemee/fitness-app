import { TextInputProps } from "./TextInputProps";
import "./styles/TextInput.less";
/**
 * Egy saját text típusú input komponens megvalósítása.
 * @param value - Input text értéke.
 * @param onChange - Ha változik a value, akkor mi történik - függvény.
 * @param type - Az input típusa.
 * @param placeholder - Helyettesítő szöveg.
 * @param onEnter - Mi történik az Enter megnyomására - függvény.
 * @param autofocus - Automatikus fokuszt kap-e ha betölt az oldal.
 * @returns Egy div, ami magába foglal egy inputot és egy label-t a megadott placeholderrel .
 */
export function TextInput({ value, onChange, type, placeholder, onEnter, autofocus }:
    TextInputProps) {
        
    return <div class="TextInput">
        <input type={type} value={value} onInput={e => onChange(e.currentTarget.value)}
            autofocus={autofocus}
            onKeyDown={onEnter ? e => {
                if (e.key === "Enter")
                    onEnter!();
            } : undefined} />
        <label class={value ? "subsided" : undefined}>
            {placeholder}
        </label>
    </div>
}