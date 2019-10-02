# csc436_hw2

GitHub Link : https://github.com/mrfleming/csc436_hw2,<br>
Clone Link : https://github.com/mrfleming/csc436_hw2.git<br>

## Description

1. I used the 'ng generate component' cli-command to create the button, image, and corresponding service.  For the image I decided to download a picture and add it to the assests folder.  For the button I looked up online that you should pass a service as a parameter to the constructor method.  I made two functions: one to change the state of 'liked' and the other to change the css-styling on the button.  The state of the button was bound to the text on the button.  The service just holds a function which returns the opposite of the input.

2. To properly style the button I used 'ngClass' and passed it a function which returned one of two strings, which corresponded to class names in the css file, depending on the state of being liked.  Default state is false.

3.  I first tried to do this manually without the cli; this was a big mistake.  My code did not compile, so I made a new folder with the cli and copied most of my code over and it worked.
-  ng genenerate component chatModels/message
-  ng genenerate component chatModels/messages
-  ng genenerate component chatModels/user

It took a while to understand the difference in usage between the constructor and the OnInit() method.  Long story short, either leave the constructor alone, give it a service as a param, or do all of your object initialization in OnInit() or you get compilation errors.

I also discovered that when you make new components 'ng test' can assert some errors even if your code compiles and renders.  I saw that you may need to indicate to the spec that you have a custom schema.


4.  This was pretty straight forward.  I made two methods: one private method for building a fun list of strings (quotes from The Matrix); and a public method which built a MessageComponent one at a time, added it to a MessageComponent[], and then returned it.  The idea is that the class itself should not process information, this should be delegated to the service.


5.  I spent the majority of my critical thought here trying to get the information to pipe correctly from parent to child, the app-messages-array to app-message.  There were some missing holes here in terms of how data binding goes when you want to pass objects instead of primitives.  Most of links on-line were not explicitly helpful since Angular 8 is fairly new.

-  Needed to bind with a new syntax \[childmember\] = "[parentObj.childMember]"
-  Needed to add @Input() to the child class members

