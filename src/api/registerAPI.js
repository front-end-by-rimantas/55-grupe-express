import { users } from "../data/users.js";
import { isValisPassword } from "../lib/isValidPassword.js";
import { isValidUsername } from "../lib/isValidUsername.js";

export function registerAPI(req, res) {
    const [errUser, msgUser] = isValidUsername(req.body.username);
    if (errUser) {
        return res.send(msgUser);
    }

    const [errPass, msgPass] = isValisPassword(req.body.password);
    if (errPass) {
        return res.send(msgPass);
    }

    // tikriname, ar nera dublikatu
    for (const user of users) {
        if (user.username === req.body.username) {
            return res.send('Sorry, toks username jau uzimtas :(');
        }
    }

    // "registruojame"
    users.push(req.body);

    return res.send('Tu esi, nr:' + users.length);
}