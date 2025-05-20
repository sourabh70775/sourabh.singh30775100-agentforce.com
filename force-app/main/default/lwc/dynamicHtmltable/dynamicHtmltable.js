import { LightningElement } from 'lwc';
//import getMetaMethod from '@salesforce/apex/OpportunityReportController.getMetaDataRecords';
import getOpportunitiesData from '@salesforce/apex/OpportunityReportController.getOpportunitiesData';

export default class DynamicHtmltable extends LightningElement {

    connectedCallback() {
        this.fetchDataForTable();
        console.log('Method reateTableDynamically');
        
        console.log('Deployyed reateTableDynamically');

    }

    jsonWeRecieveFromApex = [
        {
            "label": "Value (tousands)--",
            "rowHeader":false,
            "fieldId": "1-0",
            "PercentageReq": false,
            "stage": "Not Required",
            "columnHeaderOrRowheader":true,
            "where": "",
            "table":"Account Pipeline Analysis Controller"
    },{
            "label": "Value (tousands)-Total Pipeline (inc. Juno)",
            "rowHeader":false,
            "fieldId": "1-1",
            "PercentageReq": false,
            "stage": "Not Required",
            "header": "Not Required",
            "columnHeaderOrRowheader":false,
            "where": "",
    },
    {
        "label": "Value (tousands)-Total Pipeline (excl. Juno)",
        "rowHeader":false,
        "fieldId": "1-2",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE VOIS_SF_source__c != 'JGTM'"
    },
 {
        "label": "Value (tousands)-UK",
        "rowHeader":false,
        "fieldId": "1-3",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'UK'"
    },
 {
        "label": "Value (tousands)-Germany",
        "rowHeader":false,
        "fieldId": "1-4",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'Germany'"
    },
 {
        "label": "Value (tousands)-Ireland",
        "rowHeader":false,
        "fieldId": "1-5",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'Ireland'"
    },
 {
        "label": "Value (tousands)-Vodacom",
        "rowHeader":false,
        "fieldId": "1-6",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'Vodacom'"
    },
 {
        "label": "Value (tousands)-Others/Details",
        "rowHeader":false,
        "fieldId": "1-7",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name NOT IN ('UK','Ireland','Germany','Vodacom')"
    },
    {
            "label": "Value (tousands)--",
            "rowHeader":false,
            "fieldId": "2-0",
            "PercentageReq": false,
            "stage": "Not Required",
            "columnHeaderOrRowheader":true,
            "where": "",
    },{
            "label": "Value (tousands)-Total Pipeline (inc. Juno)",
            "rowHeader":false,
            "fieldId": "2-1",
            "PercentageReq": false,
            "stage": "Not Required",
            "header": "Not Required",
            "columnHeaderOrRowheader":false,
            "where": "Where StageName = 'Close Won'",
    },
    {
        "label": "Value (tousands)-Total Pipeline (excl. Juno)",
        "rowHeader":false,
        "fieldId": "2-2",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE VOIS_SF_source__c != 'JGTM' And StageName = 'Close Won'"
    },
 {
        "label": "Value (tousands)-UK",
        "rowHeader":false,
        "fieldId": "2-3",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'UK' And StageName = 'Close Won'"
    },
 {
        "label": "Value (tousands)-Germany",
        "rowHeader":false,
        "fieldId": "2-4",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'Germany' And StageName = 'Close Won'"
    },
 {
        "label": "Value (tousands)-Ireland",
        "rowHeader":false,
        "fieldId": "2-5",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'Ireland' And StageName = 'Close Won'"
    },
 {
        "label": "Value (tousands)-Vodacom",
        "rowHeader":false,
        "fieldId": "2-6",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name = 'Vodacom' And StageName = 'Close Won'"
    },
 {
        "label": "Value (tousands)-Others/Details",
        "rowHeader":false,
        "fieldId": "2-7",
        "PercentageReq": false,
        "stage": "Not Required",
        "header": "Not Required",
        "columnHeaderOrRowheader":false,
        "where": "WHERE Account.Name NOT IN ('UK','Ireland','Germany','Vodacom') And StageName = 'Close Won'"
    },
]

