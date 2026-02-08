{
    "type": "object",
    "properties": {
      "date": {
        "description": "YYYY-MM-DD",
        "type": "string"
      },
      "time": {
        "description": "HH:MM (24-hour)",
        "type": "string"
      },
      "party_size": {
        "description": "",
        "type": "integer",
        "default": ""
      },
      "health_notes": {
        "description": "Any allergies for the table.",
        "type": "string"
      },
      "phone_number": {
        "type": "string"
      },
      "customer_name": {
        "description": "The name of the person booking.",
        "type": "string"
      }
    },
    "required": [
      "customer_name",
      "date",
      "time",
      "phone_number",
      "party_size"
    ]
  }