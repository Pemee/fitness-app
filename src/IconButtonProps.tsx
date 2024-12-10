/**
 * A IconButton komponens paramétereit tartalmazza.
 * @param name - A tartalmazandó ikon neve(Google Fonts).
 * @param value - Input text értéke.
 * @param onClick - Kattintás hatására mi történjen - függvény.  
 */
export type IconButtonProps = {
    name: string;
    value: string;
    onClick:()=>void;
}