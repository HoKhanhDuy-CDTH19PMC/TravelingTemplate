$.ajax({
    url:"https://5ed8dede4378690016c6a801.mockapi.io/api/cinema",
    method: "GET",
    success:function(res)
    {
        res.forEach(function(card){
            $("#owl-2").append(
                generateCard(card.img)
            );
        });
        $('#owl-2').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            // autoplay:true,
            // autoplayTimeout:1500,
            // autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    },
});
function generateCard(img){
    return `    <div class="item">
    <div class="bg-info-testimonial">
        <div class="row">
            <div class="col">
                <img src="${img}" alt="">
                <div class="info-owl-2 mt-3">
                    <div>
                        <button class="btn">Travel</button>
                        <button class="btn">Life Style</button>
                    </div>
                    <div class="mt-2">
                        <h5>It's Classified How To Utilize Free</h5>
                    </div>
                    <div>
                        <p class="owl-2-text">Acres of Diamonds… you’ve read the famous story,
                            or at least had it related to you. A farmer.</p>
                    </div>
                    <div class="mt-1">
                        <p class="owl-2-text">31st January, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
}