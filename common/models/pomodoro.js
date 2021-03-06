var loopback = require('loopback');
var assert = require('assert');
var debug = require('debug')('freecoder:pomodoro');

module.exports = function (Pomodoro) {
  var STATUS = {
    'INPROGRESS': 'inProgress',
    'SKIPPED': 'skipped',
    'FINISHED': 'finished'
  };
  var TYPE = {
    'WORK': 'work',
    'BREAK': 'break'
  };
  Pomodoro.beforeRemote('create', function (ctx, modelInstance, next) {
    var accessToken = ctx.req.accessToken;
    var reqBody = ctx.req.body;
    debug('before create Pomodoro.');
    debug('.. data: ', reqBody);
    debug('.. accessToken: ', accessToken);

    if (!accessToken) {
      next(getAuthorizationError());
    }

    // always set memberId according to current access token.
    reqBody.memberId = accessToken.userId;

    // Fill default values if not set.
    if (!reqBody.duration) {
      if (reqBody.type == TYPE.WORK) {
        reqBody.duration = 25 * 60 * 1000; // default is 25 minutes, TODO: read this from user config.
      }
      if (reqBody.type == TYPE.BREAK) {
        reqBody.duration = 5 * 60 * 1000; // default is 5 minutes, TODO: read this from user config.
      }
    }
    if (!reqBody.status) {
      reqBody.status = STATUS.INPROGRESS;
    }
    next();
  });

  Pomodoro.remoteMethod('skipPomodoro', {
      description: 'Skip a in progress pomodoro.',
      accepts: [
        {arg: 'id', type: 'string', required: true}
      ],
      http: {verb: 'put', path: '/:id/status/skipped'}
    }
  );

  Pomodoro.remoteMethod('finishPomodoro', {
      description: 'Finish a in progress pomodoro.',
      accepts: [
        {arg: 'id', type: 'string', required: true}
      ],
      http: {verb: 'put', path: '/:id/status/finished'}
    }
  );

  Pomodoro.skipPomodoro = function (id, cb) {
    Pomodoro.findById(id, function (err, pomodoro) {
      if (err)
        cb(err);

      checkPomodoroInstance(pomodoro, cb);
      checkPomodoroStatus(pomodoro, cb);
      debug('Setting pomodoro status to "skipped" of id:', id);
      pomodoro.updateAttribute('status', STATUS.SKIPPED, function (err, inst) {
        if (err)
          cb(err);
        debug('..success');
        cb(null, inst);
      });
    });
  };

  Pomodoro.finishPomodoro = function (id, cb) {
    Pomodoro.findById(id, function (err, pomodoro) {
      if (err)
        cb(err);

      checkPomodoroInstance(pomodoro, cb);
      checkPomodoroStatus(pomodoro, cb);
      debug('Setting pomodoro status to "finished" of id:', id);
      pomodoro.updateAttribute('status', STATUS.FINISHED, function (err, inst) {
        if (err)
          cb(err);
        debug('..success');
        cb(null, inst);
      });
    });
  };

  var checkPomodoroInstance = function (pomodoro, cb) {
    if (!pomodoro) {
      var e = new Error('Not found');
      e.status = e.statusCode = 404;
      e.code = 'NOT_FOUND';
      cb(e);
    }
  };

  var checkPomodoroStatus = function (pomodoro, cb) {
    if (pomodoro.status != STATUS.INPROGRESS) {
      var e = new Error('Incorrect status of Pomodoro');
      e.status = e.statusCode = 400;
      e.code = 'BAD_REQUEST';
      cb(e);
    }
  };

  var getAuthorizationError = function () {
    var e = new Error('Authorization Required');
    e.status = e.statusCode = 401;
    e.code = 'AUTHORIZATION_REQUIRED';
    return e;
  };
};
