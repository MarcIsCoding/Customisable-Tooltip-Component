# Customisable Tooltip Component

This is a JavaScript web component, that is completely customisable inside the HTML and can be used inside any framework.

# How to create

Creating your tooltip is easy. Simply wrap the text/icon on which you want to create the tooltip, with the following tags:

```html
<mg-tooltip
  ><span slot="alert">YOUR TEXT/ICON HERE</span><span slot="message"></span
></mg-tooltip>
```

Then inside the `<span slot="message">` tags, add your tooltip message.

## Example:

```html
<p>For more info, hover here!</p>
```

To create a tooltip over the "here!" text, we apply the following tags, inside the paragraph (line breaks added for convenience, but they are not needed):

```html
<p>
  For more info, hover
  <mg-tooltip>
    <span slot="alert">here!</span>
    <span slot="message">Some additional info inside this tooltip!</span>
  </mg-tooltip>
</p>
```

Voila! you have a tooltip.

# Customise to your hearts content

You can easily override the default style using the following hooks inside the HTML document. No need to mess with CSS or JavaScript!

All hooks accept standard CSS values (with the exception of click_toggle)

# Alert Hooks

alert_decoration = (text-decoration property - e.g. 'underline')
alert_hl_color = (background-color property - e.g. '#fc9292')
alert_txt_color = (color property - e.g. '#ffffff')
alert_weight = (font-weight property - e.g. 'bold')
alert_opacity = (opacity property - e.g. '1')

# Tooltip Message Hooks

message_bg = (background-color property - e.g. 'gray')
message_txt_color = (color property - e.g. '#ffffff')
message_weight = (font-weight property - e.g. '400')
tooltip_shadow = (box-shadow property - e.g. '3px 3px 6px rgba(0,0,0,0.3)')

# Other Hooks

click_toggle

This determines whether the tooltip is triggered with a click, or the default hover.

Enter ANY value to activate the click_toggle property or leave blank to use the default hover effect.

# Example Hooks

```html
<mg-tooltip
  alert_decoration="underline"
  alert_hl_color="#fc9292"
  alert_txt_color="#ffffff"
  alert_weight="bold"
  alert_opacity="1"
  message_bg="gray"
  message_txt_color="#ffffff"
  message_weight="400"
  tooltip_shadow="none"
  click_toggle="y"
></mg-tooltip>
```

## Technologies Used

Pure HTML, CSS and vanilla JavaScript. That's it...
