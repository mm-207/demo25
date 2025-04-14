

if ("serviceWorker" in navigator) {
    console.log("Hey I am installing service worker");
    await navigator.serviceWorker.register("/sw.js");
    console.log("Done");
}

