// Prosta animacja pozycji kamery i targetu OrbitControls do zadanego miejsca
export function animateCameraTo(orbit, toPos, toTarget, duration = 1300) {
  if (!orbit) return;
  const controls = orbit.target ? orbit : orbit.current;
  if (!controls) return;

  const from = {
    pos: controls.object.position.clone(),
    target: controls.target.clone(),
  };
  let start;
  function animate(now) {
    if (!start) start = now;
    const t = Math.min(1, (now - start) / duration);
    // easing (szybki start, wolny koniec)
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    controls.object.position.lerpVectors(from.pos, toVector3(toPos), ease);
    controls.target.lerpVectors(from.target, toVector3(toTarget), ease);
    controls.update();
    if (t < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}
function toVector3(arr) {
  const [x, y, z] = arr;
  // eslint-disable-next-line no-undef
  return typeof THREE !== "undefined"
    ? new THREE.Vector3(x, y, z)
    : { x, y, z };
}
