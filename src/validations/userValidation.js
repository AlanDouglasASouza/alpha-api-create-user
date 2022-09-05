exports.userValidations = (body) => {
    if (!body) {
        throw "Null request body";
    }

    if (!body.name) {
        throw "Invalid name field";
    }

    if (!body.email) {
        throw "Invalid email field";
    }

    return true;
};
