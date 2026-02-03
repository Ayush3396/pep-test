// --- 1. THE MESSY WAY (Callback Hell) ---
function getDataWithCallbacks() {
    console.log("Fetching User...");
    setTimeout(() => {
        console.log("User Fetched");
        setTimeout(() => {
            console.log("Fetching Posts...");
            setTimeout(() => {
                console.log("Posts Fetched");
            }, 1000);
        }, 1000);
    }, 1000);
}

// getDataWithCallbacks();


// --- 2. THE PROMISE WAY ---
// TODO: Create a helper function 'wait(ms)' that returns a Promise.
// TODO: Refactor the above logic using .then() chaining.


// --- 3. THE ASYNC/AWAIT WAY ---
// TODO: Refactor the above logic using async/await.
