# WonderQ - Challenge

Welcome to my technical challenge, WonderQ is a simple messaging queue, the inital task was creating just the backend but I created a simple frontend to use the bakcend service.

Acceptance criteria:

>* Publisher: publishes message to the queue and the consumer processes messages, after processing messages get deleted from the queue.
> * When consumer retrieves messages from the queue it sets <*messageId*> ensuring message is processed.
> * If message is not processed within a defined time, messages is unlocked and then available for other consumers to process.


### Backend Usage:

### Installation
To do an installation just go to the server folder with ```cd server``` and then do a: ```yarn install```

### Running
To run the backend server just go to the server folder with ```cd server``` and first do a ```yarn tsc -w``` in order to compile the typescript code and in another terminal inside the server folder do a ```yarn dev``` and that's it the server will start on the localhost port 7000.

###



## Endpoints

 ### Publisher
##### POST
 >Publish message to the queue.

>@returns <messageId> related to the message
```
   /api/messages/post
```
 ### Consumer
 > Consumer retrieves messages from the queue.\


##### GET
>@params\
returns an <object> with the message data

```
   /api/messages
```
 ##### POST
 > Use to inform the service that the message has been processed


>@params\
We need to pass an <id> id of message stored in queue
@returns and <object> with a message, informing that the message has been processed

```
   /api/messages/process
```

## Tests
To execute the test cli just stop the server if you are running the server and inside the server folder do a ```yarn test``` this will execute the test runner.


## Frontend usage
In order to use the frontend correctly, you should run the server first and after that start the frontend app.

## Installation
Go to the frontend folder with ```cd frontend``` and inside the folder in the terminal do a ```yarn install``` that will install all the dependencies.

## Running
In order to run the frontend just do a ```yarn start``` inside the frontend folder, and that will execute the app the port 3000, and that's it, enjoy the ui.

## Todo
add test in the ui
