<?php
if (!defined('ABSPATH'))
    die();
if (!function_exists("Indoor_setup")) {
    function Indoor_setup()
    {
        // imágenes destacadas
        add_theme_support(("post-thumbnails"));

    }
    add_action("after_setup_theme", "Indoor_setup");
}

# Menu

add_action("init", function() {
    register_nav_menus([
        "menu-principal"=>__('Menú Principal', 'Indoor')
    ]);
});