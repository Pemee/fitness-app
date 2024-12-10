import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles/LeftPane.less";
import { IconButton } from "./IconButton";
import { IconTextInput } from "./IconTextInput";
/**
 * A fő nézet bal oldalán lévő komponens megvalósítása.
 * @returns Egy div, aminben benne van egy cím, szűrésre használt szelekciós elem, search bar és összes törlése gomb.
 */
export function LeftPane() {
  let [renderCount, setRenderCount] = useState(0);
  let [time, setTime] = useState("0");
  let [searchText, setSearchText] = useState("");
  let [exlist, setExlist] = useState<any[]>([]);
  
  /**
  * A komponens frissítésére szolgáló föggvény.
  */
  const Refresh = () => {
    setRenderCount((x) => x + 1);
  };
  /**
   * Az eltárolt edzések törlésére szolgáló függvény.
   */
  const DeleteAll = () => {
    localStorage.clear();
    setExlist([]);
    Refresh();
  };

  /**
   * Betölti a LocalStorage-ból az elmentett
   */
  useEffect(() => {
    const storedExercises = localStorage.getItem("exercises");
    if (storedExercises) {
      setExlist(JSON.parse(storedExercises));
    }
  });

  /**
   * Megadott dátum és keresési szöveg szerinti szűrése az edzéseknek.
   */
  let filteredExlist = [];
   filteredExlist = useMemo<any[]>((): any[] =>{
    return exlist.filter((x) => {
       const exerciseDate = new Date(x.date);
       const now = new Date();
       let dateDiff = 0;

       if (time === "0") {
         return x.type.toLowerCase().includes(searchText.toLowerCase());
       }

       if (time === "7") {
         dateDiff = now.getTime() - exerciseDate.getTime();
         return (
           dateDiff <= 7 * 24 * 60 * 60 * 1000 &&
           x.type.toLowerCase().includes(searchText.toLowerCase())
         );
       }

       if (time === "30") {
         dateDiff = now.getTime() - exerciseDate.getTime();
         return (
           dateDiff <= 30 * 24 * 60 * 60 * 1000 &&
           x.type.toLowerCase().includes(searchText.toLowerCase())
         );
       }

       if (time === "365") {
         dateDiff = now.getTime() - exerciseDate.getTime();
         return (
           dateDiff <= 365 * 24 * 60 * 60 * 1000 &&
           x.type.toLowerCase().includes(searchText.toLowerCase())
         );
       }
       return false;
     });
  }, [exlist]);
  return (
    <div class="lp-container">
      <h1>Profile</h1>
        
      <div class="menu-container">
        <select value={time} onInput={e => setTime(e.currentTarget.value)} onChange={Refresh}>
          <option value="7">Last Week</option>
          <option value="30">Last 30 Days</option>
          <option value="365">Last Year</option>
          <option value="0">All Time</option>
        </select>
        <IconTextInput name="search" type="text" placeholder="Search by exercise type" value={searchText} onChange={setSearchText}/>
        <IconButton name="delete" value="Delete All" onClick={DeleteAll} />
      </div>
      {filteredExlist.length > 0 ? (
        filteredExlist.map((x, index) => (
          <div class="exs-container" key={index}>
            <span>{x.type}</span>
            <span>{x.date}</span>
            <span>{x.time} Minutes</span>
          </div>
        ))
      ) : (
        <div>No exercises found.</div>
      )}
    </div>
  );
}