<?php
/**
 * Plugin Name: Pop-up
 * Author: Hydra
 * Author URI: https://github.com/Hydra-5w5
 * Description: Extension pour afficher une boîte modale avec des articles sélectionnés.
 * Version: 1.0
 */

// Enqueue CSS et JavaScript
function enqueue_popup_scripts() {
  $version_css = filemtime(plugin_dir_path(__FILE__) . 'style.css');
  $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/popup.js');
  wp_enqueue_style('popup-style', plugin_dir_url(__FILE__) . 'style.css', array(), $version_css);
  wp_enqueue_script('popup-script', plugin_dir_url(__FILE__) . 'js/popup.js', array(), $version_js, true);
}
add_action('wp_enqueue_scripts', 'enqueue_popup_scripts');


