IMD3901-Assignment2 Readme


By: Christopher Clarke


NOTE: 
The file system is set up to work exactly how it was done in the online lectures (3 and 4) found on cuLearn. This also requires the use of ngrok as it uses the same ambient sound system as used in the lecture. 


“node ./app.js”


Overview:
Using what we learned in class as a base for the assignment, I created a button that upon clicking will create a cube that can be picked up and rotated. When picked up it is parented to the camera. It also is made the focus of the manager component on the camera as a way of selecting the object. 




What was Challenging:
Figuring out how to change the parent or child of an object was very difficult. This was because the “appendChild()” function would reset data for many of the properties of the object that was appended. In order to successfully accomplish this I ended up needing to do the parenting at the Object3D level instead of using appendChild().




What went well:
I think the two things that went really well for me had to be figuring out how to use the component data as component scoped variables, and figuring out how to create custom functions within the components and how to call them elsewhere in the program. These two things are really important to me as they allow me to think about how to structure the programs in a way that is much closer to the way I am used to building UnityEngine games. 


GitHub Repository:
https://github.com/Darksparky/DesignStudio3Assignment2