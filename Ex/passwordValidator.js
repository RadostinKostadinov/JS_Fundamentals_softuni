function isValidPassword(password) {
    pass = password.toString();

    isLengthValid = isLengthBetweenXAndY(pass, 6, 10);
    isOnlyLettersAndNumbers = isOnlyLetterAndNumbers(pass);
    isContainsAtLeastTwoDigits = IsStringContainsAtLeastXDigits(pass, 2);

    if (isLengthValid && isOnlyLettersAndNumbers && isContainsAtLeastTwoDigits) {
        console.log(`Password is valid`);
    } else {
        if (!isLengthValid) console.log(`Password must be between 6 and 10 characters`);
        if (!isOnlyLettersAndNumbers) console.log(`Password must consist only of letters and digits`);
        if (!isContainsAtLeastTwoDigits) console.log(`Password must have at least 2 digits`);
    }



    //=============functions declaration===========
    function isLengthBetweenXAndY(string, x, y) {
        let length = string.length;
        let isValidLength = false;
        if (x <= length && length <= y) {
            isValidLength = true;
        } else {
            isValidLength = false;
        }
        return isValidLength;
    }

    function isOnlyLetterAndNumbers(string) {
        let target = string;
        isValid = true;
        for (let i = 0; i < target.length; i++) {
            let char = target.charCodeAt(i);
            if (48 <= char && char <= 57 ||
                65 <= char && char <= 90 ||
                97 <= char && char <= 122) {

            } else {
                isValid = false;
                return;
            }
        }
        return isValid;
    }

    function IsStringContainsAtLeastXDigits(string, digits) {
        let target = string;
        let numOfDigits = 0;
        let isContains = false;
        for (let i = 0; i < target.length; i++) {
            let char = target.charCodeAt(i);
            if (48 <= char && char <= 57) {
                numOfDigits++;
            }
        }
        if (numOfDigits >= digits) isContains = true;
        return isContains;
    }
}

isValidPassword('Pa$s$s');