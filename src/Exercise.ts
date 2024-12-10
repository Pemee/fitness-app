/**
 * Egy edzést megvalósító osztály.
 */
class Exercise{
    /**
     * Edzés típusa. 
     */
    type: string;

    /**
     * Edzés dátuma.
     */
    date: string;

    /**
     * Edzés hossza percben.
     */
    time: number;
    /**
     * Dátum alapértéke a mai dátum.
     */
    constructor(){
        let date = new Date();
        this.date = date.toISOString().split('T')[0];
    }
}
export const exercise = new Exercise();