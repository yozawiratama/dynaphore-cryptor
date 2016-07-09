var crypto = require('crypto');

module.exports = function (algo, password) {
    var self = this;
    if (algo)
        self.algo = algo;
    else self.algo = 'aes-256-cbc';
    if (password)
        self.password = password;
    else self.password = '';
    self.encrypt = function (text) {
        var cipher = crypto.createCipher(self.algo, self.password);
        var crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex');
        return new Buffer(crypted).toString('base64');
    };

    self.decrypt = function (text) {
        text = new Buffer(text, 'base64').toString('ascii');
        var dec = '';
        var decipher = crypto.createDecipher(self.algo, self.password)
        try {
            dec = decipher.update(text, 'hex', 'utf8');
            dec += decipher.final('utf8');
        } catch (e) {
            log.error('decrypt failed for text:' + text);
        } finally {
            return dec;
        }
    }
}