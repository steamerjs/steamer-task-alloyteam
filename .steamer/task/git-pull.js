

module.exports = function(ctx, next) {
    ctx.git(process.cwd())
        .pull('origin', 'master', (err) => {
            err && ctx.error(err);
            !err && next();
        });
};