function solve(array){
    let myArr = array;
    let username = myArr.shift();
    let command = myArr.shift();
    while(command != 'Sign up'){
        let [cmd, ...params] = command.split(' ');
        switch(cmd){
            case 'Case':{
                let param = params[0];
                if(param === 'lower'){
                    username = username.toLocaleLowerCase();
                    console.log(username);
                }
                if(param === 'upper'){
                    username = username.toLocaleUpperCase();
                    console.log(username);
                }
            }break;
            case 'Reverse':{
                let [startIndex, endIndex] = params;
                startIndex = Number(startIndex);
                endIndex = Number(endIndex);
                let substr = '';
                let reversed = '';
                if(startIndex >= 0 && endIndex < username.length){
                    substr = username.substring(startIndex, endIndex + 1);
                    for(let i = substr.length - 1; i >= 0; i--){
                        reversed += substr[i];
                    }
                    console.log(reversed);
                }
            }break;
            case 'Cut':{
                param = params[0];
                let startIndex = username.indexOf(param);
                if(startIndex != -1) {
                    username = username.substring(0, startIndex) + username.substring(startIndex + param.length);
                    console.log(username);
                } else {
                    console.log(`The word ${username} doesn't contain ${param}.`);
                }
            }break;
            case 'Replace':{
                param = params[0];
                let pattern = new RegExp(param, 'g');
                if(username.includes(param)) {
                    username = username.replace(pattern, '*');
                    console.log(username);
                }
            }break;
            case 'Check':{
                param = params[0];
                if(username.includes(param)){
                    console.log('Valid');
                } else {
                    console.log(`Your username must contain ${param}.`);
                }
            }break;
        }
        command = myArr.shift();

    }
}
solve([ 'Peter', 'Case lower', 'Cut ES', 'Check @', 'Sign up' ]);
solve([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]);