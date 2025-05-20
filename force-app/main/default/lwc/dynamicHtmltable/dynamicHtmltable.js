import { LightningElement } from 'lwc';
//import getMetaMethod from '@salesforce/apex/OpportunityReportController.getMetaDataRecords';
import getOpportunitiesData from '@salesforce/apex/OpportunityReportController.getOpportunitiesData';

export default class DynamicHtmltable extends LightningElement {

    connectedCallback() {
        //this.fetchDataForTable();
        console.log('Method reateTableDynamically');
        //this.tableCreationOnDataBasisOfMetaData();
        console.log('Deployyed reateTableDynamically');

    }

    jsonWeRecieveFromApex = [
            {
                "row": 0,
                "data": [{
                    "label": "-",
                    "rowHeader": false,
                    "fieldId": "0-0",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                },
                {
                    "label": "Total Pipeline (inc. Juno)",
                    "rowHeader": false,
                    "fieldId": "0-1",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                },
                {
                    "label": "Total Pipeline (excl. Juno)",
                    "rowHeader": false,
                    "fieldId": "0-2",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                },
                {
                    "label": "UK",
                    "rowHeader": false,
                    "fieldId": "0-3",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                },
                {
                    "label": "Germany",
                    "rowHeader": false,
                    "fieldId": "0-4",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                },
                {
                    "label": "Ireland",
                    "rowHeader": false,
                    "fieldId": "0-5",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                },
                {
                    "label": "Vodacom",
                    "rowHeader": false,
                    "fieldId": "0-6",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                },
                {
                    "label": "Other/Details",
                    "rowHeader": false,
                    "fieldId": "0-7",
                    "PercentageReq": false,
                    "stage": "Not Required",
                    "columnHeader": true,
                    "where": "",
                    "table": "Account Pipeline Analysis Controller"
                }
                ]
            },
            {
              "row": 1,
               "data":[{
                "label": "Value (thousands)",
                "rowHeader": true,
                "fieldId": "1-0",
                "PercentageReq": false,
                "stage": "Not Required",
                "columnHeader": false,
                "where": "",
                "table": "Account Pipeline Analysis Controller"
            }, 
            {
                "label": "Value (thousands)-Total Pipeline (inc. Juno)",
                 "rowHeader": false,
                 "fieldId": "1-1",
                 "PercentageReq": false,
                 "stage": "Not Required",
                 "header": "Not Required",
                 "columnHeader": false,
                 "where": "",
            },
            {
                "label": "Value (thousands)-Total Pipeline (excl. Juno)",
                "rowHeader": false,
                "fieldId": "1-2",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE VOIS_SF_source__c != 'JGTM'"
            },
            {
                "label": "Value (thousands)-UK",
                "rowHeader": false,
                "fieldId": "1-3",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'UK'"
            },
            {
                "label": "Value (thousands)-Germany",
                "rowHeader": false,
                "fieldId": "1-4",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Germany'"
            },
            {
                "label": "Value (thousands)-Ireland",
                "rowHeader": false,
                "fieldId": "1-5",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Ireland'"
            },
            {
                "label": "Value (thousands)-Vodacom",
                "rowHeader": false,
                "fieldId": "1-6",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Vodacom'"
            },
            {
                "label": "Value (thousands)-Others/Details",
                "rowHeader": false,
                "fieldId": "1-7",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name NOT IN ('UK','Ireland','Germany','Vodacom')"
            }]
        },
        {
                "row": 2,
                "data":[{
                "label": "Won",
                "rowHeader": true,
                "fieldId": "2-0",
                "PercentageReq": false,
                "stage": "Not Required",
                "columnHeader": false,
                "where": "",
            }, 
            {
                "label": "Won-Total Pipeline (inc. Juno)",
                "rowHeader": false,
                "fieldId": "2-1",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "Where StageName = 'Close Won'",
            },
            {
                "label": "Won-Total Pipeline (excl. Juno)",
                "rowHeader": false,
                "fieldId": "2-2",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE VOIS_SF_source__c != 'JGTM' And StageName = 'Close Won'"
            },
            {
                "label": "Won-UK",
                "rowHeader": false,
                "fieldId": "2-3",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'UK' And StageName = 'Close Won'"
            },
            {
                "label": "Won-Germany",
                "rowHeader": false,
                "fieldId": "2-4",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Germany' And StageName = 'Close Won'"
            },
            {
                "label": "Won-Ireland",
                "rowHeader": false,
                "fieldId": "2-5",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Ireland' And StageName = 'Close Won'"
            },
            {
                "label": "Won-Vodacom",
                "rowHeader": false,
                "fieldId": "2-6",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Vodacom' And StageName = 'Close Won'"
            },
            {
                "label": "Won-Others/Details",
                "rowHeader": false,
                "fieldId": "2-7",
                "PercentageReq": false,
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name NOT IN ('UK','Ireland','Germany','Vodacom') And StageName = 'Close Won'"
            }
            ]
        }
        ,
        {
                "row": 2,
                "data":[{
                "label": "Qualification",
                "rowHeader": true,
                "fieldId": "3-0",
                "PercentageReq": false,
                "PercentageCompField":"1-0",
                "stage": "Not Required",
                "columnHeader": false,
                "where": "",
            }, 
            {
                "label": "Qualification-Total Pipeline (inc. Juno)",
                "rowHeader": false,
                "fieldId": "3-1",
                "PercentageReq": true,
                "PercentageCompField":"1-1",
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "Where StageName != 'Identify'",
            },
            {
                "label": "Qualification-Total Pipeline (excl. Juno)",
                "rowHeader": false,
                "fieldId": "3-2",
                "PercentageReq": true,
                "PercentageCompField":"1-2",
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE VOIS_SF_source__c != 'JGTM' And StageName != 'Identify'"
            },
            {
                "label": "Qualification-UK",
                "rowHeader": false,
                "fieldId": "3-3",
                "PercentageReq": true,
                "PercentageCompField":"1-3",
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'UK' And StageName != 'Identify'"
            },
            {
                "label": "Qualification-Germany",
                "rowHeader": false,
                "fieldId": "3-4",
                "PercentageReq": true,
                "PercentageCompField":"1-4",
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Germany' And StageName != 'Identify'"
            },
            {
                "label": "Qualification-Ireland",
                "rowHeader": false,
                "fieldId": "3-5",
                "PercentageReq": true,
                "PercentageCompField":"1-5",
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Ireland' And StageName != 'Identify'"
            },
            {
                "label": "Qualification-Vodacom",
                "rowHeader": false,
                "fieldId": "3-6",
                "PercentageReq": true,
                "PercentageCompField":"1-6",
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name = 'Vodacom' And StageName != 'Identify'"
            },
            {
                "label": "Qualification-Others/Details",
                "rowHeader": false,
                "fieldId": "3-7",
                "PercentageReq": true,
                "PercentageCompField":"1-7",
                "stage": "Not Required",
                "header": "Not Required",
                "columnHeader": false,
                "where": "WHERE Account.Name NOT IN ('UK','Ireland','Germany','Vodacom') And StageName != 'Identify'"
            }
            ]
        }
    ]

