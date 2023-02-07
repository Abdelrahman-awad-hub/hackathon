/*
We want to preview images, so we need to register the Image Preview plugin
*/

FilePond.registerPlugin(
    // encodes the file as base64 data
    FilePondPluginFileEncode,

    // validates the size of the file
    FilePondPluginFileValidateSize
);

// Select the file input and use create() to turn it into a pond
FilePond.create(document.querySelector("input"));

const textarea = document.querySelector("textarea");
const synth = window.speechSynthesis;
const button = document.querySelector(".voice");
const clear = document.querySelector(".clear");

button.addEventListener("click", function () {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    synth.speak(utterance);
});
clear.addEventListener("click", function () {
    textarea.value = "";
});

window.onload = function () {
    document.querySelector("body").style.overflow = "hidden";
    setTimeout(function () {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        textarea.focus();
    }, 400);
};
const elements = document.querySelectorAll("[data-name]");

for (const element of elements) {
    element.addEventListener("click", function () {
        const name = this.getAttribute("data-name");
        const message = new SpeechSynthesisUtterance(name);
        window.speechSynthesis.speak(message);
    });
}
