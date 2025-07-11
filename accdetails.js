document.addEventListener("DOMContentLoaded", async function() {

    let { data: accommodations, error } = await supabaseClient
        .from('cost_accommodation')
        .select('*')
     .order('id', { ascending: true });

    if (error) {
        console.error(error);
        return;
    }

    const tbody = document.querySelector("#accommodationTable tbody");
    tbody.innerHTML = ""; // Clear previous content
    accommodations.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.country}</td>
            <td>${entry.location}</td>
            <td>${entry["check in"]}</td>
            <td>${entry.nights}</td>
            <td>${entry["total price of stay"]}</td>
            <td>${entry.accommodation}</td>
        `;
        tbody.appendChild(row);
    });
});
