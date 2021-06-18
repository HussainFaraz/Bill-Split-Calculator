//proceed button se sirf expand kru
//calculate button se unka data array mei dalu
// namearr.push($('name'+(i+1)).val())
// amountarr.push($('amount'+(i+1)).val())
//    for( var i=0;i<number_of_people;i++)
//       {
//          namearr.push(toString($('#name'+(i+1)).val()))
//          amountarr.push(Number($('#amount'+(i+1)).val()))
//
//       }

   //arrays to store Name and Amount entered by the user
    var namearr = [];
    var amountarr =[];
    var finalarr=[];
    var number_of_people,addingSpace,addingSpace1
    document.getElementById('buttonUser').disabled = true
function  CalculateUser()
{
        //Creating input field for the number of people entered by the user
    number_of_people = Number(document.getElementById('numberofpeople').value)
    total_bill = Number(document.getElementById('totalbill').value)
    if(number_of_people=='' || total_bill =='' || number_of_people<0)
    {
        alert("Please enter details")
    }

    else{
        document.getElementById('buttonUser').disabled = false
    // to disable the button after one click
    document.getElementById('buttonUserDetails').disabled = true

   
    for( var i=0;i<number_of_people;i++)
    {
        addingSpace=document.createElement("br")
        var name = document.createElement("label")
        name.innerHTML="Name"+(i+1)+": "
        name.setAttribute("id","name"+(i+1))
        var input  = document.createElement("input")
        input.type="text"
        Name.appendChild(addingSpace);
        Name.appendChild(name);
        Name.appendChild(input);
        Name.appendChild(document.createElement("br"));


        addingSpace1=document.createElement("br")
        var amount = document.createElement("label")
        amount.innerHTML="Amount" + (i+1)+": "
        amount.setAttribute("id","amount"+(i+1))
        var individual_amount = document.createElement("input")
        individual_amount.type="number"
        Amount.appendChild(addingSpace1);
        Amount.appendChild(amount);
        Amount.appendChild(individual_amount);
        Amount.appendChild(document.createElement("br"));


    }
}
}
// this function will refresh the page
function refreshPage(){
    window.location.reload();
}

function CalculateBill() {

    var total_bill = Number(document.getElementById('totalbill').value)
    var number_of_people = Number(document.getElementById('numberofpeople').value)
    var individual_amount = total_bill / number_of_people
    var form = document.getElementById("form1").elements;
  
   for(var i = 4; i < form.length; i++){
	if(form[i].type == 'text'){

        if(form[i].value == '')
        {
            alert("Please enter details")
            return
        }
		namearr.push(form[i].value)
    
    }
	else
    {
        if(form[i].value == '')
        {
            alert("Please enter details")
            return
        }
        amountarr.push(form[i].value)
    }
}



         if(total_bill=='' || total_bill==0)
    {
        alert("Please enter some amount")

    }
     if(number_of_people=='' || number_of_people==0)
    {
        alert("Number of people should be greater than 0")
        document.getElementById('head3').innerHTML="Number of people should be greater than 0"
    }


  for( var i=0;i<number_of_people;i++)
    {
      

      if(amountarr[i]<individual_amount)
      {
          finalarr.push(namearr[i]+"  should pay Rs.  " + (individual_amount-amountarr[i]))
      }
      else if(amountarr[i]>individual_amount)
      {
          finalarr.push(namearr[i] + "  should receive Rs.  " + (amountarr[i]-individual_amount))
      }
      else
      {
          finalarr.push("Balance clear for  " + namearr[i])
      }
    }

    
  
        document.getElementById('head3').innerHTML="Rs." + individual_amount + " each." 
        document.getElementById("head3").innerHTML += "<br>";
        document.getElementById("head3").innerHTML += finalarr 
        document.getElementById('buttonUser').disabled = true




      
 
}



