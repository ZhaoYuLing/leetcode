/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    // 76ms
    return new Set(emails.map(email => `${/(.*?)\+/.exec(email.split('@')[0].replace(/\./g,''))[1]}@${email.split('@')[1]}`)).size
    //88ms
    // return new Set(emails.map(email => `${email.split('@')[0].split('+')[0].split('.').join('')}@${email.split('@')[1]}`)).size
    
};
