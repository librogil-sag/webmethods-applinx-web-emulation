//Those functions are for the addKeyboardMapping. 
//This is an example and the customer can put it where ever he feels like across the project.
export function popup(): boolean{
    alert("Hello, I'm an injected function");
    return true;
  }
  
export function cancel(): boolean{
    return false;
  }
  