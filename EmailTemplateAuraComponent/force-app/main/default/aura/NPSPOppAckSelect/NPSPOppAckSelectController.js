({
	doInit : function(cmp, event, helper) {
        // Retrieve Email Templates during component initialization
        // helper.loadTemplates(component);
		var action = cmp.get("c.fetchTemplateList");
        console.log('Fetched the Template List');
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log('state = ' + state);
            if(state === "SUCCESS") {
                cmp.set("v.templates", response.getReturnValue());
                console.log('v.templates: ' + cmp.set);
                cmp.set("v.templateList", response.getReturnValue());
                console.log('v.templateList: ' + cmp.set);
            } else {
                console.log('You f*cked up the get!');
            }
        });
        $A.enqueueAction(action);
	},
    
    handleSelect : function(component, event, helper) {
        var templates = component.get("v.templates");
        //var templateList = component.get("v.templateList");
        
        // Get the selected template
        var selected = event.getSource().get("v.value");
        component.set("v.templates", selected);
    }
})