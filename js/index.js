/***************************************************
 *		 		PROJECT DATA ARRAY				   *
 ***************************************************/

const projects = [
	
	{   id: 9,
        projectName: 'Sass exploration',
        featured: false,
		image: 'images/sass.png',
		siteLink: 'https://hannahsangar-sass.vercel.app/',
		repoLink: 'https://github.com/88Hannah/sass',
		projectText: `
						<p>Learning how to use a CSS preprocessor has been on my todo list for a while but I’d been prioritising other skills as I thought that I could get by with my solid understanding of vanilla CSS. 
							Now that I have seen the power of the Sass preprocessor, and how much simpler it makes certain tasks, I’m glad I’ve finally picked it up.
						</p>
						
						<p>After completing an online Sass course I wanted to experiment with the new ideas that I had learnt so I put together this webpage. 
							I was already using CSS custom properties so the idea of variables in Sass was familiar to me. However the range of data types that 
							can be used allows for so much more customisation and I’ve made use of maps on multiple occasions in this project.
						</p>
						
						<p>I was able to use parameters in mixins as there were multiple properties on similar elements that were identical apart from, for example, a colour. 
							I even had a play around and nested animation keyframes into a mixin.
						</p>

						<p>Other useful time savers were the flow control rules. I made use of @for and @if. 
							It was great being able to use the variable value in the calculations, especially combining it with adjust-hue to change the colour. 
							This allows me to change all the accent colours on the site by only changing one variable.
						</p>
					`,
        projectSkills: ['Sass', 'Mixins', 'Variables', 'Flow Control Rules']
    },
	
	{   id: 8,
        projectName: 'Photo Gallery React App',
        featured: true,
		image: 'images/photo-gallery.png',
		siteLink: 'https://hannahsangar-react-photo-gallery.vercel.app/',
		repoLink: 'https://github.com/88Hannah/react-shopping-basket',
		projectText: `
						<p>This was the final project in my React bootcamp. From the beginning of the tutorial I decided to put my own mark on the app by 
							loading images from my travel site using a JSON file which was beneficial as later on I added additional properties to improve the design and UX.
						</p>

						<p>This React app has multiple pages which was accomplished using React Router. 
							The Context API was used to store certain items in global state when they were needed across multiple components. 
							There were also occasions where the same functionality was being used in more than one location so I created a custom hook to 
							contain this reusable logic rather than having repeated code.
						</p>

						<p>I enjoyed adding some additional functionality and styling once I’d completed the course within the bootcamp. 
							I created a footer component, added buttons to improve the UX and used session storage to keep track of the favourites and basket items.
						</p>

						<p>Please note that the purpose of this project was to practice using React and not to build an ecommerce site. 
							The site only mimics the process of purchasing items and does not actually place orders!
						</p>
					`,
        projectSkills: ['React', 'Context API', 'Hooks', 'Custom Hooks', 'React Router', 'Prop Types', 'Session Storage']
    },
	
	{   id: 7,
        projectName: 'Speed Typing React App',
        featured: false,
		image: 'images/speed-typing.png',
		siteLink: 'https://hannahsangar-react-speed-typing.vercel.app/',
		repoLink: 'https://github.com/88Hannah/react-speed-typing',
		projectText: `
						<p>I created this game while completing the Hooks section of my in depth React bootcamp. 
							I’ve learnt how the introduction of React Hooks has simplified the process of creating components as they have made it possible to access 
							state and lifecycle methods without having to create class based components.
						</p>
						
						<p>After building the app as part of the course I then added my own enhancements such as the Top Results section. 
							I did this by refactoring the app into smaller reusable components where I made use of props and ternary statements for conditionally rendering. 
							Finally I restyled the game where I made use of CSS animations to highlight when a new top score has been achieved.
						</p>
					`,
        projectSkills: ['React', 'Hooks', 'Custom Hooks', 'Controlled Forms']
    },

	{   id: 6,
        projectName: 'Movie Search React App',
        featured: false,
		image: 'images/movie-search.png',
		siteLink: 'https://react-movie-search-app-weld.vercel.app/',
		repoLink: 'https://github.com/88Hannah/react-movie-search-app',
		projectText: `
						<p>This was my first React project which I created during a course which covered concepts such as 
						JSX, functional and class-based components, state, props and hooks. 
						Once I completed the course I enhanced the app by refactoring the code, adding conditional rendering and error handling, 
						improving the responsive layout and adding my own touches to the styling.  
						</p>
					`,
        projectSkills: ['React', 'JSX', 'Components', 'Props', 'State', 'Hooks']
	},
	
    {   id: 5,
        projectName: 'Travel site',
        featured: false,
		image: 'images/travel.png',
		siteLink: 'https://hannahsangar-traveladventures.vercel.app/',
		repoLink: 'https://github.com/88Hannah/travel-website',
		projectText: `
						<p>I have used Bootstrap to create a multipage website to document our travels in early 2020.
						</p>

						<p>I made good use of their inbuilt classes for navbars, jumbotrons and cards as well as adding some of my own styling.
						</p>
						
						<p>Each country that we visited has a Google Maps embed to show each of our stops and this has been resized appropriately for different screen sizes.
						</p>
						
						<p>The cards used to document each of our travel stops use the order property of flex box and CSS Grid has been utilized to create the galleries of photos.
						</p>
						
						<p>I have also ensured that all the necessary metadata is included for search result summaries and sharing on social media.
						</p>
					`,
        projectSkills: ['Bootstrap', 'Cards', 'Metadata', 'Grid']
	},
	
	{   id: 4,
        projectName: 'Currency Converter',
        featured: false,
        image: 'images/currency-converter.png',
		siteLink: 'https://currency-converter.88hannah.vercel.app/',
		repoLink: 'https://github.com/88Hannah/currency-converter',
		projectText: `
						<p>In this project I have made use of multiple APIs to access relevant information that is either displayed directly on the site or used in calculations. 
							The number of API calls made within a session has been minimised by storing the information collected from the calls in a single object.
						</p> 
						
						<p>Due to the asynchronous nature of the API calls I have made use of ES8’s introduction of async/await functions.  
						</p>
						
						<p>The majority of the site’s content is not known until after the API calls are made so ES6 template literals have been used 
							to build the options in each of the currency lists and also to create the HTML for the country and flags section.  
						</p>
						
						<p>This is also the first project where I have worked with the command line and used node package manager, Webpack and Babel.
						</p>
						
						<p>During this project I gained useful experience working with the command line and using node package manager, Webpack and Babel.
						</p>
					`,
        projectSkills: ['API', 'Async / Await', 'NPM', 'Webpack', 'Babel']
	},
	
	{   id: 3,
        projectName: 'Booking form',
        featured: false,
        image: 'images/form.png',
		siteLink: 'https://hannahsangar-bookingform.now.sh/',
		repoLink: 'https://github.com/88Hannah/example-form',
		projectText: `
						<p>I have created a form to simulate the booking process for a table at a restaurant. 
							The form uses a variety of input types as well as a select list and text area. 
							Labels are in place to title the input fields where necessary.
						</p>
						<p>Javascript has been used to not only to add additional validation checks, 
							but also to dynamically set input attributes such as min, max and value, 
							and finally display a summary of the booking to the user after a successful form submission.
						</p>
						<p>Please note that this form is not hooked up to a back end and only simulates the submission process.
						</p> 
					`,
        projectSkills: ['Form', 'Regex', 'Validation', 'ES6']
	},

    {   id: 2,
        projectName: 'Front end web developer challenges',
        featured: false,
        image: 'images/front-end-challenges.png',
		siteLink: 'https://frontend-mentor-challenges-dusky.now.sh/',
		repoLink: 'https://github.com/88Hannah/frontend-mentor-challenges',
		projectText: `
						<p>I put this site together to hold all of the mini projects that I have completed on a site called Frontend Mentor. 
							It started as a simple index page with a list linking to each project. 
							Since then I’ve spent time making it a project in it’s own right.
						</p>
						<p>I used online tutorials to put together the cards for each project which flip to reveal links, 
							it meant that I read a lot about 3D CSS and perspective in the process. 
							This is also the first time that I have used media queries for device capabilities. 
							The functionality of the site changes depending on whether or not the user has the ability to hover with a mouse.
						</p>
					`,
        projectSkills: ['CSS variables', 'Flex', 'Grid', 'Transitions', 'Media queries']
    },

	{   id: 1,
		projectName: 'This portfolio',
        featured: false,
        image: 'images/portfolio.png',
        repoLink: 'https://github.com/88Hannah/portfolio',
		projectText: `
						<p>Creating this portfolio page has shown me how much I have learnt in such a brief amount of time.
						</p>
						<p>CSS grid has been really useful across the site. 
							The combination of the grid and media queries has made the site responsive and work well on all screen sizes.
						</p>
						<p>Parts of the site’s content are dynamic so that I can easily change my featured project with a small change to the data array. 
							The modal is also dynamically populated when the user clicks on a project from the grid.
						</p>
						<p>I’ve used the BEM class naming convention which has made it easier for me to see where I can tidy up the CSS and remove any duplicated code.
						</p>
						<p>Finally, for those that use the keyboard to navigate the site I’ve ensured that focus is held within the navigation menu and the pop-up modal 
							when either are open for a better user experience.
						</p>
					`,
        projectSkills: ['ES6', 'Responsive', 'Data array']
    },

    {   id: 0,
        projectName: 'Reaction game',
        featured: false,
        image: 'images/reactions.png',
		siteLink: 'https://reaction-game.now.sh/',
		repoLink: 'https://github.com/88Hannah/reaction-game',
		projectText: `
						<p>This was the first proper page that I built while learning Javascript. 
							It is a simple game that tests a user’s reactions. 
							I improved the initial game from the course by adding my own styling, 
							making the page responsive and presenting a user’s previous top three attempts in a results table. 
							I learnt about styling elements within Javascript and setTimeOut callback functions.
						</p>
					`,
        projectSkills: ['Math objects', 'Media queries', 'CSS variables']
	}

];



