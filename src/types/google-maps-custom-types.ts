export interface Interval {
  iconId: number;
  polylineId: number;
}

export interface AnimationObject {
  isPaused: boolean;
  hasStarted: boolean;
  interval: number;
  icon: {
    value: number;
    intervalId: number;
  };
}
