const time_id = '#ct';

function logTime() {
    // Replace this selector with the appropriate selector for the time element on the website
    const timeElement = document.querySelector(time_id);

    if (timeElement) {
        const currentTime = timeElement.textContent.trim();
        console.log(`Current Time: ${currentTime}`);
    }
}

// Function to detect changes in the time element
function setupMutationObserver() {
    // Replace this selector with the appropriate selector for the time element on the website
    const timeElement = document.querySelector(time_id);

    if (timeElement) {
        // Create a new MutationObserver
        const observer = new MutationObserver(function (mutations) {
            // Log the time each time the content of the time element changes
            logTime();
        });

        // Configure the MutationObserver to watch for changes in the content of the time element
        const config = { childList: true, subtree: true };
        observer.observe(timeElement, config);
    }
}

// Execute logTime() and set up the MutationObserver when the DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    logTime();
    setupMutationObserver();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        logTime();
        setupMutationObserver();
    });
}
