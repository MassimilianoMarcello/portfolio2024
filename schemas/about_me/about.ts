export default{
  "name": "aboutMe",
  "title": "About Me",
  "type": "document",
  "fields": [
    {
      "name": "name",
      "title": "Name",
      "type": "string"
    },
    {
      "name": "description",
      "title": "Description",
      "type": "text"
    },

    
    {
      "name": "skills",
      "title": "Skills",
      "type": "array",
      "of": [
        {
          "name": "skill",
          "title": "Skill",
          "type": "object",
          "fields": [
            {
              "name": "name",
              "title": "Name",
              "type": "string"
            },
            {
              "name": "icon",
              "title": "Icon",
              "type": "image",
              "options": {
                "hotspot": true
              },
              "fields": [
                {
                  "name": "alt",
                  "title": "Alt Text",
                  "type": "string",
                  "description": "Alternate text for the icon (accessibility)"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


  