//your JS code here. If required.

function getDomLevel() {
	const targetElement = document.getElementById("level");
	
	if (!targetElement) {
        alert("Element not found");
        return;
    }
	
	let level = 0;
	let current = targetElement;
	
	while (current) {
        level++;
        current = current.parentElement;
    }

    alert(`The level of the element is: ${level}`);

}

getDomLevel();