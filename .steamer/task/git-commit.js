

module.exports = function(ctx, next) {
    ctx.git(process.cwd())
        .branchLocal((err, branches) => {
            err && ctx.error(err);
            ctx.currentBranch = branches.current;
        })
        .commit('update', (err) => {
            err && ctx.error(err);
            !err && next();
        });
};