/**
 * A TextInput komponens paramétereit tartalmazza.
 * @param value - Input text értéke.
 * @param onChange - Ha változik a value, akkor mi történik - függvény.
 * @param type - Az input típusa.
 * @param placeholder - Helyettesítő szöveg.
 * @param onEnter - Mi történik az Enter megnyomására - függvény.
 * @param autofocus - Automatikus fokuszt kap-e ha betölt az oldal.
 */
export type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "password" | "username" | "exercise" | "date";
    placeholder?: string;
    onEnter?: () => void;
    autofocus?: boolean;
}