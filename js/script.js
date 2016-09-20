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
		
		


		for ( var i=0; i < slides.length; i++){
			var img = document.createElement('img');
			var title = document.createElement('span');
			var desc = document.createElement('p');

			var img_container = items[i].getElementsByClassName("item-image")[0];
			var caption = items[i].getElementsByClassName("item-caption")[0];
			var text = items[i].getElementsByClassName("item-text")[0];

			img.src = path + slides[i].name;
			img.alt = slides[i].caption;



			var title_text = document.createTextNode(slides[i].caption);
			var item_text = document.createTextNode(slides[i].text);

			title.appendChild(title_text);
			img_container.appendChild(img);
			caption.appendChild(title);
			text.appendChild(item_text);
			desc.appendChild(text);
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