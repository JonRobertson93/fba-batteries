//run this code on every page...
checkUrl();

function checkUrl() {
	// Choose barcode type page
	if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/ssof/transfer-fn-confirm.html') != -1) {
	// If there are no options to choose from (Amazon Barcode Only)
		let text = document.querySelectorAll('td')[2].innerText;
		let textWords = text.split(" ");
		if (textWords[0] == "Amazon" && textWords[1] == "Barcode" && textWords[2] == "Only") {
			setTimeout(function() {
				console.log("AMAZON BARCODE ONLY");
				let saveButton = document.getElementsByName("Save & Continue")[0];
				saveButton.click();
			}, 500);
		}
	}

	//If on hazmat/battery page...
	if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/ssof/workflow/sendinventory.html/ref=ag_fbainventy_cont_fbaconfirm') != -1) {
		let hazmatParent = document.getElementsByClassName('open-declaration-form-link')[0];
		let hazmatLink = hazmatParent.firstElementChild.nextSibling;
		hazmatLink.addEventListener('click', noBatteries);
		hazmatLink.click();
	}

	if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/ssof/workflow/sendinventory.html/ref=ag_fbainventy_cont_fbainventy') != -1) {
		// click save & continue button
		setTimeout(function() {
			let saveButton = document.getElementsByName("Save & Continue")[0];
			saveButton.click();
		}, 500);	
	}

	if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/fba/inbound-plan-workflow/index.html#create') != -1) {
		setTimeout(function() {
			// If existing shipment exists...
			if (document.getElementById('fba-inbound-manifest-workflow-create-add-existing')) {
				let existingShipment = document.getElementById('fba-inbound-manifest-workflow-create-add-existing');
				existingShipment.click();
			}	
		}, 500);
		// test
		document.getElementById('save-manifest').addEventListener('click', function() {
			setTimeout(function() {
				let numberInputs = document.getElementsByClassName('update-number-cases');
				for (let x = 0; x < numberInputs.length; x++) {
				    if (!numberInputs[x].value) {
				        numberInputs[x].focus();
				    }
				}
			}, 4000);
		});	
	}

	// if (window.location.href.indexOf('https://sellercentral.amazon.com/gp/fba/inbound-plan-workflow/index.html') != -1) {
	// 	enterItemQty();
	// }
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

function enterItemQty() {
	setTimeout(function() {
		let numberInputs = document.getElementsByClassName('update-number-cases');
		for (let x = 0; x < numberInputs.length; x++) {
		    if (!numberInputs[x].value) {
		        numberInputs[x].focus();
		    }
		}
	}, 4000);
}
