function runoff(voters){
    console.log("iteration starts");
    if(voters[0].length < 1) return undefined;
    //Object to count votes
    let voteForEach = {};
    let voteForEachModerated = [];
    let voteCounts;
    let candidates = new Set();
    let losers = [];
    let loserNames = [];
    //fill set of candidates
    for(let _voter of voters) {
      //candidates.add(voter[0]);
      for(let _candidate of _voter) {
        candidates.add(_candidate);
      }
    }
    console.log(candidates, "candidates at the begining")
    //Loop through firt selected candidates and mark to Object
    for(let i = 0; i < voters.length; i++) {
      if(voteForEach.hasOwnProperty(voters[i][0])) {
        voteForEach[voters[i][0]] += 1;
      } else {
        voteForEach[voters[i][0]] = 1;
      }
      
      if(voteForEach[voters[i][0]] > (voters.length / 2)) return voters[i][0];
    }
    console.log(voteForEach);
    //Convert Object to Array with tuples (key - value)
    voteForEachModerated = Object.entries(voteForEach);
    //filter less successful candidates
    voteCounts = Object.values(voteForEach);
    losers = voteForEachModerated.filter(candidate => candidate[1] === Math.min(...voteCounts));
    loserNames = losers.map(loser => loser[0]);
    console.log(loserNames, "loserNames");
    console.log(voters, "before  filtering");
    if(loserNames.length === Array.from(candidates).length) return undefined;
    
    //console.log(voters, "voters before filtering");
    for(let voter of voters) {
      console.log("for each voter");
  
      Array.from(candidates).forEach(_candidate => {
        if(Object.keys(voteForEach).indexOf(_candidate) < 0) {
          let index = voter.indexOf(_candidate);
          voter.splice(index, 1);
          console.log(voter, _candidate, "filter must be executed");
        } else {
          console.log("no filtering needed");
        }
      });
  
      if(loserNames.indexOf(voter[0]) >= 0) {
        voter.shift();
        if(voter.length < 1) {
          let index = voters.indexOf(voter);
          voters.splice(index, 1);
        }
      }
    };
    
    console.log(voters, "voters filtered");
    return runoff(voters);
  }