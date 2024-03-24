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
        var _a, _b, _c;
        const target = e.currentTarget;
        modalTitle.textContent = (_b = (_a = target.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
        modalBody.innerHTML = `<p class="text-base leading-relaxed text-gray-500">
With less than a month to go before the European Union enacts
new consumer privacy laws for its citizens, companies around
the world are updating their terms of service agreements to
comply.
</p>
<p class="text-base leading-relaxed text-gray-500">
The European Union's General Data Protection Regulation
(G.D.P.R.) goes into effect on May 25 and is meant to ensure a
common set of data rights in the European Union. It requires
organizations to notify users as soon as possible of high-risk
data breaches that could personally affect them.
</p>`;
        if ((_c = target.textContent) === null || _c === void 0 ? void 0 : _c.includes("container")) {
            modalBody.innerHTML = `<div class="flex text-sm gap-2">
            <h3 class="font-medium text-nowrap">Name:</h3>
            <p
            class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
            >
        Stool bottle
      </p>
    </div>

    <div class="flex text-sm gap-2">
      <h3 class="font-medium text-nowrap">ID:</h3>
      <p
        class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
      >
        2345-456-89
      </p>
    </div>

    <div class="flex text-sm gap-2">
      <h3 class="font-medium text-nowrap">Ward/Dr.</h3>
      <p
        class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
      >
        magogoni
      </p>
    </div>

    <div class="flex text-sm gap-2">
      <h3 class="font-medium text-nowrap">Color:</h3>
      <p
        class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
      >
        Clear
      </p>
    </div>

    <div class="flex text-sm gap-2">
      <h3 class="font-medium text-nowrap">Material:</h3>
      <p
        class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
      >
        PP
      </p>
    </div>

    <div class="flex justify-between gap-8">
      <div class="flex text-sm gap-2 basis-[45%]">
        <h3 class="font-medium text-nowrap">Date:</h3>
        <p
          class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
        >
          12 <sup>th</sup> Jan 2024
        </p>
      </div>

      <div class="flex text-sm gap-2 basis-[45%]">
        <h3 class="font-medium text-nowrap">Time:</h3>
        <p
          class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
        >
          12:00 Am
        </p>
      </div>
    </div>

    <div class="flex text-sm gap-2">
      <h3 class="font-medium text-nowrap">Made in:</h3>
      <p
        class="border-b-2 border-dotted basis-full text-gray-600 text-center uppercase"
      >
        Tanzania
      </p>
    </div>`;
        }
        modalContainer.classList.remove("hidden");
    });
});
//# sourceMappingURL=index.js.map