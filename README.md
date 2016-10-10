# Running
Just call `npm install` and afterwards `npm run serve` to run the application with live-reloading

# Building
`npm run build`

# About the lab
Instead of using jQuery this project is based on angular2. The class `CanvasDrawer` takes care of drawing the rectangles and circles.
The canvas itself is referenced by using `@ViewChild` (can be found inside `MainComponent`)

The board is initialized within the OnInit method which is a method of `MainComponent`.

In order to use Path2D it was necessary to provide an interface which can be found at `typings/index.d.ts`

## Sourcecode
The source code is available on [https://github.com/locorider/zhaw_moba1_lab4](https://github.com/locorider/zhaw_moba1_lab4)
