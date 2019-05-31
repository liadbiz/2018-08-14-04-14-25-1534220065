module.exports = function main(s) {
  // array for constructing LED pattern
  top = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."];
  middle = ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"];
  bottom = ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"];
  
  result_top = [];
  result_middle = [];
  result_bottom = [];
  // get number
  for(var i = 0;i < s.length; i++){
    var n = parseInt(s[i]);
    result_top.push(top[n]);
    result_middle.push(middle[n]);
    result_bottom.push(bottom[n]);
  }
  return result_top.join(' ') + '\n' + result_middle.join(' ') + '\n' + result_bottom.join(' ') + '\n';
};