    fetchDataMataData() {

    }

    fetchDataForTable() {
        console.log('FetchDataForTable Starts');
        const promisesTotableData = [];
        /*this.jsonWeRecieveFromApex.forEach(element => {
            if (element.columnHeader == false && element.rowHeader == false) {
                promisesTotableData.push(getOpportunitiesData({ objectname: 'Opportunity', whereCondition: element.where, TableId: element.fieldId }));
            }

        })*/
        this.jsonWeRecieveFromApex.forEach(row => {  
            row.data.forEach(cell => {
                if (cell.columnHeader == false && cell.rowHeader == false) {
                    promisesTotableData.push(getOpportunitiesData({ objectname: 'Opportunity', whereCondition: cell.where, TableId: cell.fieldId }));   
                }
            }
            )}
        );
        Promise.all(promisesTotableData)
            .then(results => {
                this.accountDetails = results; // Store the results
                console.log('Got the Results', this.accountDetails);
                results.forEach(element => {
                    console.log('Calling');
                    this.inputDataIntoTheTable(element);
                    console.log('called');

                });
            })
            .catch(error => {
                this.error = error;
                console.log('Error while fetching data', error);

            });
        console.log('FetchDataForTable Ends');
    }

    inputDataIntoTheTable(columRowData) {
        console.log('inputDataIntoTheTable Starts');
        let tabledata = JSON.parse(columRowData);
        console.log(tabledata);
        let myElement2 = this.template.querySelector(`[data-id="${tabledata.tableId}"]`);
        console.log('Element 2', myElement2);
        myElement2.textContent = '$ ' + tabledata.totalAmount;
        console.log('inputDataIntoTheTable Ends');
    }

