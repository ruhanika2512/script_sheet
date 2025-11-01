let num = 324;
let res = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    res++;
}

console.log(res);