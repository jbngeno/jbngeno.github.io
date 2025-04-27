// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
     console.log("Fetching grade data...");
	 // Creat a new request for HTTP data 
	 let xhr = new XMLHttpRequest();
	 // THis is hte address on the machine we're asking for data 
	 let apiRoute = "/api/grades";
	 // When the request changes status, we run this anonyous function 
	 xhr.onreadystatechange = function (){
		 let results;
		 // Check if we're done 
		 if(xhr.readyState === xhr.done){
			 //check if we're sucessful
		 if (xhr.status !== 200){
			 console.error(`could not get grades.
			     Status:' ${xhr.status}`);
		 }
		 // And then call the function to update the HTML with our data 
		 populateGradebook(JSON.parse(xhr.responseText));
	     }
    }
	// fetchGradeData.bind(this);
    //xhr.open("get",apiRoute,true);
    xhr.open("get", apiRoute, true);
    xhr.send();	
} 

// TODO: Populate the table with grade data
function populateGradebook(data) {
     // This function will take the fetched grade data and populate the table
     console.log("Populating gradebook with data:", data);
	 let tableElm = document.getElementById("gradebook"); // get the gradebook table element 
	   data.forEach(function(assignment){ // For each row of data we're passed in 
	   let row = document.createElement("tr"); // create a table row element 
	   let columns = []; // Handy place to stick the columns of information 
	   columns.name = document.createElement('td'); // the first column's table data will be the name
	   columns.name.appendChild = document.createTextNode(assignment.last_name + "," + assignment.first_name);  // Concatenate the full name;  "last_name, first_name"
	    
		// Add the table data columns to the table row 
		row.appendChild(columns.name);
		row.appendChild(columns.grade);
		// Add the row to the table itself to make the data visible
		tableElm.appendchild(row);
	   });
}

// TODO REMOVE THIS 
// Call the stubs to demonstratte the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE
