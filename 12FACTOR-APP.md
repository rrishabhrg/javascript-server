# What is the Twelve-Factor App Methodology?

The Twelve-Factor App Methodology is suggested by developers for smoothly working and delivering Software as a Service (SaaS) Applications or Web Apps with a focus on Microservices.

    As the introduction states, this methodology is for creating apps that:

* Use ___declarative___ formats for setup automation, to minimize time and cost for new developers joining the project;

* Have a ___clean contract___ with the underlying operating system, offering ___maximum portability___ between execution environments;

* Are suitable for ___deployment___ on modern ___cloud platforms___, obviating the need for servers and systems administration;

* ___Minimize divergence___ between development and production, enabling ___continuous deployment___ for maximum agility;

* And can ___scale up___ without significant changes to tooling, architecture, or development practices.

The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

## The Twelve Factors :

1. __Codebase__ : One codebase tracked in revision control, many deploys.
2. __Dependencies__ : Explicitly declare and isolate dependencies.
3. __Config__ : Store config in the environment.
4. __Backing Services__ : Treat backing services as attached resources.
5. __Build, Release, Run__ : Strictly separate build and run stages.
6. __Process__ : Execute the app as one or more stateless processes.
7. __Port Binding__ : Export services via port binding.
8. __Concurrency__ : Scale out via the process model.
9. __Disposability__ : Maximize robustness with fast startup and graceful shutdown
10. __Dev/prod parity__ : Keep development, staging, and production as similar as possible.
11. __Logs__ : Treat logs as event streams.
12. __Admin Process__ : Run admin/management tasks as one-off processes.