let reloading = false;

window.onbeforeunload = function () {
    reloading = true;
};

// if reloading
if (reloading) {
    document.location.href = "https://neuron-ai.github.io/";
}