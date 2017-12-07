

module.exports = function(ctx, next) {
    ctx.git(process.cwd())
        .pull((err) => {
            err && ctx.error(err);
            !err && next();
        });
};