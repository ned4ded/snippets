# Gradients with SASS

I could provide 2 approaches to organize gradients' pallet:
- using mixin;
- using function;

## Mixin's approach

The Approach is helpful in case, when you are not going to use multiple color backgrounds.

``` SCSS
  @mixin make-gradient ($color1, $color2, $percent1: 0, $percent2 : 100%, $angle: to-left ) {
    background-image: linear-gradient($angle, $color1 $percent1, $color2 $percent2);
  }

  @mixin gradient-dark-blue($percent1: 0%, $percent2: 95%, $angle: 62deg) {
    @include make-gradient(rgb(0, 38, 133), rgb(0, 20, 79), $percent1, $percent2, $angle);
  }

  .test {
    @include gradient-dark-blue();
    // background-image: linear-gradient(62deg, rgb(0, 38, 133) 0%, rgb(0, 20, 79) 95%);


    @include gradient-dark-blue(50%, 70%);
    // background-image: linear-gradient(62deg, rgb(0, 38, 133) 50%, rgb(0, 20, 79) 70%);


    @include gradient-dark-blue(0%, 90%, to right);
    // background-image: linear-gradient(to right, rgb(0, 38, 133) 0%, rgb(0, 20, 79) 90%);


    @include gradient-dark-blue($angle: 150deg);
    // background-image: linear-gradient(150deg, rgb(0, 38, 133) 0%, rgb(0, 20, 79) 95%);
  }
```

## Function's approach
The Approach, unlike mixin's one, provide functionality to return just closure of linear gradient function, so you could use it in attributes `background-image` or `border-image`, or with multiple backgrounds:

``` SCSS
@function make-gradient($color1, $color2, $percent1: 0, $percent2 : 100%, $angle: to-left ) {
  @return linear-gradient($angle, $color1 $percent1, $color2 $percent2);
}

@function gradient-dark-blue($percent1: 0%, $percent2: 95%, $angle: 62deg) {
  @return make-gradient(mediumblue, navy, $percent1, $percent2, $angle);
}

.test {
  background-image: gradient-dark-blue();
  // background-image: linear-gradient(62deg, mediumblue 0%, navy 95%);

  background:
    url('../assets/imgs/bg-main--left.png') no-repeat,
    url('../assets/imgs/bg-main--right.png') no-repeat,
    gradient-contrast-blue();

  background-size: 624px, 548px, 100%;
  background-position-y: calc(100% - 10px), 10px, 100%;
  background-position-x: 10px, calc(100% - 10px), 0;
}

```

Used in projects:
- [IDO@Array.io](https://ned4ded.github.io/ido-array.io/www/index.html) / 
[GitHub](https://github.com/ned4ded/ido-array.io);
