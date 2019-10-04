export const validate = (val, rules) => {
    let isValid = true;
    for (let rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(val);
                break;
            case 'notEmpty':
                isValid = isValid && notEmptyValidator(val);
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
};

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        val
    );
};

const notEmptyValidator = val => {
    return /^\d+$/.test(val) || val.trim() !== '';
};