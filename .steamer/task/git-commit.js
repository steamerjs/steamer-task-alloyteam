

module.exports = function(ctx, next) {
    ctx.git(process.cwd())
        .branchLocal(() => {
            console.log(arguments);  
        })
        .commit('update', (err) => {
            err && ctx.error(err);
            !err && next();
        });
};