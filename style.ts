function generated() {
    const usernameInput = document.getElementById('username');
    const usernameresult = document.getElementById('usernameresult');
    const emailInput = document.getElementById('email');
    const emailresult = document.getElementById('emailresult');
    const phoneInput = document.getElementById('phone');
    const phoneresult = document.getElementById('phoneresult');
    const nationalityInput = document.getElementById('nationality');
    const nationalityresult = document.getElementById('nationalityresult');
    const specialityInput = document.getElementById('speciality');
    const specialityresult = document.getElementById('specialityresult');
    const educationInput = document.getElementById('education');
    const Educationresult = document.getElementById('Educationresult');
    const skillsInput = document.getElementById('skills');
    const skillsresult = document.getElementById('skillsresult');
    const workexperienceInput = document.getElementById('workexperience');
    const workexperienceresult = document.getElementById('workexperienceresult');
    const educationhead= document.getElementById(`educationhead`);
    const skillshead= document.getElementById(`skillshead`);
    const workexperiencehead= document.getElementById(`workexperiencehead`);
    const mainheading= document.getElementById(`mainheading`) ;
    const generate=document.getElementById(`generate`) as HTMLButtonElement;
    if (usernameInput && usernameresult&&emailresult&&phoneresult&&nationalityresult&&specialityresult&&Educationresult&&skillsresult&&workexperienceresult) {
        educationhead!.innerHTML=`<h3>Education:</h3> `;
        skillshead!.innerHTML=`<h3>skills:</h3>`;
        workexperiencehead!.innerHTML=`
        <h3>workexperience:</h3>
        `;
        const name = (usernameInput as HTMLInputElement).value; 
        usernameresult.innerText =`${name} ` ; 

        const email = (emailInput as HTMLInputElement).value; 
        emailresult.innerHTML =`<b>Email:</b>${email}` ;


        const phone = (phoneInput as HTMLInputElement).value; 
        phoneresult.innerHTML =`<b>Phone number:</b>${phone}` ;

        const nationality = (nationalityInput as HTMLInputElement).value; 
        nationalityresult.innerHTML =`<b>Nationality:</b>${nationality}` ;

        const speciality = (specialityInput as HTMLInputElement).value; 
        specialityresult.innerText =`${speciality}` ;
        
        const skills = (skillsInput as HTMLInputElement).value; 
        skillsresult.innerText =`${skills}` ;

        const workexperience = (workexperienceInput as HTMLInputElement).value; 
        workexperienceresult.innerText =`${workexperience}` ;

        const education = (educationInput as HTMLInputElement).value; 
        mainheading!.innerHTML=`
        <h2>RESUME BUILDER APPLICATION</h2>
        `
        Educationresult.innerText =`${education}` ;

        document.getElementById("generate");
        (document.getElementById("form") as HTMLFormElement).style.display = "none";
        (document.getElementById("generatedform")as HTMLDivElement).style.display = "block"; 
        generate.style.display='none';
        


    } else {
        console.log("problem");
    }
}
