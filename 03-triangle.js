for (let i = 1; i <= 7; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '#';
  }
  //console.log(line); not working in code runner
  prompt(line); // Use prompt to display the line; works in browser environment
  
}
