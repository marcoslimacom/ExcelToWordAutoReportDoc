---
id: how-to-use
title: How to use
sidebar_label: How to use
---

## Requirements

Before continuing, ensure that all [requirements](requirements.md) are met. Access this [link](requirements.md).

## Generate Reports

### Open the src folder

![Open the src folder](/docs/ExcelToWordAutoReport/img/how-to-use-open-src.png "Open the src folder")

### Run start.bat

![Run start.bat](/docs/ExcelToWordAutoReport/img/how-to-use-open-start.png "Run start.bat")

![App started](/docs/ExcelToWordAutoReport/img/how-to-use-app-started.png "App started")

### Access the application through the browser.

Open your web browser and access the URL [http://localhost:5000](http://localhost:5000).
![Access the application through the browser](/docs/ExcelToWordAutoReport/img/how-to-use-open-brower.png "Access the application through the browser")

### Generate the report

1. Expand the API `/api/Reporting/GenerateReport` and click on the `Try it out` button.
   ![Open the api and-click on try it out](/docs/ExcelToWordAutoReport/img/how-to-use-open-api-and-click-on-try.png "Open the api and-click on try it out")

1. Select in the OutputType input which type of document the reports will be generated.<br />
   Default option `-- -> PDF`<br />
   Option `1 -> PDF`<br />
   Option `2 -> Word`<br />
   ![Open the api and-click on try it out](/docs/ExcelToWordAutoReport/img/how-to-use-choose-the-format.png "Open the api and-click on try it out")

1. Select the files for the `excelfile` and `wordTemplatefile` inputs.
   ![Select the files](/docs/ExcelToWordAutoReport/img/how-to-use-select-the-files.png "Select the files")<br />
   Open the `sample files` folder.<br/>
   ![Open the sample files folder](/docs/ExcelToWordAutoReport/img/how-to-use-open-sample-files.png "Open the sample files folder")<br/>
   Select the files in their respective inputs.<br/>
   ![Select the files in their respective inputs](/docs/ExcelToWordAutoReport/img/how-to-use-selects-word-and-excel-files.png "Select the files in their respective inputs")

1. Click on `Execute` and wait for the execution to finish.
   ![Click on "execute" and wait for the execution to finish](/docs/ExcelToWordAutoReport/img/how-to-use-click-execute.png "Click on "execute" and wait for the execution to finish")

1. Click on the `Download file` link and download the reports (Zipped).
   ![Click on the Download file link ](/docs/ExcelToWordAutoReport/img/how-to-use-click-download-file.png "Click on the Download file link")
   Generated reports.<br/>
   ![Generated reports](/docs/ExcelToWordAutoReport/img/how-to-use-generated-files.png "Generated reports")<br/>

## Syntax

### Date

- Options<br/>
  `Year`, `MonthFullName`, `MonthShortName`, `MonthNumber`, `Month`, `DayNumber`, `DayShortName`, `DayFullName`, `Day`
- Examples<br/>
  ```javascript
  {{Date:DayFullName, DayNumber MonthShortName Year}} // Monday, 7 Apr 2020
  {{Date:DayShortName, DayNumber MonthShortName Year}} // Mon, 7 Apr 2020
  {{Date:Month/Day/Year}} // 07/04/2020
  {{Date:MonthNumber/DayNumber/Year}} // 7/4/2020
  {{Date:MonthFullName DayNumber, Year}} // April 7, 2020
  ```

### Sheet

- Examples<br/>
  ```javascript
  {{Sheet:SheetName}} // Copy the entire contents of the "SheetName" sheet and paste it into the report.
  {{Sheet:SheetName[AsAImage]}} // Copy the entire contents of the sheet "SheetName" and paste it as an image in the report.
  {{Sheet:SheetName|A1:F8}} // Copy the content between row A1 and column F8 of the sheet "SheetName" and paste it into the report.
  {{Sheet:SheetName|A1:F8[AsAImage]]}} // Copy the content between row A1 and column F8 of the sheet "SheetName" and paste it as an image in the report.
  {{Sheet:SheetName|=FORMULASTRING}} // Execute the formula (Same syntax as excel) and paste it into the report
  ```

### User

The User option is activated when a sheet named Users exists in the input Excel file. A report will be generated for each row of the sheet named Users.
Therefore, in the syntax it is only necessary to inform the name of the column.

- Sheet Users<br />
  ![Excel - Users sheet](/docs/ExcelToWordAutoReport/img/how-to-use-excel-user-sheet.png "Excel - Users sheet")

- Example<br/>
  ```javascript
  {{User:first_name}} // It will paste the user's first name. It will be done with each report (4 reports).
  {{User:last_name}} // It will paste the user's last name. It will be done with each report (4 reports)
  {{User:country}} // It will paste the user's country. It will be done with each report (4 reports)
  ```

## Word Templates

Any type of word document [See requirements](requirements.md)) can be an input template file, just add the Date, Sheet or User markings. To know more about the syntax of each markup click [here](#syntax).

All markings used within a template use data from the excel file. So if you use a markup in this format `{{Sheet: Coronavirus-2020-04-06|=TEXT(A1,"0")}}`, the report that will be generated and will have the place where the markup was entered, will be inserted information from cell `A1` of the `Coronavirus-2020-04-06` sheet.

### Example

Note that in this example the markings are underlined in red.<br />
![Word template](/docs/ExcelToWordAutoReport/img/how-to-use-word-template.png "Word template")

### Example with graphics

In the graphics you insert in the word there is a built-in excel. It is also possible to add the markings. Here is an example:<br />
![Word template](/docs/ExcelToWordAutoReport/img/how-to-use-add-data-in-charts.png "Word template")

### Final result (Report generated)

![Generated report part 1](/docs/ExcelToWordAutoReport/img/how-to-use-generated-file-part-1.png "Generated report part 1")

## Excel Data

It is very important that the excel file that will be used to be the data input for the report, be it a file that does not do any other function, only has the necessary data for the report. This guarantees better performance when generating reports.<br />

- Example<br /><br />
  ![Coronavirus sheet](/docs/ExcelToWordAutoReport/img/how-to-use-excel-coronavirus-sheet.png "Coronavirus sheet")

## Examples

Create sample reports with the [Generate Report](#generate-reports) step by step.
