@isTest(seeAllData=true)
public with sharing class fetchEmailTemplatesTest {
    @isTest static void FetchTest(){
        Test.startTest();
        List<EmailTemplate> etList = fetchEmailTemplates.fetchTemplateList();
        Test.stopTest();
        System.assertNotEquals(null, etList.size());
    }
}