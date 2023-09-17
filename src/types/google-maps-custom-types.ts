export interface Interval {
  iconId: number;
  polylineId: number;
}

export interface AnimationObject {
  isPaused: boolean;
  hasStarted: boolean;
  interval: ReturnType<typeof setInterval>;
  icon: {
    value: number;
    intervalId: number;
  };
}
