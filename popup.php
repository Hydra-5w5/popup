<?php
/**
 * Plugin Name: Pop-up
 * Author: Hydra
 * Author URI: https://github.com/Hydra-5w5
 * Description: Permet d'afficher une boîte modale
 * Version: 1.0.0
 */

// Enqueue CSS et JavaScript pour le pop-up
function enqueue_modal_scripts() {
    $version_css = filemtime(plugin_dir_path(__FILE__) . 'style.css');
    $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/popup.js');
    wp_enqueue_style('style_popup', plugin_dir_url(__FILE__) . 'style.css', array(), $version_css);
    wp_enqueue_script('js_popup', plugin_dir_url(__FILE__) . 'js/popup.js', array('jquery'), $version_js, true);
}
add_action('wp_enqueue_scripts', 'enqueue_modal_scripts');

function generate_modal_box($atts, $content = null) {
    ob_start();
    ?>
    <button class="popup__open">Ouvrir popup</button>
    <div class="popup">
        <button class="popup__close">Fermer</button>
        <div class="popup__content">
            <?php echo do_shortcode($content); ?>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('popup', 'generate_modal_box');
?>
