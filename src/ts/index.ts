const modalToggler = document.querySelectorAll(
  ".modal-toggler"
) as NodeListOf<HTMLButtonElement>;
const modalContainer = document.querySelector(
  "#default-modal"
) as HTMLDivElement;

let modalTitle = document.querySelector("#modal-title") as HTMLHeadingElement;
let modalBody = document.querySelector("#modal-body") as HTMLHeadingElement;

const modalClose = document.querySelector(".modal-close") as HTMLButtonElement;

modalClose.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
});

modalToggler.forEach((btn) => {
  btn.addEventListener("click", (e: Event) => {
    const target = e.currentTarget as HTMLButtonElement;
    modalTitle.textContent = target.textContent?.trim() ?? "";

    modalContainer.classList.remove("hidden");
    modalBody.querySelectorAll(".content").forEach((content) => {
      if (modalTitle.textContent?.includes(content.id)) {
        content.classList.remove("hidden");
      } else content.classList.add("hidden");
    });
  });
});
