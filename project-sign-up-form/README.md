# Web page structure 

This sign-up form consists of two parts, I use flex box to adjust the left and right part. Since the requirement doesn't ask us to make the whole page flexible, I center the two parts when the viewport is very wide. 

## Left part

Background image is set in css. 

Use two divs to arrange the content. First one contains logo image and words, second one contains credit information. 

The required font brings one problem: words cannot be placed **vertically centered** by align items. Use top padding to achieve vertical centered. 

Use relative and absolute position to place the credit information. 

I didn't set left part to be a flex container because I think this part should be relatively fixed.

## Right part

Set it to flex container to arrange its content. 

Set word limit to the paragraphs so they won't grow too long. 

# Possible improvement

Use media query to deal with the arrangement in mobile devices.

Define phone number validation.

Make sure input passwords match.
