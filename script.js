//run the first two lines of code on every page...
checkUrl();


// TODO - Auto complete the page before this

function checkUrl() {
	//If on hazmat/battery page...
	if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/ssof/workflow/sendinventory.html/ref=ag_fbainventy_cont_fbaconfirm') != -1) {
		let hazmatParent = document.getElementsByClassName('open-declaration-form-link')[0];
		let hazmatLink = hazmatParent.firstElementChild.nextSibling;
		hazmatLink.addEventListener('click', noBatteries);
		hazmatLink.click();
	}

	if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/ssof/workflow/sendinventory.html/ref=ag_fbainventy_cont_fbainventy') != -1) {
		// click save & continue button after 1 second
		setTimeout(function() {
			let saveButton = document.getElementsByName("Save & Continue")[0];
			saveButton.click();
		}, 1000);	
	}

	if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/fba/inbound-plan-workflow/index.html#create') != -1) {
		setTimeout(function() {
			// If existing shipment exists...
			if (document.getElementById('fba-inbound-manifest-workflow-create-add-existing')) {
				let existingShipment = document.getElementById('fba-inbound-manifest-workflow-create-add-existing');
				existingShipment.click();
				// Select existing shipment from dropdown
				setTimeout(function() {
					document.getElementsByName('manifest-name-select')[0].selectedIndex = 1;
				}, 500);
				
				// Submit form
				document.getElementById('save-manifest').click();
			}	
		}, 500);
	}
}

// TODO - Auto complete the page after this



function noBatteries() {
	// click first No (contains batteries)
	let firstNo = document.getElementsByName("BatteryMain.0")[3];
	firstNo.checked = true;

	// click second No (hazmat disposal)
	let secondNo = document.getElementsByName("HazmatMain.0")[4];
	secondNo.checked = true;

	// click submit button
	let submit = document.getElementsByName('popup_submit')[1];
	submit.click();
	
}