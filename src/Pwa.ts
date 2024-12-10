/**
 * A service worker-t megvalósító osztály.
 */
class Pwa{
    /**
     * Service worker regisztrációs példány.
     */
#serviceWorkerRegistration?: ServiceWorkerRegistration;

constructor(){
    if ( isSecureContext ){
        ( async () =>{ this.#serviceWorkerRegistration = await navigator.serviceWorker.register( "sw.js" );} )();
    }
}
/**
 * Visszaadja az aktív service workert.
 */
getActiveServiceWorker(): ServiceWorker | undefined {
    return this.#serviceWorkerRegistration?.active || undefined;
}
}
export const pwa = new Pwa();