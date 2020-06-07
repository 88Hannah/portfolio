/***************************************************
 *		 		PROJECT DATA ARRAY				   *
 ***************************************************/

const projects = [

    {   id: 0,
        projectName: 'Test 1',
        featured: false,
        image: 'images/travel-blog.jpg',
		siteLink: 'https://www.google.co.uk',
		repoLink: 'https://www.bbc.co.uk',
        projectText: 'sefjnfjsndflnsfld',
        projectSkills: ['CSS', 'HTML', 'Grid', 'Transitions']
    },

    {   id: 1,
        projectName: 'Test 2',
        featured: false,
        image: 'images/travel-blog.jpg',
        siteLink: 'https://www.google.co.uk',
        projectText: 'sefjnfjsndflnsfld',
        projectSkills: ['CSS', 'HTML', 'Grid']
    },

    {   id: 2,
        projectName: 'Test 3',
        featured: true,
        image: 'images/work-01.jpg',
        siteLink: 'https://www.google.co.uk',
		projectText: `<p>Donec at diam id ante tempus maximus. Aliquam erat volutpat. Proin ornare, 
						est vel bibendum dictum, est velit varius est, et rhoncus ex urna in tortor. 
						Aliquam gravida vehicula blandit.</p>
						<p>Nunc porta eget velit nec lobortis. Praesent id imperdiet nibh, non dignissim nibh. 
						Integer in urna quis augue fermentum tristique imperdiet nec ipsum. Sed facilisis 
						elementum metus in bibendum. Aenean nec urna sed risus pretium aliquam.</p>`,
        projectSkills: ['CSS', 'HTML', 'Grid', 'Transitions']
    },

    {   id: 3,
        projectName: 'Test 4',
        featured: false,
        image: 'images/travel-blog.jpg',
		siteLink: 'https://www.google.co.uk',
		repoLink: 'https://www.bbc.co.uk',
        projectText: 'sefjnfjsndflnsfld',
        projectSkills: ['CSS', 'HTML', 'Grid', 'Transitions']
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

	modalProjLink.href = projects[modalID].siteLink;
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
