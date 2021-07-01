const saveNotesButton = document.getElementById("bt");

 saveNotesButton.addEventListener("click" , function(){
    console.log("btn notes clicked");

   const msg = document.getElementById('notes');

   // This variable stores all the data.
   let data =
       'Meeting Notes: ' + msg.value;

   // Convert the text to BLOB.
   const textToBLOB = new Blob([data], { type: 'text/plain' });
   const saveFileName = 'MTeamsNotes.txt';	   // The file to save the data.

   let newLink = document.createElement("a");
   newLink.download = saveFileName;

   if (window.webkitURL != null) {
       newLink.href = window.webkitURL.createObjectURL(textToBLOB);
   }
   else {
       newLink.href = window.URL.createObjectURL(textToBLOB);
       newLink.style.display = "none";
       document.body.appendChild(newLink);
   }
 
   msg.value = "";
   newLink.click();

 });

