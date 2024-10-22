function generated() {
    var usernameInput = document.getElementById('username');
    var usernameresult = document.getElementById('usernameresult');
    var emailInput = document.getElementById('email');
    var emailresult = document.getElementById('emailresult');
    var phoneInput = document.getElementById('phone');
    var phoneresult = document.getElementById('phoneresult');
    var nationalityInput = document.getElementById('nationality');
    var nationalityresult = document.getElementById('nationalityresult');
    var specialityInput = document.getElementById('speciality');
    var specialityresult = document.getElementById('specialityresult');
    var educationInput = document.getElementById('education');
    var Educationresult = document.getElementById('Educationresult');
    var skillsInput = document.getElementById('skills');
    var skillsresult = document.getElementById('skillsresult');
    var workexperienceInput = document.getElementById('workexperience');
    var workexperienceresult = document.getElementById('workexperienceresult');
    var educationhead = document.getElementById("educationhead");
    var skillshead = document.getElementById("skillshead");
    var workexperiencehead = document.getElementById("workexperiencehead");
    var mainheading = document.getElementById("mainheading");
    var generate = document.getElementById("generate");
    if (usernameInput && usernameresult && emailresult && phoneresult && nationalityresult && specialityresult && Educationresult && skillsresult && workexperienceresult) {
        educationhead.innerHTML = "<h3>Education:</h3> ";
        skillshead.innerHTML = "<h3>skills:</h3>";
        workexperiencehead.innerHTML = "\n        <h3>workexperience:</h3>\n        ";
        var name_1 = usernameInput.value;
        usernameresult.innerText = "".concat(name_1, " ");
        var email = emailInput.value;
        emailresult.innerHTML = "<b>Email:</b>".concat(email);
        var phone = phoneInput.value;
        phoneresult.innerHTML = "<b>Phone number:</b>".concat(phone);
        var nationality = nationalityInput.value;
        nationalityresult.innerHTML = "<b>Nationality:</b>".concat(nationality);
        var speciality = specialityInput.value;
        specialityresult.innerText = "".concat(speciality);
        var skills = skillsInput.value;
        skillsresult.innerText = "".concat(skills);
        var workexperience = workexperienceInput.value;
        workexperienceresult.innerText = "".concat(workexperience);
        var education = educationInput.value;
        mainheading.innerHTML = "\n        <h2>RESUME BUILDER APPLICATION</h2>\n        ";
        Educationresult.innerText = "".concat(education);
        document.getElementById("generate");
        document.getElementById("form").style.display = "none";
        document.getElementById("generatedform").style.display = "block";
        generate.style.display = 'none';
    }
    else {
        console.log("problem");
    }
}
