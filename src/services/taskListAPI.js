import axios from 'react-native-axios'; 

export async function taskListAPI() {
    const url = "https://api.myjson.com/bins/i64i5";
    console.log("sending request")
    
    // simulate an asynchronous operation
	return new Promise(function (resolve, reject) {
		axios.get(url)
	  	.then((response) => {
	  		console.log("====== TaskList API Response =====");
	  		
	  		if(response.status === 200)
	  	// 		// Map the JSON
	  			var data = response.data.map(function(item, index) {
				  return {
				    data: item.taskList,
				    title: item.createdOn
				  };
				});

	  			resolve(data);

	  	})
		.catch((error) => {
	  		console.log("axios error:",error);
	  		reject(null)
		});
	});   
} 