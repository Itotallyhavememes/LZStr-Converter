document.addEventListener('DOMContentLoaded', () => {
    const decompButton = document.getElementById('decompButton');
    const compButton = document.getElementById('compButton');

    decompButton.addEventListener('click', () =>{
        const compressed = document.getElementById('compressedInput').value.trim();
        const decompressed = LZString.decompressFromBase64(compressed);

        document.getElementById('output').value = decompressed || "-Failed to Decompress-";
    });

    compButton.addEventListener('click', () => {
        const decompressed = document.getElementById('output').value.trim();
        const compressed = LZString.compressToBase64(decompressed);
        const rOutput = document.getElementById('routput');

        if (rOutput) rOutput.value = compressed || "-Failed to Compress-";
    });
});
