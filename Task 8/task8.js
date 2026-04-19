let products = [];
let state = {
    search: "",
    category: "all",
    sort: ""
};

const container = document.getElementById("products");
const loader = document.getElementById("loader");
const error = document.getElementById("error");


async function fetchProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error();

        products = await res.json();
        loader.style.display = "none";

        applyFilters();

    } catch {
        loader.style.display = "none";
        error.textContent = "Error loading data";
    }
}


function applyFilters() {
    let result = [...products];


    if (state.search) {
        result = result.filter(p =>
            p.title.toLowerCase().includes(state.search)
        );
    }


    if (state.category !== "all") {
        result = result.filter(p => p.category === state.category);
    }


    if (state.sort === "low") {
        result.sort((a, b) => a.price - b.price);
    } else if (state.sort === "high") {
        result.sort((a, b) => b.price - a.price);
    }

    displayProducts(result);
}


function displayProducts(data) {
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<p>No products found</p>";
        return;
    }

    data.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <img src="${p.image}" />
      <h3>${p.title.slice(0, 20)}...</h3>
      <p>${p.description.slice(0, 60)}...</p>
      <button class="price-btn">₹${p.price}</button>
      <button onclick="viewDetails(${p.id})">View More</button>
    `;

        container.appendChild(card);
    });
}


let timer;
document.getElementById("search").addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        state.search = e.target.value.toLowerCase();
        applyFilters();
    }, 300);
});


document.getElementById("category").addEventListener("change", (e) => {
    state.category = e.target.value;
    applyFilters();
});


document.getElementById("lowHigh").onclick = () => {
    state.sort = "low";
    applyFilters();
};

document.getElementById("highLow").onclick = () => {
    state.sort = "high";
    applyFilters();
};


const modal = document.getElementById("modal");
const modalData = document.getElementById("modalData");

function viewDetails(id) {
    const p = products.find(x => x.id === id);

    modal.style.display = "block";
    modalData.innerHTML = `
    <h2>${p.title}</h2>
    <img src="${p.image}" height="150"/>
    <p>${p.description}</p>
    <h3>₹${p.price}</h3>
  `;
}

document.getElementById("close").onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};


fetchProducts();