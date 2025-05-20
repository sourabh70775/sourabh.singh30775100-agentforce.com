/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-20-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class OpportunityReportController {
    
    @AuraEnabled
    public static String getOpportunitiesData(string objectname, string whereCondition, string TableId){
        string queryBuilding = 'SELECT Account.Name,Count(id),SUM(Amount) FROM ' + objectname +' '+whereCondition +' Group by Account.Name LIMIT 49999';
        system.debug('queryBuilding'+queryBuilding);
       try {
        List<AggregateResult> groupedResults = Database.query(queryBuilding);
        system.debug('groupedResults'+groupedResults);
        system.debug(system.limits.getLimitQueryRows() - system.limits.getQueryRows() + ' remaining SOQL rows');
        Integer totalOpportunityCount = 0;
        Decimal opportunityAmount = 0.0;
        system.debug(groupedResults.size() + 'total Opportunity Count');
        
        if(groupedResults.size() > 0){
            for (AggregateResult ar : groupedResults) {
                system.debug('inside a loop');
                totalOpportunityCount = totalOpportunityCount + (Integer) ar.get('expr0'); // COUNT() result is often expr0
                opportunityAmount = opportunityAmount + (Decimal)ar.get('expr1'); // SUM() result is often expr1
            }
        }
        system.debug('totalOpportunityCount'+totalOpportunityCount);
        system.debug('opportunityAmount'+opportunityAmount);
        tableDataWrapper tableData = new tableDataWrapper();
        tableData.countOfRecords = string.valueOf(totalOpportunityCount);
        tableData.totalAmount = string.valueOf(opportunityAmount);
        tableData.tableId = tableId;
        return JSON.serialize(tableData);
    } catch (Exception e) {
        // Handle any errors (e.g., invalid ID, database error)
        System.debug('Error updating task: ' + e.getMessage()+' |Line No.: '+e.getLineNumber());
    } 
        return 'error';        
    }

    // @AuraEnabled
    // public static List<Opportunity> getMetaDataRecords(){
    //     list<opportunity> opptyList = [SELECT Id, StageName, Amount, Probability FROM Opportunity LIMIT 1];
    //     system.debug(system.limits.getLimitQueryRows() - system.limits.getQueryRows() + ' remaining SOQL rows');
    //     return opptyList;        
    // }
    
    class tableDataWrapper{
        string countOfRecords;
        string totalAmount;
        string tableId;
    }
}