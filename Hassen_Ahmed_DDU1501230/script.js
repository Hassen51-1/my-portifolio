$(document).ready(function() {

    const portfolioItems = [
        {
            id: 1,
            title: "E-Commerce Website",
            category: "web",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
            description: "A fully responsive e-commerce website."
        },
        {
            id: 2,
            title: "Task Management App",
            category: "app",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            description: "A productivity app for teams."
        },
        {
            id: 3,
            title: "Fitness Mobile App",
            category: "mobile",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
            description: "A mobile fitness tracker."
        }
    ];

    function loadPortfolioItems(filter = "all") {
        const container = $(".portfolio-container");
        container.empty();

        let filtered = portfolioItems;
        if (filter !== "all")
            filtered = portfolioItems.filter(item => item.category === filter);

        filtered.forEach(item => {
            const html = `
                <div class="col-lg-4 col-md-6 portfolio-item">
                    <div class="card shadow-sm h-100">
                        <img src="${item.image}" class="card-img-top">
                        <div class="card-body">
                            <h5>${item.title}</h5>
                            <p>${item.description}</p>
                            <span class="badge bg-primary">${item.category.toUpperCase()}</span>
                        </div>
                    </div>
                </div>`;
            container.append(html);
        });
    }
    loadPortfolioItems();

  
    $(".filter-btn").click(function() {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        loadPortfolioItems($(this).data("filter"));
    });

   
    $("a.nav-link, .back-to-top").click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top - 70
            }, 800);
        }
    });

  
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50)
            $(".navbar").addClass("navbar-scrolled");
        else
            $(".navbar").removeClass("navbar-scrolled");

        if ($(window).scrollTop() > 300)
            $(".back-to-top").addClass("active");
        else
            $(".back-to-top").removeClass("active");
    });

    $("#contactForm").submit(function(e) {
        e.preventDefault();
        const name = $("#name").val();
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    });

});

