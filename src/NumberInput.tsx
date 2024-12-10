import { NumberInputProps } from "./NumberInputProps";
import "./styles/NumberInput.less";
/**
 * A NumberInput komponens megvalósítása.
 * @param value - Input text értéke.
 * @param onChange - Ha változik a value, akkor mi történik - függvény.
 * @param type - Az input típusa.
 * @param placeholder - Helyettesítő szöveg.
 * @param onEnter - Mi történik az Enter megnyomására - függvény.
 * @param autofocus - Automatikus fokuszt kap-e ha betölt az oldal.
 * @returns- Egy div, amiben az input illetve a megadott placeholdert tartalmazó label van.
 */
export function NumberInput({ value, onChange, type, placeholder, onEnter, autofocus }:
    NumberInputProps) {

    return <div class="NumberInput">
        <input type={type} value={value} onInput={e => onChange(Number(e.currentTarget.value))}
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