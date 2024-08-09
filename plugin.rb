# frozen_string_literal: true

# name: discourse-plugin-markdown-html-whitelist
# about: add elements to html whitelist
# version: 0.0.1
# authors: Marfeel
# url: https://github.com/Marfeel/discourse-plugin-markdown-html-whitelist
# required_version: 2.7.0

enabled_site_setting :discourse_plugin_markdown_html_whitelist_enabled

module ::MarkdowHtmlWhitelist
  PLUGIN_NAME = "discourse-plugin-markdown-html-whitelist"
end

after_initialize do
  # Code which should run after Rails has finished booting
end
