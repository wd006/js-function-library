># JavaScript Function Library
>by wd006

A simple, modular, and reusable JavaScript function library providing common math, array, and utility functions.

---
<a href="https://www.npmjs.com/@wd006/js-function-library" target="_blank">**NPM Page**</a><br>
<a href="https://www.github.com/wd006/js-function-library" target="_blank">**GitHub Page**</a>

## 📋 Features

- Basic math operations <!--(`add`, `subtract`, `multiply`, `divide`)-->
- Number checking utilities <!--(`isInteger`, `isEven`, `isOdd`)-->
- Array manipulation helpers <!--(`addToArray`, `removeFromArray`, `arrayContains`, `sortArray`)-->
- Modular ES6 exports for easy usage
- Clear documentation with usage examples

<!------->


## 📦 Installation

1- Install the package:  

```bash
npm install @wd006/js-function-library
```

2- Add the following to the package.json file in your project folder:  

```json
"type": "module"
```

3- And import individual modules in your project like this:

```js
import { add, subtract } from '@wd006/js-function-library';
```



## ⚙️ Requirements

This project is written in JavaScript.
To run or test the code locally, the following tools are optional but recommended:

**->** [**Node.js**](https://nodejs.org/downloads) (Comes with NPM) — Execute JavaScript code from the terminal. <br>
**->** [**Git**](git-scm.com/downloads) *(optional)* — Clone or download the repository easily

<!------->

<!--
## 🚀 Usage Example

```js
import { add, isEven } from './src/math.js';

console.log(add(5, 7));         // Output: 12
console.log(isEven(10));        // Output: true
```
-->

<!------->


## 📖 Functions in the Project

| Function                    | Description                          | Example Usage                | Example Output  |
|-----------------------------|--------------------------------------|-------------------------------|-----------------|
| `add(a, b)`                 | Adds two numbers                      | `add(2, 3)`                  | `5`             |
| `subtract(a, b)`            | Subtracts second number from first    | `subtract(5, 2)`             | `3`             |
| `multiply(a, b)`            | Multiplies two numbers                | `multiply(4, 3)`             | `12`            |
| `divide(a, b)`              | Divides first number by second        | `divide(10, 2)`              | `5`             |
| `isInteger(x)`              | Returns true if `x` is an integer     | `isInteger(3.5)`             | `false`         |
| `isEven(x)`                 | Checks if number is even              | `isEven(4)`                  | `true`          |
| `isOdd(x)`                  | Checks if number is odd               | `isOdd(5)`                   | `true`          |
| `addToArray(array, element)`| Adds element to end of array          | `addToArray([1,2], 3)`       | `[1, 2, 3]`     |
| `removeFromArray(array, e)` | Removes element from array            | `removeFromArray([1,2], 2)`  | `[1]`           |
| `arrayContains(array, e)`   | Checks if array contains element      | `arrayContains([1,2], 2)`    | `true`          |
| `sortArray(array)`          | Returns a sorted copy of array        | `sortArray([3,1,2])`         | `[1, 2, 3]`     |

---

## 📄 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute this project for personal or commercial use.  
See the [LICENSE](LICENSE) file for full details.

<!------->

## 🤝 Contributing

Contributions are welcome!  
Please feel free to fork the repository, make your changes, and submit a pull request.

<!------->

## 📬 Contact

For questions or support:  

<a href="mailto:githubwd@gmail.com" target="_blank"><img src="https://raw.githubusercontent.com/wd006/wd006/main/contact/mail.png" style="width:111" ></a>

or open an issue on GitHub.
