
const https = require('https');

const url = "https://teamtreehouse.com/danieldeutsch3.json";

https.get(url, (res) => {
  console.dir(res.statusCode);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
});


function printMessage(userName, badge, points) {
    const message= `${userName} has a ${badge} badge and ${points} points!`;
    console.log(message);
}
printMessage("Daniel", "JavaScript", 100);