const API = "http://localhost:5000/api/members";

async function loadMembers() {
  const res = await fetch(API);
  const data = await res.json();

  const membersDiv = document.getElementById("members");
  membersDiv.innerHTML = "";

  data.forEach(member => {
    membersDiv.innerHTML += `
      <div class="card">
        <h2>${member.name}</h2>
        <p class="status">${member.status}</p>

        <button onclick="updateStatus('${member._id}','Available')">Available</button>

        <button onclick="updateStatus('${member._id}','Busy')">Busy</button>

        <button onclick="updateStatus('${member._id}','Away')">Away</button>
      </div>
    `;
  });
}

async function updateStatus(id,status){

await fetch(API+"/"+id,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({status})
});

loadMembers();

}

loadMembers();
setInterval(loadMembers, 3000);