class SearchView {
    _parentEl = document.querySelector('.search');

    getQuery() {
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();

        return query;
    }

    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }

    addHandlerSearch(handler) {
        // Works on enter and button
        this._parentEl.addEventListener("submit", function (e) {
            e.preventDefault();
            handler();
        });
    }
    // _generateMarkup() {
    //     return `
    //         <li class="preview">
    //             <a class="preview__link preview__link--active" href="#23456">
    //             <figure class="preview__fig">
    //                 <img src="src/img/test-1.jpg" alt="Test" />
    //             </figure>
    //             <div class="preview__data">
    //                 <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
    //                 <p class="preview__publisher">The Pioneer Woman</p>
    //                 <div class="preview__user-generated">
    //                 <svg>
    //                     <use href="src/img/icons.svg#icon-user"></use>
    //                 </svg>
    //                 </div>
    //             </div>
    //             </a>
    //         </li>
    //     `
    // }

}

export default new SearchView();