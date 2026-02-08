{
    "type": "object",
    "properties": {
      "items": {
        "description": "List of items the customer wants to order.",
        "type": "array",
        "items": {
          "type": "object",
          "required": [
            "item_name",
            "quantity"
          ],
          "properties": {
            "quantity": {
              "description": "Number of items",
              "type": "integer"
            },
            "item_name": {
              "description": "Name of the dish or drink",
              "type": "string"
            },
            "special_requests": {
              "description": "No onions, extra sauce, etc.",
              "type": "string"
            }
          }
        }
      },
      "customer_phone": {
        "description": "Phone number for SMS updates.",
        "type": "string"
      },
      "upsell_accepted": {
        "description": "True if the customer accepted the suggested side/drink.",
        "type": "boolean"
      },
      "health_complications": {
        "description": "MANDATORY: Customer's allergies or dietary restrictions. If none, verify and set to 'None'.",
        "type": "string",
        "default": "Not Asked"
      }
    },
    "required": [
      "items",
      "health_complications"
    ]
  }