    tableCreationOnDataBasisOfMetaData() {
        console.log('Table Creation Starts');        
        this.jsonWeRecieveFromApex.forEach(row => {
            
            console.log(`Row ${row.row}:`);
            let whatToFetch =  row.row == 0 ? 'thead' : 'tbody';  
            let theadOrBodyElement =  this.template.querySelector(`[data-id="${whatToFetch}"]`);
            let tableRow = document.createElement('tr');
            console.log("this is Tbody or thead", theadOrBodyElement);
            console.log('this is newly created row', tableRow);
            
            row.data.forEach(cell => {
                let createTdOrThElement = cell.columnHeader == true ? 'th' : 'td';
                let trOrtdElement = document.createElement(createTdOrThElement) 
                console.log('this is newly created Colums', tableRow);
            
                trOrtdElement.textContent = cell.label;
                trOrtdElement.setAttribute('data-id', cell.fieldId);
                if(cell.columnHeader == true){
                    this.cssUpdateForThElementTH(trOrtdElement,cell.label,cell.fieldId);
                }
                else if(cell.rowHeader == true){
                    this.cssUpdateForThElementMetricColumn(trOrtdElement,cell.label,cell.fieldId);    //adding Columns in Table Row
                }
                else{
                    if(cell.PercentageReq == true){
                        let trOrtdElement2 = document.createElement(createTdOrThElement)
                        this.cssUpdateForThElementTD(trOrtdElement,cell.label,cell.fieldId+'Percentage',1);
                        this.cssUpdateForThElementTD(trOrtdElement2,cell.label,cell.fieldId,1);
                        tableRow.appendChild(trOrtdElement2);
                    }
                    else{
                        this.cssUpdateForThElementTD(trOrtdElement,cell.label,cell.fieldId,2);  //adding Columns in Table Row
                    }
                    
                }
                tableRow.appendChild(trOrtdElement);    //adding Columns in Table Row
                })
                theadOrBodyElement.appendChild(tableRow);  //adding columns in tBody or tHead element
            });
    }


    
    cssUpdateForThElementTH(element,label,fieldId) { //add somevaribale for text content and colSpan
        console.log("inside createTableDynamically method");
        // CSS properties applied in JavaScript
        element.style.border = '1px solid #ddd';       // Border property
        element.style.padding = '10px 12px';          // Padding
        element.style.textAlign = 'left';             // Text alignment
        element.style.fontSize = '0.9em';             // Font size
        element.style.backgroundColor = '#000000'; // Background color
        element.style.color = '#ffffff';           // Font color (the later `color` value will override the earlier one)
        element.style.cursor = 'pointer';         // Pointer cursor on hover
        element.style.position = 'relative';      // Relative positioning
        //this will be updated on the basis of the data
        element.colSpan = 2;
        element.textContent = label;
        element.setAttribute('data-id', fieldId);
    }

    cssUpdateForThElementTD(element,label,fieldId,setColSpan) { //add somevaribale for text content and colSpan
        console.log("inside createTableDynamically method");
        // CSS properties applied in JavaScript
        element.style.border = '1px solid #ddd';       // Border property
        element.style.padding = '10px 12px';          // Padding
        element.style.textAlign = 'left';             // Text alignment
        element.style.fontSize = '0.9em';             // Font size
        //this will be updated on the basis of the data
        element.colSpan = setColSpan;
        element.textContent = label;
        element.setAttribute('data-id', fieldId);
    }

    cssUpdateForThElementMetricColumn(element,label,fieldId) { //add somevaribale for text content and colSpan
        console.log("inside createTableDynamically method");
        // CSS properties applied in JavaScript
        element.style.border = '1px solid #ddd';       // Border property
        element.style.padding = '10px 12px';          // Padding
        element.style.textAlign = 'left';             // Text alignment
        element.style.fontSize = '0.9em';             // Font size
        element.style.backgroundColor = '#ff3300'; // Background color (orange)
        element.style.color = '#ffffff';           // Text color (white overrides the earlier #333)
        element.style.fontWeight = 'bold';         // Bold text
        element.colSpan = 2;
        //this will be updated on the basis of the data
        element.textContent = label;
        element.setAttribute('data-id', fieldId);
    }

    /*
    createTableDynamically() {
        console.log("inside createTableDynamically method");

        let theadElement = this.template.querySelector(`[data-id="thead"]`);
        console.log(theadElement)

        //creating TR element
        let trElement = document.createElement('tr');
        trElement.classList.add('trhovercls');
        theadElement.appendChild(trElement);  //adding in theadTag

        //creating table data tag
        let th1 = document.createElement('th');
        th1.setAttribute('data-id', 'NhiBtaauga');
        this.cssUpdateForThElementTH(th1);
        trElement.appendChild(th1);

        let td2 = document.createElement('td');
        td2.textContent = 'Column 2';
        td2.setAttribute('data-id', 'BohoottHogya')
        this.cssUpdateForThElementTD(td2);
        trElement.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = 'Column 3';
        td3.classList.add('classcolor');
        this.cssUpdateForThElementMetricColumn(td3);
        trElement.appendChild(td3);

    }
    createCssDynamically() {
        console.log("inside createTableDynamically method");

        let theadElement1 = this.template.querySelector(`[data-id="NhiBtaauga"]`);
        console.log('this is fetched data', theadElement1);
        console.log('this is fetched data -> id', theadElement1.getAttribute('data-id'));
        //fetchedData.classList.add('classcolor','allthandtd','allth','thhover');
        theadElement1.classList.add('metric-header');


        //already added component 
        let theadElement2 = this.template.querySelector(`[data-id="1-3"]`);
        console.log('this is already existing ->', theadElement2);
        theadElement2.classList.add('metric-header');
        console.log(theadElement2)

        //already added component 
        let theadElement3 = this.template.querySelector(`[data-id="BohoottHogya"]`);
        console.log('this is already existing ->', theadElement2);
        theadElement3.classList.add('metric-header');
        theadElement3.style.backgroundColor = 'purple'
        console.log(theadElement3)

    } */


}