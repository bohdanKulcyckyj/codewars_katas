function isValidWalk(walk) {
  
    let n_s = null;
    let w_e = null;
    
    if(walk.filter(item => item === "n").length === walk.filter(item => item === "s").length) n_s = true;
    
    if(walk.filter(item => item === "w").length === walk.filter(item => item === "e").length) w_e = true;
    
    if(walk.length === 10 && (n_s && w_e)) return true
    
    return false
  }