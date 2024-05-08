# ctm-placeholder-label

## Description
This extension simulates labels as a placeholder and animates them on their active or filled state.
The thememanager configuration will be extended by 4 more fields (see settings)

After compiling your theme, make sure to add:
- _placeholderlabel.css to your Layout stylesheet settings
- js_ctm_placeholderlabel to your javascript template

Make sure to follow following order of css files in your layout
1. ...
2. _theme.css (theme manager core)
3. _placeholderlabel.css

## Settings

### ThemeManager
<table>
  <tr>
    <th colspan="2"><strong>Placeholder Label</strong></th>
  </tr>
  <tr>
    <td><strong>Option</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>$pl-input-top-offset</td>
    <td>Top offset (+ padding) of the input for form input fields.</td>
  </tr>
  <tr>
    <td>$pl-textarea-top-offset</td>
    <td>Top offset (+ padding) of the input for textarea - elements.</td>
  </tr>
  <tr>
    <td>$pl-label-filled-top-offset</td>
    <td>Top offset of the label if the form field has been filled</td>
  </tr>
  <tr>
    <td>$pl-label-filled-font-size</td>
    <td>Font size of the label if the form field has been filled</td>
  </tr>
</table>

### JavaScript
By modifying the file js_ctm_placeholderlabel, you can modify and override the placeholder label init.

#### Options
```javascript
{
    selector: 'form',         // Parse selector
    excludeClass: 'pl-none',  // Using this class on a <form> will disable plabel
    include: [                // Considered fields
      '.pl-parent input',
      '.pl-parent select',
      '.pl-parent textarea'
    ]
}
```
