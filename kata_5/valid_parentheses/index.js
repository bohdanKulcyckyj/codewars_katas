function validParentheses(parens){
    let indent = 0;
    
    for (let i = 0 ; i < parens.length && indent >= 0; i++) {
      indent += (parens[i] == '(') ? 1 : -1;    
    }
    
    return (indent == 0);
  }