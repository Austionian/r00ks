---
title: 'Employee Lifecycle'
languages: 'Python, Flask, TypeScript'
description: 'The central hub for any employee action.'
---

The Employee Lifecycle is a Flask application built for Catholic Charities that is meant to be the hub of any employee change for supervisors

### Project Background
When I was hired at Catholic Charities, one of my responsibilities was maintaining a Position Request workflow built in SharePoint 2013, with a SharePont Workflow, InfoPath form and a C# script that used ADP's API to get a list of supervisors and fill a MySQL db with those names which then populated a SharePoint list.

The workflow was used by hiring managers to request new or fill open positions across the agency. The hiring manager creates a position request in SharePoint to fill a newly vacant position, HR posts the position publicly, once a candidate is selected the position request is filled and notifications are sent to IT and other stakeholders like facilities with on-boarding information.

There were a few common issues with this application. The major one being requests would be open for weeks at a time and we found SharePoint's workflow didn't handle long running items well. Requests would randomly stall or enter an incorrect state. The others had to do with the maintence of the application. The InfoPath form was filled with rules, illegably named fields, meta-fields that determined the form's path and makeup.

The application itself wasn't simple and neither was it's implementation.

After I maintained and made modest improvements to the application, we were on the cusp of beginning a transition to SharePoint Online. And the thought of re-creating that application with low-code/no-code Microsoft tools like PowerApps and Flow sounded like remaking something that would quickly become difficult to maintain, and a whole lot of work for a not necessarily improved app.

### Technical Details

### Challenges

### Result

### Personal Growth
