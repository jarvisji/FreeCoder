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
