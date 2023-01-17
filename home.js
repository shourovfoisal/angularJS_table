
const arr = [
    {
        name: "A",
        url: "https://www.google.com"
    },
    {
        name: "B",
        url: "https://www.google.com"
    },
    {
        name: "C",
        url: "https://www.google.com"
    },
    {
        name: "D",
        url: "https://www.google.com"
    },
    {
        name: "E",
        url: "https://www.google.com"
    },
    {
        name: "F",
        url: "https://www.google.com"
    },
    {
        name: "G",
        url: "https://www.google.com"
    },
    {
        name: "H",
        url: "https://www.google.com"
    },
]

function gridSystem() {
    
    let gridParent = document.getElementById('gridParent');
    
    let rows = 3;
    let arrLen = arr.length;
    let perRowElem = Math.ceil(arrLen/rows);
    
    gridParent.style.gridTemplateColumns = `repeat(${perRowElem}, 1fr)`
    
    // let idx = 0;
    
    // for(i=0; i<rows; i++) {
    //     for(j=0; j<perRowElem; j++) {
            
    //         let gridItem = document.createElement('div');
    //         gridItem.classList.add("gridItem");
            
    //         let linkElement = document.createElement('a');
    //         linkElement.innerHTML = arr[idx].name;
    //         linkElement.setAttribute("href", arr[idx].url);
    //         gridItem.appendChild(linkElement);
            
    //         gridParent.appendChild(gridItem);
            
    //         idx++;
    //     }
    // }
    
    arr.forEach(elem => {
        
        let gridItem = document.createElement('div');
        gridItem.classList.add("gridItem");
        
        let linkElement = document.createElement('a');
        linkElement.innerHTML = elem.name;
        linkElement.setAttribute("href", elem.url);
        gridItem.appendChild(linkElement);
        
        gridParent.appendChild(gridItem);
    })
    
}

gridSystem();