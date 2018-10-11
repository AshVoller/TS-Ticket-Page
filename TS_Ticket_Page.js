window.addEventListener('load', function() {
  //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
  const SearchURL = new URLSearchParams(document.location.search.substring(1));
  const JSON_Data_B64 = SearchURL.get("JSON_Data_B64");
  console.log(JSON_Data_B64);
  const JSON_Data = window.atob(JSON_Data_B64);
  console.log(JSON_Data);
  //converting JSON_Data back into Form_Data
  const Form_Data = JSON.parse(JSON_Data);
  console.log(Form_Data);
  for(let i=0;i<Object.keys(Form_Data).length;i++) {
    let Form_Label = Object.keys(Form_Data)[i];
    console.log(Form_Label);
    let Form_Value = Form_Data[Form_Label];
    console.log(Form_Value);
    //console.log(Form_Data[Form_Label]);
    //console.log(Object.values(Form_Key).toString());
    //const Form_Value = Form_Data[Form_Key].value;
    //console.log(Form_Value);
    document.getElementById(Form_Label).innerHTML = Form_Value;
  }

})
