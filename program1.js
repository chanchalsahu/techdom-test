
module.exports = { isValid };

var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (const char of s) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            const lastOpenBracket = stack.pop();
            if (!lastOpenBracket || brackets[lastOpenBracket] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false


