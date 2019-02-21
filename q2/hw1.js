function myFunction(){
    document.getElementById("bname").value = document.getElementById("name").value;
    document.getElementById("bname").disabled=true;
    document.getElementById("baddress").value = document.getElementById("address").value;
    document.getElementById("baddress").disabled=true;
    document.getElementById("bcity").value = document.getElementById("city").value;
    document.getElementById("bcity").disabled=true;
    document.getElementById("bstate").value = document.getElementById("state").value;
    document.getElementById("bstate").disabled=true;
    document.getElementById("bzip").value = document.getElementById("zip").value;
    document.getElementById("bzip").disabled=true;
  }

  function myFunction1(){
    document.getElementById("bname").disabled=false;
    document.getElementById("baddress").disabled=false;
    document.getElementById("bcity").disabled=false;
    document.getElementById("bstate").disabled=false;
    document.getElementById("bzip").disabled=false;
  }