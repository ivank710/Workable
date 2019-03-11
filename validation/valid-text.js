//custom func to check whether a given string consists of valid input

const validText = str => {
  return typeof str === 'string' && str.trim().length > 0;    //trim takes off spaces at the end of str
};

module.exports = validText;