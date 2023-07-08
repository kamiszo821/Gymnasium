/*
 * GymApp
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GymApp);
  }
}(this, function(expect, GymApp) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GymApp.RegisterApi();
  });

  describe('(package)', function() {
    describe('RegisterApi', function() {
      describe('apiRegisterAddRolePost', function() {
        it('should call apiRegisterAddRolePost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiRegisterAddRolePost call
          /*
          var opts = {};

          instance.apiRegisterAddRolePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiRegisterAddRoleToSystemPost', function() {
        it('should call apiRegisterAddRoleToSystemPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiRegisterAddRoleToSystemPost call
          /*
          var opts = {};

          instance.apiRegisterAddRoleToSystemPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiRegisterConfirmEmailPost', function() {
        it('should call apiRegisterConfirmEmailPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiRegisterConfirmEmailPost call
          /*
          var opts = {};

          instance.apiRegisterConfirmEmailPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiRegisterPost', function() {
        it('should call apiRegisterPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiRegisterPost call
          /*
          var opts = {};

          instance.apiRegisterPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiRegisterRemoveRolePost', function() {
        it('should call apiRegisterRemoveRolePost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiRegisterRemoveRolePost call
          /*
          var opts = {};

          instance.apiRegisterRemoveRolePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
