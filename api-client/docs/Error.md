# ShipmentTrackingApi.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique error ID, used for logging purposes, UUID format | 
**code** | **String** | A string coding the error type. This is given to caller so he can translate them if required. | 
**timestamp** | **Date** | Exact time of error | 
**message** | **String** | A short localized string that describes the error. | [optional] 
**severity** | **String** | Describes severity of error. Order from most to least critical is: FATAL, ERROR, WARN, INFO, DEBUG, TRACE * &#x60;FATAL&#x60; Designates very severe error events that will presumably lead the application to abort.   * &#x60;ERROR&#x60; Designates error events that might still allow the application to continue running.   * &#x60;WARN&#x60; Designates potentially harmful situations.   * &#x60;INFO&#x60; Designates informational messages that highlight the progress of the application at coarse-grained level.   * &#x60;DEBUG&#x60; Designates fine-grained informational events that are most useful to debug an application.   * &#x60;TRACE&#x60; Designates finer-grained informational events than the DEBUG.  | [optional] 
**details** | **[Object]** | Exception detailed info | [optional] 



## Enum: SeverityEnum


* `FATAL` (value: `"FATAL"`)

* `ERROR` (value: `"ERROR"`)

* `WARN` (value: `"WARN"`)

* `INFO` (value: `"INFO"`)

* `DEBUG` (value: `"DEBUG"`)

* `TRACE` (value: `"TRACE"`)




