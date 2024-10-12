function scaleIframe() {
    const iframe = document.getElementById("commits");
    const container = document.getElementById("commits-container");

    // Get the width of the container
    const containerWidth = container.offsetWidth;

    // Set the original width and height of the iframe
    const originalWidth = 800;
    const originalHeight = 200;

    // Calculate the scaling factor based on the container's width (relative to the original width)
    const scaleFactor = containerWidth / originalWidth;

    // Set a minimum scale factor if the window is too small (to prevent too much shrinking)
    const minScaleFactor = 0.5;  // Modify this to your desired minimum scaling value

    // Apply the scale factor with a minimum limit
    const appliedScaleFactor = Math.max(scaleFactor, minScaleFactor);

    // Calculate the new height based on the scaling factor
    const newHeight = originalHeight * appliedScaleFactor;

    // Apply scaling using transform to keep the iframe's aspect ratio
    iframe.style.transform = `scale(${appliedScaleFactor})`;

    // Adjust the container's height to match the scaled content
    container.style.height = `${newHeight}px`;

    // Keep the iframe's height and width as per the original values
    iframe.style.width = `${originalWidth}px`;
    iframe.style.height = `${originalHeight}px`;
}

// Call the function on window resize and load
window.addEventListener('resize', scaleIframe);
window.addEventListener('load', scaleIframe);
