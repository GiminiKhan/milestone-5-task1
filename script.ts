document.getElementById('resumeForm')?.addEventListener("submit", function (event) {
    event.preventDefault();

    
    


// document.addEventListener('DOMContentLoaded', function() {
    // const form = document.getElementById('resumeForm') as HTMLFormElement;
    
   //  form?.addEventListener('submit', function(event) {
        // event.preventDefault();

        //Get reference to form element using their IDs    // Type assertions
        const profilePicture = document.getElementById("profilePicture") as HTMLInputElement
        const nameElement = document.getElementById('name') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const contactnoElement = document.getElementById('contactno') as HTMLInputElement;
        const addressElement = document.getElementById('address') as HTMLInputElement;
        const educationElement = document.getElementById('education') as HTMLTextAreaElement;
        const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
        const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    
        //**  
        const usernameElement = document.getElementById("username") as HTMLInputElement;
// check if all form elements are present 

        if (profilePicture && nameElement && emailElement && contactnoElement && addressElement && educationElement && experienceElement && skillsElement && usernameElement) {
            const formData = new URLSearchParams();
            formData.append('name', nameElement.value);
            formData.append('email', emailElement.value);
            formData.append('contactno', contactnoElement.value);
            formData.append('address', addressElement.value);
            formData.append('education', educationElement.value);
            formData.append('experience', experienceElement.value);
            formData.append('skills', skillsElement.value);
//* 
           const username = usernameElement.value;
           const uniquePath = `resume/${username.replace(/\s+/g, ' ')}_cv.html` 
            

            // Handle profile picture
            const profilePictureFile = profilePictureInput.files?.[0];
            const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :"";

            const resumeOutput = 
            <h2>Resume</h2>
            ${
                profilePictureURL
                ?`<img src="${profilePictureURL}" alt="Profile Picture" class=`
                :""

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>contactno:</strong> ${contactno}</p>
                <p><strong>Adress:</strong> ${adress}</p>
                <h3>Education</h3><p>${education}</p>
                <h3>Experience</h3><p> ${experience}</p>
                <h3>Skills</h3> <p>${skills}</p>


cost downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset.utf-8,' + encodeURIComponent(resumeOutput)

downloadLink.download = uniquePath;
downloadLink.textContent = 'Download your 2024 Resume';


const resumeOutputElement = document.getElementById('resumeOutput');
if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;



    resumeOutputElement.appendChild(downloadLink)

    resumeOutputElement.style.display = "block";
    {
        else {
           console.error("One or more form elements are missing");
             
        }
    }
};













//             if (profilePictureFile) {
//                 const reader = new FileReader();
//                 reader.onload = function(e) {
//                     const result = e.target?.result;
//                     if (typeof result === 'string') {
//                         sessionStorage.setItem('profilePicture', result);
//                     }
//                     redirectToResumePage(formData);
//                 };
//                 reader.readAsDataURL(profilePictureFile);
//             } else {
//                 redirectToResumePage(formData);
//             }
//         } else {
//             console.error('One or more elements are missing');
//         }
//     // });
// // });

// function redirectToResumePage(formData: URLSearchParams) {
//     const queryString = formData.toString();
//     window.location.href = `resume.html?${queryString}`;
// }
