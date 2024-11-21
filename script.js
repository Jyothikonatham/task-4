// Sample data for products
const menuItems = {
    hot: [
        { name: "Lilly", description: "White flower.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9I-_IvlduXtKr8k4mHQBlocHFFrqQhtcm-n7f6yycPhPbOUeziKKH6QI5ZshaV13KX0I&usqp=CAU"},
        { name: "Rose", description: "Red Flower.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBdl1Ih0dZHmswVCjxDHoY1LHsKfImmfsCMu9AgC7hvtH81xErsAicN1J0xoXD_NRVyE&usqp=CAU" },
        { name: "Dahlia", description: "yellow.", image: "https://www.shutterstock.com/image-photo/two-white-lilies-macro-photography-260nw-1855880266.jpg" }
    ],
    cold: [
        { name: "Sun flower", description: "light yellow.", image: "https://www.shutterstock.com/image-photo/big-small-sunflower-varieties-flower-260nw-2435769513.jpg" },
        { name: "lavender", description: "purple.", image: "https://www.shutterstock.com/image-vector/allium-flower-illustration-realistic-260nw-2339762215.jpg" },
        { name: "Azalea", description: "blue .", image: "https://www.shutterstock.com/image-photo/close-blue-cornflower-flower-isolated-260nw-1925219723.jpg" }
    ],
    pastry: [
        { name: "camellia", description: "Small flowers .", image: "https://www.shutterstock.com/image-photo/purple-flowers-background-soft-focus-260nw-272082242.jpg" },
        { name: "poppy", description: "shiny flowers.", image: "https://www.shutterstock.com/image-photo/small-flower-yellow-walking-iris-260nw-2457311291.jpg" },
        { name: "Iris", description: "pink flower.", image: "https://www.shutterstock.com/image-photo/beautiful-white-daisy-delicate-garden-260nw-1761240971.jpg" }
    ]
};

// Function to filter the menu items based on the category
function filterMenu(category) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';  // Clear existing items

    const items = menuItems[category];
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        
        menuContainer.appendChild(itemDiv);
    });
}

// Initially load hot coffee items
filterMenu('hot');


// Add Note Functionality
function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    const note = noteInput.value.trim();

    if (note) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note-item');
        noteElement.innerHTML = `
            <p>${note}</p>
            <button onclick="removeNote(this)">Remove</button>
        `;
        noteList.appendChild(noteElement);
        noteInput.value = '';  // Clear the input field
    }
}

function removeNote(button) {
    const noteItem = button.parentElement;
    noteItem.remove();
}

document.addEventListener("DOMContentLoaded", loadMenu);  // Load menu on page load