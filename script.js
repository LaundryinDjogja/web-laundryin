const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        toggleBtn.innerHTML = "☀️";
    }else{
        localStorage.setItem("theme","light");
        toggleBtn.innerHTML = "🌙";
    }

});

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggleBtn.innerHTML = "☀️";
}

/* AOS INIT */
AOS.init({
    duration:1000,
    once:true
});
