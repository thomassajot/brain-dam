Configuration is a set of parameters / constants that your application uses. These parameters are configurable in a file in order to be edited easily.  
You can use it for [[Feature Flags]].

There are 2 types of configurations:
- `Static` : You have to change the configuration file, then deploy the application. Pro's is that if the configuration change breaks the app, testing might pick it up. Static configuration is usually a bit safer but it takes longer to see the impact due to deployment.
- `Dynamic` is done on the live system. It is more complex, because it is backed by a DB that the system is querying in order to pick up the update. This is beneficial as it allows the build of a UI in order to change the system live. Pro's you can make changes and see their changes fast. Con's you do not have the same testing framework.

Usually we use dynamic configuration and build added guarantees to prevent too many issues when changes configurations, for example:
- not everyone can do the configuration change, ie access control
- add a review process
- apply the update every hour for example
- deploy only to a few users


