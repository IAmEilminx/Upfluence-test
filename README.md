--- General Info ---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.


To run the app, either run :
> npm i && ng serve

Or, if you don’t want to install angular, I’ve prebuilt a version located in the /dist folder.
You can then just run it from a simple web server, for instance (with python) :
> python -m SimpleHTTPServer 4242

To run unit tests :
> ng test

--- ABOUT ---

Approx. Time spent : ~10hours (including setup, research & tests)
Note : Commit times are not representative of the time spent coding. Also, it probably wouldn’t have taken as much time if I was not interrupted (read: baby was not nice!)


The sources are located in “/src/app/“. Here you will find the following items :

* models : grouping the models I’ve managed to create for the project
* punch-card : the punch-card component…
* services : defines the connection to the SSE stream you provided
* app-routing : unused (for now!)
* app.component.* : The main component of the application. Defines the toolbar and the punch-card component. Is also acting as the “middle-man” between the punch-card component and the SSE service (Typically we would have had a ‘Statistics’ page handling this if we had other components to show)


As explained above, the SSE service is first called upon in the app.component.ts file. The SSE stream is transformed to an observable to have some better control throughout the app. I’ve chosen to call the service in an external component for two reasons : the first is to have a better abstraction between the component and the data, the second is that we could easily imagine that the first subscription to the SSE service would feed multiple stats components. For example, we could have another component to display the contents of each post as they come in - therefore we could use the same stream to provide data for both components instead of subscribing a second time.

If we take a closer look at the SSE Service file, we can see that for each event received from the SSE, a SocialPost type object is created and fed into the observable. The data-models I’ve created are pretty ugly and the transformation is too … This is what I’ve achieved without documentation, just by looking at the different payloads. This would definitely be something I would be changing and doing more properly if I were to have more time and also some proper Documentation :-)

Onto the punch-card component, as I really wanted to have a component that could update in realtime, I decided to build my own. It’s sole input “inputSocialPost” is an observable that is triggered by the parent “App.component”. Every time the SSE sends an event it is pushed back down to this component.

SSE service > app.component > punch-card.component


SocialPosts are pushed to the corresponding day of the week, then hour of the day. This allows to easily and properly build the template (html) part.
This architecture also allows to have the realtime data pushed directly and not to have them cached in some service with a “manual” update every X seconds. Every time a SocialPost comes in, it is processed and added to the UI.

You will also find on the UI side a legend with some checkboxes. Checking/Unchecking them will show/hide the corresponding type of SocialPost from the punch-card.

Finally, hovering over a hole will give you the total number of posts for that specific time - it still takes into account the checkboxes in the legend.

Unit tests have been added exclusively for that component, you can see them in the .spec.ts file. This is some basic testing as the component has pretty straightforward logic.

--- Improvements ---

What I would’ve done better, given more time and/or more context/documentation :
* Responsiveness : currently the app & the component are of a fixed minimal width. I would build a proper mobile view that does not require horizontal scrolling
* A proper punch-hole calculator : the current calculation is pretty basic and could use a bit more time spent on it.
* Data structures / models : As I’ve said above, I’ve build the models based on the info I could get from the payloads and with an access to an API documentation I’m sure everything would look much better
* build a component to show the post contents : I really wanted to do this (just for fun) but I also really want to send this in to you guys ! (I might still do it on my free-time :) )

Finally, I see this line in the challenge “Scalability: Will technical choices scale well (increase of the post throughput) ? If not, is there a discussion of those choices in the README?”
Honestly, I’m pretty confident the component could handle a big throughput of data ; that being said a proper discussion with some of the back-ends would allow me to better evaluate how much data can be passed and could lead to changes in the code.  ¯\_(ツ)_/¯

--- Final Note ---

I really hope I’m not off-subject with this challenge and am looking forward to the live discussion we will have about it.
Of course not everything I made is perfect and that’s why it’s always good to have an awesome team to discuss technical choices properly.
That being said,  I hope this matches your expectations as I am really eager to work with you guys !

Thanks for reading :-)


Max