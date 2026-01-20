const colleges = [
  // PUNE
  {name:"COEP Pune", city:"Pune", exam:"CET", branch:"CS", type:"Autonomous", cutoff:95, package:50},
  {name:"VIT Pune", city:"Pune", exam:"CET", branch:"CS", type:"Autonomous", cutoff:90, package:12},
  {name:"PCCOE Pune", city:"Pune", exam:"CET", branch:"IT", type:"Autonomous", cutoff:88, package:8},
  {name:"MIT WPU", city:"Pune", exam:"CET", branch:"CS", type:"Autonomous", cutoff:85, package:10},
  {name:"DY Patil Akurdi", city:"Pune", exam:"CET", branch:"Mechanical", type:"Autonomous", cutoff:80, package:7},
  {name:"Sinhgad COE", city:"Pune", exam:"CET", branch:"Civil", type:"Non-Autonomous", cutoff:70, package:5},

  // MUMBAI
  {name:"VJTI Mumbai", city:"Mumbai", exam:"CET", branch:"CS", type:"Autonomous", cutoff:96, package:45},
  {name:"SPIT Mumbai", city:"Mumbai", exam:"CET", branch:"IT", type:"Autonomous", cutoff:92, package:20},
  {name:"DJ Sanghvi", city:"Mumbai", exam:"CET", branch:"CS", type:"Autonomous", cutoff:89, package:15},
  {name:"Thadomal Shahani", city:"Mumbai", exam:"CET", branch:"IT", type:"Autonomous", cutoff:87, package:10},
  {name:"Atharva COE", city:"Mumbai", exam:"CET", branch:"Mechanical", type:"Non-Autonomous", cutoff:75, package:6},

  // NASHIK
  {name:"KBTCOE Nashik", city:"Nashik", exam:"CET", branch:"Mechanical", type:"Non-Autonomous", cutoff:75, package:6},
  {name:"Sandip Institute", city:"Nashik", exam:"CET", branch:"CS", type:"Non-Autonomous", cutoff:65, package:5},
  {name:"MET Bhujbal", city:"Nashik", exam:"CET", branch:"IT", type:"Non-Autonomous", cutoff:68, package:5},
  {name:"Gokhale Engg", city:"Nashik", exam:"CET", branch:"Civil", type:"Non-Autonomous", cutoff:60, package:4},

  // JEE
  {name:"IIIT Pune", city:"Pune", exam:"JEE", branch:"CS", type:"Autonomous", cutoff:98, package:55},
  {name:"NIT Nagpur", city:"Nagpur", exam:"JEE", branch:"Mechanical", type:"Autonomous", cutoff:95, package:30}
];

function findColleges(){
  const p = Number(document.getElementById("percentile").value);
  const city = document.getElementById("city").value;
  const branch = document.getElementById("branch").value;
  const exam = document.getElementById("exam").value;
  const type = document.getElementById("type").value;

  let safe=[], moderate=[], dream=[];

  colleges.forEach(c=>{
    if(c.exam===exam && c.branch===branch && c.type===type){
      if(p >= c.cutoff + 8) safe.push(c);
      else if(p >= c.cutoff) moderate.push(c);
      else if(p >= c.cutoff - 10) dream.push(c);
    }
  });

  let output = render("Safe Colleges", safe)
             + render("Moderate Colleges", moderate)
             + render("Dream Colleges", dream);

  document.getElementById("result").innerHTML =
    output || "No colleges found. Try changing filters.";
}

function render(title, list){
  if(list.length===0) return "";
  let html = `<h4>${title}</h4>`;
  list.sort((a,b)=>b.package-a.package);
  list.forEach(c=>{
    html += `
      <div class="college">
        <b>${c.name}</b><br>
        Cutoff: ${c.cutoff}<br>
        Highest Package: ${c.package} LPA
      </div>
    `;
  });
  return html;
}
