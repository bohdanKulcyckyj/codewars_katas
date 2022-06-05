// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

//activity rank === user rank => 3 points
// activity rank 1 < user rank 2 => 1 point
// activity rank -1 < user rank 2 => 0 points
// activity rank > user rank => 10 * diff * diff 
//diff is difference between ranks
let levels = [];
let level = -8;
while(level < 9) {
  if(level !== 0) {
    levels.push(level);
  }
  level++;
}

class User {
  constructor(rank = -8, progress = 0) {
    this.rank = rank;
    this.progress = progress;
  }
  incProgress(actRank) {
    if(levels.indexOf(actRank) === -1) throw new TypeError("No such level");
    
    let actRankIndex = levels.indexOf(actRank);
    let rankIndex = levels.indexOf(this.rank);
    
    if(this.rank === 8) this.progress = 0;
    
    if(this.rank !== 8) {
      if(actRankIndex < rankIndex - 1) {
        this.progress += 0;
      } else if(actRankIndex == rankIndex - 1) {
        this.progress += 1;
      } else if(actRankIndex == rankIndex) {
        this.progress += 3;
      } else {
        let diff = actRankIndex - rankIndex;
        this.progress += 10 * diff * diff;
      }
    }
    
    this.levelUp();
  }
  levelUp() {
    while(this.progress >= 100) {
      let currentIndex = levels.indexOf(this.rank);
      if(this.rank < 8) {
        this.rank = levels[currentIndex + 1];
        this.progress -= 100;
      }
    }
    if(this.rank === 8) this.progress = 0;
  }
}