---
layout: part
description: ONLYOFFICE Workspace is a collaborative cloud platform that allows users to manage documents, projects, emails, client relations, and timetables in one place.

home:
  image:
    alt: "Workspace preview"
    src: /assets/images/workspace-preview.png
    height: 500
  description: In this section, you will learn how to integrate ONLYOFFICE Workspace into your own application and interact with its backend using the Workspace API Backend. This solution is provided without editors, you need to install ONLYOFFICE Docs separately. You can also host a portal and interact with it using our methods for hosting providers.
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
  faq: API%20Backend/More%20Information/FAQ/index.md
  issues: https://github.com/ONLYOFFICE/CommunityServer/issues
  forum: https://forum.onlyoffice.com/c/workspace/33
---
