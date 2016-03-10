var randomNumber = function(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};

assignSkillSet = "";

function skillSet(){
  var oneToThree = randomNumber(1,3);
  if (oneToThree == 1){
    assignSkillSet = "Front End";
  }
  else if (oneToThree == 2){
    assignSkillSet = "Client Side Logic";
  }
  else {
    assignSkillSet = "Serverside Logic";
  }
  return assignSkillSet;
}
// console.log(skillSet());
module.exports = skillSet();
