var requestVerb = context.getVariable("request.verb");
var tokenResponse = JSON.parse(context.getVariable("ServiceCallout.response"));

if (requestVerb === "GET") {
    var employeeId = context.getVariable("request.queryparam.employeeId");
    context.setVariable("target.url", "https://amer-api-partner38-dev.apigee.net/sampleapiAMat/employee?employeeId="+employeeId);
} else if (requestVerb === "POST") {
    var employeeId = context.getVariable("employeeId");
    context.setVariable("target.url", "https://amer-api-partner38-dev.apigee.net/sampleapiAMat/employee?employeeId="+employeeId+"&operation=create");
}
context.setVariable("request.header.Authorization", tokenResponse.tokenType + " " + tokenResponse.token);
context.setVariable("request.header.Authorization1", tokenResponse.tokenType + " " + tokenResponse.token);
context.setVariable("target.copy.pathsuffix", false);