/***************************************************
 *		 		  FEATURED PROJECT				   *
 ***************************************************/

/******* DOM Strings for featured Projects ********/

const featuredProjectName = document.querySelector('.featured__proj-name');
const featuredText = document.querySelector('.featured__text');
const featuredSkills = document.querySelector('.featured__skills__list');
const featuredImage = document.querySelector('.featured__img');
const featuredRepoLink = document.querySelector('.featured__btn--repo');
const featuredProjLink = document.querySelector('.featured__btn--proj');


// Find the featured project
const featuredIndex = projects.findIndex(project => project.featured);
// Populate the featured project
featuredProjectName.textContent = projects[featuredIndex].projectName;
featuredText.innerHTML = projects[featuredIndex].projectText;
featuredImage.src = projects[featuredIndex].image;
featuredImage.alt = projects[featuredIndex].projectName;

if (projects[featuredIndex].repoLink) {
	featuredRepoLink.href = projects[featuredIndex].repoLink;
} else {
	featuredRepoLink.style.display = 'none';
}

if (projects[featuredIndex].siteLink) {
	featuredProjLink.href = projects[featuredIndex].siteLink;
} else {
	featuredProjLink.style.display = 'none';
}

featuredProjLink.href = projects[featuredIndex].siteLink;

const skillsList = projects[featuredIndex].projectSkills;

