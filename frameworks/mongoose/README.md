# Mongoose
Mongoos - mongodb object modeling for node.js; [Read docs](http://mongoosejs.com/docs/guide.html);

## Install
``` bash
$ npm i -S mongoose
```

## Key Features
Workflow with mongoose based on next principals:
1. MongoDB connection on application start (essentially, in the main application file, or before handling controllers to models requests); Example is [hereby]('./database-connect.js');
2. Models declaration (Models schema declaration and models logic writing):
  - Schema basic usage (WIP);
  - Model logic basic usage (WIP);
  - [Basic Users' model example](./User/);

Used in project [sahalin](https://github.com/ned4ded/sahalin);
