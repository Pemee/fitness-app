async function push(e) {
    let message = e;
    self.registration.showNotification("Exercise Notification", {
        body: message
        }
    );
}
self.addEventListener("push", e => e.respondWith(push(e)));
self.addEventListener("message", event => {
    if (event.data && event.data.type === "TRIGGER_PUSH") {
        push(event.data.message);
    }
});