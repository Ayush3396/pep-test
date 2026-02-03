# JavaScript Interview Notes 📝

**Revision Cheat Sheet for Technical Rounds**

## 1. `var` vs `let` vs `const`
| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function Scoped | Block Scoped `{}` | Block Scoped `{}` |
| **Hoisting** | Yes (initialized `undefined`) | Yes (Temporal Dead Zone) | Yes (Temporal Dead Zone) |
| **Reassign?** | Yes | Yes | No |

## 2. Hoisting
- Moving variable and function declarations to the top of their scope.
- **Functions** are fully hoisted.
- **Variables (`var`)** are hoisted as `undefined`.
- **Variables (`let`/`const`)** are hoisted but stay in the **Temporal Dead Zone (TDZ)** until the line of declaration needed.

## 3. Closures
**Definition**: A function bundled together with references to its surrounding state (lexical environment).
- **Use Case**: Data hiding / Private variables.
- **Use Case**: Memoization.
- **Use Case**: Iterators and Generators.

## 4. Arrow Functions vs Regular Functions
- **Syntax**: Shorter `() => {}`.
- **`this` binding**: Arrow functions **do not** have their own `this`. They inherit `this` from the parent scope.
- **`arguments`**: Arrow functions do not have the `arguments` object.

## 5. Event Loop & Async
JavaScript is **single-threaded**.
1. **Call Stack**: Executes synchronous code.
2. **Web APIs**: Handles `setTimeout`, `fetch`, DOM events (in browser).
3. **Callback Queue**: Holds callbacks ready to run.
4. **Event Loop**: Checks if Stack is empty, then pushes tasks from Queue to Stack.
- **Microtask Queue** (Promises) has higher priority than Callback Queue (`setTimeout`).

## 6. `==` vs `===`
- `==`: Checks value (does type coercion). `5 == "5"` is `true`.
- `===`: Checks value AND type (strict). `5 === "5"` is `false`.
