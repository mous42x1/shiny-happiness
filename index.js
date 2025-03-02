const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = 3000;

// Route to generate QR code
app.get('/generate-qr', (req, res) => {
    const text = req.query.text;

    if (!text) {
        return res.status(400).send('Please provide a text or link using the "text" query parameter.');
    }

    // Generate QR code as a data URL
    QRCode.toDataURL(text, (err, url) => {
        if (err) {
            return res.status(500).send('Error generating QR code');
        }

        // Respond with the QR code image
        res.send(`<img src="${url}" alt="QR Code"/>`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
