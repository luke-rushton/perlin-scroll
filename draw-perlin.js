 //modified from https://github.com/joeiddon/perlin
 'use strict';
 let cnvs = document.getElementById('canvasd');
 let ctx = cnvs.getContext('2d');
 
 const GRID_SIZE = 2;
 const RESOLUTION = 128;
 const COLOR_SCALE = 250;
 
 let pixel_size = cnvs.width / RESOLUTION;
 let num_pixels = GRID_SIZE / RESOLUTION;
 
 for (let y = 0; y < GRID_SIZE; y += (8 *num_pixels) / GRID_SIZE){
     for (let x = 0; x < GRID_SIZE; x += (8 * num_pixels) / GRID_SIZE){
         let v = parseInt(perlin.get(x, y) * COLOR_SCALE);
         console.log(x + " , " + y + " , " +v);
         ctx.fillStyle = 'rgb('+v+','+v+','+v+')';

         ctx.beginPath();
         ctx.arc(
             x / GRID_SIZE * cnvs.width,
             y / GRID_SIZE * cnvs.width,
             Math.abs(v) / 2,
             0,
             2 * Math.PI
         );
         ctx.fill();
     }
 }