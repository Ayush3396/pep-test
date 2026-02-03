# JavaScript Interview Questions ❓

**Test your knowledge before the interview.**

## Type 1: Conceptual Output
**Q1. What will be logged?**
```js
console.log(a);
var a = 10;
```
*(Hint: Hoisting)*

**Q2. Loops and Closures**
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```
*(Hint: `var` is function scoped, not block scoped)*

**Q3. Object Reference**
```js
const user1 = { name: "Sam" };
const user2 = user1;
user2.name = "Alex";
console.log(user1.name);
```

## Type 2: Theory
1. Explain **Closure** with a real-world example.
2. What is the **Temporal Dead Zone**?
3. Difference between `null` and `undefined`?
4. Explain **Message Queue** vs **Microtask Queue**.
5. Why do we use `promises` instead of callbacks?

## Type 3: Coding
1. **Debounce**: Write a function that limits how often a function can run.
2. **Deep Clone**: How to clone an object without reference?
3. **Promise.all**: How to run multiple API calls in parallel?
