var clientSystem = client.registerSystem(0, 0);

// Setup which events to listen for
clientSystem.initialize = function () {
    // set up your listenToEvents and register client-side components here.
    clientSystem.broadcastEvent("minecraft:display_chat_event", "Hello World!");

}

// per-tick updates
clientSystem.update = function() {
    // Any logic that needs to happen every tick on the client.

}