# README

## To-do Application
This is a basic to-do task application that uses a React frontend and a Rails backend.

### Backend Description
The backend uses Ruby on Rails. The database is PostgreSQL.

There are two models to consider in this application:
Task Lists - an element that compiles related tasks together
Tasks - children to the task lists that contain the checklist of items related to the Task List
{ e.g. "Errands for today" (this is an example of a Task List)

'buy groceries for house' (This is an example of a Task related to the above Task List)
'buy gas cylinder for stove' (This is an example of a Task related to the above Task List)
'take car to garage' (This is an example of a Task related to the above Task List) }

They were created using:
```
$ rails generate model TaskList name:string --no-test-framework
$ rails generate model Task description:string is_complete:boolean --no-test-framework
```
Each of these models have their respective resources - the controller (for the CRUD), and serializer (for the id element):
```
$ rails generate controller TaskListsController index show create update destory --no-test-framework
$ rails generate controller TasksController index show create update destory --no-test-framework

$ rails generate serializer TaskList --no-test-framework
$ rails generate serializer Task --no-test-framework
```


When created the models were migrated to the database using:
```
$ rails db:migrate
```

### Frontend Description
***describe frontend