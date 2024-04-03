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

add_action("init", function () {
    register_nav_menus([
        'menu-principal' => __('Menú Principal', 'Indoor')
    ]);
});

# Enqueue
if (!function_exists(("indoor_tienda_script_styles"))) {
    function indoor_tienda_script_styles()
    {

        wp_enqueue_script("sweetalert2", get_template_directory_uri()
            . "assets/js/sweetalert2.js", array('jquery'));

    }

    add_action("wp_enqueue_scripts", "indoor_tienda_script_styles");
}

