let elem1 = document.querySelector("#Capa_1");
let elem2 = document.querySelector("#Capa2")

elem1.addEventListener("mouseover", function () {
	elem1.style.display = "none";
	elem2.style.display = "block";

	elem2.addEventListener("mouseout", () => {
		elem2.style.display = "none";
		elem1.style.display = "block";
	})
})


		//cards

let flips = document.querySelectorAll("#flip");

for (let flip of flips) {
	flip.addEventListener("click", () => {
		flip.classList.toggle("is-flipped")
	}) 
}

/*
flip.addEventListener("click", () => {
	flip.classList.toggle("is-flipped")
})
*/


/*
	//пока оставлю страдания

class Component {
	constructor(selector) {
		this.$el = document.querySelector(selector);
	}

	hide() {
		this.$el.addEventListener("click", () => {
			this.$el.style.display = "none";
		})

	}

	show() {
		this.$el.addEventListener("click", () => {
			this.$el.style.display = "block";
		})
	}
}


class Box extends Component {
	constructor(options) {
		super(options.selector)

		this.$el.style.width = this.$el.style.height = options.size + "px";
		this.$el.style.background = options.color;
		
	}

}

const box1 = new Box({
	selector: "#box1",
	size: 100,
	color: "red"
});

const box2 = new Box({
	selector: "#box2",
	size: 100,
	color: "green"
})

box1.hide();
box1.show();
*/
