# Web page structure 

This sign-up form consists of two parts, I use flex box to adjust the left and right part, setting right part's flex grow to 1. So, if the viewport becomes wider, the left part won't grow but the right part's background color will grow to fit the viewport.

## Left part

Background image is set in css. 

Use two divs to arrange the content. First one contains logo image and words, second one contains credit information. 

The required font brings one problem: words cannot be placed **vertically centered** by align items. Use top padding to achieve vertical centered. 

Use relative and absolute position to place the credit information. 

I didn't set left part to be a flex container because I think this part should be relatively fixed.

## Right part

Set it to flex container to arrange its content. 

Set word limit to the paragraphs so they won't grow too long. 

Since the requirement doesn't ask us to make the whole page flexible, I designed the right part so it stick to the left even when the viewport is very wide. 

