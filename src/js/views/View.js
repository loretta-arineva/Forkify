import icons from "url:../../img/icons.svg";

// Parent View Class
export default class View {
    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) return /**/ this.renderError();
        // Equivallent of:
        // if (!data || []) return /**/ this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._insertMarkup(markup);
    }

    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document.createRange().createContextualFragment(newMarkup);

        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];

            // Updates changed text
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
                curEl.textContent = newEl.textContent;
            }

            // Updates changed attributes
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
            }
        });
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }

    _insertMarkup(markup) {
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    renderSpinner() {
        const markup = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
        `;
        this._clear();
        this._insertMarkup(markup);
    }

    renderMessage(message = this._message) {
        const markup = `
            <div class="message">
                <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div> 
        `;
        this._clear();
        this._insertMarkup(markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div> 
        `;
        this._clear();
        this._insertMarkup(markup);
    }
}