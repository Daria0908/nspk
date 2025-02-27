document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper', {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 1000,
        breakpoints: {
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 1000,
        breakpoints: {
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".search-input");
    const clearBtn = document.querySelector(".clear-btn");
    const bankItems = document.querySelectorAll(".bank-item");

    function filterBanks() {
        const query = input.value.trim().toLowerCase();

        bankItems.forEach(item => {
            const img = item.querySelector("img");
            const bankName = img.alt.toLowerCase();
            const bankId = img.id.toLowerCase();

            if (bankName.includes(query) || bankId.includes(query)) {
                item.style.display = "flex"; 
            } else {
                item.style.display = "none"; 
            }
        });

        clearBtn.style.display = query ? "block" : "none";
    }

    function clearSearch() {
        input.value = "";
        bankItems.forEach(item => item.style.display = "flex"); 
        clearBtn.style.display = "none";
    }

    input.addEventListener("input", filterBanks);
    clearBtn.addEventListener("click", clearSearch);
});

