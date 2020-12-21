function solve(array) {
    let myArr = array;
    let users = {};
    let commands = myArr.shift();
    while (commands != 'Statistics') {
        let [command, ...args] = commands.split('->');
        switch (command) {
            case 'Add': {
                let username = args[0];
                if (users.hasOwnProperty(username)) {
                    console.log(`${username} is already registered`);
                } else {
                    users[username] = [];
                }
            } break;
            case 'Send': {
                [username, email] = args;
                users[username].push(email);
            } break;
            case 'Delete': {
                username = args[0];
                if (users.hasOwnProperty(username)) {
                    delete users[username];
                } else {
                    console.log(`${username} not found!`);
                }
            } break;
        }
        commands = myArr.shift();
    }
    let keys = Object.keys(users);
    console.log(`Users count: ${keys.length}`);
    if (keys.length > 0) {
        let sorted = Object.entries(users).sort((a, b) => {
            if (a[1].length != b[1].length) {
                return b[1].length - a[1].length;
            } else {
                return a[0].localeCompare(b[0]);
            }
        })
        for (const username of sorted) {
            console.log(username[0])
            for (const email of username[1]) {
                console.log(` - ${email}`);
            }
        }
    }
}
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);
console.log('---------------');
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
]);
console.log('---------------');

solve([
    'Add->Annie',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Annie->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Annie->Another random test mail',
    'Delete->Annie',
    'Delete->George',
    'Statistics'
]
);