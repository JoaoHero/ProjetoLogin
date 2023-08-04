function Email(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function Password(password) {
    if (password.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    if (!/[a-z]/.test(password)) {
        return false;
    }

    if (!/\d/.test(password)) {
        return false;
    }
    
    return true;
};

module.exports = {
    Email,
    Password
}