import type {Interval} from '../types/google-maps-custom-types';

export const animatePolyline = (
  linePath: Array<{lat: number; lng: number}>,
  map: google.maps.Map,
  value: number
  // interval: Interval
) => {
  let pause = false;
  const pauseLineRemove = 1500;
  const pauseRedrawLine = 1000;
  let linePartArr: Array<google.maps.Polyline> = [];

  // linePath has variable length
  // the value received ranges from 0 to 100
  // we need to draw multiple polylines per execution in order to have the whole line

  // we also need to consider the last position wh

  const run = Math.ceil(linePath.length / 100);

  const index = run * value;

  // create a line part between the current and next coordinate

  if (index + 2 >= linePath.length) {
    return;
  }

  for (let i = 0; i < run; i++) {
    if (!pause) {
      const part = [];
      part.push(linePath[index + i]);
      part.push(linePath[index + 1 + i]);

      //create a polyline
      const linePart = new google.maps.Polyline({
        path: part,
        strokeOpacity: 0.6,
        strokeWeight: 2,
        map: map
      });

      //add the polyline to an array
      linePartArr.push(linePart);
    }
  }
};
