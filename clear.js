

function clear_all(){
    const clear = confirm("You want to clear all?");

    if(clear==true){
      $("#firstName").html("");
      $("#lastName").html("");
      $("#emailAddress").html("");
      $("#contactNumber").html("");
      $("#birthDate").html("");
      $("#co").html("");
      $("#st").html("");
      $("#di").html("");
      $("#gen").html("");
      $("#pri_result").html("");
    }
};

