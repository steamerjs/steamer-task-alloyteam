

module.exports = function(ctx, next) {
    ctx.git(process.cwd())
        .commit('update', (err) => {
            err && ctx.error(err);
            !err && next();
        });
};