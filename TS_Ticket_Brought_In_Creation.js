const formInfo = {};

window.addEventListener('load', function() {
  const form = document.getElementById('Form_TS_Ticket_Brought_In_Creation');

  form.addEventListener('submit', function (e) {
    console.log(e);
    e.preventDefault();
    const keys = Object.keys(e.currentTarget);

    for(let i=0; i< keys.length; i++) {
      const key = keys[i];
      const element = e.currentTarget[key];
      if (element.type !== 'submit') {
        const label = element.labels[0].childNodes[0].textContent;
        const value = element.value;

        formInfo[label] = value;
      }

    }

    console.log(formInfo)
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
