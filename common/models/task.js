module.exports = function (Task) {
  Task.beforeRemote('create', function (ctx, modelInstance, next) {
    // Fill 'order' property when creating Task.
    if (!ctx.req.body.order) {
      ctx.req.body.order = new Date().getTime();
    }
    next();
  });
};
