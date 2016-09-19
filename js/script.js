var path = 'images/';
var slides = [ 


 {
	name: '01.jpg',
	caption: '01',
	date: new Date("October 13, 2014 11:13:00"),
	text: "Lorem ipsum dolor..."
},

 {
	name: '02.jpg',
	caption: '02',
	date: new Date("October 13, 2014 11:13:00"),
	text: "Lorem ipsum dolor..."
},

 {
	name: '03.jpg',
	caption: '03',
	date: new Date("October 13, 2014 11:13:00"),
	text: "Lorem ipsum dolor..."
},

 {
	name: '04.jpg',
	caption: '04',
	date: new Date("October 13, 2014 11:13:00"),
	text: "Lorem ipsum dolor..."
}

];


var prev = document.getElementsByClassName("navigation-prev")[0];
var next = document.getElementsByClassName("navigation-next")[0];

function init(){
		var items = document.getElementsByClassName("item-container");
		for (i=0; i < slides.length; i++){
			var img = document.createElement('img');
			img.src = path + slides[i].name;
			img.alt = slides[i].caption;

			var img_container = items[i].getElementsByClassName("item-image")[0];
			img_container.appendChild(img);
		}

		next.addEventListener("click", goNext);
		prev.addEventListener("click", goPrev);
}

function goNext(){
	console.log("next");
}

function goPrev(){
	console.log("previously");
}






document.addEventListener("DOMContentLoaded", init);