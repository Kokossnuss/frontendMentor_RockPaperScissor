import {screen, ctx } from "../../main.js";

export default function drawArcs(arcs){
    let gradient = ctx.createLinearGradient(60, 0, 60, 120);
    gradient.addColorStop(0, arcs.colorstop0);
    gradient.addColorStop(1, arcs.colorstop1);
    ctx.beginPath();
    ctx.arc(arcs.x, arcs.y, 60, 0, 2*Math.PI );
    ctx.clip();
    ctx.clearRect(0, 0, screen.width, screen.height);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(arcs.x, arcs.y, 45, 0, 2*Math.PI );
    ctx.fillStyle = "white";
    ctx.fill();
}