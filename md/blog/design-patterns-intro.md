---
title: Introducing Design Patterns
subtitle: 
published: true
datePublished: 1710348957000
author: Kevin Hotz
tags:
  - Design Patterns
  - Object Oriented Programming
authorPhoto: /img/profile.png
bannerPhoto: /img/design-patterns-intro-banner.png
thumbnailPhoto: /img/design-patterns-intro.png
canonicalUrl: https://devii.dev/blog/design-patterns-intro
---

Design patterns in object-oriented software serve as a well-equipped toolbox, 
offering vetted solutions to frequent, recurring challenges.
They can help us find abstractions to tackle the difficult problem of organizing an application into
objects.  

Design patterns provide a clear description of the issue, propose a solution, detail the appropriate context for its application, and outline the potential outcomes of its use.   add 
We can categorize patterns based on their intent, falling into three primary types \[1].

# Creational Patterns
Focused on the process of object creation, creational patterns provide mechanisms to enhance flexibility and encapsulation during instantiation.
Some important creational patterns include:
- **Factory method pattern**: Delegate instantiation to subclasses.
- **Builder pattern**: Separate construction from representation.
- **Singleton pattern**: Ensure a single instance.
- **Prototype pattern**: Copy existing objects to create a new one.

But why not stick to the constructor for instantiating objects you ask?
Calling the constructor *always* creates an object, which reduces flexibility regarding object creation and introduces
a tight coupling between the implementation and the client.

# Structural Patterns
Structural patterns outline methods for combining classes and objects to form larger structures, facilitating efficient composition.
Some important structural patterns include:
- **Adapter Pattern**: Convert an interface to one the client expects.
- **Decorator Pattern**: Decorate an object with additional functionalities.
- **Facade Pattern**: Provide a simplified interface, hiding complexity.
- **Composite Pattern**: Favour composition over inheritance to reduce coupling.

# Behavioral Patterns
Behavioral patterns govern component interaction, aiming to improve communication and the delegation of responsibilities to enhance maintainability.
Some important behavioral patterns include:
-**Listener Pattern**: Inform observers about certain events.
-**Visitor Pattern**: Allow you to define new operations without changing the classes on which they operate.
-**Command Pattern**: Represent a request to an object.
-**Strategy Pattern**: Make a series of algorithms interchangeable and choose your strategy at runtime.


**Check out the remaining posts of this series to learn about some common design patterns!**


*References*

\[1] Erich Gamma ... \[and others]. Design Patterns : Elements of Reusable Object-Oriented Software. Reading, Mass. :Addison-Wesley, 1995.



