import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.createElement("ul") ;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((item) => {
      const li = document.createElement("li");
      li.className = "item";
      const check = document.createElement("input");
      check.type = "checkbox";
      check.checked = item.checked;
      check.id = item.id;
      check.tabIndex = 0;
      li.appendChild(check);
      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });

      const label = document.createElement("label");
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.appendChild(label);

      const button = document.createElement("button");
      button.textContent = "X";
      button.className = "button";
      li.append(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      this.ul.append(li);
    });
  }
}
