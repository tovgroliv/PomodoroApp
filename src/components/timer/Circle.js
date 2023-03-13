import React, { useEffect } from "react";

import CircleCss from "./Circle.module.css";

const Circle = (props) => {
  const canvasRef = React.createRef();

  const drawArc = (canvasRef, color, angle) => {
    const canvas = canvasRef.current;
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const delta = -1 * Math.PI / 2;

    context.beginPath();
    context.arc(centerX, centerY, radius - 10, delta, angle + delta);
    context.lineWidth = 10;
    context.strokeStyle = color;
    context.stroke();
  }

  useEffect(() => {
    drawArc(canvasRef, props.color, props.angle);
  });

  return (
    <canvas className={CircleCss["circle"]} ref={canvasRef} />
  );
}

export default Circle;