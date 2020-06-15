const Menu = [
    {
        name : "Iced Coffee",
        price : "$4",
        imageName : "iced_coffee.jpeg",
        type : "iced",
        desc : "Deliciously brewed chilled coffee made with authentic Columbian roasted coffee beans"
    },
    {
        name : "Capuccino",
        price : "$5.25",
        imageName : "capuccino.jpeg",
        type : "hot",
        desc : "Creamy, delicious drink prepared with double espresso, hot milk, and steamed milk foam on top"
    },
    {
        name : "Iced Vanilla Latte",
        price : "$5.25",
        imageName : "iced_vanilla_latte.jpg",
        type : "iced",
        desc : "Freshly brewed coffee mixed with steamed full-fat milk and mixed with vanilla essence"
    },
    {
        name : "Iced Raspberry Tea",
        price : "$4.50",
        imageName : "iced_raspberry_tea.jpg",
        type : "iced",
        desc : "Freshly picked sweet raspberry infused in cold green tea"
    },
    {
        name : "One-shot Espresso",
        price : "$3.25",
        imageName : "espresso.jpeg",
        type : "hot",
        desc : "Made with imported Italian coffee beans"
    },
    {
        name : "Chai Latte",
        price : "$5.50",
        imageName : "chai_latte.jpeg",
        type : "hot",
        desc : "Brewed with authentic Indian spices and herbs. Mixed with steamed full-fat milk and topped with cinnamon powder"
    },
    {
        name : "Caramel Macchiato",
        price : "$5.75",
        imageName : "caramel_macchiato.jpg",
        type : "hot",
        desc : "Freshly brewed espresso topped with steamed full-fat milk and drizzeled with deliciously warm caramel syrup and whipped cream"
    },
    {
        name : "Almond Croissant",
        price : "$6.50",
        imageName : "almond_croissant.jpeg",
        type : "bakery",
        desc : "Yummy crossaint filled and drizzeled with chopped almonds, powdered sugar, and chocolate syrup"
    },
    {
        name : "Butter Croissant",
        price : "$5.99",
        imageName : "butter_croissant.jpg",
        type : "bakery",
        desc : "Buttery-soft flaky crossaint straight out of the oven and brushed with full-fat grass-fed cow-milk butter"
    },
    {
        name : "Cheese Danish",
        price : "$6.35",
        imageName : "cheese_danish.jpg",
        type : "bakery",
        desc : "Baked with yummy cheese goodness and topped with handpicked blueberries"
    },
    {
        name : "Cinnamon Roll",
        price : "$7.25",
        imageName : "cinnamon_roll.jpg",
        type : "bakery",
        desc : "Soft and gooey cinnamon roll with warm cream cheese frosting"
    },
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
        `<div class="col-sm-12 col-xl-6 menu-item pr-4 pl-4 mt-4" id="${item.type}">
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