skillsList.forEach(skill => {
	featuredSkills.insertAdjacentHTML('beforeend', `<li class="pill">${skill}</li>`);
});


/***************************************************
 *		 		  OTHER PROJECTS				   *
 ***************************************************/

/********* DOM Strings for other projects **********/

const projectGrid = document.querySelector('.projects__grid');

projects.forEach(project => {

	if(!project.featured) {
		projectGrid.insertAdjacentHTML('beforeend', 
			`<div class="projects__grid__item projects__link" data-id="${project.id}" tabindex="0">
			<img class="projects__grid__img" src="${project.image}" alt="${project.projectName}">
			<p class="projects__grid__proj-name">${project.projectName}</p>    
			</div>`
		);
	};
});


/***************************************************
 *		 		  NAVIGATION AND MODAL			   *
 ***************************************************/

/****** DOM Strings for navigation and modal *******/

const nav = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list__link');
const allTabFocusElements = document.querySelectorAll('a, button, [tabindex="0"]');
const modalTitle = document.querySelector('.modal__title');
const modalImage = document.querySelector('.modal__img');
const modalText = document.querySelector('.modal__text');
const modalSkills = document.querySelector('.modal__skills__list');
const modalRepoLink = document.querySelector('.modal__btn--repo');
const modalProjLink = document.querySelector('.modal__btn--proj');
const modalContainer = document.querySelector('.modal');
const allProjects = document.querySelectorAll('.projects__grid__item');
const closeBtn = document.querySelector('.modal__close');



/*******************	 METHODS	*******************/

//Keeps the focus within a section
const keepFocusHere = (event, first, last) => {
	if(event.target === last) {
		if (event.keyCode === 9 && !event.shiftKey) {
			event.preventDefault();
			first.focus();
		}
	} else if (event.target === first) {
		if (event.shiftKey && event.keyCode === 9) {
			event.preventDefault();
			last.focus();
		}
	}
};


