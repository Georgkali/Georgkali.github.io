


let coaches = document.getElementById('coaches');
let infoBlog = document.getElementById('info');
let about = document.getElementById('about');
let classes = document.getElementById('classes');
let contacts = document.getElementById('contacts');


// coaches button

const showCoaches = () => {
    coaches.style.color = 'yellow';
    about.style.color = 'white';
    classes.style.color = 'white';
    contacts.style.color = 'white';
    
};

coaches.addEventListener('click', showCoaches);
// about button
const showAbout = () => {

    about.style.color = 'yellow';
    coaches.style.color = 'white';
    classes.style.color = 'white';
    contacts.style.color = 'white';
    
};

about.addEventListener('click', showAbout);
// classes button
const showClasses = () => {
    
    classes.style.color = 'yellow';
    coaches.style.color = 'white';
    about.style.color = 'white';
    contacts.style.color = 'white';
    
};

classes.addEventListener('click', showClasses);
// contacts button

const showContacts = () => {

    classes.style.color = 'white';
    coaches.style.color = 'white';
    about.style.color = 'white';
    contacts.style.color = 'yellow';
    
};

contacts.addEventListener('click', showContacts);

// conatcts section




function initMap() {
  let map;
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 56.993657, lng: 24.187987 },
    zoom: 16,
  });
  const marker = new google.maps.Marker({
    position: { lat: 56.993657, lng: 24.187987 },
    map: map,
  });
}


