const spinner = function(char, delay) {
  setTimeout(() => process.stdout.write(`\r${char}   `), delay);
};
spinner('|', 100);
spinner('/', 300);
spinner('-', 500);
spinner('\\', 700);
spinner('|', 900);
spinner('/', 1100);
spinner('-', 1300);
spinner('\\', 1500);
spinner('|', 1700);