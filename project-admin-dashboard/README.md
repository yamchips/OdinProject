# Web Page Structure

The outline of this web page is set by grid. I created a 2 &times; 2 grid layout. 

Sidebar is placed using position: fixed, so when the page scrolls down, menu stays still.

Header is placed using position: sticky, so it is always shown when the page scrolls down. 

## Sidebar

At first, sidebar was displayed by flex box. Then I found users cannot access it if they scroll down the page. So, I gave up flex box and used fixed pixels to set its width. The dashboard and nav part, however, is designed using flex box. One direction design, perfect fit.

## Header

Header uses grid to set search form and user icon part. Both parts use flex box to arrange their content.

## Main 

This part uses grid to arrange overall structure. The grid is 3 &times; 2. Second column is fixed width so the announcement and trending part don't change. First row is set to auto and second to fixed height to accommodate main header and announcement. The only flexible part of main is the cards area, where auto-fill and minmax() are used to make the cards responsive. 

## Other features

 In Odin Project, we were only taught to create one line content with ellipsis. Here, I used -webkit-box to create multiple line content with ellipsis.

## Further improvements

For now, I only fixed header using sticky, z-index and top. If I want to fix main-header (area with three buttons) using the same trick, things become a little strange. So, either we integrate main-header into header, or a new method needs to be found.

 Mobile device compatibility using media query.
