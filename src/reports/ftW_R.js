const PDFDocument = require("pdfkit-table");
const moment = require('moment');

exports.generatePDF = function (connection, username, res) {
    // Create a new PDF document
    const doc = new PDFDocument({
        info: {
            Title: 'Fulfilled Tickets Report', //document title
            Author: username,
            Subject: 'Weekly System Reporting',
            CreationDate: new Date()
        },
        margin: 30,
        size: 'Letter'
    });

    const before7d = moment().subtract(7, 'days').format('yyyy-MM-DD'); // subtract 7 days from today's date and time  

    // Use a prepared statement with placeholders
    const query = 'SELECT * FROM FORM_TABLE WHERE DATE_SUBMITTED>=? AND STATUS = ? ORDER BY DATE_SUBMITTED';
    const values = [before7d, 'CLOSED'];

    connection.query(query, values, (err, results) => {
        if (err) throw err;

        const tableHeaders = ['Date Issued', 'Concern', 'Email'];

        const tableRows = results.map((row) => [
            row.date_submitted,
            row.concern,
            row.email,
        ]);

        const table = {
            title: "Fulfilled Tickets Report",
            subtitle: "Weekly System Reporting",
            headers: [
                { label: tableHeaders[0], align: "center", },
                { label: tableHeaders[1], align: "center", },
                { label: tableHeaders[2], align: "center", },
            ],
            // simple data
            rows: [],
        };

        if (results.length === 0) {
            const tableRow = ["No entries found."];
            table.rows.push(tableRow);
        } else {
            for (let i = 0; i < results.length; i++) {
                const row = results[i];
                const tableRow = [row.date_submitted.toLocaleDateString("en-US"), row.concern, row.email];
                table.rows.push(tableRow);
            }
        }

        // the magic
        doc.table(table, {
            prepareHeader: () => doc.font("Times-Bold").fontSize(12),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell, i) => {
                doc.font("Times-Roman").fontSize(12);
                indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
        });
        const today = new Date();
        const datetime = today.toLocaleString();
        doc.text("Report generated by: " + username + " on " + datetime, {
            align: 'left'
        });

        // Set the appropriate headers for the file download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=fulfilled-tickets-weekly_report.pdf');

        // Pipe the PDF document to the response
        doc.pipe(res);

        // Finalize the PDF document
        doc.end();

    });

}