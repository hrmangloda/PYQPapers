document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar ul li");
    const examList = document.getElementById("examList");
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menuToggle");

    // ✅ Exams Data (Category-wise)
    const examsData = {
        bank: ["SBI PO", "SBI Clerk", "IBPS PO", "IBPS Clerk"],
        ssc: ["SSC MTS", "SSC CHSL", "SSC GD", "SSC CGL", "SSC CPO"],
        railway: ["RRB NTPC", "RRB JE", "RRB ALP"],
        state: ["UP PCS", "Bihar PCS", "Rajasthan PCS"],
        other: ["NDA", "CDS", "AFCAT"],
        teaching: ["CTET", "UPTET", "KVS", "DSSSB"],
        defence: ["Indian Army", "Indian Navy", "Indian Air Force"]
    };

    // ✅ Function to load exams based on category
    function loadExams(category) {
        examList.innerHTML = ""; // Clear previous content
        if (examsData[category]) {
            examsData[category].forEach(exam => {
                let div = document.createElement("div");
                div.className = "card";
                div.textContent = exam;
                examList.appendChild(div);
            });
        }
    }

    // ✅ Initial load (SSC by default)
    loadExams("ssc");

    // ✅ Add Click Event to Sidebar Items
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all
            menuItems.forEach(i => i.classList.remove("active"));

            // Add active class to clicked item
            this.classList.add("active");

            // Load new exams
            let category = this.getAttribute("data-category");
            loadExams(category);

            // Close Sidebar in Mobile
            sidebar.classList.remove("active");
        });
    });

    // ✅ Sidebar Toggle for Mobile
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
});

