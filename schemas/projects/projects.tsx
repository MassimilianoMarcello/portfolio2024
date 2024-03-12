const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: "url",
        title: "URL",
        type: "url"
      },
      {
        name: "githubUrl",
        title: "GitHub URL",
        type: "url"
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      },
      {
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{ type: "string" }],
        description: "List of technologies used in the project"
      },
      {
        name: "status",
        title: "Status",
        type: "string",
        options: {
          list: ["In Progress", "Completed", "On Hold"],
          layout: "radio"
        }
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DD",
          timeFormat: "HH:mm",
          calendarTodayLabel: "Today"
        },
        description: "Date and time when the project was created"
      },
    ]
    
  }
  
  export default project;