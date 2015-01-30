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
            "description": ""
        },
        {
            "employer": "RadioShack",
            "title": "Web Application Developer",
            "dates": "February 2014 - Present",
            "description": ""
        },
        {
            "employer": "RadioShack",
            "title": "Senior Training Specialist",
            "dates": "February 2014 - Present",
            "description": ""
        }
    ]
};

//var education = {};
//education["name"] = "Capella University";
//education["yearsAttended"] = "2012 - 2014";

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