    fetchDataMataData() {
            
    }

    fetchDataForTable(){
        console.log('FetchDataForTable Starts');

        
        const promisesTotableData = [];
        this.jsonWeRecieveFromApex.forEach(element => {
            if(element.columnHeaderOrRowheader == false){
                promisesTotableData.push(getOpportunitiesData({objectname:'Opportunity',whereCondition:element.where,TableId:element.fieldId}));
            }
        
        })
        Promise.all(promisesTotableData)
            .then(results => {
                this.accountDetails = results; // Store the results
                console.log('Got the Results',this.accountDetails);  
                results.forEach(element => {
                    console.log('Calling');
                    this.inputDataIntoTheTable(element);
                    console.log('called');
                    
                });
            })
            .catch(error => {
                this.error = error;
                console.log('Error while fetching data',error);
                
            });
            console.log('FetchDataForTable Ends');
    }

    inputDataIntoTheTable(columRowData){
        console.log('inputDataIntoTheTable Starts');
        let tabledata = JSON.parse(columRowData);
        console.log(tabledata);

        let myElement = this.template.querySelector('[data-id="pipelinetable"');
        console.log(myElement);
        let myElement2 = this.template.querySelector(`[data-id="${tabledata.tableId}"]`);
        //myElement2.colSpan=4;
        console.log('Element 2',myElement2);
        myElement2.textContent = '$ '+tabledata.totalAmount;
        console.log('inputDataIntoTheTable Ends');
    }


    createTableDynamically(){
       console.log("inside createTableDynamically method");
        let parentTag = this.template.querySelector(`[data-id="pipelineTableDynamicFromJS"]`);
        console.log(parentTag);
        let theadElement = this.template.querySelector(`[data-id="thead"]`);
        console.log(theadElement)

        let theadElement1 = this.template.querySelector(`[data-id="1-1"]`);
        theadElement1.classList.add('metric-header');
        console.log(theadElement1)


        //creating TR element
        let trElement = document.createElement('tr');
        trElement.classList.add('trhovercls');
        theadElement.appendChild(trElement);  //adding in theadTag

        //creating table data tag
        let td1 = document.createElement('td');
        td1.textContent = 'Columns 1';
        td1.colSpan = 2;
        td1.setAttribute('data-id', 'NhiBtaauga');
        trElement.appendChild(td1);
       
        


        let td2 = document.createElement('td');
        td2.textContent = 'Column 2';
        td2.classList.add('classcolor','allthandtd','allth','thhover');
        td2.setAttribute('data-id', 'BohoottHogya')
        td2.colSpan = 2;
        trElement.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = 'Column 3';
        td3.classList.add('classcolor');
        td3.colSpan = 2;
        td3.style.backgroundColor = 'purple'
        trElement.appendChild(td3);
       
    }
    createCssDynamically(){
        console.log("inside createTableDynamically method");

        let theadElement1 = this.template.querySelector(`[data-id="NhiBtaauga"]`);
        console.log('this is fetched data',theadElement1);
        console.log('this is fetched data -> id',theadElement1.getAttribute('data-id'));
        //fetchedData.classList.add('classcolor','allthandtd','allth','thhover');
        theadElement1.classList.add('metric-header');


        //already added component 
        let theadElement2 = this.template.querySelector(`[data-id="1-3"]`);
        console.log('this is already existing ->',theadElement2);
        theadElement2.classList.add('metric-header');
        console.log(theadElement2)

        //already added component 
        let theadElement3 = this.template.querySelector(`[data-id="BohoottHogya"]`);
        console.log('this is already existing ->',theadElement2);
        theadElement3.classList.add('metric-header');
        theadElement3.style.backgroundColor = 'purple'
        console.log(theadElement3)

    }

}