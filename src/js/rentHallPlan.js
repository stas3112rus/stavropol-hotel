function rentHallPlans() {
  const tabsItems = document.querySelectorAll(".Tabs__Item");
  const rentHallPlans = document.querySelectorAll(".RentHall__plan");

  tabsItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      activateTab(e.currentTarget);
      showCurrentHall(item.dataset.choosehall);
    });
  });

  function activateTab(currentTarget) {
    tabsItems.forEach((tabItem) => {
      if (tabItem == currentTarget) {
        tabItem.classList.add("Tabs__Item_active");
      } else {
        tabItem.classList.remove("Tabs__Item_active");
      }
    });
  }

  function showCurrentHall(hallNumber) {
    rentHallPlans.forEach((plan) => {
      if (plan.dataset.currenthall == hallNumber) {
        plan.classList.remove("RentHall__plan_hidden");
      } else {
        plan.classList.add("RentHall__plan_hidden");
      }
    });
  }
}

rentHallPlans();
