const a = 23;
const b = "test";
const c = false;

// 100 second duration to run a function

const longFunction = () => {
  // it takes 100 second to run
};

// console.log("c", c);

// alert("This will pause everything until i press ok");
// console.log("a", a);
// console.log("b", b);

// Promise - it is the container that houses the future value of an asynchronous call

const num = 90;
const str = " this is the string";

setTimeout(() => {
  // went to the background which will later be sent to the callback queue
  console.log("this is set time out ");
}, 5000);

// console.log(num, str); // running on call stack

const api = [
  {
    name: "Thomas ",
    role: "student",
  },
  {
    name: "Ezekiel ",
    role: "mentor",
  },
  {
    name: "Favor ",
    role: "student",
  },
];

const getFavoriteTv = () => {
  setTimeout(() => {
    console.log("timer elapsed");
  }, 2000);

  return api;
};

// getFavoriteTv();

const getMockData = async () => {
  const res = await getFavoriteTv();

  console.log(res, "res");
};

// getMockData();

// call stack, background, callback queue, microtask queue

setTimeout(() => {
  console.log("timer elapsed");
}, 0);

const promiseFn = () => Promise.resolve("This resolves now");

// Promise.all()
// Promise.race()
// Promise.reject()
// Promise.any()
// Promise.allSettled()

console.log(promiseFn());

console.log("The end of the program");
