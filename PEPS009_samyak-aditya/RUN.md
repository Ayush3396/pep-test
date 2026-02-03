# How to Run JavaScript Code ▶️

To practice effectively, you need to run and debug your code. Here are the best ways:

## 1. Browser Console (Quickest) ⚡
Great for testing small snippets.
1. Open Chrome.
2. Press `F12` or `Ctrl + Shift + I`.
3. Go to the **Console** tab.
4. Type/Paste code and hit `Enter`.

## 2. VS Code (Recommended) 👨‍💻
Best for writing and saving code.
1. Install [VS Code](https://code.visualstudio.com/).
2. Install the **"Code Runner"** extension.
3. Open a `.js` file.
4. Right-click and select **"Run Code"** (or click the Play button top-right).

## 3. Node.js (Professional) 🟢
If you have Node installed:
1. Open terminal in VS Code (`Ctrl + ~`).
2. Run: 
   ```bash
   node 01-variables-scope/let-const-var.js
   ```

## 🐛 Debugging Tips
- **`console.log()` is your friend.** existing variable values to understand flow.
- **Read Errors!** "ReferenceError" usually means a variable scope issue. "TypeError" often means accessing property of `undefined`.
- **Use `debugger;`**: Place this keyword in your code and open in Chrome DevTools to pause execution and inspect variables.
