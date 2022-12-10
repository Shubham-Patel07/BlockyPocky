const demo = artifacts.require("textUpload");

module.exports = function (deployer) {
    deployer.deploy(demo);
};