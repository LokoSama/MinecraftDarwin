var serverSystem = server.registerSystem(0, 0);
let count = 0

// Setup which events to listen for
serverSystem.initialize = function () {

    // set up your listenToEvents and register server-side components here.

}

// per-tick updates
serverSystem.update = function() {
   count ++
    if (count === 250) {
        serverSystem.spawn("cow")
        serverSystem.spawn("horse")
    }
    // Any logic that needs to happen every tick on the server.
}

serverSystem.spawn = function (name){
    let entity = serverSystem.createEntity("entity", "minecraft:"+name.toString())
    serverSystem.createComponent(entity)
    serverSystem.broadcastEvent("minecraft:display_chat_event", name.toString()+" has been created")
}