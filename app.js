
const https = require('https');

const url = "https://teamtreehouse.com/danieldeutsch3.json";

https.get(url, (res) => {
    console.dir(res.statusCode);
    let body="";
    res.on('data', (d) => {
        body += d.toString();
    }).on('error', (e) => {
        console.error(e);
    }).on('end', () => {
    const profile = JSON.parse(body);
    printMessage(profile.name, profile.badges.length, profile.points.JavaScript);
    });
});


function printMessage(userName, badge, points) {
    const message= `${userName} has ${badge} badges and ${points} points!`;
    console.log(message);
}