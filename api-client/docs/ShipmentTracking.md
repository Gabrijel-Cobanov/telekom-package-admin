# ShipmentTrackingApi.ShipmentTracking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the shipment | [optional] 
**carrier** | **String** | Carrier that is performing the shipment | [optional] 
**trackingCode** | **String** | Tracking code in the carrier network | [optional] 
**carrierTrackingUrl** | **String** | URL to a public page provided by the carrier that shows tracking details for this tracker | [optional] 
**trackingDate** | **Date** | Date when the shipment began to be tracked | [optional] 
**status** | **String** | Current status of the package   * &#x60;initialized&#x60; Package shipment is initialized   * &#x60;inProcess&#x60; Package packing is in process   * &#x60;processed&#x60; Package packing was processed   * &#x60;shipped&#x60; Pacakage is shipped   * &#x60;inCustoms&#x60; Pacakage is in customs   * &#x60;delivered&#x60; Pacakage is delivered   * &#x60;returned&#x60; Pacakage is returned   * &#x60;error&#x60; Pacakage shipment status is undetermined   | [optional] 
**statusChangeDate** | **Date** | Date when the tracking status last changed | [optional] 
**statusChangeReason** | **String** | Text describing the reason for the status of the tracking | [optional] 
**weight** | **Number** | Weight of the package in grams | [optional] 
**estimatedDeliveryDate** | **Date** | Estimated deliveryDate | [optional] 
**addressFrom** | [**Address**](Address.md) |  | [optional] 
**addressTo** | [**Address**](Address.md) |  | [optional] 
**order** | [**[OrderRefType]**](OrderRefType.md) | Orders that triggered this shipment | [optional] 
**relatedCustomer** | [**CustomerRefType**](CustomerRefType.md) |  | [optional] 
**createDate** | **Date** | Date when tracking shipment was created | [optional] 



## Enum: StatusEnum


* `initialized` (value: `"initialized"`)

* `inProcess` (value: `"inProcess"`)

* `processed` (value: `"processed"`)

* `shipped` (value: `"shipped"`)

* `inCustoms` (value: `"inCustoms"`)

* `delivered` (value: `"delivered"`)

* `returned` (value: `"returned"`)

* `error` (value: `"error"`)




