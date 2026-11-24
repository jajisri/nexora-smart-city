
document.addEventListener("DOMContentLoaded", () => {

    // SHOW CURRENT DATE
    const dateDisplay = document.getElementById("dateDisplay");

    const today = new Date();

    dateDisplay.textContent = today.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    });


    // NAVIGATION ACTIVE STATE
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {

            navLinks.forEach(item => item.classList.remove("active"));

            this.classList.add("active");

        });
    });


    // NOTIFICATION BUTTON
    const notificationBtn = document.getElementById("notificationBtn");

    notificationBtn.addEventListener("click", () => {
        showToast("You are all caught up! No new notifications.");
    });


    // MAP BUTTON
    const mapViewBtn = document.getElementById("mapViewBtn");

    mapViewBtn.addEventListener("click", () => {
        showToast("City network map is currently in demo mode.");
    });


    // ACTIVITY CHART FILTER
    const activityFilter = document.getElementById("activityFilter");
    const activityValue = document.getElementById("activityValue");
    const chartBars = document.querySelectorAll(".bar");

    activityFilter.addEventListener("change", function () {

        if (this.value === "month") {

            activityValue.innerHTML = '91.2<span>%</span>';

            const monthValues = [75, 82, 66, 93, 84, 98, 78];

            chartBars.forEach((bar, index) => {
                bar.style.height = monthValues[index] + "%";
            });

            showToast("Showing monthly city activity.");

        } else {

            activityValue.innerHTML = '84.6<span>%</span>';

            const weekValues = [46, 63, 54, 82, 72, 91, 67];

            chartBars.forEach((bar, index) => {
                bar.style.height = weekValues[index] + "%";
            });

            showToast("Showing weekly city activity.");
        }

    });


    // TOAST MESSAGE
    function showToast(message) {

        const oldToast = document.querySelector(".toast");

        if (oldToast) {
            oldToast.remove();
        }

        const toast = document.createElement("div");

        toast.className = "toast";
        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("show");
        }, 10);

        setTimeout(() => {
            toast.classList.remove("show");

            setTimeout(() => {
                toast.remove();
            }, 400);

        }, 3000);
    }


    // SMOOTH NAVIGATION
    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});
