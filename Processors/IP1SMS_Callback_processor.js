(function process(g_request, g_response, g_processor) {
	
	var incsmsid = g_request.getParameter("incsmsid");
	var sender = g_request.getParameter("sender");
	var text = g_request.getParameter("text");
	var to = g_request.getParameter("to");
	
	
	insertSMS(sender,text, incsmsid, to);
	
	function insertSMS(sender,text, incsmsid, to){
		var sms = new GlideRecord('u_inbound_sms'); //Your inbound SMS Table
		sms.initialize();
		sms.u_sender = sender; //Your fields
		sms.u_text = text; //Your fields
		sms.u_incsmsid = incsmsid; //Your fields
		sms.u_to = to;//Your fields
		var ok = sms.insert();
		if(ok != ''){
			g_processor.writeOutput("text/plain", "OK"); //Write out OK as IP1SMS requires it in plain text
		}
	}
	
	
})(g_request, g_response, g_processor);
