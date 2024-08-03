/**
 * Function to update the output iframe content based on the input values of HTML, CSS, and JavaScript code.
 */
function updateOutput() {
    // Get the current values of HTML, CSS, and JavaScript code inputs
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}<\/script>`;

    // Combine HTML, CSS, and JavaScript code to form the content of the iframe
    const iframeContent = `
        ${css}
        ${html}
        ${js}
    `;

    // Set the srcdoc property of the output iframe to display the combined content
    output.srcdoc = iframeContent;
}

// Event listeners to trigger the updateOutput function when input values change
htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);
