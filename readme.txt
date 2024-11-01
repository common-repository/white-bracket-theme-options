=== White Bracket Theme Options ===
Contributors: White Bracket
Tags: global content, content blocks, theme options, google analytics, universal analytics, universal google analytics
Requires at least: 3.5
Tested up to: 4.5

== Description ==
White Bracket Theme Options has been created to make managing your WordPress website that little bit easier. If you want to put the same piece of information in multiple places around your site, but only want to edit that information in one place, such as telephone numbers, email addresses, links to files etc.. This is the plugin for you.

Once you have created a content block, some shortcode will be generated. Copy and past the shortcode into a post or page where you want the content to appear. If you are editing a template, you can still use the shortcode by using the following code <?php echo do_shortcode('[SHORTCODE]'); ?>.

Not only can you create content blocks to display in multiple places around the site, you can also adjust the styling of certain HTML elements (H1 tags through to H6 tags, p tags, a tags and li tags). This particular feature will eventually be added to the WordPress customizer so you can see the changes in real time.

This plugin also gives you the ability to add the latest Google Analyics tracking code to your website. All you need it do is click on the "Google Analytics" tab, add in your account number and click "Save Analytics".

Once the plugin has been installed and is activated, you can use the plugin by going to Appearance -> Theme Options.

== Installation ==
You can install this plugin in 3 different ways.

1) Upload the contents of this zip folder to your plugins directory via FTP

2) Upload the plugin via WordPress using the upload plugin feature

3) Click Plugins -> Add New, search for White bracket Theme Options, and click install.

Once the plugin has been installed and is activated, you can use the plugin by going to Appearance -> Theme Options.

== Frequently Asked Questions ==
= Q: Is it possible to remove p tags from the shortcode output? =
A: Yes, just add wpautop="no" e.g. [wbo option_name="wb_XXXX" wpautop="no"]

== Screenshots ==
1. Theme Options Page
2. Adding a WYSIWYG option
3. Editing WYSIWYG option
4. Option updated
5. Settings tab
6. Editing H1 settings
7. Google Analytics

== Changelog ==

= 1.4.1 =
* Fixed another reported issue where the media library was not initialised for the file link option

= 1.4.1 =
* Fixed an issue where in some cases the media library was not initialised for the file link option

= 1.4.0 =
* Added in a new option that can be created called "File Link", this lets you create a link to a file in the media library.

= 1.3.2 =
* Added the ability to add Google Analytics to every page on a website.
* Removed the !important statement off the generated css as it was being applied to items such as menu items, which is not the intention. The main idea is the adjust the site content.

= 1.3.1 =
* Automatically add 'px' to generated css, if it hasn't been specified

= 1.3.0 =
* Added in the ability for paragraph tags to be removed from the shortcode output.
* Added in the ability add basic styling to h1, h2, h3, h4, h5, h6, p, a and li elements.
* Redesigned the user interface and introduced a tab system.

= 1.2.0 =
* Updated the user interface to make it more user friendly, so it is easier to see all current options created with the plugin.

= 1.1.0 =
* Fixed a bug that was stripping out styling and images from the WYSIWYG editor on save.

= 1.0.0 =
* White Bracket Theme Options launch