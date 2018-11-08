# FBQuery

Quick web app for a basic frustration of Facebook searches.

## Basic problem
Facebook links cannot be searched unless you know the whole link exactly. This renders the search useless since you have to know the exact link i.e. you'd have to search: https://www.youtube.com/watch?v=OKNXn2qCEws.

In addition, the only type of matching they do is a match word for word. Small typos such as a wrong character (`worsd`) or duplicate characters (`wordd`) would make the message unqueryable using query `word`.

# Implementation
For now this is a basic frontend webapp to implement the feature quickly. In the future, I might add a backend to it if the querying becomes excruciatingly slow (unlikely but worth implementing to practice MVC rails).
