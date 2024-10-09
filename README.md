This project demonstrates the use of React Portals and useRef for handling UI elements in a modular and efficient way. Specifically, the project uses a modal component that opens and closes dynamically through imperative methods exposed by useRef, while Portals ensure that the modal is rendered outside of the main DOM hierarchy.

Key Features:<br/>
useRef for Imperative Modal Control: We use useRef to manage the modal's open/close actions, providing direct control over the DOM element rather than relying on state changes.

React Portals for Modal Rendering: The modal is rendered using React Portals to ensure it is placed at a higher level in the DOM, outside of the main component hierarchy, allowing for better accessibility and UI layering.


Deployment Link:https://final-countdown-timer-s.vercel.app
<br/>
<br/>
<br/>
![timer-countdown](https://github.com/user-attachments/assets/ca25fc70-6d8b-4c18-8f45-b54a9346f2a3)
