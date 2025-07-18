// This script loads profile data from profileData.json and injects it into #parentDiv
fetch('profileData.json')
    .then(response => response.json())
    .then(data => {
        const parentDiv = document.getElementById('parentDiv');
        if (!parentDiv) return;
        parentDiv.innerHTML = `
      <div class="flexbox-container">
        <div class="flexbox-container2">
          <h1 class="header1" id="home">${data.name}</h1>
          <h2 class="header2">${data.title}</h2>
        </div>
        <div class="flexbox-container2">
          <img class="profile-pic" src="${data.profileImage}" alt="Profile Picture" width="100" height="100">
        </div>
      </div>
      <h3>
        <a href="mailto:${data.email}">${data.email}</a><br>
        <a href="tel:${data.phone}">${data.phone}</a><br>
        ${data.location}<br>
        <a href="${data.github}">${data.github}</a><br>
        <a href="${data.linkedin}">${data.linkedin}</a>
      </h3>
      <p>${data.summary}</p>
      <h4>TECHNICAL SKILLS</h4>
      <ul>
        ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
      <h4 id="experience">PROFESSIONAL EXPERIENCE</h4>
      ${data.experience.map(exp => `
        <p><b>${exp.company}</b><br><b>${exp.role}</b></p>
        ${exp.projects.map(proj => `
          <p><b>${proj.name}</b><br><b>Tech Stack:</b> ${proj.techStack}</p>
          <ul>${proj.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        `).join('')}
      `).join('')}
    `;
    });
