public with sharing class fetchEmailTemplates {
	@AuraEnabled
    public static List<EmailTemplate>fetchTemplateList() {
            List<EmailTemplate> templates =
                [SELECT Id, Name, FolderId, Folder.Name FROM EmailTemplate
                 WHERE Folder.Name = 'NPSP Opportunity Acknowledgments'];
            System.debug(templates);
            return templates;
    }
}