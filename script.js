const events = [
    {
        title: "Invention of the Wheel",
        year: "3500 BC",
        category: "invention",
        period: "ancient",
        description: "One of humanity's earliest inventions, revolutionizing transport."
    },
    {
        title: "Birth of Alexander the Great",
        year: "356 BC",
        category: "war",
        period: "ancient",
        description: "A legendary military leader and king of Macedon."
    },
    {
        title: "Foundation of the University of Oxford",
        year: "1096",
        category: "science",
        period: "medieval",
        description: "One of the oldest universities in the world."
    },
    {
        title: "Christopher Columbus discovers America",
        year: "1492",
        category: "geography",
        period: "modern",
        description: "A major event that connected continents."
    },
    {
        title: "First Moon Landing",
        year: "1969",
        category: "science",
        period: "contemporary",
        description: "Neil Armstrong became the first human to walk on the moon."
    }
];

function displayEvents() {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = "";

    const category = document.getElementById("categoryFilter").value;
    const period = document.getElementById("periodFilter").value;

    const filtered = events.filter(e => 
        (category === "all" || e.category === category) &&
        (period === "all" || e.period === period)
    );

    filtered.forEach(event => {
        const div = document.createElement("div");
        div.className = "event";
        div.innerHTML = `
            <div class="event-title">${event.title}</div>
            <div class="event-year">${event.year}</div>
            <div>${event.description}</div>
        `;
        timeline.appendChild(div);
    });
}

document.getElementById("categoryFilter").addEventListener("change", displayEvents);
document.getElementById("periodFilter").addEventListener("change", displayEvents);

displayEvents();
