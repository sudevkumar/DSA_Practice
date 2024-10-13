// 1.
// *
// * *
// * * *
// * * * *
// * * * * *
function partern1(n) {
  let part = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      part += "*" + " ";
    }
    part += "\n";
  }

  console.log(part);
}

// =========================================================================================================

// partern1(5)

// 2.
// * * * * *
// * * * *
// * * *
// * *
// *
function partern2(n) {
  let part = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      part += "*" + " ";
    }
    part += "\n";
  }

  console.log(part);
}

// partern2(5)

// =========================================================================================================
// 3. Palindrom number or not i.e 121
function Palindrom(n) {
  let rev = "";
  let str = n.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  if (rev === str) {
    console.log(n + " is a palindrome number");
  } else {
    console.log(n + " is not a palindrome number");
  }
}

// Palindrom(121)
// Palindrom(122)

// =========================================================================================================
// 4. Fibonacci Number
// FS => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55..........
// input n = 3 ==> Op :- 2
function Fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  console.log(arr);
  console.log(arr[n]);
}

// Fibonacci(5);

// =========================================================================================================
// 5. Valid anagram
// Ip :- s = "usdve" t = "sudev" ====> Op :- true
// Ip :- s = "car" t = "cat" ====> Op :- false
function anagram(s, t) {
  let sort1 = s.split("").sort().join("");
  let sort2 = t.split("").sort().join("");

  if (sort1 === sort2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// anagram("sudev", "devsu");
// anagram("car", "cat");

// =========================================================================================================
// 6. Two sum
// Ip :- num = [2, 7, 11, 15], target = 9 ====> Op :- [0, 1]
function twoSum(arr, n, t) {
  let a = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (arr[i] + arr[j] === t) {
        a = [i, j];
      }
    }
  }

  console.log(a);
}

// twoSum([2, 7, 10, 15], 4, 9);
// twoSum([2, 7, 10, 15], 4, 91);
// twoSum([3, 2, 3], 3, 5);

// =========================================================================================================
// 7. Best time to buy and sell stock
// You are give an array price where prices[i] is the price of given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy  one stock and
// choosing a diffrernt day in the future to sell that stock.
// Return the maximize profit, if you can not archize any profit return 0
// Ip :- prices = [7, 1, 5, 3, 6, 6] ====> Op :- 5
// Ip :- prices = [7, 6, 4, 3, 1] ====> Op :- 0
function BuyStock(arr, n) {
  let st = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] - arr[i] >= st) {
        st = arr[j] - arr[i];
      }
    }
  }

  console.log(st);
}

// BuyStock([7, 1, 5, 3, 6, 6], 6);
// BuyStock([7, 6, 4, 3, 1], 5);

// =========================================================================================================
// 8. Second largest number
function secondLarge(arr, n) {
  let large = arr.sort((a, b) => a - b);
  if (n <= 2) {
    console.log(-1);
  } else {
    console.log(large[n - 2]);
  }
}

// secondLarge([35, 1, 2, 29, 34], 5);
// secondLarge([21, 1], 2);

// =========================================================================================================
// 8. Rotate a array by k
// Ip :- [1, 2, 3, 4, 5, 6, 7] k =3 ====> Op :- [5, 6, 7, 1, 2, 3, 4]
function rotateK(arr, n, k) {
  if (n < k) {
    k %= n;
  }

  const rotate = arr.splice(n - k, n);
  arr.unshift(...rotate);

  console.log(arr);
}

// Time conplexity : O(n)

// rotateK([1, 2, 3, 4, 5, 6, 7], 7, 3);

// =========================================================================================================
// 9. Sort an array
// Ip :- [4, 2, 3, 1]  ====> [1, 2, 3, 4]
function Sort(arr, n, t) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (t === "d") {
        if (arr[j] > arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
      }
      if (t === "a") {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  console.log(arr);
}

// Sort([4, 2, 3, 1], 4, "d");
// Sort([4, 2, 3, 1], 4, "a");

// =========================================================================================================
// 10. Find duplicate elements in an array
// Ip :- [1, 2, 1, 3, 2, 4] ====> Op :- [1, 2]
function duplicate(arr, n) {
  let a = [];
  let set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j] && !set.has(arr[i])) {
        a.push(arr[i]);
        set.add(arr[i]);
        break;
      }
    }
  }
  console.log(a);
}
// duplicate([1, 2, 1, 3, 2, 4, 2, 2], 8);

// =========================================================================================================
// 10. Remove duplicate elements in an array
// Ip :- [1, 2, 1, 3, 2, 4] ====> Op :- [1, 2, 3, 4]
function removeDuplicate(arr, n) {
  let a = [];
  for (let i = 0; i < n; i++) {
    let unique = false;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        unique = true;
        break;
      }
    }
    if (!unique) {
      a.push(arr[i]);
    }
  }
  console.log(a.sort());
}
// removeDuplicate([1, 2, 1, 3, 2, 4, 2, 2], 8);

// =========================================================================================================
// 12. Count number of occurrences (or frequency) in a sorted array
// Ip :- [1, 1, 2, 2, 2, 2, 3] t=2 Op :- 4
function occurrences(arr, n, t) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (t === arr[i]) {
      res++;
    }
  }

  console.log(res);
}

// occurrences([1, 1, 2, 2, 2, 2, 3], 7, 2);
// occurrences([1, 1, 2, 2, 2, 2, 3], 7, 4);
// =========================================================================================================
// 13. Factorial
// Ip :- 5 ====> Op :- 120
function Factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  console.log(fact);
}

// Factorial(100);
// =========================================================================================================
// 14. Count pairs with given sum
// Ip :- [1, 5, 7, -1, 5] s = 6 ====> Op :- 5
// Ip : - [1, 4] s = 0 ====> Op :- -1
function pairOfSum(arr, n, s) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === s) {
        res++;
      }
    }
  }

  console.log(res);
}

pairOfSum([1, 5, 7, -1, 5], 5, 6);
pairOfSum([1, 1, 1, 1], 4, 2);
pairOfSum([10, 12, 10, 15, -1], 4, 125);

// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================
