## Generative alogorithms

### Resources
- http://inconvergent.net/
- http://n-e-r-v-o-u-s.com/

### Record
![](img/record.png)

### Tree
See an [animated version](https://rawgit.com/deanturpin/Generative/master/tree.html).

![](img/tree.png)

### Tree 2
Central branch is longer than the left and right.
![](img/tree2.png)

### Times tables
Inspired by [Mathologer](https://t.co/bIaBHG5UqA).

![](img/cardio1.png)
![](img/timestables.png)
![](img/cardio3.gif)
![](img/cardio4.gif)

### Sambucus (elderberry)
![](img/sambucus.png)

### Tail
![](img/tail.png)

### Arabic
![](img/arabic.png)

### Grid
![](img/grid.png)

### Seaweed
![](img/seaweed.png)

### Hair
![](img/hair.png)

### Oculus
![](img/oculus.png)

### Vein 2
![](img/vein2.png)

### Fern
![](img/fern.png)

### Spirograph
![](img/spirograph.png)

### Crystal
![](img/crystal.png)

## Rendering GIFs
Capture desktop
```bash
recordmydesktop -x 1700 -y 230 --width 1450 --height 1500
```

Resize and render to animated GIF 
```bash
ffmpeg -ss 2 -i out-15.ogv -r 24 cardio3.gif
ffmpeg -i cardio3.gif -vf scale=320:-1 cardio3_smaller.gif
```

ffmpeg -ss 2 -i -r 24 cardio3.gif

ffmpeg -i cardio3.gif -vf scale=320:-1 cardio3_smaller.gif
