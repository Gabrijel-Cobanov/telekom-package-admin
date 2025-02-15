# shipment_tracking_api

ShipmentTrackingApi - JavaScript client for shipment_tracking_api
Shipment Tracking Management provides operations to track shipments.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.14.0
- Package version: 1.14.0
- Generator version: 7.6.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install shipment_tracking_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your shipment_tracking_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ShipmentTrackingApi = require('shipment_tracking_api');

var defaultClient = ShipmentTrackingApi.ApiClient.instance;
// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['Authorization'] = "Token"
// Configure API key authorization: accessToken
var accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix['Authorization'] = "Token"

var api = new ShipmentTrackingApi.ShipmentTrackingApi()
var opts = {
  'customerId': "customerId_example", // {String} To retrieve the shipments tracking from a specific customer
  'status': "status_example", // {String} Status of shipment
  'orderId': "orderId_example", // {String} Id of the order whose shipment has to be fetched
  'page': "page_example", // {String} page, positive integer, starts with 0
  'size': "size_example", // {String} page size, positive integer greater than 0
  'sort': "sort_example" // {String} data sort parameter, starts with '+' or '-' prefix; when prefix empty, '+' is default; multiple attributes can be used separated by ','
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getShipmentTracking(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:8017/shipmentTracking/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ShipmentTrackingApi.ShipmentTrackingApi* | [**getShipmentTracking**](docs/ShipmentTrackingApi.md#getShipmentTracking) | **GET** /shipmentTracking | Retrieve tracking details of a shipment
*ShipmentTrackingApi.ShipmentTrackingApi* | [**getShipmentTrackingByTrackingId**](docs/ShipmentTrackingApi.md#getShipmentTrackingByTrackingId) | **GET** /shipmentTracking/{id} | Retrieve tracking details of a shipment by tracking id
*ShipmentTrackingApi.ShipmentTrackingApi* | [**patchShipmentTrackingUsingPATCH**](docs/ShipmentTrackingApi.md#patchShipmentTrackingUsingPATCH) | **PATCH** /shipmentTracking/{id} | updates ShipmentTracking
*ShipmentTrackingApi.ShipmentTrackingApi* | [**postShipmentTracking**](docs/ShipmentTrackingApi.md#postShipmentTracking) | **POST** /shipmentTracking | creates new ShipmentTracking


## Documentation for Models

 - [ShipmentTrackingApi.Address](docs/Address.md)
 - [ShipmentTrackingApi.CustomerRefType](docs/CustomerRefType.md)
 - [ShipmentTrackingApi.Error](docs/Error.md)
 - [ShipmentTrackingApi.OrderRefType](docs/OrderRefType.md)
 - [ShipmentTrackingApi.ShipmentTracking](docs/ShipmentTracking.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### accessToken


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### apiKey


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

