"use strict";
const modalToggler = document.querySelectorAll(".modal-toggler");
const modalContainer = document.querySelector("#default-modal");
let modalTitle = document.querySelector("#modal-title");
let modalBody = document.querySelector("#modal-body");
const modalClose = document.querySelector(".modal-close");
modalClose.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
});
modalToggler.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        var _a, _b;
        const target = e.currentTarget;
        modalTitle.textContent = (_b = (_a = target.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
        modalContainer.classList.remove("hidden");
        modalBody.querySelectorAll(".content").forEach((content) => {
            var _a;
            if ((_a = modalTitle.textContent) === null || _a === void 0 ? void 0 : _a.includes(content.id)) {
                content.classList.remove("hidden");
            }
            else
                content.classList.add("hidden");
        });
    });
});
//# sourceMappingURL=index.js.map