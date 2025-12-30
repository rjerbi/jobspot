// Récupérer les éléments de la page
const form = document.querySelector('form');
const jobs = document.querySelectorAll('.job');
const keywordInput = form.querySelector('#keyword-input');
const locationInput = form.querySelector('#location-input');

// Ajouter un événement de soumission de formulaire
form.addEventListener('submit', e => {
  e.preventDefault(); // empêcher la soumission du formulaire

  const keyword = keywordInput.value.toLowerCase();
  const location = locationInput.value.toLowerCase();

  // Filtrer la liste des emplois en fonction des valeurs de recherche
  const filteredJobs = Array.from(jobs).filter(job => {
    const jobTitle = job.querySelector('h3').textContent.toLowerCase();
    const jobLocation = job.querySelector('.location').textContent.toLowerCase();
    return (jobTitle.includes(keyword) && jobLocation.includes(location));
  });

  // Mettre à jour la liste des emplois affichés
  updateJobsList(filteredJobs);
});

// Fonction pour mettre à jour la liste des emplois affichés
function updateJobsList(jobs) {
  const keywords = document.getElementById("keywords").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();
  const jobListings = document.getElementById("job-listings").children;

  for (let i = 0; i < jobListings.length; i++) {
    const job = jobListings[i];
    const jobTitle = job.getElementsByTagName("h3")[0].textContent.toLowerCase();
    const jobLocation = job.getElementsByTagName("p")[1].textContent.toLowerCase();

    if (jobTitle.includes(keywords) && jobLocation.includes(location)) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  }
  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", function() {
    updateJobsList();
  });
  
}
