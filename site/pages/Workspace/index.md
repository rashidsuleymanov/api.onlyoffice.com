---
layout: part
preview: /assets/images/workspace-preview.png
description: ONLYOFFICE Workspace is a collaborative cloud platform that allows users to manage documents, projects, emails, client relations, and timetables in one place.
summary: In this section, you will learn how to integrate ONLYOFFICE Workspace into your own application and interact with its backend using the Workspace API Backend. This solution is provided without editors, you need to install ONLYOFFICE Docs separately. You can also host a portal and interact with it using our methods for hosting providers.
sample:
  syntax: js
  code: |
    POST api/2.0/project/1234/task
    Host: yourportal.onlyoffice.co
    Content-Type: application/json
    Accept: application/json

    {
      "description": "New task",
      "priority": "Normal",
      "title": "Task title",
      "milestoneid": 1234,
      "responsibles": [
        "9924256A-739C-462b-AF15-E652A3B1B6EB"
      ],
      "startDate": "2024-06-24T11-30-00.000Z"
    }
help:
  faq: http://0.0.0.0/
  issues: http://0.0.0.0/
  forum: http://0.0.0.0/
---

```js use-document-builder
builder.CreateFile("docx")
const document = Api.GetDocument()
const paragraph = document.GetElement(0)
paragraph.AddText("This is just a sample text")
builder.SaveFile("docx", "document.docx")
builder.CloseFile()
```
