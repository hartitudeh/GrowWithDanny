const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("../images/testimonials/daniel.jpg")',
		name: "Master Daniel",
		profession: "WRITER",
		description: "The Ghost Writer course is incredibly thorough and well-structured. It covers everything from the basics to advanced techniques, with plenty of practical exercises. The feedback from instructors has been invaluable in improving my writing. This course has opened up new opportunities for me as a professional writer."
	},

	{
		photo:
			"url('../images/testimonials/david.jpg')",
		name: "Master Mfon David",
		profession: "WRITER",
		description: "The AKDP course exceeded my expectations in every way. The detailed modules and real-world applications have significantly improved my knowledge and expertise. The support from the course instructors and the community is unparalleled. This course is a must for anyone serious about professional development."	
	},

	{
		photo:
			"url('../images/testimonials/herry.jpg')",
		name: "Miss Herry",
		profession: "WRITER",
		description: "Enrolling in the CIIM course was one of the best decisions I've made. The course content is thorough and up-to-date with current industry trends. The interactive sessions and practical assignments have greatly enhanced my skills. I feel more equipped than ever to tackle challenges in my career. Highly recommended!"
	},

	{
		photo:
			"url('../images/testimonials/naomi.jpg')",
		name: "Miss Naomi Okon",
		profession: "WRITER",
		description: "The Ghost Writer course has transformed my writing abilities. The in-depth lessons and constructive feedback have helped me hone my craft and understand the intricacies of ghostwriting. The course structure is clear and engaging, making learning a pleasure. I now feel confident to take on ghostwriting projects professionally."
	},

	// {
	// 	photo:
	// 		"url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
	// 	name: "Julius Grohn",
	// 	profession: "PROFESSIONAL CHILD",
	// 	description: "The AKDP course is a comprehensive program that covers all the necessary aspects to excel in the field. The interactive learning environment and the supportive instructors made the experience enjoyable and enriching. I've learned so much and feel more confident in my abilities. This course is a fantastic investment in your future."
	// },

	// {
	// 	photo:
	// 		"url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
	// 	name: "Julius Grohn",
	// 	profession: "CHILD",
	// 	description: "The AMAP course provided me with invaluable insights and practical knowledge. The course is well-organized, and the instructors are passionate and knowledgeable. The skills I've gained have already started to pay off in my job. I couldn't be happier with my decision to enroll in this course."
	// }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 3) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 3;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
	if (chicken.style.opacity === "0") {
		chicken.style.opacity = "1";
		imgDiv.classList.add("move-head");
		surpriseMeBtn.innerText = "Remove the chicken";
		surpriseMeBtn.classList.remove("surprise-me-btn");
		surpriseMeBtn.classList.add("hide-chicken-btn");
		isChickenVisible = true;
	} else if (chicken.style.opacity === "1") {
		chicken.style.opacity = "0";
		imgDiv.classList.remove("move-head");
		surpriseMeBtn.innerText = "Surprise me";
		surpriseMeBtn.classList.add("surprise-me-btn");
		surpriseMeBtn.classList.remove("hide-chicken-btn");
		isChickenVisible = false;
	}
});

window.addEventListener("resize", () => {
	description.style.height = "100%";
});
