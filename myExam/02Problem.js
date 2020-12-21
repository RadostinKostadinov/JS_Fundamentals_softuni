function solve(array) {
    let myArr = array;
    let numberOfLines = Number(myArr.shift());
    let pattern = /(.+)>(?<numbers>[\d]{3})\|(?<lowercases>[a-z]{3})\|(?<uppercase>[A-Z]{3})\|(?<symbols>[^\<\>]{3})<\1/;
    for(let i = 0; i < numberOfLines; i++){
        let text = myArr.shift();
        if(pattern.test(text)) {
            let match = text.match(pattern);
            console.log(`Password: ${match.groups.numbers}${match.groups.lowercases}${match.groups.uppercase}${match.groups.symbols}`);
        } else {
            console.log('Try another password!');
        }
    }
}
solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
]
);
console.log('------------------------------')
solve(
    [
        '5',
        'aa>111|mqu|BAU|mqu<aa',
        '()>111!aaa!AAA!^&*<()',
        'o>088|abc|AAA|***<o',
        'asd>asd|asd|ASD|asd<asd',
        '*>088|zzzz|ZzZ|123<*'
      ]
);