function scaleAndCrop(selector)
{
    //Cache the image element.
    var img = $(selector);
    
    //Grab the standard dimensions of everything
    var wW = $(window).width(),
        wH = $(window).height(),
        iH = img.height(),
        iW = img.width();
    
    //Return early if the image is already properly sized.
    if (!(((iH < wH || iW < wW) || (iH > wH && iW > wW)) && (iH > 0 && iW > 0)))
    {
        return;
    }       

    //Determine how many of our image could tile inside of the window.
    var highestScale,
        widthScale    = wW / iW,
        heightScale   = wH / iH;

    //Determine which dimension's scale is higher.
    highestScale      = Math.max(heightScale, widthScale);
    
    //Calculate the new width and height based on this greater scale.
    var newWidth      = iW * highestScale,
        newHeight     = iH * highestScale,
        top           = (wH / 2) - (newHeight / 2),
        left          = (wW / 2) - (newWidth / 2);

    //Set the CSS of the image. Centering it in the window, and making sure there is never a boundry inside of the window border.
    img.width(newWidth)
        .height(newHeight)
        .css({
            top:   top.toString() + "px",
            left:  left.toString() + "px"
        });
}
