function updateDetails() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const from = document.getElementById('from').value;
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
    const months = document.getElementById('months').value;
    const forWhat = document.getElementById('for').value;
    const issuedBy = document.getElementById('issuedBy').value;
    const methodOfPayment = document.getElementById('methodOfPayment').value;

    const formattedDate = formatDate(date);

    const details = `Received with thanks from ${from} amount of INR ${amount}.00 for Payment of ${forWhat} completed ${months} months on ${formattedDate} at${time}.`;
    document.getElementById('details').value = details;
}

function setCurrentDateTime() {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0].slice(0, 5);

    document.getElementById('date').value = date;
    document.getElementById('time').value = time;

    updateDetails();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function redirectToSharePage() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const from = document.getElementById('from').value;
    const months = document.getElementById('months').value;
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
    const forWhat = document.getElementById('for').value;
    const issuedBy = document.getElementById('issuedBy').value;
    const methodOfPayment = document.getElementById('methodOfPayment').value;
    

    const formattedDate = formatDate(date);

    const sharePageContent = `
     <style>
        body {
            font-family: Arial, sans-serif;
            font-size:25px;
        }
        .receipt {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #000;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            margin: 10px 0;
        }
        p {
            margin: 5px 0;
            font-size: 25px;
        }
        img {
            width: 200px;
            height: 200px;
            border-radius: 20px;
            display: block;
            margin: 10px auto;
        }
        button {
            display: block;
            width: 100%;
            padding: 10px;
            margin: 20px 0;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }

        @media (max-width: 600px) {
            .receipt {
                padding: 10px;
            }
            p {
                font-size: 25px;
            }
            button {
                padding: 8px;
            }
        }
    </style>
<body>
    <div class="receipt" id="receipt">
        <h2>CASH RECEIPT</h2>
        <p>Date: <b>${formattedDate}</b></p>
        <p>Time: <b>${time}</b></p>
        <p>From: <b>${from}</b></p>
        <p>Currency: <b>${currency}</b></p>
        <p>Amount: <b>${amount}</b></p>
        <p>Group: <b>${forWhat}</b></p>
        <p>Number of months paid: <b>${months}</b></p>
        <p>Received with thanks from <b>${from}</b><br>amount of <b>INR ${amount}.00</b> for Payment of<br><b>${forWhat}</b> completed <b>${months} </b>months on ${formattedDate} at<br>${time}.</p>
        <p>Method of Payment: ${methodOfPayment}</p>
        <img src="logo.jpg" alt="Logo Here">
        <p>Received By: ${issuedBy}</p>
        <button onclick="printAndSharePage()">Save as Image on </button>
    </div>
    `;
    const newWindow = window.open();
    newWindow.document.write(`
        <html>
        <head>
            <title>SRCHITS-Recipt</title>
            <link rel="shortcut icon" class="favicon" href="logo.jpg" type="image/x-icon">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
        </head>
        <body>
            ${sharePageContent}
            <script>
                ${printAndSharePage.toString()}
            </script>
        </body>
        </html>
    `);
}

function printAndSharePage() {
    html2canvas(document.body, { useCORS: true }).then(function(canvas) {
        var filename = prompt("Enter the filename:", "screenshot");
        if (filename) {
            var link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = filename + '.png';
            link.click();
        }
    });
}




function shareOnWhatsApp() {
    const details = document.getElementById('details').value;
    const url = `https://wa.me/?text=${encodeURIComponent(details)}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', setCurrentDateTime);
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', updateDetails);
});
