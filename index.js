const menu_item = [
    {
        name : "Iced Coffee",
        price : "$5",
        imageName : "iced_coffee.jpeg",
        type : "iced",
        desc : "Deliciously brewed chilled coffee made with authentic Columbian roasted coffee beans"
    },
    {
        name : "Capuccino",
        price : "$6.5",
        imageName : "capuccino.jpeg",
        type : "hot",
        desc : "Creamy, delicious drink prepared with double espresso, hot milk, and steamed milk foam on top"
    }
]

const menu = $('#menu');
const all = $('#all');
const hot_bev = $('#hot');
const iced_bev = $('#iced');
const bakery = $('#bakery');

function fillMenu() {
    console.log(menu_item)
    console.log(menu)
    menu_item.forEach((item, value) => {
        menu.append(
            `<div class="col-sm-12 col-xl-6 menu-item mt-4" id="${item.type}">
                <div class="row menu_item_inner">
                    <div class="col-sm-12 col-lg-5 fill">
                        <img src="image/${item.imageName}" class="img-rounded">
                    </div>
                    <div class="col-sm-12 col-lg-7 item-info">
                        <div class="d-flex">
                            <h5 class="item-title">${item.name}</h5>
                            <h5 class="item-price ml-auto">${item.price}</h5>
                        </div>
                        <hr />
                        <p class="item-desc pt-2">${item.desc}</p>
                    </div>
                </div>
            </div>`
        )
    });
}


$(document).ready(() => {
    fillMenu()
    
});