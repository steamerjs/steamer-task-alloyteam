const path = require('path');

module.exports = function(ctx, next) {

    let jbConfig = require('../steamer-plugin-jb');
    let questions = [
        {
            type: 'text',
            message: 'Input your git commit  message',
            name: 'msg',
            default: 'update',
        }
    ];

    if (!jbConfig.config.git.master) {
        questions.push({
            type: 'text',
            message: 'Input your JB RID',
            name: 'jb',
            default: '',
        });
    }

    let prompt = ctx.inquirer.createPromptModule();
    prompt(questions).then((answers) => {

        jbConfig.config.git.master = answers.jb;
        ctx.fs.writeFileSync(path.join(process.cwd(), '.steamer/steamer-plugin-jb.js'), `module.exports = ${JSON.stringify(jbConfig, null, 4)};`, 'utf-8');

        ctx.git(process.cwd())
            .branchLocal((err, branches) => {
                err && ctx.error(err);
                ctx.currentBranch = branches.current;
            })
            .commit(`${answers.msg}`, (err) => {
                err && ctx.error(err);
                !err && next();
            });
    });
};