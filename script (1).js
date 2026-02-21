const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvents = [
  {
    title: "Web Development Conference",
    date: "2026-02-15",
    category: "Conference",
    description: "Annual conference on modern web technologies."
  },
  {
    title: "JavaScript Workshop",
    date: "2026-02-20",
    category: "Workshop",
    description: "Hands-on JavaScript learning session."
  }
];

function createEventCard(eventData) {
  const card = document.createElement("div");
  card.classList.add("event-card");

  card.innerHTML = `
    <button class="delete-btn">X</button>
    <h3>${eventData.title}</h3>
    <div>📅 ${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
  `;

  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
    if (eventContainer.children.length === 0) {
      eventContainer.innerHTML =
        '<div class="empty-state">No events yet. Add your first event!</div>';
    }
  });

  return card;
}

function addEvent(eventData) {
  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.remove();

  eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const eventData = {
    title: eventTitle.value,
    date: eventDate.value,
    category: eventCategory.value,
    description: eventDescription.value
  };

  addEvent(eventData);
  eventForm.reset();
});

clearAllBtn.addEventListener("click", () => {
  eventContainer.innerHTML =
    '<div class="empty-state">No events yet. Add your first event!</div>';
});

addSampleBtn.addEventListener("click", () => {
  sampleEvents.forEach(event => addEvent(event));
});

document.addEventListener("keydown", (event) => {
  const demo = document.getElementById("demoContent");

  demo.textContent = `You pressed: ${event.key}`;
});
