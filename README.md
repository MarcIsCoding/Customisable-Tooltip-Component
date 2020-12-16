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

Lets take the following:

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

You can easily override the default style using the following hooks inside the opening `<mg-tooltip>` tag in the HTML document. No need to mess with CSS or JavaScript!

All hooks accept standard CSS values (with the exception of click_toggle)

## Alert Hooks

```html
<mg-tooltip
  alert_decoration=""
  alert_hl_color=""
  alert_txt_color=""
  alert_weight=""
  alert_opacity=""
></mg-tooltip>
```

## Tooltip Message Hooks

```html
<mg-tooltip
  message_bg=""
  message_txt_color=""
  message_weight=""
  tooltip_shadow=""
></mg-tooltip>
```

## Other Hooks

```html
<mg-tooltip click_toggle=""></mg-tooltip>
```

This determines whether the tooltip is triggered with a click, or the default hover.

Enter ANY value to activate the click_toggle property or leave blank to use the default hover effect.

## Example Hooks

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
  tooltip_shadow="3px 3px 6px rgba(0,0,0,0.5)"
  click_toggle="y"
></mg-tooltip>
```

# Technologies Used

Pure HTML, CSS and vanilla JavaScript. That's it...
