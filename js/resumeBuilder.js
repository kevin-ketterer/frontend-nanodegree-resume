var formattedName = HTMLheaderName.replace('%data%', 'Kevin J. Ketterer');
var formattedRole = HTMLheaderRole.replace('%data%', 'Web Application Developer');
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var bio = {
    "firstName": "Kevin",
    "lastName": "Ketterer",
    "role": "Web Application Developer",
    "contacts": {
        "mobile": "817-793-2835",
        "email": "ketterer.kevin@gmail.com",
        "github": "kevin-ketterer",
        "location": "Arlington, TX"
    },
    "WelcomeMessage": "Welcome to my online resume.",
    "skills": ["C#", "ASP.NET", "Adobe Flex & Flash"],
    "bioPic": "images/kevin.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Advantage Cable Services",
            "title": "Web Application Developer",
            "dates": "May 2014 - Present",
            "location" : "Arlington, TX",
            "description": "Developing ASP.NET application using C#, Razor, jQuery, and Bootstap"
        },
        {
            "employer": "RadioShack",
            "title": "Web Application Developer",
            "dates": "February 2014 - Present",
            "location": "Fort Worth, TX",
            "description": "Developed ASP.NET and Flex applications"
        },
        {
            "employer": "RadioShack",
            "title": "Senior Training Specialist",
            "dates": "February 2014 - Present",
            "location": "Fort Worth, TX",
            "description": "Developed online training using Flash, Photoshop, and Fireworks"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Capella University",
            "city": "Minneapolis, MN",
            "degree": "MS",
            "major": "IT, Enterprise Application Architecture",
            "dates": "2004 - 2006"
        },
        {
            "name": "Capella University",
            "city": "Minneapolis, MN",
            "degree": "BS",
            "major": "Information Technology",
            "dates": "2013 - 2015"
        },
        {
            "name": "SUNY New Paltz",
            "city": "New Paltz, NY",
            "degree": "BS",
            "major": "Computer Engineering",
            "dates": "1984 - 1987"
        }
    ]
}

$("#main").append(bio.firstName + " " + bio.lastName);
$("#workExperience").append(work["position"]);
$("#education").append(education.name);

$('#header').append(HTMLskillsStart);
if (bio.skills.length > 0) {
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $('#header').append(formattedSkills);
    }
}

function DisplayWork() {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $('.work-entry:last').append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
};

DisplayWork();

function Locationizer(work_obj) {
    var locations;
}

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});