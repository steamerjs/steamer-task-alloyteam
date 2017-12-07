

module.exports = function(ctx, next) {
    ctx.git(process.cwd())
        .branchLocal((err, branches) => {
            err && ctx.error(err);
            console.log(branches);  
        })
        .commit('update', (err) => {
            err && ctx.error(err);
            !err && next();
        });
};