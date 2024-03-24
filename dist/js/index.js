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
        var _a, _b, _c, _d;
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
        if ((_d = target.textContent) === null || _d === void 0 ? void 0 : _d.includes("Report")) {
            modalBody.innerHTML = `<div class="space-y-1 mb-8">
        <h3 class="text-sm font-medium">
          Why are you reporting this container?
        </h3>
        <p class="text-xs text-gray-500">
          Your report is anonymous, except if you're reporting an
          intellectual property infringement. If someone is in
          intermedaite danger, call the local emergiency services -
          don't wait.
        </p>
      </div>

      <ul class="flex flex-col gap-4 ms-5 pb-5">
        <li class="flex items-center gap-3 h-5">
          <input
            aria-describedby="report-option-text"
            type="radio"
            id="1"
            name="report-option"
            value="1"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label for="1" class="text-sm text-gray-900"
            >Used more than once</label
          >
        </li>
        <li class="flex items-center gap-3 h-5">
          <input
            aria-describedby="report-option-text"
            type="radio"
            id="2"
            name="report-option"
            value="2"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label for="2" class="text-sm text-gray-900"
            >False information</label
          >
        </li>
        <li class="flex items-center gap-3 h-5">
          <input
            aria-describedby="report-option-text"
            type="radio"
            id="3"
            name="report-option"
            value="3"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label for="3" class="text-sm text-gray-900"
            >Intellectual property violation</label
          >
        </li>
        <li class="flex items-center gap-3 h-5">
          <input
            aria-describedby="report-option-text"
            type="radio"
            id="4"
            name="report-option"
            value="4"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label for="4" class="text-sm text-gray-900"
            >Something else</label
          >
        </li>
      </ul>`;
        }
        modalContainer.classList.remove("hidden");
    });
});
//# sourceMappingURL=index.js.map