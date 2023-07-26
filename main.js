a=[11,12,34,56,78,90,23,45];
b=["Apple","Orange","Banana","Mango"];
c=[{id:1,
	name:"pen",
	price:10,
	},
	{id:2,
	name:"pen",
	price:15,
	},
	{id:3,
	name:"pen",
	price:25,
	},
	{id:4,
	name:"pencil",
	price:5,
	},
	{id:5,
	name:"pencil",
	price:10,
	}];
	
	
	//for each
	console.log("for Each");
	console.log("a="+a);
	a.forEach(function(e){
						if(e%2==0){
							console.log(e);
						}		
						})
						
	
	//filter
	console.log("filter");
	var output=c.filter(function(e){
								return e.name=="pen";
		
	})
	console.log(output);
	
	//map
	console.log("map");
	console.log("b="+b);
	var output=b.map(function(e){
							return e.toUpperCase();
		
	})
	console.log(output);
	