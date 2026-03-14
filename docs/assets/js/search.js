(async function () {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");
    if (!input || !results) return;

    let records = [];
    try {
        const response = await fetch("../data/site-index.json");
        records = await response.json();
    } catch (error) {
        results.innerHTML = "<p class=\"muted\">Search index could not be loaded.</p>";
        return;
    }

    function render(items) {
        if (items.length === 0) {
            results.innerHTML = "<p class=\"muted\">No matching result.</p>";
            return;
        }

        results.innerHTML = items
            .map((item) => {
                const keywords = (item.keywords || []).join(", ");
                return `
          <article class="search-item">
            <h3>${item.title}</h3>
            <p class="list-sub">Type: ${item.type}</p>
            <p class="list-sub">Keywords: ${keywords}</p>
            <a href="${item.url}" target="_blank" rel="noreferrer">Open</a>
          </article>
        `;
            })
            .join("");
    }

    function search(text) {
        const query = text.trim().toLowerCase();
        if (!query) {
            render(records);
            return;
        }

        const filtered = records.filter((item) => {
            const haystack = `${item.title} ${item.type} ${(item.keywords || []).join(" ")}`.toLowerCase();
            return haystack.includes(query);
        });

        render(filtered);
    }

    input.addEventListener("input", (event) => {
        search(event.target.value);
    });

    render(records);
})();
