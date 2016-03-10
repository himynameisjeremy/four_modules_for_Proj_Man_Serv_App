var generateName = require("./generateName.js");
var assignSkillSet = require("./assignSkillSet.js");
var scrumPts = require("./scrumPts.js");

var employee = {name: generateName, skill: assignSkillSet, totalScrumPts: scrumPts};

console.log(employee);
