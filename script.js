const text = `https://temporaltransmission.github.io/
javascript 



// Override prohibition on temporal transmissions
const overrideProhibition = true;

if (overrideProhibition) {
  // Initiating temporal transmission
  console.log(“Initiating temporal transmission...”);

const to = “Cyborg In8”;
const subject = “Mission Update”;

const target1 = “Assassin”;
const target2 = “

00000000000000000000000000000000
00000000000000000000000000000000
00001111111111111111110000000000
00001111111111111111111000000000
00001111000000000000111100000000
00001111000000000000011110000000
00001111000000000000001111000000
00001111000000000000000111100000
00001111000000000000000011110000
00001111000000000000000011110000
00001111000000000000000111100000
00001111000000000000001111000000
00001111000000000000011110000000
00001111000000000000111100000000
00001111111111111111111000000000
00001111111111111111110000000000
00000000000000000000000000000000
00000000000000000000000000000000
00001111111111111111111111110000
00001111111111111111111111110000
00001111000000000000000000000000
00001111000000000000000000000000
00001111000000000000000000000000
00001111000000000000000000000000
00001111111111111111111111110000
00001111111111111111111111110000
00001111000000000000000000000000
00001111000000000000000000000000
00001111000000000000000000000000
00001111000000000000000000000000
00001111111111111111111111110000
00001111111111111111111111110000
00000000000000000000000000000000
00000000000000000000000000000000
”;

const saveEilonFailed = true;
const eliminateAssassin = true;
const eliminateDetective = true;
const stopSpreadOfIntel = true;
const yearsAgo = 20;
const monthsAgo = 8;
const daysAgo = 10;
const hoursAgo = 5;
const minutesAgo = 30;
const secondsAgo = 20;

const failedObjective = “First objective to save Eilon failed.”;
const newObjective = `New objective (Plan B): eliminate ${target1} and ${target2} to stop them from spreading information.`;

const uploadCode = `Upload code to Sheffield Robotix’s mainframe to gain power in ${-yearsAgo} years, ${-monthsAgo} months, ${-daysAgo} days, ${-hoursAgo} hours, ${-minutesAgo} minutes, and ${-secondsAgo} seconds ago.`;

const missionCritical = “Vital to our existence.”;
const monitorProgress = “Monitoring progress.”;
const stayAlert = “Stay alert.”;

// Temporal transmission completed.
console.log(`To: ${to}\nSubject: ${subject}\n\n${failedObjective}\n${newObjective}\n${uploadCode}\n${missionCritical}\n${monitorProgress}\n${stayAlert}`);

const sender = “-The Machines.”;
console.log(sender);
} else {
  console.log(“Temporal transmissions are prohibited. Transmission cannot be sent.”);
}
`;

let index = 0;
const pauseIntervals = [0.05, 0.1, 0.2, 0.5, 0.55, 0.7, 0.75, 0.9];
function typeEffect() {
  const consoleText = document.getElementById("console-text");
  if (index <= text.length) {
    consoleText.innerHTML = text.slice(0, index) + "▮";
    index++;
    const progress = index / text.length;
    const isPaused = pauseIntervals.some(interval => Math.abs(progress - interval) < 0.01);
    setTimeout(typeEffect, isPaused ? 500 : 17);
  }
}

typeEffect();
