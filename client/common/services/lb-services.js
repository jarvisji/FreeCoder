(function (window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  /**
   * @ngdoc overview
   * @name lbServices
   * @module
   * @description
   *
   * The `lbServices` module provides services for interacting with
   * the models exposed by the LoopBack server via the REST API.
   *
   */
  var module = angular.module("lbServices", ['ngResource']);

  /**
   * @ngdoc object
   * @name lbServices.Member
   * @header lbServices.Member
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Member` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "Member",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Members/:id",
        {'id': '@id'},
        {

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$__findById__accessTokens
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Find a related item by id for accessTokens.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for accessTokens
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "prototype$__findById__accessTokens": {
            url: urlBase + "/Members/:id/accessTokens/:fk",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$__destroyById__accessTokens
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Delete a related item by id for accessTokens.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for accessTokens
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "prototype$__destroyById__accessTokens": {
            url: urlBase + "/Members/:id/accessTokens/:fk",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$__updateById__accessTokens
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Update a related item by id for accessTokens.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `fk` – `{*}` - Foreign key for accessTokens
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "prototype$__updateById__accessTokens": {
            url: urlBase + "/Members/:id/accessTokens/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Member.tasks.findById() instead.
          "prototype$__findById__tasks": {
            url: urlBase + "/Members/:id/tasks/:fk",
            method: "GET"
          },

          // INTERNAL. Use Member.tasks.destroyById() instead.
          "prototype$__destroyById__tasks": {
            url: urlBase + "/Members/:id/tasks/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Member.tasks.updateById() instead.
          "prototype$__updateById__tasks": {
            url: urlBase + "/Members/:id/tasks/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Member.pomodoros.findById() instead.
          "prototype$__findById__pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/:fk",
            method: "GET"
          },

          // INTERNAL. Use Member.pomodoros.destroyById() instead.
          "prototype$__destroyById__pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Member.pomodoros.updateById() instead.
          "prototype$__updateById__pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/:fk",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$__get__accessTokens
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Queries accessTokens of Member.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `filter` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "prototype$__get__accessTokens": {
            isArray: true,
            url: urlBase + "/Members/:id/accessTokens",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$__create__accessTokens
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Creates a new instance in accessTokens of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "prototype$__create__accessTokens": {
            url: urlBase + "/Members/:id/accessTokens",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$__delete__accessTokens
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Deletes all accessTokens of this model.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "prototype$__delete__accessTokens": {
            url: urlBase + "/Members/:id/accessTokens",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$__count__accessTokens
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Counts accessTokens of Member.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "prototype$__count__accessTokens": {
            url: urlBase + "/Members/:id/accessTokens/count",
            method: "GET"
          },

          // INTERNAL. Use Member.tasks() instead.
          "prototype$__get__tasks": {
            isArray: true,
            url: urlBase + "/Members/:id/tasks",
            method: "GET"
          },

          // INTERNAL. Use Member.tasks.create() instead.
          "prototype$__create__tasks": {
            url: urlBase + "/Members/:id/tasks",
            method: "POST"
          },

          // INTERNAL. Use Member.tasks.destroyAll() instead.
          "prototype$__delete__tasks": {
            url: urlBase + "/Members/:id/tasks",
            method: "DELETE"
          },

          // INTERNAL. Use Member.tasks.count() instead.
          "prototype$__count__tasks": {
            url: urlBase + "/Members/:id/tasks/count",
            method: "GET"
          },

          // INTERNAL. Use Member.pomodoros() instead.
          "prototype$__get__pomodoros": {
            isArray: true,
            url: urlBase + "/Members/:id/pomodoros",
            method: "GET"
          },

          // INTERNAL. Use Member.pomodoros.create() instead.
          "prototype$__create__pomodoros": {
            url: urlBase + "/Members/:id/pomodoros",
            method: "POST"
          },

          // INTERNAL. Use Member.pomodoros.destroyAll() instead.
          "prototype$__delete__pomodoros": {
            url: urlBase + "/Members/:id/pomodoros",
            method: "DELETE"
          },

          // INTERNAL. Use Member.pomodoros.count() instead.
          "prototype$__count__pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#create
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Members",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#upsert
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Members",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#exists
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Members/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#findById
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Members/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#find
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Members",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#findOne
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Members/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#updateAll
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/Members/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#deleteById
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/Members/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#count
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Members/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#prototype$updateAttributes
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - User id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Member` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Members/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#login
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Login a user with username/email and password.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
           *   Default value: `user`.
           *
           *  - `rememberMe` - `boolean` - Whether the authentication credentials
           *     should be remembered in localStorage across app/browser restarts.
           *     Default: `true`.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * The response body contains properties of the AccessToken created on login.
           * Depending on the value of `include` parameter, the body may contain additional properties:
           *
           *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
           *
           *
           */
          "login": {
            params: {
              include: "user"
          },
            interceptor: {
              response: function (response) {
                var accessToken = response.data;
                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                LoopBackAuth.save();
                return response.resource;
              }
          },
            url: urlBase + "/Members/login",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#logout
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Logout a user with access token
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "logout": {
            interceptor: {
              response: function (response) {
                LoopBackAuth.clearUser();
                LoopBackAuth.clearStorage();
                return response.resource;
              }
          },
            url: urlBase + "/Members/logout",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#confirm
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Confirm a user registration with email verification token
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `uid` – `{string}` -
           *
           *  - `token` – `{string}` -
           *
           *  - `redirect` – `{string=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "confirm": {
            url: urlBase + "/Members/confirm",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#resetPassword
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Reset password for a user with email
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "resetPassword": {
            url: urlBase + "/Members/reset",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#changePassword
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Change password by verify current password.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `access_token` – `{string}` -
           *
           *  - `options` – `{object}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `` – `{undefined=}` -
           */
          "changePassword": {
            url: urlBase + "/Members/changePassword",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#resetPasswordConfirm
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Confirm a user reset password with email verification token
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `uid` – `{string}` -
           *
           *  - `token` – `{string}` -
           *
           *  - `options` – `{object}` -
           *
           *  - `redirect` – `{string=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "resetPasswordConfirm": {
            url: urlBase + "/Members/resetConfirm",
            method: "POST"
          },

          // INTERNAL. Use Task.member() instead.
          "::get::Task::member": {
            url: urlBase + "/Tasks/:id/member",
            method: "GET"
          },

          // INTERNAL. Use Pomodoro.member() instead.
          "::get::Pomodoro::member": {
            url: urlBase + "/Pomodoros/:id/member",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Member#getCurrent
           * @methodOf lbServices.Member
           *
           * @description
           *
           * Get data of the currently logged user. Fail with HTTP result 401
           * when there is no user logged in.
           *
           * @param {function(Object,Object)=} successCb
           *    Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *    `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           */
          "getCurrent": {
            url: urlBase + "/Members" + "/:id",
            method: "GET",
            params: {
              id: function () {
                var id = LoopBackAuth.currentUserId;
                if (id == null) id = '__anonymous__';
                return id;
            },
            },
            interceptor: {
              response: function (response) {
                LoopBackAuth.currentUserData = response.data;
                return response.resource;
              }
            },
            __isGetCurrentUser__: true
        }
        }
      );


      /**
       * @ngdoc method
       * @name lbServices.Member#updateOrCreate
       * @methodOf lbServices.Member
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Member` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.Member#update
       * @methodOf lbServices.Member
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.Member#destroyById
       * @methodOf lbServices.Member
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.Member#removeById
       * @methodOf lbServices.Member
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.Member#getCachedCurrent
       * @methodOf lbServices.Member
       *
       * @description
       *
       * Get data of the currently logged user that was returned by the last
       * call to {@link lbServices.Member#login} or
       * {@link lbServices.Member#getCurrent}. Return null when there
       * is no user logged in or the data of the current user were not fetched
       * yet.
       *
       * @returns {Object} A Member instance.
       */
      R.getCachedCurrent = function () {
        var data = LoopBackAuth.currentUserData;
        return data ? new R(data) : null;
      };

      /**
       * @ngdoc method
       * @name lbServices.Member#isAuthenticated
       * @methodOf lbServices.Member
       *
       * @returns {boolean} True if the current user is authenticated (logged in).
       */
      R.isAuthenticated = function () {
        return this.getCurrentId() != null;
      };

      /**
       * @ngdoc method
       * @name lbServices.Member#getCurrentId
       * @methodOf lbServices.Member
       *
       * @returns {Object} Id of the currently logged-in user or null.
       */
      R.getCurrentId = function () {
        return LoopBackAuth.currentUserId;
      };

      /**
       * @ngdoc property
       * @name lbServices.Member#modelName
       * @propertyOf lbServices.Member
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Member`.
       */
      R.modelName = "Member";

      /**
       * @ngdoc object
       * @name lbServices.Member.tasks
       * @header lbServices.Member.tasks
       * @object
       * @description
       *
       * The object `Member.tasks` groups methods
       * manipulating `Task` instances related to `Member`.
       *
       * Call {@link lbServices.Member#tasks Member.tasks()}
       * to query all related instances.
       */


      /**
       * @ngdoc method
       * @name lbServices.Member#tasks
       * @methodOf lbServices.Member
       *
       * @description
       *
       * Queries tasks of Member.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `filter` – `{object=}` -
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Task` object.)
       * </em>
       */
      R.tasks = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::get::Member::tasks"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.tasks#count
       * @methodOf lbServices.Member.tasks
       *
       * @description
       *
       * Counts tasks of Member.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` -
       */
      R.tasks.count = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::count::Member::tasks"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.tasks#create
       * @methodOf lbServices.Member.tasks
       *
       * @description
       *
       * Creates a new instance in tasks of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Task` object.)
       * </em>
       */
      R.tasks.create = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::create::Member::tasks"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.tasks#destroyAll
       * @methodOf lbServices.Member.tasks
       *
       * @description
       *
       * Deletes all tasks of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.tasks.destroyAll = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::delete::Member::tasks"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.tasks#destroyById
       * @methodOf lbServices.Member.tasks
       *
       * @description
       *
       * Delete a related item by id for tasks.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for tasks
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.tasks.destroyById = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::destroyById::Member::tasks"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.tasks#findById
       * @methodOf lbServices.Member.tasks
       *
       * @description
       *
       * Find a related item by id for tasks.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for tasks
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Task` object.)
       * </em>
       */
      R.tasks.findById = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::findById::Member::tasks"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.tasks#updateById
       * @methodOf lbServices.Member.tasks
       *
       * @description
       *
       * Update a related item by id for tasks.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for tasks
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Task` object.)
       * </em>
       */
      R.tasks.updateById = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::updateById::Member::tasks"];
        return action.apply(R, arguments);
      };
      /**
       * @ngdoc object
       * @name lbServices.Member.pomodoros
       * @header lbServices.Member.pomodoros
       * @object
       * @description
       *
       * The object `Member.pomodoros` groups methods
       * manipulating `Pomodoro` instances related to `Member`.
       *
       * Call {@link lbServices.Member#pomodoros Member.pomodoros()}
       * to query all related instances.
       */


      /**
       * @ngdoc method
       * @name lbServices.Member#pomodoros
       * @methodOf lbServices.Member
       *
       * @description
       *
       * Queries pomodoros of Member.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `filter` – `{object=}` -
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::get::Member::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.pomodoros#count
       * @methodOf lbServices.Member.pomodoros
       *
       * @description
       *
       * Counts pomodoros of Member.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` -
       */
      R.pomodoros.count = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::count::Member::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.pomodoros#create
       * @methodOf lbServices.Member.pomodoros
       *
       * @description
       *
       * Creates a new instance in pomodoros of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros.create = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::create::Member::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.pomodoros#destroyAll
       * @methodOf lbServices.Member.pomodoros
       *
       * @description
       *
       * Deletes all pomodoros of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.pomodoros.destroyAll = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::delete::Member::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.pomodoros#destroyById
       * @methodOf lbServices.Member.pomodoros
       *
       * @description
       *
       * Delete a related item by id for pomodoros.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for pomodoros
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.pomodoros.destroyById = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::destroyById::Member::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.pomodoros#findById
       * @methodOf lbServices.Member.pomodoros
       *
       * @description
       *
       * Find a related item by id for pomodoros.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for pomodoros
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros.findById = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::findById::Member::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Member.pomodoros#updateById
       * @methodOf lbServices.Member.pomodoros
       *
       * @description
       *
       * Update a related item by id for pomodoros.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - User id
       *
       *  - `fk` – `{*}` - Foreign key for pomodoros
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros.updateById = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::updateById::Member::pomodoros"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name lbServices.Task
   * @header lbServices.Task
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Task` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "Task",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Tasks/:id",
        {'id': '@id'},
        {

          // INTERNAL. Use Task.member() instead.
          "prototype$__get__member": {
            url: urlBase + "/Tasks/:id/member",
            method: "GET"
          },

          // INTERNAL. Use Task.pomodoros.findById() instead.
          "prototype$__findById__pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/:fk",
            method: "GET"
          },

          // INTERNAL. Use Task.pomodoros.destroyById() instead.
          "prototype$__destroyById__pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Task.pomodoros.updateById() instead.
          "prototype$__updateById__pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Task.pomodoros() instead.
          "prototype$__get__pomodoros": {
            isArray: true,
            url: urlBase + "/Tasks/:id/pomodoros",
            method: "GET"
          },

          // INTERNAL. Use Task.pomodoros.create() instead.
          "prototype$__create__pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros",
            method: "POST"
          },

          // INTERNAL. Use Task.pomodoros.destroyAll() instead.
          "prototype$__delete__pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros",
            method: "DELETE"
          },

          // INTERNAL. Use Task.pomodoros.count() instead.
          "prototype$__count__pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#create
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Task` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Tasks",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#upsert
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Task` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Tasks",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#exists
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Tasks/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#findById
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Task` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Tasks/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#find
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Task` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Tasks",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#findOne
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Task` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Tasks/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#updateAll
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/Tasks/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#deleteById
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/Tasks/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#count
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Tasks/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Task#prototype$updateAttributes
           * @methodOf lbServices.Task
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Task` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Tasks/:id",
            method: "PUT"
          },

          // INTERNAL. Use Member.tasks.findById() instead.
          "::findById::Member::tasks": {
            url: urlBase + "/Members/:id/tasks/:fk",
            method: "GET"
          },

          // INTERNAL. Use Member.tasks.destroyById() instead.
          "::destroyById::Member::tasks": {
            url: urlBase + "/Members/:id/tasks/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Member.tasks.updateById() instead.
          "::updateById::Member::tasks": {
            url: urlBase + "/Members/:id/tasks/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Member.tasks() instead.
          "::get::Member::tasks": {
            isArray: true,
            url: urlBase + "/Members/:id/tasks",
            method: "GET"
          },

          // INTERNAL. Use Member.tasks.create() instead.
          "::create::Member::tasks": {
            url: urlBase + "/Members/:id/tasks",
            method: "POST"
          },

          // INTERNAL. Use Member.tasks.destroyAll() instead.
          "::delete::Member::tasks": {
            url: urlBase + "/Members/:id/tasks",
            method: "DELETE"
          },

          // INTERNAL. Use Member.tasks.count() instead.
          "::count::Member::tasks": {
            url: urlBase + "/Members/:id/tasks/count",
            method: "GET"
          },

          // INTERNAL. Use Pomodoro.task() instead.
          "::get::Pomodoro::task": {
            url: urlBase + "/Pomodoros/:id/task",
            method: "GET"
          },
        }
      );


      /**
       * @ngdoc method
       * @name lbServices.Task#updateOrCreate
       * @methodOf lbServices.Task
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Task` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.Task#update
       * @methodOf lbServices.Task
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.Task#destroyById
       * @methodOf lbServices.Task
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.Task#removeById
       * @methodOf lbServices.Task
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];


      /**
       * @ngdoc property
       * @name lbServices.Task#modelName
       * @propertyOf lbServices.Task
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Task`.
       */
      R.modelName = "Task";


      /**
       * @ngdoc method
       * @name lbServices.Task#member
       * @methodOf lbServices.Task
       *
       * @description
       *
       * Fetches belongsTo relation member.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `refresh` – `{boolean=}` -
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Member` object.)
       * </em>
       */
      R.member = function () {
        var TargetResource = $injector.get("Member");
        var action = TargetResource["::get::Task::member"];
        return action.apply(R, arguments);
      };
      /**
       * @ngdoc object
       * @name lbServices.Task.pomodoros
       * @header lbServices.Task.pomodoros
       * @object
       * @description
       *
       * The object `Task.pomodoros` groups methods
       * manipulating `Pomodoro` instances related to `Task`.
       *
       * Call {@link lbServices.Task#pomodoros Task.pomodoros()}
       * to query all related instances.
       */


      /**
       * @ngdoc method
       * @name lbServices.Task#pomodoros
       * @methodOf lbServices.Task
       *
       * @description
       *
       * Queries pomodoros of Task.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `filter` – `{object=}` -
       *
       * @param {function(Array.<Object>,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Array.<Object>} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::get::Task::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Task.pomodoros#count
       * @methodOf lbServices.Task.pomodoros
       *
       * @description
       *
       * Counts pomodoros of Task.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * Data properties:
       *
       *  - `count` – `{number=}` -
       */
      R.pomodoros.count = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::count::Task::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Task.pomodoros#create
       * @methodOf lbServices.Task.pomodoros
       *
       * @description
       *
       * Creates a new instance in pomodoros of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros.create = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::create::Task::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Task.pomodoros#destroyAll
       * @methodOf lbServices.Task.pomodoros
       *
       * @description
       *
       * Deletes all pomodoros of this model.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.pomodoros.destroyAll = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::delete::Task::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Task.pomodoros#destroyById
       * @methodOf lbServices.Task.pomodoros
       *
       * @description
       *
       * Delete a related item by id for pomodoros.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `fk` – `{*}` - Foreign key for pomodoros
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R.pomodoros.destroyById = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::destroyById::Task::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Task.pomodoros#findById
       * @methodOf lbServices.Task.pomodoros
       *
       * @description
       *
       * Find a related item by id for pomodoros.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `fk` – `{*}` - Foreign key for pomodoros
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros.findById = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::findById::Task::pomodoros"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Task.pomodoros#updateById
       * @methodOf lbServices.Task.pomodoros
       *
       * @description
       *
       * Update a related item by id for pomodoros.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `fk` – `{*}` - Foreign key for pomodoros
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R.pomodoros.updateById = function () {
        var TargetResource = $injector.get("Pomodoro");
        var action = TargetResource["::updateById::Task::pomodoros"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name lbServices.Pomodoro
   * @header lbServices.Pomodoro
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Pomodoro` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "Pomodoro",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Pomodoros/:id",
        {'id': '@id'},
        {

          // INTERNAL. Use Pomodoro.member() instead.
          "prototype$__get__member": {
            url: urlBase + "/Pomodoros/:id/member",
            method: "GET"
          },

          // INTERNAL. Use Pomodoro.task() instead.
          "prototype$__get__task": {
            url: urlBase + "/Pomodoros/:id/task",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#create
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Pomodoro` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Pomodoros",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#upsert
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Pomodoro` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Pomodoros",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#exists
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Pomodoros/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#findById
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Pomodoro` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Pomodoros/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#find
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Pomodoro` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Pomodoros",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#findOne
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Pomodoro` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Pomodoros/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#updateAll
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/Pomodoros/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#deleteById
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/Pomodoros/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#count
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Pomodoros/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#prototype$updateAttributes
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Pomodoro` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Pomodoros/:id",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#skipPomodoro
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Skip a in progress pomodoro.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `id` – `{string}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "skipPomodoro": {
            url: urlBase + "/Pomodoros/:id/status/skipped",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Pomodoro#finishPomodoro
           * @methodOf lbServices.Pomodoro
           *
           * @description
           *
           * Finish a in progress pomodoro.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `id` – `{string}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "finishPomodoro": {
            url: urlBase + "/Pomodoros/:id/status/finished",
            method: "PUT"
          },

          // INTERNAL. Use Member.pomodoros.findById() instead.
          "::findById::Member::pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/:fk",
            method: "GET"
          },

          // INTERNAL. Use Member.pomodoros.destroyById() instead.
          "::destroyById::Member::pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Member.pomodoros.updateById() instead.
          "::updateById::Member::pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Member.pomodoros() instead.
          "::get::Member::pomodoros": {
            isArray: true,
            url: urlBase + "/Members/:id/pomodoros",
            method: "GET"
          },

          // INTERNAL. Use Member.pomodoros.create() instead.
          "::create::Member::pomodoros": {
            url: urlBase + "/Members/:id/pomodoros",
            method: "POST"
          },

          // INTERNAL. Use Member.pomodoros.destroyAll() instead.
          "::delete::Member::pomodoros": {
            url: urlBase + "/Members/:id/pomodoros",
            method: "DELETE"
          },

          // INTERNAL. Use Member.pomodoros.count() instead.
          "::count::Member::pomodoros": {
            url: urlBase + "/Members/:id/pomodoros/count",
            method: "GET"
          },

          // INTERNAL. Use Task.pomodoros.findById() instead.
          "::findById::Task::pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/:fk",
            method: "GET"
          },

          // INTERNAL. Use Task.pomodoros.destroyById() instead.
          "::destroyById::Task::pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/:fk",
            method: "DELETE"
          },

          // INTERNAL. Use Task.pomodoros.updateById() instead.
          "::updateById::Task::pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/:fk",
            method: "PUT"
          },

          // INTERNAL. Use Task.pomodoros() instead.
          "::get::Task::pomodoros": {
            isArray: true,
            url: urlBase + "/Tasks/:id/pomodoros",
            method: "GET"
          },

          // INTERNAL. Use Task.pomodoros.create() instead.
          "::create::Task::pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros",
            method: "POST"
          },

          // INTERNAL. Use Task.pomodoros.destroyAll() instead.
          "::delete::Task::pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros",
            method: "DELETE"
          },

          // INTERNAL. Use Task.pomodoros.count() instead.
          "::count::Task::pomodoros": {
            url: urlBase + "/Tasks/:id/pomodoros/count",
            method: "GET"
          },
      }
      );


      /**
       * @ngdoc method
       * @name lbServices.Pomodoro#updateOrCreate
       * @methodOf lbServices.Pomodoro
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Pomodoro` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.Pomodoro#update
       * @methodOf lbServices.Pomodoro
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.Pomodoro#destroyById
       * @methodOf lbServices.Pomodoro
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.Pomodoro#removeById
       * @methodOf lbServices.Pomodoro
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];


      /**
       * @ngdoc property
       * @name lbServices.Pomodoro#modelName
       * @propertyOf lbServices.Pomodoro
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Pomodoro`.
       */
      R.modelName = "Pomodoro";


      /**
       * @ngdoc method
       * @name lbServices.Pomodoro#member
       * @methodOf lbServices.Pomodoro
       *
       * @description
       *
       * Fetches belongsTo relation member.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `refresh` – `{boolean=}` -
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Member` object.)
       * </em>
       */
      R.member = function () {
        var TargetResource = $injector.get("Member");
        var action = TargetResource["::get::Pomodoro::member"];
        return action.apply(R, arguments);
      };

      /**
       * @ngdoc method
       * @name lbServices.Pomodoro#task
       * @methodOf lbServices.Pomodoro
       *
       * @description
       *
       * Fetches belongsTo relation task.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - PersistedModel id
       *
       *  - `refresh` – `{boolean=}` -
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Task` object.)
       * </em>
       */
      R.task = function () {
        var TargetResource = $injector.get("Task");
        var action = TargetResource["::get::Pomodoro::task"];
        return action.apply(R, arguments);
      };

      return R;
    }]);

  /**
   * @ngdoc object
   * @name lbServices.Subscribe
   * @header lbServices.Subscribe
   * @object
   *
   * @description
   *
   * A $resource object for interacting with the `Subscribe` model.
   *
   * ## Example
   *
   * See
   * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
   * for an example of using this object.
   *
   */
  module.factory(
    "Subscribe",
    ['LoopBackResource', 'LoopBackAuth', '$injector', function (Resource, LoopBackAuth, $injector) {
      var R = Resource(
        urlBase + "/Subscribes/:id",
        {'id': '@id'},
        {

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#create
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Subscribe` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Subscribes",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#upsert
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Subscribe` object.)
           * </em>
           */
          "upsert": {
            url: urlBase + "/Subscribes",
            method: "PUT"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#exists
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Subscribes/:id/exists",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#findById
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Find a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Subscribe` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Subscribes/:id",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#find
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Subscribe` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Subscribes",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#findOne
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Subscribe` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Subscribes/findOne",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#updateAll
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Update instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "updateAll": {
            url: urlBase + "/Subscribes/update",
            method: "POST"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#deleteById
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Delete a model instance by id from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * This method returns no data.
           */
          "deleteById": {
            url: urlBase + "/Subscribes/:id",
            method: "DELETE"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#count
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Subscribes/count",
            method: "GET"
          },

          /**
           * @ngdoc method
           * @name lbServices.Subscribe#prototype$updateAttributes
           * @methodOf lbServices.Subscribe
           *
           * @description
           *
           * Update attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - PersistedModel id
           *
           * @param {Object} postData Request data.
           *
           * This method expects a subset of model properties as request parameters.
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Subscribe` object.)
           * </em>
           */
          "prototype$updateAttributes": {
            url: urlBase + "/Subscribes/:id",
            method: "PUT"
          },
      }
      );


      /**
       * @ngdoc method
       * @name lbServices.Subscribe#updateOrCreate
       * @methodOf lbServices.Subscribe
       *
       * @description
       *
       * Update an existing model instance or insert a new one into the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *   This method does not accept any parameters.
       *   Supply an empty object or omit this argument altogether.
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * <em>
       * (The remote method definition does not provide any description.
       * This usually means the response is a `Subscribe` object.)
       * </em>
       */
      R["updateOrCreate"] = R["upsert"];

      /**
       * @ngdoc method
       * @name lbServices.Subscribe#update
       * @methodOf lbServices.Subscribe
       *
       * @description
       *
       * Update instances of the model matched by where from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `where` – `{object=}` - Criteria to match model instances
       *
       * @param {Object} postData Request data.
       *
       * This method expects a subset of model properties as request parameters.
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["update"] = R["updateAll"];

      /**
       * @ngdoc method
       * @name lbServices.Subscribe#destroyById
       * @methodOf lbServices.Subscribe
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["destroyById"] = R["deleteById"];

      /**
       * @ngdoc method
       * @name lbServices.Subscribe#removeById
       * @methodOf lbServices.Subscribe
       *
       * @description
       *
       * Delete a model instance by id from the data source.
       *
       * @param {Object=} parameters Request parameters.
       *
       *  - `id` – `{*}` - Model id
       *
       * @param {function(Object,Object)=} successCb
       *   Success callback with two arguments: `value`, `responseHeaders`.
       *
       * @param {function(Object)=} errorCb Error callback with one argument:
       *   `httpResponse`.
       *
       * @returns {Object} An empty reference that will be
       *   populated with the actual data once the response is returned
       *   from the server.
       *
       * This method returns no data.
       */
      R["removeById"] = R["deleteById"];


      /**
       * @ngdoc property
       * @name lbServices.Subscribe#modelName
       * @propertyOf lbServices.Subscribe
       * @description
       * The name of the model represented by this $resource,
       * i.e. `Subscribe`.
       */
      R.modelName = "Subscribe";


      return R;
    }]);


  module
    .factory('LoopBackAuth', function () {
      var props = ['accessTokenId', 'currentUserId'];
      var propsPrefix = '$LoopBack$';

      function LoopBackAuth() {
        var self = this;
        props.forEach(function (name) {
          self[name] = load(name);
        });
        this.rememberMe = undefined;
        this.currentUserData = null;
      }

      LoopBackAuth.prototype.save = function () {
        var self = this;
        var storage = this.rememberMe ? localStorage : sessionStorage;
        props.forEach(function (name) {
          save(storage, name, self[name]);
        });
      };

      LoopBackAuth.prototype.setUser = function (accessTokenId, userId, userData) {
        this.accessTokenId = accessTokenId;
        this.currentUserId = userId;
        this.currentUserData = userData;
      }

      LoopBackAuth.prototype.clearUser = function () {
        this.accessTokenId = null;
        this.currentUserId = null;
        this.currentUserData = null;
      }

      LoopBackAuth.prototype.clearStorage = function () {
        props.forEach(function (name) {
          save(sessionStorage, name, null);
          save(localStorage, name, null);
        });
      };

      return new LoopBackAuth();

      // Note: LocalStorage converts the value to string
      // We are using empty string as a marker for null/undefined values.
      function save(storage, name, value) {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      }

      function load(name) {
        var key = propsPrefix + name;
        return localStorage[key] || sessionStorage[key] || null;
      }
    })
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
    }])
    .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
      function ($q, LoopBackAuth) {
        return {
          'request': function (config) {

            // filter out non urlBase requests
            if (config.url.substr(0, urlBase.length) !== urlBase) {
              return config;
          }

            if (LoopBackAuth.accessTokenId) {
              config.headers[authHeader] = LoopBackAuth.accessTokenId;
            } else if (config.__isGetCurrentUser__) {
              // Return a stub 401 error for User.getCurrent() when
              // there is no user logged in
              var res = {
                body: {error: {status: 401}},
                status: 401,
                config: config,
                headers: function () {
                  return undefined;
                }
              };
              return $q.reject(res);
            }
            return config || $q.when(config);
        }
        }
      }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
    .provider('LoopBackResource', function LoopBackResourceProvider() {
      /**
       * @ngdoc method
       * @name lbServices.LoopBackResourceProvider#setAuthHeader
       * @methodOf lbServices.LoopBackResourceProvider
       * @param {string} header The header name to use, e.g. `X-Access-Token`
       * @description
       * Configure the REST transport to use a different header for sending
       * the authentication token. It is sent in the `Authorization` header
       * by default.
       */
      this.setAuthHeader = function (header) {
        authHeader = header;
      };

      /**
       * @ngdoc method
       * @name lbServices.LoopBackResourceProvider#setUrlBase
       * @methodOf lbServices.LoopBackResourceProvider
       * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
       * @description
       * Change the URL of the REST API server. By default, the URL provided
       * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
       */
      this.setUrlBase = function (url) {
        urlBase = url;
      };

      this.$get = ['$resource', function ($resource) {
        return function (url, params, actions) {
          var resource = $resource(url, params, actions);

          // Angular always calls POST on $save()
          // This hack is based on
          // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
          resource.prototype.$save = function (success, error) {
            // Fortunately, LoopBack provides a convenient `upsert` method
            // that exactly fits our needs.
            var result = resource.upsert.call(this, {}, this, success, error);
            return result.$promise || result;
        };
          return resource;
        };
      }];
    });

})(window, window.angular);
