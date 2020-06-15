const Menu = [
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

const menuDiv = $('#menu');
const buttonDiv = $('.filter_btn');
const all = $('#all');
const hot_bev = $('#hot');
const iced_bev = $('#iced');
const bakery = $('#bakery');


/**
 * Fill menu with all items 
 */
function defaultFillMenu() {
    Menu.forEach(item => fillMenu(item));
}

/**
 * filter all menu item based on "type" clicked by user and display to menu
 * @param {1} type 
 */
function filterMenu(type) {
    let filteredMenu = [];

    Menu.filter((item) => {
        if(item.type === type) filteredMenu.push(item)
    });

    console.log(filteredMenu)

    menuDiv.empty();
    filteredMenu.forEach(item => fillMenu(item));
}

/**
 * Fill menu with the item's information
 * @param {1} item 
 */
function fillMenu(item) {
    menuDiv.append(
        `<div class="col-sm-12 col-xl-6 menu-item mt-4" id="${item.type}">
            <div class="row menu_item_inner">
                <div class="col-sm-12 col-md-5 mb-3 item-img" style="background-image: url(image/${item.imageName})"></div>
                <div class="col-sm-12 col-md-7 item-info">
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
}



$(document).ready(() => {
    defaultFillMenu()

    buttonDiv.find("button").click(e => {
        let type = e.target.dataset.type
        console.log(type);
        if(type == "all") {
            defaultFillMenu();
        }
        else filterMenu(e.target.dataset.type);
    });
});