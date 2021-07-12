# MTEAMS - A VIDEO AND CHATTING WEB APPLICATION

MTeams is video and chatting web application. A virtuous way to connect at ease and save time. New capabilities and handy features to bring people together in a facile and quick way. So work togethr using **MTeams**

## FEATURES IN MTEAMS

Mteams has got for you a bunch of handy features :-

**1.Video call :** feature to interact with each other in a manner that you may think of your peer having a word and looking at you as if sitting next to you.

**2.Chat call :**  feature to interact with each other using text and expressions.

**3.In Meeting Notes :** allows you to take notes within the meeting, no need to grab a pen and paper all the time. Moreover you can download them on your device.

**4.Screen Sharing :** allows you to convey any information in your device with your partner at any time even from a good distance without any expenditure of energy and time with the help of screen sharing feature.

**5.In Meeting Recording :** this feature provides you a virtue by which you can revisit the meeting and help yourself with anything which you may have missed during the live meeting.

**6.Reactions :** Reaction and emojis are the non-verbal cues with rich emotional meanings and important medium for interaction and emotional communication on the Internet.So it has to be feature in Mteams.

**7. In-Meeting Chat :** this feature allows you to send any piece of text in just one click. So use in meeting chat and write what you can't speak.

**8.Meeting Clock :**The clock is one of the most important devices in civilization.So keeping in mind how important is time for you, Mteams provides a feature of in meeting clock to keep a check on time.

**9.Authentication :**The wesite requires the user to register before staring the video and chat calls.

**10.Continue Chat after video call :**The website was added with this feature in the adapt phase which required to continue chat after the call.

## AGILE METHODOLOGY FOR PROJECT DEVELOPMENT
 
 ### **Sprints**
 
I divided my work in various sprints:

 **1.Designing Phase :** It included designing the wire frame and some User Interface of my website and code too.

![WireFrame 1]() ![WireFrame 2]()

**2.Build Phase :** It included working on the video call and chat call configuration. Also I added the in meeting chat and basic mic and video controlling buttons.

![Build phase]()

**3.Innovative Phase :** In this I added the feature of screen sharing and screen recording.I also worked on adding the autentication and improving UI.

![screen share]() ![recording]()  ![auth]() 

**4.Creative Phase :** This phase included adding the In meeting notes, the reactions and clock in the video call.

![Notes]() ![reactions]() ![clock]() 

**5.Code performance and User Experience:** I improved the UI and UX with the help of friends and family. I checked my code performance too.

![ui]() ![perfomance1]()  ![prformance2]() 

**6.Adapt Phase :** Mteams video call already had the chat call option and in meetiing chat, but I extended it to continue the chat after the video call too.

![continue chat 1]() ![continue chat 2]() 


### **Development Practices**

**1.Maintaining Agile Board :** Agile board helped me plan, visualize and mange my work through the project.
![Agile Board]()

**2.CI/CD And TDD :** Continuous Integration and delivery along with Test driven Development helped me in continuous integration and bring down defects in code.

![CI/CD 1](https://github.com/Ayushijain2000/MTeams/blob/public/utils/readmeImg/CD1.jpeg?raw=true)  

![CI/CD 2](https://github.com/Ayushijain2000/MTeams/blob/public/utils/readmeImg/CD2.jpeg?raw=true) 

**3.Code In Extensible Modules :** Writing code  as extensible module made it easier to design  
understand and test.
![module1]() ![module2]() ![module3]()

## TECHNOLOGY STACK

![Nodejs]() ![Javascript]() ![VSCode]() ![Github]() ![EJS]() ![Express]() 
![SocketIO]()  ![WebRTC]() ![Mongoose]() ![Passport]() ![Mocha]() ![Chai]()


**FOLDER STRUCTURE**

I designed my code as extensible modules.

- The server code is present in the `root` folder of the project,
- Then i made different folders for different files

   - `public` folder 

      - `css` folder: It contained the front end of the project.

      - `js` folder: It contains all the js files and back end part of the project.

      - `utils` folder
         - `homeImg` folder: It contains all the imgaes of the landing page.
         - `images` folder: It contains the images of the video calling page.

   - `test` folder: It contained the testing files.

   - `views` foler: It contains all the ejs files of the project.


## INSTALLATION

For development, you will only need Node.js, a node global package and npm installed on the machine.

You can find more information about the Node.js installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

1. Download the code from here

   ![Nodejs]()

2. Open the project in your preferable `editor` and open the `terminal`. There you can see the `package.json` file.

3. cd into the project.

4. write the following in the `terminal`:
   
   ``` Javascript

    npm install
    npm install -g nodemon
    nodemon app.js 

   ```
  you can also use node app.js instead of nodemon app.js , but it is preferred to use nodemon app.js _(nodemon is a utility that will monitor for any changes in your source and automatically restart your server)_






