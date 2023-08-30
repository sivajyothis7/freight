// Copyright (c) 2023, siva and contributors
// For license information, please see license.txt

frappe.ui.form.on('Job Details', {
    refresh: function (frm) {
        // frm.toggle_display('sales_invoice', frm.doc.customer);
    },
    // customer: function (frm) {
    //     // When the customer field changes, update the Sales Invoice dropdown options
    //     frm.set_query('sales_invoice', function () {
    //         return {
    //             filters: [
    //                 ['Sales Invoice', 'customer', '=', frm.doc.customer],
    //                 ['Sales Invoice', 'docstatus', '=', 1], // Ensures the invoice is submitted
    //                 ['Sales Invoice', 'status', 'not in', ['Cancelled', 'Paid']]
    //             ]
    //         };
    //     });
    // }
});