// Nav toggle function - open or close the navigation
const navToggle = type => {
	let change, tabIndex, outsideTabIndex;
	const lastNavLink = navLinks[navLinks.length - 1];
	if (type === 'open') {
		change = 'add';
		tabIndex = 0;
		outsideTabIndex = -1;
		document.addEventListener('keydown', event => keepFocusHere(event, nav, lastNavLink));
		navLinkClicked();
		outsideNavClicked();
	} else if (type === 'close') {
		change = 'remove';
		tabIndex = -1;
		outsideTabIndex = 0;
		document.removeEventListener('keydown', keepFocusHere);
	}
	//Add or remove the 'nav-open' class based on type
	document.body.classList[change]('nav-open');
	// Change the tabIndex values so the list items are focusable when the nav is open and not when it is closed
	navLinks.forEach(link => {
		link.tabIndex = tabIndex;
	});
	// Change the tabIndex of all other tab-able elements accordingly
	allTabFocusElements.forEach(el => {
		if (!el.classList.contains('nav__list__link') && el !== nav) {
			el.tabIndex = outsideTabIndex;
		}
	});

};


// Populate modal with content
const populateModal = (id) => {

	const modalID = projects.findIndex(project => project.id === id);

	modalTitle.textContent = projects[modalID].projectName;
	modalText.innerHTML = projects[modalID].projectText;
	modalImage.src = projects[modalID].image;
	modalImage.alt = projects[modalID].projectName;
	
	modalSkills.innerHTML = '';
	const modalSkillsList = projects[modalID].projectSkills;
	modalSkillsList.forEach(skill => {
		modalSkills.insertAdjacentHTML('beforeend', `<li class="pill">${skill}</li>`);
	});

	if (projects[modalID].repoLink) {
		modalRepoLink.style.display = 'block';
		modalRepoLink.href = projects[modalID].repoLink;
	} else {
		modalRepoLink.style.display = 'none';
	};

	if (projects[modalID].siteLink) {
		modalProjLink.style.display = 'block';
		modalProjLink.href = projects[modalID].siteLink;
	} else {
		modalProjLink.style.display = 'none';
	};

	
};


//Focus on the modal and keep the focus within the modal
const focusOnModal = () => {
	allTabFocusElements.forEach(el => {
		if(el.classList.contains('modal__tab-true')) {
			el.setAttribute('tabindex', '0');
		} else {
			el.setAttribute('tabindex', '-1');
		}
	});
	document.addEventListener('keydown', event => keepFocusHere(event, closeBtn, modalProjLink));
};


//Focus back on the page
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
	document.removeEventListener('keydown', keepFocusHere);
};



//Display the modal, focus on it and populate it
const openModal = project => {
	modalContainer.style.display = 'block';
	focusOnModal();
	//Populate modal with correct project
	const modalIDvalue = parseInt(project.dataset.id);
	populateModal(modalIDvalue);
};


//Close the modal and refocus on the page
const closeModal = () => {
	modalContainer.style.display = 'none';
	focusPage();
};


// Close the nav when any of the nav links are selected
const navLinkClicked = () => {
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
		navToggle('close');
		});
		// Space bar is also a way of selecting 
		link.addEventListener('keydown', event => {
			if(event.keyCode === 32) {
				navToggle('close');
			}
		})
	});
};


// Close the nav when the user clicks outside of the navigation
const outsideNavClicked = () => {
	document.addEventListener('click', event => {
		if (document.body.classList.contains('nav-open') && !event.target.closest('.nav-toggle') && !event.target.closest('.nav')) {
			navToggle('close');
		};
	});
};





// Open or close the nav when the nav icon is clicked
nav.addEventListener('click', () => {
	if (document.body.classList.contains('nav-open')) {
		navToggle('close');
	} else {
		navToggle('open');
	}
});


// Open modal when a project is clicked
allProjects.forEach(project => {
	project.addEventListener('click', () => {
		openModal(project);
	});
});


// Document event listner to open and close the modal
document.addEventListener('keydown', element => {

	//Open modal when enter is pressed
	allProjects.forEach(project => {
		if (project === element.target && element.keyCode === 13) {
			openModal(project);
		}
	});

	if (modalContainer.style.display === 'block') {

		// Close modal when enter or space is pressed on the close button
		if (element.target === closeBtn && (element.keyCode === 13 || element.keyCode === 32)) {
			closeModal();
		};

		// Close the modal when escape is pressed
		if (element.keyCode === 27) {
			closeModal();
		};
	}
});


// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
	closeModal();
});


// Close modal when click is outside the modal content area
modalContainer.addEventListener('click', () => {
	if (event.target === modalContainer) {
		closeModal();
	}
});
