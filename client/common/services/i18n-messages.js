/**
 * Created by Ting on 2015/5/11.
 */
angular.module('i18nMessages', [])
  .value('i18nMessages', {
    'app.name': 'FreeCoder',
    'common.error.unknown': 'Unknown error.',
    'common.error.occurred': 'Error occurred: {{msg}}',
    'user.register.success': 'Thanks for sign up, and email is on its way with a link to activate your account, please check it.',
    'user.profile.changePassword.success': 'Password was changed successfully.',
    'user.reset.password.email.sent': 'An email is on its way with a link to reset your password. But hurry, it expires in 15 minutes.',
    'user.reset.password.link.error': 'The request link is not valid, please open link via received email.',
    'user.reset.password.not.same': 'Passwords are not same.',
    'user.reset.password.success': 'Password was reset, will jump to login page in 3 seconds.',
    'todo.page.header': 'TODO',
    'todo.new.placeholder': 'Type your to-do items, tasks, questions, memos... anything here.',
    'todo.list.no.tasks': 'No tasks, try to create your first task now.',
    'todo.filter.display.completed.tasks': 'Show completed tasks',
    'todo.today': 'Today',
    'todo.button.delete': 'Delete',
    'todo.button.pomodoro': 'Start Pomodoro',
    'pomodoro.page.header': 'Pomodoro',
    'pomodoro.error.exist.inprogress.pomodoro': 'There is already pomodoro running, cannot start another one.',
    'pomodoro.directive.no.active': 'There is no active pomodoro, let\'s start one from task list.',
    'pomodoro.directive.no.task': 'Related task information unavailable.'
  })
  .factory('messagesContext', function ($interpolate, i18nMessages) {
    var handleNotFound = function (msg, msgKey) {
      return msg || '?' + msgKey + '?';
    };

    return {
      get: function (msgKey, interpolateParams) {
        var msg = i18nMessages[msgKey];
        if (msg) {
          return $interpolate(msg)(interpolateParams);
        } else {
          return handleNotFound(msg, msgKey);
        }
      }
    };
  });
