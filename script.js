// URL : http://127.0.0.1:5500/index.html
let attractions;
//Setting attractions as a global variable
fetch('./attractions.json')
	.then(response => response.json())
	.then(data => {
		attractions = data;
	// 6-8 / Taking the data from the attractions.json file and then formating it to javascript format.
		console.log('attractions', attractions);
	// printing the attractions just to make sure all the files are here.
		var five = attractions.sort((a, b) =>(Number(a.Visitors) > Number(b.Visitors)));
		// creating a variable called five and assigning it to a sorted list of our attraction data.
		console.log(five);
		//printing the five to make sure our file is sorted correctly.
		five = five.slice(0,5);
		// slicing our array into our top five elements
		console.log(five);
		// printing the top five listed from the attraction list.
		renderBarChart(five);
		// activating the bar chart for our top five.

		//altering the drop down menu
		document.querySelector("select").addEventListener('change', (event) => {
			console.log(event.target.value);
			//printing the selected event that we are in. 
			var selectedAttr;
			//creating a var for our selected event.
			if(event.target.value === "all"){
				selectedAttr = attractions;
			}
			//assinging our selected attribute to attractions if we are selecting "all" as our event target value.
			else{
				selectedAttr = filterData(event.target.value);
				console.log(selectedAttr)
			}
			//otherwise call the filter data function to filter our attractions list that is limited to elements matching our event value target. 
			five = selectedAttr.sort((a,b) => (Number(a.Visitors) > Number(b.Visitors)));
			//after getting the elements of our selected event target value we want to get the top five so we sort it. 
			five = five.slice(0,5);
			//Then we slice it to get the top 5 elements.
			renderBarChart(five);
			// then we activate the barchart for those targeted top five elements. 
		})
	});

function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
	return attractions.filter(att => att.Category == category);

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
