/***************************************************
 *		 		PROJECT DATA ARRAY				   *
 ***************************************************/

const projects = [

    {   id: 0,
        projectName: 'Front end web developer challenges',
        featured: false,
        image: 'images/front-end-challenges.png',
        imageGrey: 'images/front-end-challenges-grey.png',
		siteLink: 'https://frontend-mentor-challenges-dusky.now.sh/',
		repoLink: 'https://github.com/88Hannah/frontend-mentor-challenges',
		projectText: `<p>I put this site together to hold all of the mini projects that I have completed on a site called Frontend Mentor. 
			It started as a simple index page with a numbered list linking to the projects. Since then I’ve spent time making it a project in it’s own right.</p>
			<p>I used online tutorials to put together the cards for each project which flip to reveal links and read a lot about 3D CSS and perspective in the process. 
			This is also the first time that I have used media queries for device capabilities. 
			The functionality of the site changes depending on whether or not the user has the ability to hover with a mouse. </p>
			`,
        projectSkills: ['CSS variables', 'Flex', 'Grid', 'Transitions', 'Media queries']
    },

	{   id: 1,
		projectName: 'This portfolio site!',
        featured: true,
        image: 'images/portfolio-dark.png',
        imageGrey: 'images/portfolio-dark.png',
        repoLink: 'https://github.com/88Hannah/portfolio',
        projectText: `<p>Creating this portfolio page has shown me how much I have learnt in such a brief amount of time.</p>
			<p>I’ve used CSS grid in multiple sections and it has been great combining this with various media queries 
			to make the site responsive and work on all screen sizes.</p>
			<p>I’ve made parts of the site’s content dynamic so that I can easily change my featured project with a small change to the data array. 
			The modal is also dynamically populated when the user clicks on a project from the grid.</p>
			<p>I’ve used the BEM class naming convention which has made it easier for me to see where I can  tidy up the CSS and remove any duplicated code.</p>
			<p>Finally, for those that use the keyboard to navigate the site I’ve ensured that focus is held within the navigation menu and the pop-up modal 
			when either are open for a less frustrating user experience.</p>
			`,
        projectSkills: ['ES6', 'Responsive', 'Data array']
    },

    {   id: 2,
        projectName: 'Reaction game',
        featured: false,
        image: 'images/reactions.png',
        imageGrey: 'images/reactions-grey.png',
		siteLink: 'https://reaction-game.now.sh/',
		repoLink: 'https://github.com/88Hannah/reaction-game',
		projectText: `<p>This was the first proper page that I built while learning Javascript. It is a simple game that tests a user’s reaction. 
			I improved the initial game by adding my own styling and design, making the page responsive and storing and presenting a user’s previous attempts in a results table. 
			I learnt about styling elements within Javascript and setTimeOut callback functions.</p>
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
			<img class="projects__grid__img" src="${project.imageGrey}" alt="${project.projectName}">
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


// Close the nav when any of the nav links are clicked
const navLinkClicked = () => {
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
		navToggle('close');
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

		// Close modal when enter is pressed on the close button
		if (element.target === closeBtn && element.keyCode === 13) {
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
