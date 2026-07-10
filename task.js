class Search {
    constructor(data) {
        this.data = data;
    }

    equal(text, keyword) {
        return text.toLowerCase().indexOf(keyword.toLowerCase()) === -1;
    }

    filterData(keyword, type, yearTarget = "") {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let matchText = "";
            let isMatch = false;

            if (type === "title") {
                matchText = book.querySelector(".title").innerText;
                isMatch = !this.equal(matchText, keyword);
            } 
            else if (type === "author") {
                matchText = book.querySelector(".author").innerText;
                isMatch = !this.equal(matchText, keyword);
            } 
            else if (type === "publisher") {
                matchText = book.querySelector(".publisher").innerText;
                isMatch = !this.equal(matchText, keyword);
            } 
            else if (type === "title_year") {
                let titleText = book.querySelector(".title").innerText;
                let yearText = book.querySelector(".year").innerText;
                let titleMatch = !this.equal(titleText, keyword);
                let yearMatch = yearText.trim() === yearTarget.trim();
                isMatch = titleMatch && yearMatch;
            }

            if (isMatch) {
                book.style.display = "";
            } else {
                book.style.display = "none";
            }
        }
    }
}

const keywordInput = document.querySelector("#keyword");
const yearInput = document.querySelector("#year_input");
const filterRadios = document.querySelectorAll('input[name="filter"]');

function runningSearch() {
    const books = document.querySelectorAll(".book");
    const searchObj = new Search(books);

    let activeFilter = "title";
    filterRadios.forEach(radio => {
        if (radio.checked) {
            activeFilter = radio.value;
        }
    });

    searchObj.filterData(keywordInput.value, activeFilter, yearInput.value);
}

keywordInput.addEventListener("keyup", runningSearch);

yearInput.addEventListener("keyup", runningSearch);
yearInput.addEventListener("change", runningSearch);

filterRadios.forEach(radio => {
    radio.addEventListener("change", runningSearch);
});