from frappe import _


def get_data():
	return {
		"fieldname": "job_details",
		"transactions": [{"label": _("References"), "items": ["Sales Invoice"]}],
	}
