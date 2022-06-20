# OnceUponAPipe

`once-upon-a-pipe` is a simple Angular pipe for converting a date string into a time ago or a time from now.

---

| Time Range                 | Past Time     | Future Time        |
| :------------------------- | :------------ | :----------------- |
| 0 - 29 seconds             | just now      | X seconds from now |
| 30 - 60 seconds            | 1 minute ago  | 1 minute from now  |
| 1 - 45 minutes             | X minutes ago | X minutes from now |
| 45 - 90 minutes            | 1 hour ago    | 1 hour from now    |
| 90 minutes - 22 hours      | X hours ago   | X hours from now   |
| 22 - 36 hours              | 1 day ago     | 1 day from now     |
| 36 hours - 25 days         | X days ago    | X days from now    |
| 25 - 45 days               | 1 month ago   | 1 month from now   |
| 45 - 345 days              | X months ago  | X months from now  |
| 345 - 545 days (1.5 years) | 1 year ago    | 1 year from now    |
| 546 days+                  | X years ago   | X years from now   |


# Installation

```
npm i once-upon-a-pipe --save
```

# Usage

You need to import the `OnceUponAPipeModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { OnceUponAPipeModule } from 'once-upon-a-pipe';

@NgModule({
  imports: [OnceUponAPipeModule]
})

export class AppModule { }
```

---

In your component templates you can just do:

```html
<p>{{ my_date | onceUponAPipe}}</p>
```

where `my_date` is a local date string, which could be parsed by the standard Js Date().

If this value is null or not parsable as a date, then the pipe will display nothing.