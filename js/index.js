const projects = [

    {   id: 0,
        projectName: 'Test 1',
        featured: false,
        image: 'images/travel-blog.jpg',
        siteLink: 'https://www.google.co.uk',
        projectText: 'sefjnfjsndflnsfld',
        projectSkills: ['CSS', 'HTML', 'Grid', 'Transitions']
    },

    {   id: 1,
        projectName: 'Test 2',
        featured: false,
        image: 'images/travel-blog.jpg',
        siteLink: 'https://www.google.co.uk',
        projectText: 'sefjnfjsndflnsfld',
        projectSkills: ['CSS', 'HTML', 'Grid', 'Transitions']
    },

    {   id: 2,
        projectName: 'Test 3',
        featured: true,
        image: 'images/travel-blog.jpg',
        siteLink: 'https://www.google.co.uk',
        projectText: 'sefjnfjsndflnsfld',
        projectSkills: ['CSS', 'HTML', 'Grid', 'Transitions']
    },

    {   id: 3,
        projectName: 'Test 4',
        featured: false,
        image: 'images/travel-blog.jpg',
        siteLink: 'https://www.google.co.uk',
        projectText: 'sefjnfjsndflnsfld',
        projectSkills: ['CSS', 'HTML', 'Grid', 'Transitions']
    }

];



const featuredProjectName = document.querySelector('.featured__proj-name');
const featuredText = document.querySelector('.featured__text');
const featuredSkills = document.querySelector('.featured__skills__list');
const featuredImage = document.querySelector('.featured__img');



projects.forEach(el => console.log(el.projectName));


const featuredIndex = projects.findIndex(el => el.featured);








const nav = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list__link');



const modal = document.querySelector('.modal');
const allProjects = document.querySelectorAll('.projects__grid__item');
const closeBtn = document.querySelector('.modal__close');
const allTabFocusElements = document.querySelectorAll('a, button, [tabindex="0"]');
const modalBtn = document.querySelector('.modal__link');

// Nav toggle function
const navToggle = type => {

	let change, tabIndex, outsideTabIndex;

	if (type === 'open') {
		change = 'add';
		tabIndex = 0;
		outsideTabIndex = -1;
	} else if (type === 'close') {
		change = 'remove';
		tabIndex = -1;
		outsideTabIndex = 0;
	}

	//Add or remove the 'nav-open' class based on type
	document.body.classList[change]('nav-open');

	// Change the tabIndex values so the list items are focusable when the nav is open and not when it is closed
	navLinks.forEach(link => {
		link.tabIndex = tabIndex;
	});


	allTabFocusElements.forEach(el => {
		if (!el.classList.contains('nav__list__link') && el !== nav) {
			el.tabIndex = outsideTabIndex;
		}


	});



};





// Open or close the nav when the nav icon is clicked
nav.addEventListener('click', () => {

	let action;

	if (document.body.classList.contains('nav-open')) {
		action = 'close';
	} else {
		action = 'open';
	
	}

	navToggle(action);

});


// Close the nav when any of the nav links are clicked
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navToggle('close');
	})
});


// Close the nav when the user clicks outside of the navigation
document.addEventListener('click', event => {

	if (document.body.classList.contains('nav-open') && !event.target.closest('.nav-toggle') && !event.target.closest('.nav')) {

		navToggle('close');

	};

});




// Modal stuff



const keepFocus = () => {

	document.addEventListener('keydown', el => {

		if(el.target === modalBtn) {
			if (el.keyCode === 9) {
				el.preventDefault();
				closeBtn.focus();
			}
		} else if (el.target === closeBtn) {
			if (el.shiftKey && el.keyCode === 9) {
				el.preventDefault();
				modalBtn.focus();
			}
		}
	});
};



//Set background tabindexes to -1
const unfocusBackground = () => {
	allTabFocusElements.forEach(el => {
		if(el.classList.contains('modal__tab-true')) {
			el.setAttribute('tabindex', '0');
		} else {
			el.setAttribute('tabindex', '-1');
		}
	});
	keepFocus();
};


// Focus back on the page
const focusPage = () => {
	allTabFocusElements.forEach(el => {
		if(el.classList.contains('modal__tab-true')) {
			el.setAttribute('tabindex', '-1');
		} else {

			el.setAttribute('tabindex', '0');

			navLinks.forEach(current => {
				if(current === el){
					el.setAttribute('tabindex', '-1');
				};
			});
			
		};
	});
};



// Open modal when a project is clicked
allProjects.forEach(el => {
	el.addEventListener('click', () => {
		modal.style.display = 'block';
		unfocusBackground();	
	});
});

//Open modal when enter is pressed
document.addEventListener('keydown', e => {
	allProjects.forEach((cur, i) => {
		if (cur === e.target && e.keyCode === 13) {
			modal.style.display = 'block';
			unfocusBackground();
		}
	});
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
	focusPage();
});

// Close modal when enter is pressed on the close button
document.addEventListener('keydown', e => {
	if (e.target === closeBtn && e.keyCode === 13) {
		modal.style.display = 'none';
		focusPage();
	};
	
});

// Close modal when click is outside the modal content area
document.addEventListener('click', event => {
	if (event.target === modal) {
		modal.style.display = 'none';
		focusPage();
	}
});









// // Suggested polyfill for 'closest': 

// if (!Element.prototype.matches) {
// 	Element.prototype.matches = Element.prototype.msMatchesSelector || 
// 								Element.prototype.webkitMatchesSelector;
//   }
  
//   if (!Element.prototype.closest) {
// 	Element.prototype.closest = function(s) {
// 	  var el = this;
  
// 	  do {
// 		if (Element.prototype.matches.call(el, s)) return el;
// 		el = el.parentElement || el.parentNode;
// 	  } while (el !== null && el.nodeType === 1);
// 	  return null;
// 	};
//   }

