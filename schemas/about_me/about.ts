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
      "name": "profileImage",
      "title": "Profile Image",
      "type": "image",
      "options": {
        "hotspot": true
      },
      "fields": [
        {
          "name": "alt",
          "title": "Alt Text",
          "type": "string",
          "description": "Alternate text for the profile image (accessibility)"
        }
      ]
    },
    {
      "name": "socialLinks",
      "title": "Social Links",
      "type": "array",
      "of": [
        {
          "name": "socialLink",
          "title": "Social Link",
          "type": "object",
          "fields": [
            {
              "name": "platform",
              "title": "Platform",
              "type": "string"
            },
            {
              "name": "url",
              "title": "URL",
              "type": "url"
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


  