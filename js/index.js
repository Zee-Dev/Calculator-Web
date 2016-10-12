$("document").ready(function(){
  
  var entries = '';
  var expression = '';
  var reset = false;
  
  $("button").click(function(){
    var entryType = $(this).attr("type");
    var entry = $(this).attr("value");
    
    var cEntry = $("#current-entry");
    var exp = $("#expression");
    
    if(reset){
      cEntry.text("0");
      exp.text("0");
      reset = false;
    }
    
    switch(entryType){
      case "num":
        entries = entries + entry;
        cEntry.text(entries);
        break;
      case "op":
        expression += (entries + entry);
        entries = '';
        cEntry.text("0");
        exp.text(expression);
        break;
      case "eval":
        expression += cEntry.text();
        var newExpression = expression.replace("x", "*");
        var result = eval(newExpression).toFixed(2);
        cEntry.text(result + "");
        exp.text(expression + "=" + result);
        expression = "";
        entries = "";
        reset = true;
        break;
      default:
        if(entry == "ac"){
          expression = '';
          entries = '';
          cEntry.text("0");
          exp.text("0");
        }else{
          cEntry.text("0");
          entries = "";
        }
    }
    if(entries.length > 10){
          reset = true;
          cEntry.text("0");
          exp.text("Too many digits");
        }
    
  });
  
  
  
});