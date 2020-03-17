Trailworks connects **organizers** of trailwork days to **volunteers** and makes scheduling and signing up for events easy.

It also functions as an emergency contact and medical information resource for organizers in the event of accidents. 

yellow text indicates stretch / uncertain features

## User Stories

### Creator

A creator will be able to create, edit and delete trailwork days that others can sign up for.  

A trailwork day will contain information about location, date, time, duration and description of the work to be done.

A creator will also be able to view detailed medical and emergency information for the volunteers signed up for their event.

When a trailwork day is complete, a creator will be able to mark it complete, which will increment a counter for each attending volunteer. 

A creator will be able to see a list of their events that are complete.

### Volunteer

A volunteer will be able to create and edit their profile.

A volunteers profile will contain a list of upcoming work they have signed up for. 

A volunteer will be able to browse a list of upcoming trailwork days.

A volunteer will be able to sign up for trailwork, or cancel their commitment

A volunteer will be able to see a count of volunteers attending the trailwork, but no personal information about other volunteers. 

A volunteer will be able to see how many events a work day's creator has completed.

A volunteer will be able to see a list of events they have participated in.

### Trailwork

Probably too much, but:
Directions to workday - google maps integration? maybe just link out to [maps.google.com](http://maps.google.com)? Ask.

Image uploading (directions button)

Transitional / Confirmation Modals

## Technologies

- react
- node
- express
- mongoDB
- mongoose
- Semantic UI React (?)
- some kind of picture upload

## Models

### user:

- name
- profile pic
- tel
- email
- pw
- ECN
- EMI
- permission level
- works created (ref?)
- works attended (count)

### work:

- creator (ref)
- image
- title
- description
- location
- date
- time
- [workers] (not sure best relationship here)
- incomplete / complete status

## Components

### Nav

- changes depending on context / maybe user type?
    - !session: site title, login / signup
    - session: profile / logout
    - foreman view: event title / profile
        - event title links to event detail

### Gallery

- responsible for rendering lists of work days or users
- generated items will have click-through but container itself will have little logic

### Profile

- maybe the same for users and events, maybe slightly different
- user permission status will lead to different information displayed on events
    - volunteers will be able to sign up or cancel their commitment to an event
    - creators will be able to change the event status to complete or delete the event (only their own events)

## Milestones

### Back End

- build Node / Express server
- models
- seed Information for DB - I want to work with live data from day 1.
- full CRUD api routes on models
- sessions
- auth?
- update DB with form data

## Front End

- React Server / Hello World
- Components
    - nav component
    - gallery component
    - profile component
- display information in components via axios calls
- make axios calls with form data
    - allow creators to make events
    - allow users to add themselves to event

## MVP

- [x]  users can sign up and log in
- [x]  users can create update delete trail events
- [x]  sign up for events as volunteers
- [x]  view EMC only if event creator.

## Things I'd like to complete in the future:

- profile edit
- work / user profile images
- make attendees update dynamically on join
- get working links out to google maps for work locations
- add views for trailworks users have signed up for, created, and completed in Profile
- handle User works completed tallying
