// Get the modal
var modal = document.getElementById("ViewDonationModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("btn-donation-details");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close-view-donation")[0];

try{
	if (btns != null)
	{
		for(btn of btns)
		{
			// When the user clicks on the button, open the modal
			btn.onclick = function() {
			  modal.style.display = "block";
			}

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			}
		}

	}
} catch(err){
	
}

