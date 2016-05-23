'use strict';

var bio = {
	'name': 'Daniel Weinman',
	'role': 'Web Developer',
	'contacts': {
		'mobile': '770-310-5014',
		'email': 'namniewd@gmail.com',
		'twitter': '@notontilt09',
		'github' : 'notontilt09',
		'location': 'Fort Lauderdale, Florida'
	},
	'skills': ['Poker', 'Golf', 'Tennis', 'Procrastination', 'Web Development'],
	'welcomeMessage': 'Welcome to my site!  Have a look around.',
	'biopic': 'images/eating.jpg'
};


var work = {
	'jobs': [
	{
		'employer': 'Self-Employed',
		'title': 'Professional Poker Player',
		'location': 'Las Vegas, Nevada',
		'dates': '2009-2016',
		'description': 'Take a look at my underwhelming career earnings below.',
		'link': 'http://pokerdb.thehendonmob.com/player.php?a=r&n=167881'
	},
	{
		'employer': 'Working Buildings',
		'title': 'Mechanical Engineer',
		'location': 'Atlanta, Georgia',
		'dates': '2008-2009',
		'description': 'I tried using my degree to design HVAC systems for new buildings, and promptly quit the field.',
		'link': 'http://www.workingbuildings.com'
	}
	]
};

var education = {
	'schools': [{
		'name': 'Georgia Tech',
		'location': 'Atlanta, Georgia',
		'degree': 'Bachelors',
		'majors': ['Mechanical Engineering'],
		'dates': '2005-2009',
		'url': 'www.gatech.edu'
	}],
	'onlineCourses': [{
		'title': 'Front End Web-Development Nanodegree',
		'school': 'Udacity',
		'date': '2015-2016',
		'url': 'www.udacity.com'
	}]
};

var projects = {
	'projects': [
	{
		'title': 'HTML/CSS Mock-up',
		'dates': '10/2015 - 11/2015',
		'description': 'Created a functional webpage from a provided mockup',
		'images': ['images/mockup.png']
	}]
};


bio.display = function() {
if (bio.skills.length) {
	$('#header').append(HTMLskillsStart);
	for (var i=0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
		$('#skills').append(formattedSkill);
	}
	}
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedBioPic1 = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedBioPic2 = HTMLbioPic.replace('%data%', 'images/jedi.jpg');
	var formattedworkTitle = HTMLworkDescription.replace('%data%', work.position);
	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools.name);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header').append(formattedWelcomeMsg);
	$('#header').append(formattedBioPic1);
	$('#header').append(formattedBioPic2);
	$('#topContacts, #footerContacts').prepend(formattedLocation, formattedGithub, formattedTwitter, formattedEmail, formattedMobile);
};
bio.display();

work.display = function() {
	work.jobs.forEach(function(job) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
		var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
		var formattedDates = HTMLworkDates.replace('%data%', job.dates);
		var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
		var formattedLink = HTMLworkLink.replace('%link%', job.link);
		var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription + formattedLink;
		$('.work-entry:last').append(formattedJob);
		var hr = document.createElement('hr');
		$('.work-entry:last').append(hr);
	});
};
work.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(' ');
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + ' ' + name[1];
}

$('#main').append(internationalizeButton);

projects.display = function() {
	projects.projects.forEach(function(project) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
		for (var i=0; i<project.images.length; i++) {
			var formattedProjectImage = HTMLprojectImage.replace('%data%', project.images[i]);
		}
		console.log(formattedProjectImage);
		$('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
	});
};
projects.display();

education.display = function() {
	education.schools.forEach(function(school) {
		$('#education').append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace('%data%', school.name);
		var formattedschoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
		var formattedschoolDates = HTMLschoolDates.replace('%data%', school.dates);
		var formattedschoolLocation = HTMLschoolLocation.replace('%data%', school.location);
		var formattedschoolMajor = HTMLschoolMajor.replace('%data%', school.majors);
		var hr = document.createElement('hr');
		$('.education-entry:last').append(formattedschoolName, formattedschoolDates, formattedschoolDegree, formattedschoolLocation, formattedschoolMajor, hr);
	});
	$('#education').append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		$('#education').append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace('%data%', course.title);
		var formattedonlineSchool = HTMLonlineSchool.replace('%data%', course.school);
		var formattedonlineDates = HTMLonlineDates.replace('%data%', course.date);
		var formattedonlineURL = HTMLonlineURL.replace('%data%', course.url);
		$('.education-entry:last').append(formattedonlineTitle, formattedonlineDates, formattedonlineSchool, formattedonlineURL);
	});
};

education.display();

$('#mapDiv').append(googleMap);







