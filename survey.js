const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("What's your favorite meal (eg: dinner, brunch, etc.)? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.close();
          console.log(`${answer} loves to go ${answer2} while listening to ${answer3}! I hope you like ${answer5}, because ${answer4} is on ${answer}. If this sounds like a good time to you, then please swipe right on ${answer} today!`);
        })
      });
    });
  });
});