var loggingContentSpec = require('../jsc/LoggingContent/LoggingContent');

describe('loggingContent Suite', function() {
	
    beforeEach(function(){
      var Context = function(){
        };
        Context.prototype = {
            setVariable: function(propertyName, propertyValue){
            this[propertyName] = propertyValue;
            },
            getVariable: function(propertyName){
              return this[propertyName];
            },
            request : {"headers": "sfas"},
            response : "dsfds",
        };
        context = new Context();
    });
	it ('Positive case 1: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 2: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_RESP_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 3: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 4: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_RESP_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 5: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
        expect(loggingULFFContent()).toBe();
    });
	it ('Positive case 6: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-out");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 7: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-out");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 8: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 9: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_RESP_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 10: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 11: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_RESP_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
        expect(loggingULFFContent()).toBe();
    });
	it ('Positive case 12: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 13: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("masking_qparam_enabled","true");
		context.setVariable("proxy.url","oauth/token?qwe=123");
		context.setVariable("request.uri","oauth/token?qwe=123");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 14: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("masking_qparam_enabled","true");
		context.setVariable("proxy.url","oauth/token?qwe=123");
		context.setVariable("request.uri","oauth/token?qwe=123");
		context.setVariable("accesstoken.msisdn","tel:+1234");
		context.setVariable("inputMsisdn","tel:+1234");
		context.setVariable("errorJSON","methoderror");
		var methodError = {"reasonPhrase":"","statusCode":"","errorDescription":"","errorCode":""};
		context.setVariable("methoderror",JSON.stringify(methodError));
        expect(loggingULFFContent()).toBe();
    });

	it ('Positive case 15: happy path with request', function() {
		//context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 15: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("masking_qparam_enabled","true");
		context.setVariable("proxy.url","oauth/token?qwe=123");
		context.setVariable("request.uri","oauth/token?qwe=123");
		context.setVariable("accesstoken.msisdn","te1234");
		context.setVariable("inputMsisdn","te1234");
		//context.setVariable("errorJSON","methoderror");
		var methodError = {"reasonPhrase":"","statusCode":"","errorDescription":"","errorCode":""};
		context.setVariable("methoderror",JSON.stringify(methodError));
		context.setVariable("ContextFlowFlag","true");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 16: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("message.status.code","502");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 17: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("message.status.code","305");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 17: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("message.status.code","405");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 18: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("message.status.code","500");
		context.setVariable("VF_INT_STATUS_FLOW_resp","500");
		context.setVariable("VF_INT_TRACK_ID_req_Orig","500");
        expect(loggingULFFContent()).toBe();
    });

	it ('Positive case 19: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("headersToMask","true");
//		context.setVariable("message.status.code","500");
//		context.setVariable("VF_INT_STATUS_FLOW_resp","500");
//		context.setVariable("VF_INT_TRACK_ID_req_Orig","500");
		
        expect(loggingULFFContent).toThrow();
    });
	
	it ('Positive case 20: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		//context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 21: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","2090");
		context.setVariable("formParamToMask","[qwe]");
		//context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 22: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_RESP_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("VF_INT_TRACK_ID_resp","2050");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 23: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_REQ_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("VF_INT_TRACK_ID_req_Orig","2050");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 24: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_RESP_FLOW");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("VF_INT_TRACK_ID_resp","2050");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 25: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-out");
		context.setVariable("VF_INT_TRACK_ID_resp","2050");
        expect(loggingULFFContent()).toBe();
    });
	it ('Positive case 26: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_resp","2050");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 27: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-out");
		context.setVariable("VF_INT_TRACK_ID_resp","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 28: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","ERROR");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_resp","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 29: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_RESP_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_resp","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 30: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","TARGET_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_req_Orig","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	it ('Positive case 31: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[qwe,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_RESP_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_req","response-in");
        expect(loggingULFFContent()).toBe();
    });
	it ('Positive case 32: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[authorization,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe,asd,zxc]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_req_Orig","response-in");
		context.setVariable("X_Forwarded_Proto_req","response-in");
		context.setVariable("X_Forwarded_Host_req","response-in");
		context.setVariable("X_Forwarded_Port_req","response-in");
        expect(loggingULFFContent()).toBe();
    });
	it ('Positive case 33: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		//context.setVariable("access_payload_size","20");
		context.setVariable("formParamToMask","[qwe]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_req_Orig","response-in");
		context.setVariable("X_Forwarded_Proto_req","response-in");
		context.setVariable("X_Forwarded_Host_req","response-in");
		context.setVariable("X_Forwarded_Port_req","response-in");
        expect(loggingULFFContent()).toBe();
    });
	it ('Positive case 34: happy path with request', function() {
		context.setVariable("logging_payload_enabled","true");
		context.setVariable("queryParamToMask","dhanashri");
		context.setVariable("message.formparams.names","");
		context.setVariable("message.content","[qwe,asd,zxc]");
		context.setVariable("message.headers.names","[authorization,asd,zxc]");
		context.setVariable("loggingFlow","PROXY_REQ_FLOW");
		context.setVariable("access_payload_size","2040");
		context.setVariable("formParamToMask","[qwe,asd,zxc]");
		context.setVariable("masking_body_enabled","true");
		context.setVariable("logging_ulff_max_size","2050");
		context.setVariable("logPoint","response-in");
		context.setVariable("VF_INT_TRACK_ID_req_Orig","response-in");
		context.setVariable("X_Forwarded_Proto_req","response-in");
		context.setVariable("X_Forwarded_Host_req","response-in");
		context.setVariable("X_Forwarded_Port_req","response-in");
        expect(loggingULFFContent()).toBe();
    });
	
	
});