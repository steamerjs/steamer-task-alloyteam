

module.exports = function(ctx, next) {
    let prompt = ctx.inquirer.createPromptModule();
    prompt([{
        type: 'text',
        message: 'Input your git commit  message',
        name: 'msg',
        default: 'update',
    }]).then((answers) => {
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