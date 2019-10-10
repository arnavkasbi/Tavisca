Make sure that you have Node.js and npm v5 or above installed.

Clone this repo using git clone https://github.com/arnavkasbi/Tavisca.git

Move to the appropriate directory: cd tavisca.

Move to src folder where you find package.json, open cmd prompt and run following commands: -> npm -v (to check your version) -> npm init (to initialize node package manager) -> npm install -d (to install all the packages in node modules) -> npm run sass (to compile all the sass files into css folder) -> npm run build (to build your project (optional)) -> npm run start (this will start your project on a default port)

This is the initial commit with basic functionalities of save/edit/delete. There are still a lot of places where code can be improved.

Delete is disabled when the list is in edit phase to avoid conflict of list indices.

CSS Responsive features and Web accessibility is yet to be implemented.
