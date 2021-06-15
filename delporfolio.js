let data = fetch('./infoAboutMe.json');

function Skills(){
    const allSkills = document.getElementById("sessionSkills")
    data.then((v) => v.clone().json()).then(value => {
        value.skills.map((skill, i) => {
            allSkills.insertAdjacentHTML("afterbegin", 
            `<div class='skill' "key=${i}> 
               <img style='width: 100%; height: 200px; object-fit: contain;'  src='${skill.img}'/>
               <div style='padding: 5px;'>
                    <span style='margin-right: 2px;'>${skill.name}</span>
                    <span >${skill.years}</span>  
               <div>
            </div>`)
        })
    })
    
}
    

function Experience  () {
    const exp = document.getElementById('sessionExperience')
    data.then((v) => v.clone().json().then(val => {
        val.myExperience.map((value, i) => {
        exp.insertAdjacentHTML("afterbegin",`<div class='experence' key=${i}> 
                                                  <span style='color: black;  font-weight: bold;'>${value.years}</span> 
                                                  <p style='font-weight: bold; color: #3F5341;'>${value.experience}</p> 
                                                  <span style='border-top: 2px solid black; grid-column-start: 1;
                                                  grid-column-end: 3; align-self: center;'></span>
                                                  </div
                                               
                    
                        `
        )
    })
 })
)}

Skills()
Experience()
