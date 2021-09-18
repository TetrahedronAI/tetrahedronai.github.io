function showNotificaton(message) {
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
            showNotificaton("Welcome to the community. We'll notify you of new research, projects and information whilst you are here!");
        }
    });
}