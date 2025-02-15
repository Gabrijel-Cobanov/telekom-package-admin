/**
 * Shipment Tracking API
 * Shipment Tracking Management provides operations to track shipments.
 *
 * The version of the OpenAPI document: 1.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShipmentTrackingApi);
  }
}(this, function(expect, ShipmentTrackingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ShipmentTrackingApi.CustomerRefType();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomerRefType', function() {
    it('should create an instance of CustomerRefType', function() {
      // uncomment below and update the code to test CustomerRefType
      //var instance = new ShipmentTrackingApi.CustomerRefType();
      //expect(instance).to.be.a(ShipmentTrackingApi.CustomerRefType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ShipmentTrackingApi.CustomerRefType();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instance = new ShipmentTrackingApi.CustomerRefType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ShipmentTrackingApi.CustomerRefType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ShipmentTrackingApi.CustomerRefType();
      //expect(instance).to.be();
    });

  });

}));
