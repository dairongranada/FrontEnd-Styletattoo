

// MENU BURGER
export const menuBurguer = (btnMenu,btnItems ) => {
    const btn_menu = document.querySelector(btnMenu)
    if (btn_menu) {
        const menu_items = document.querySelector(btnItems)
        menu_items.classList.toggle('open')
    }

    console.log(btnMenu,btnItems);
}