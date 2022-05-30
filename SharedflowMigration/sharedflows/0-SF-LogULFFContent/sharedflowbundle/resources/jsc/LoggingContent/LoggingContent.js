try {
 
	logger(); // eslint-disable-line no-undef
} catch (err){
	throw err;
}
logger = function Logger() { // eslint-disable-line no-undef

    	var  loggingPayload;
	try{
	    
		var transactionID = context.getVariable('trace.transaction.id') ;
	
		var loggingPayloadEnabled = context.getVariable('logging_payload_enabled') || true;
		var logType = context.getVariable('type');
		var oauthTokenDetails =  context.getVariable("oauthTokenDetails");
		var scheme = context.getVariable("target.scheme");
		var host = context.getVariable("target.host");
		var port = context.getVariable("target.port");
		var uri = context.getVariable("request.uri");
		var inboundRequestUri = context.getVariable("proxy.url");
		var errorJSON = context.getVariable("errorJSON");
		var err = context.getVariable("err");
		var desc = context.getVariable("description");
		var layerTransactionID = context.getVariable('layer.transaction.id') || '';
		var HeaderList = context.getVariable('message.headers.names');
		var headers = '';
		var formParam = context.getVariable("message.formparams.names");
		var date = new Date();
		var dateForLog = date.toISOString();
		var payload = '';
		var oauthClientId = context.getVariable('client_id') || '';
		var reasonPhrase = '';
		var statusCode = '';
		var errorDescription = '';
		var errorCode = '';
		//var flow = context.flow;
		var flow = context.getVariable(context.flow.name);
		if(context.getVariable("ContextFlowFlag")=="true")
		{
			flow = "ERROR";
		}
		 loggingPayload = {
				"transaction-id":transactionID,
				"layer-transaction-id": layerTransactionID
				};

		if(errorJSON){
			errorJSON = JSON.parse(context.getVariable(errorJSON));
			if(errorJSON){
			reasonPhrase = errorJSON.reasonPhrase;
			statusCode = errorJSON.statusCode;
			errorDescription = errorJSON.errorDescription;
			errorCode=errorJSON.errorCode;}
		}
		if(loggingPayloadEnabled){
					
			loggingPayload["currentDateTime"]=context.getVariable('currentDateTime');
			loggingPayload["threadId"]=context.getVariable('threadId');
			loggingPayload["hostname"]=context.getVariable('hostname');
			loggingPayload["ip"]=context.getVariable('ip');
			loggingPayload["logLevel"]=context.getVariable('logLevel');
			loggingPayload["type"]= logType;
			loggingPayload["correlationId"]=context.getVariable('correlationId');
			loggingPayload["userId"]=context.getVariable('userId');
			
			if(logType === "SYSERR"){
				
				loggingPayload["direction"]=context.getVariable('direction');
				loggingPayload["exceptionClass"]=context.getVariable('exceptionClass');
				loggingPayload["exceptionMessage"]=context.getVariable('exceptionMessage');
				loggingPayload["httpStatusCode"]=context.getVariable('httpStatusCode');
				loggingPayload["exceptionResponse"]=context.getVariable('exceptionResponse');
				loggingPayload["latency"]=context.getVariable('latency');
			}
			if(logType === "APPLOG"){
				
				loggingPayload["className"]=context.getVariable('className');
				loggingPayload["logMessage"]=context.getVariable('logMessage');
			} 
			if(logType === "SYSLOG"){
				loggingPayload["className"]=context.getVariable('className');
				loggingPayload["methodName"]=context.getVariable('methodName');
				loggingPayload["requestUrl"]=context.getVariable('requestUrl');
				var  httpHeaders = {};
				httpHeaders["X-Frame-Options"]=context.getVariable('response.headers.X-Frame-Options');
				httpHeaders["Cache-Control"]=context.getVariable('response.headers.Cache-Control');
				httpHeaders["X-Content-Type-Options"]=context.getVariable('response.headers.X-Content-Type-Options');
				httpHeaders["Pragma"]=context.getVariable('response.headers.Pragma');
				httpHeaders["Expires"]=context.getVariable('response.headers.Expires');
				httpHeaders["X-XSS-Protection"]=context.getVariable('response.headers.X-XSS-Protection');
				httpHeaders["X-Application-Context"]=context.getVariable('response.headers.X-Application-Context');
				httpHeaders["Content-Length"]=context.getVariable('response.headers.Content-Length');
				httpHeaders["Date"]=context.getVariable('response.headers.Date');
				httpHeaders["Content-Type"]=context.getVariable('response.headers.Content-Type');
				loggingPayload["httpHeaders"]=httpHeaders;
				httpHeaders["httpResponseCode"]=context.getVariable('httpResponseCode');
				httpHeaders["payload"]=context.getVariable('payload');
				httpHeaders["requestVerb"]=context.getVariable('request.verb');
				httpHeaders["logMessage"]=context.getVariable('logMessage');
				httpHeaders["direction"]=context.getVariable('direction');
				httpHeaders["latency"]=context.getVariable('latency');
			}
			context.setVariable("loggingPayload", JSON.stringify(loggingPayload));
		}
	}
	catch (err) {
	    	loggingPayload["payload"]=context.getVariable('error.content');
	    context.setVariable("loggingPayload", JSON.stringify(loggingPayload));		
		throw err;
	}
		

};