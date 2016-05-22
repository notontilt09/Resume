var bio = {
	"name": "Daniel Weinman",
	"role": "Web Developer",
	"contacts": {
		"mobile": "770-310-5014",
		"email": "namniewd@gmail.com",
		"twitter": "@notontilt09",
		"github" : "notontilt09",
		"location": "Fort Lauderdale, Florida"
	},
	"skills": ["Poker", "Golf", "Tennis", "Procrastination", "Web Development"],
	"welcomeMessage": "Welcome to my site!  Have a look around.",
	"biopic": "images/eating.jpg"
}


var work = {
	"jobs": [
	{
		"employer": "Self-Employed",
		"title": "Professional Poker Player",
		"location": "Las Vegas, Nevada",
		"dates": "2009-2016",
		"description": "Take a look at my underwhelming career earnings below.",
		"link": "http://pokerdb.thehendonmob.com/player.php?a=r&n=167881"
	},
	{
		"employer": "Working Buildings",
		"title": "Mechanical Engineer",
		"location": "Atlanta, Georgia",
		"dates": "2008-2009",
		"description": "I tried using my degree to design HVAC systems for new buildings, and promptly quit the field.",
		"link": "http://www.workingbuildings.com"
	}
	]
}

var education = {
	"schools": [{
		"name": "Georgia Tech",
		"location": "Atlanta, Georgia",
		"degree": "Bachelors",
		"major": "Mechanical Engineering",
		"dates": "2005-2009"
	}],
	"online_courses": [{
		"title": "Front End Web-Development Nanodegree",
		"school": "Udacity",
		"date": "2015-2016",
		"url": "www.udacity.com"
	}]
}

var projects = {
	"projects": [
	{
		"title": "HTML/CSS Mock-up",
		"dates": "10/2015 - 11/2015",
		"description": "Created a functional webpage from a provided mockup",
		"image": "images/mockup.png"
	}]
}

function displayContacts() {
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var formattedBioPic1 = HTMLbioPic.replace('%data%', bio.biopic);
var formattedBioPic2 = HTMLbioPic.replace('%data%', "images/jedi.jpg");
var formattedworkTitle = HTMLworkDescription.replace('%data%', work.position);
var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools.name);
$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic1);
$("#header").append(formattedBioPic2);
$("#footerContacts").prepend(formattedLocation);
$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedMobile);
}

displayContacts();

bio.display = function() {
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	}
}
bio.display();

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLink = HTMLworkLink.replace("%link%", work.jobs[job].link);
		var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription + formattedLink;
		$(".work-entry:last").append(formattedJob);
		var hr = document.createElement('hr');
		$(".work-entry:last").append(hr);
	}
}
work.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
})

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var hr = document.createElement('hr');
		$(".education-entry:last").append(formattedschoolName);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolDegree);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);
		$(".education-entry:last").append(hr);
	}
	for (course in education.online_courses) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.online_courses[course].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.online_courses[course].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.online_courses[course].date);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.online_courses[course].url);
		$(".education-entry:last").append(formattedonlineTitle);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineSchool);
		$(".education-entry:last").append(formattedonlineURL);
	}
}

education.display();

$("#mapDiv").append(googleMap);







