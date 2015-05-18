/**
 * For each our own defined models, handle 'created' and 'lastUpdated' automatically.
 * Refer to: http://docs.strongloop.com/display/public/LB/Operation+hooks
 * Created by Ting on 2015/5/18.
 */
module.exports = function (app) {
  var builtInModels = ['User', 'Email', 'ACL', 'AccessToken', 'Role', 'RoleMapping'];
  app.models().forEach(function (Model) {
    if (builtInModels.indexOf(Model.modelName) == -1) {
      var myModel = app.models[Model.modelName];
      myModel.observe('before save', function updateTimestamp(ctx, next) {
        var now = new Date();
        if (ctx.instance) {
          ctx.instance.created = now;
          ctx.instance.lastUpdated = now;
        } else {
          ctx.data.lastUpdated = now;
        }
        next();
      });
    }
  });
};
