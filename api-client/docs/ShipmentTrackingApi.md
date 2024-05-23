# ShipmentTrackingApi.ShipmentTrackingApi

All URIs are relative to *https://localhost:8017/shipmentTracking/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getShipmentTracking**](ShipmentTrackingApi.md#getShipmentTracking) | **GET** /shipmentTracking | Retrieve tracking details of a shipment
[**getShipmentTrackingByTrackingId**](ShipmentTrackingApi.md#getShipmentTrackingByTrackingId) | **GET** /shipmentTracking/{id} | Retrieve tracking details of a shipment by tracking id
[**patchShipmentTrackingUsingPATCH**](ShipmentTrackingApi.md#patchShipmentTrackingUsingPATCH) | **PATCH** /shipmentTracking/{id} | updates ShipmentTracking
[**postShipmentTracking**](ShipmentTrackingApi.md#postShipmentTracking) | **POST** /shipmentTracking | creates new ShipmentTracking



## getShipmentTracking

> [ShipmentTracking] getShipmentTracking(opts)

Retrieve tracking details of a shipment

### Example

```javascript
import ShipmentTrackingApi from 'shipment_tracking_api';
let defaultClient = ShipmentTrackingApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new ShipmentTrackingApi.ShipmentTrackingApi();
let opts = {
  'customerId': "customerId_example", // String | To retrieve the shipments tracking from a specific customer
  'status': "status_example", // String | Status of shipment
  'orderId': "orderId_example", // String | Id of the order whose shipment has to be fetched
  'page': "page_example", // String | page, positive integer, starts with 0
  'size': "size_example", // String | page size, positive integer greater than 0
  'sort': "sort_example" // String | data sort parameter, starts with '+' or '-' prefix; when prefix empty, '+' is default; multiple attributes can be used separated by ','
};
apiInstance.getShipmentTracking(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| To retrieve the shipments tracking from a specific customer | [optional] 
 **status** | **String**| Status of shipment | [optional] 
 **orderId** | **String**| Id of the order whose shipment has to be fetched | [optional] 
 **page** | **String**| page, positive integer, starts with 0 | [optional] 
 **size** | **String**| page size, positive integer greater than 0 | [optional] 
 **sort** | **String**| data sort parameter, starts with &#39;+&#39; or &#39;-&#39; prefix; when prefix empty, &#39;+&#39; is default; multiple attributes can be used separated by &#39;,&#39; | [optional] 

### Return type

[**[ShipmentTracking]**](ShipmentTracking.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipmentTrackingByTrackingId

> ShipmentTracking getShipmentTrackingByTrackingId(id)

Retrieve tracking details of a shipment by tracking id

### Example

```javascript
import ShipmentTrackingApi from 'shipment_tracking_api';
let defaultClient = ShipmentTrackingApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new ShipmentTrackingApi.ShipmentTrackingApi();
let id = "id_example"; // String | Id of the shipment that needs to be fetched
apiInstance.getShipmentTrackingByTrackingId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the shipment that needs to be fetched | 

### Return type

[**ShipmentTracking**](ShipmentTracking.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchShipmentTrackingUsingPATCH

> ShipmentTracking patchShipmentTrackingUsingPATCH(fields, id, shipmentTracking)

updates ShipmentTracking

### Example

```javascript
import ShipmentTrackingApi from 'shipment_tracking_api';
let defaultClient = ShipmentTrackingApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new ShipmentTrackingApi.ShipmentTrackingApi();
let fields = "fields_example"; // String | list of fields that needs to be changed in PATCH method
let id = "id_example"; // String | id
let shipmentTracking = new ShipmentTrackingApi.ShipmentTracking(); // ShipmentTracking | ShipmentTracking
apiInstance.patchShipmentTrackingUsingPATCH(fields, id, shipmentTracking, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| list of fields that needs to be changed in PATCH method | 
 **id** | **String**| id | 
 **shipmentTracking** | [**ShipmentTracking**](ShipmentTracking.md)| ShipmentTracking | 

### Return type

[**ShipmentTracking**](ShipmentTracking.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postShipmentTracking

> ShipmentTracking postShipmentTracking(body)

creates new ShipmentTracking

### Example

```javascript
import ShipmentTrackingApi from 'shipment_tracking_api';
let defaultClient = ShipmentTrackingApi.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new ShipmentTrackingApi.ShipmentTrackingApi();
let body = new ShipmentTrackingApi.ShipmentTracking(); // ShipmentTracking | The ShipmentTracking to be created
apiInstance.postShipmentTracking(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShipmentTracking**](ShipmentTracking.md)| The ShipmentTracking to be created | 

### Return type

[**ShipmentTracking**](ShipmentTracking.md)

### Authorization

[apiKey](../README.md#apiKey), [accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

