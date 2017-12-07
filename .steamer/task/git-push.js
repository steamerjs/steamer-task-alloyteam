

module.exports = function(ctx, next) {
    ctx.git(process.cwd())
        .push('origin', 'master', (err) => {
            err && ctx.error(err);
            !err && next();
        });
};