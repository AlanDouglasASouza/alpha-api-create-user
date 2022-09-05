exports.staticController = (req, res) => {
    res.status(200).sendFile(__dirname.slice(0, -11) + "/public/index.html");
};
