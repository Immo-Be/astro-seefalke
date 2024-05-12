import type {AnimationObject} from '../types/google-maps-custom-types';

export const animateIcon = (
  polyline: google.maps.Polyline,
  value: AnimationObject['icon']['value']
) => {
  const lineIcon: google.maps.IconSequence[] = polyline.get('icons');
  lineIcon[0].offset = value / 1 + '%';
  polyline.set('icons', lineIcon);
};

export default animateIcon;
