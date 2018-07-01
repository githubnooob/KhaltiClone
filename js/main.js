$(document).ready(()=>
{
	var movieApiKey1 = "http://www.omdbapi.com/?s=";
	var movieApiKey2 = "&apikey=a05f0775";
	$('.search').click((event)=>{
		console.log(event);
		event.preventDefault();
		let value = $('.form').val();
		let searchVal = movieApiKey1+value+movieApiKey2;
		console.log(searchVal);

		axios.get(searchVal)
		   .then(function (response) {
		   		console.log(response);	 
		   		let movies = response.data.Search;
		   		let output = ""; 
		   		console.log(response.data.Title)
		   		console.log(response.data);	 
		   		$.each(movies,function(index, movie){
		   			console.log(movie.Title);
		   			output+= `
		   				<div class='col-sm-3 col-md-4 col-lg-4'>
		   					<div class='text-center movieDes'>
			   					<h5 class='movieTitle'> ${movie.Title} </h5> 		   	 
			   					<img class='img-responsive' style='width:200px; height:200px;' src='${movie.Poster}'>
			   					<p>IMDb Rating: ${movie.imdbRating} </p>  
			   					<button class="btn btn-primary"> Get More Info </ button> 		
		   				 	</div>
		   				 </div>	
		   			`;
		   		});

		   		$('.movieContainer').html(output);
		   
		   })
		   .catch(function (error) {
		     console.log(error);
		   });

	});
});