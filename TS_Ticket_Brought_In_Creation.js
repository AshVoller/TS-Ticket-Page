const Form_Data = {};
const Form_List = [
  //list of id we need values from
  'Technician_ID_Number',
  'Type_Of_Technician',
  'Customer_Name',
  'Customer_Phone',
  'Customer_Email',
  'PID',
  'Box_Type',
  'Box_Source',
  'Date_Accquired',
  'Current_OS',
  'Additional_Items_Checked_In',
  'Summary_Of_Issue',
  'Backup_Data',
  'Quoted_Price',
  'Detailed_Description_Of_Issue'
];

window.addEventListener('load', function() {
  const form = document.getElementById('Form_TS_Ticket_Brought_In_Creation');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    for(let i=0;i<Form_List.length;i++) {
      const Form_Label = Form_List[i];
      const Form_Value = document.getElementById(Form_List[i]).value;
      Form_Data[Form_Label] = Form_Value;
    }
    console.log(Form_Data);
    //converting Form_Data into JSON object
    let JSON_Data = JSON.stringify(Form_Data);
    console.log(JSON_Data);
    //See https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
    let JSON_Data_B64  = window.btoa(JSON_Data)
    console.log(JSON_Data_B64);

    window.location.href = "TS_Ticket_Page.html/?JSON_Data_B64=" + JSON_Data_B64;
  })
})
/*
var Client_ID
var Tech_First_Name
var Tech_Last_Name
var Type_Of_Tech

var Customer_First_Name
var Customer_Last_Name
var Customer_Phone
var Customer_Email

var PID
var Box _Type
var Box_Source
var Date_Accquired
var Current_OS
var Additional_Items_Checked_In

var Summary_Of_Issue
var Detailed_Description_Of_Issue
var Backup_Data
var Quoted_Price
*/
