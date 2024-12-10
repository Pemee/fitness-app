import { IconButtonProps } from "./IconButtonProps"
import './styles/IconButton.less'
/**
 * A IconButton komponens megvalósítása.
 * @param name - A tartalmazandó ikon neve(Google Fonts).
 * @param value - Input text értéke.
 * @param onClick - Kattintás hatására mi történjen - függvény.  
 * @returns Egy gomb benne egy ikonnal, ami egy span-ben van.
 */
export function IconButton({name,value,onClick}:IconButtonProps)
{
      return <button class="IconButton" onClick = {onClick} value = {value} >
            {value}
        <span class="material-symbols-outlined">
            {name }
        </span>
        
        </button>

}