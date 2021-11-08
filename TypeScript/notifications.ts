function showNotification(message) {
    const notification = new Notification("Neuron AI", {
        body: message,
        icon: "https://raw.githubusercontent.com/Neuron-AI/Neuron-AI.github.io/main/Images/logo.svg",
    });
}

if (Notification.permission === "granted") {
    var recurrentVisitor = true;
} else {
    var recurrentVisitor = false;
}

if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if ((permission === "granted") && (recurrentVisitor === false)) {
            showNotification("Welcome to the community. We'll notify you of new research, projects and information whilst you are here!");
        }
        else if ((permission === "denied")) {
            showNotification("You have denied notifications")  // ? I think it will make us seem too pushy if we tell them they have denied. Also, could we make it so that it does
    });
}