window.addEventListener('load', function() {
  //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
  let SearchURL = new URLSearchParams(document.location.search.substring(1));
  let JSON_Data_B64 = SearchURL.get("JSON_Data_B64");
  console.log(JSON_Data_B64);
  let JSON_Data = window.atob(JSON_Data_B64);
  console.log(JSON_Data);
  //need to use JSON.parse()
  for(let i=0;i<JSON_Data.length;i++) {
    const Form_ID = JSON_Data[i];
    console.log(Form_ID);
    const Form_Value = JSON_Data[i].value;
    console.log(Form_Value);
    document.getElementById(Form_ID).innerHTML = Form_Value;
  }

})
