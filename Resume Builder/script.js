function addCertificates(){
    var target = document.getElementById('certificate');
    var certificateBox = document.getElementById('certificateBox')

    var copyElement = target.cloneNode(true);
    copyElement.classList.add("mt-1");
    certificateBox.appendChild(copyElement);
}

function addjob(){
    var target = document.getElementById('job');
    var jobBox = document.getElementById('jobBox')
    var degreeBox = document.getElementById('degreeBox');

    var jobcopy = target.cloneNode(true);
    jobcopy.classList.add("mt-1");
    jobBox.insertBefore(jobcopy,degreeBox);
}

function addeducation(){
    var target = document.getElementById('education');
    var jobBox = document.getElementById('jobBox')
    var projectBox = document.getElementById('projectBox');


    var educationCopy = target.cloneNode(true);
    educationCopy.classList.add("mt-3");
    jobBox.insertBefore(educationCopy,projectBox);
}

function addproject(){
    var target = document.getElementById('project');
    var jobBox = document.getElementById('jobBox')

    
    var copyProject = target.cloneNode(true);
    copyProject.classList.add("mt-3");
    jobBox.appendChild(copyProject);
}


function generateResume(){

// Personal Infomation

   document.getElementById('ResumeFirstName').innerHTML = document.getElementById('firstname').value;

   document.getElementById('ResumeLastName').innerHTML = document.getElementById('lastname').value;

   document.getElementById('ResumeContact').innerHTML = document.getElementById('contact').value;

   document.getElementById('ResumeEmail').innerHTML = document.getElementById('email').value;

   document.getElementById('ResumeAddress').innerHTML = document.getElementById('address').value;

   document.getElementById('ResumeTitle').innerHTML = document.getElementById('title').value;

// Important Links 

   document.getElementById('resumeLink1').href = document.getElementById('linkedin').value;

   document.getElementById('resumeLink2').href = document.getElementById('github').value;

   document.getElementById('resumeLink3').href = document.getElementById('portfolio').value;

//    SkillSet Link

   document.getElementById('resumeSkill1').innerHTML = document.getElementById('languages').value;

   document.getElementById('resumeSkill2').innerHTML = document.getElementById('libraries').value;

   document.getElementById('resumeSkill3').innerHTML = document.getElementById('tools').value;

   document.getElementById('resumeSkill4').innerHTML = document.getElementById('databases').value;

// Certification 


   document.getElementById('resumeCertificatetitle').innerHTML = document.getElementById('certificateTitle').value;

   document.getElementById('resumeCertificateIssued').innerHTML = document.getElementById('certificateIssued').value;

   document.getElementById('resumeCertificateLink').href = document.getElementById('certificateLink').value;

// Experience

   document.getElementById('resumeEmployer').innerHTML = document.getElementById('employer').value;
   
   document.getElementById('resumeJobtitle').innerHTML = document.getElementById('jobtitle').value;

   document.getElementById('resumeStartdate').innerHTML = document.getElementById('startdate').value;

   document.getElementById('resumeEnddate').innerHTML = document.getElementById('enddate').value;

   document.getElementById('resumeJoblocation').innerHTML = document.getElementById('joblocation').value;

   document.getElementById('resumeExDesc').innerHTML = document.getElementById('description').value;

// Education 

   document.getElementById('educationInstitute').innerHTML = document.getElementById('institute').value;

   document.getElementById('educationStartyear').innerHTML = document.getElementById('startyear').value;

   document.getElementById('educationEndyear').innerHTML = document.getElementById('endyear').value;

   document.getElementById('educationLocation').innerHTML = document.getElementById('collegelocation').value;

   document.getElementById('educationDegree').innerHTML = document.getElementById('degree').value;

   document.getElementById('educationField').innerHTML = document.getElementById('fieldofstudy').value;

   document.getElementById('educationScoreHere').innerHTML = document.getElementById('educationHere').value;

   document.getElementById('educationScore').innerHTML = document.getElementById('educationScores').value;

// Project

    document.getElementById('resumeProjectTitle').innerHTML = document.getElementById('project-title').value;

    document.getElementById('resumeprojectTech').innerHTML = document.getElementById('technologies-used').value;

    document.getElementById('resumeProjectlink').href = document.getElementById('project-link').value;

    document.getElementById('resumeProjectDesc').innerHTML = document.getElementById('project-description').value;

    document.getElementById("resume").style.display= 'block';

}
// print Resume

function printCv(){
    let resume = document.getElementById('resume')
    resume.style.display = "block";
    resume.style.backgroundColor = "#fff"
    resume.style.boxShadow = "none"
    resume.classList.remove("container");
    resume.style.borderRadius = "0";
    document.getElementById('user').style.display = "none";
    window.print()
}
document.getElementById('resume').style.display = "none";
document.getElementById('user').style.display = "block";
// Show Tooltip 

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const userData = document.getElementById('user')
function savedata(){
    localStorage.setItem("userData", user.value);
}

function showdata(){
    user.value = localStorage.getItem("userData");
}
showdata();
