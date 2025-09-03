function getMessage(firstName: string): string {
  function sayHello() {
    return "Hello.." + " " + firstName;
  }

  function welcomeMessage() {
    return "Welcome to Purwadhika!";
  }

  return `${sayHello()} ${welcomeMessage()}`;
}

console.log(getMessage("Astro"));
