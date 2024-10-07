import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Note: In a real-world scenario, you'd use a proper graph visualization library
// like react-flow or d3.js. This is a simplified representation.
export default function WorkflowVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw nodes
        const nodes = [
          { x: 50, y: 50, label: 'Start' },
          { x: 200, y: 50, label: 'Research' },
          { x: 350, y: 50, label: 'Analyze' },
          { x: 200, y: 150, label: 'Report' },
          { x: 350, y: 150, label: 'End' },
        ];

        nodes.forEach((node) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 30, 0, 2 * Math.PI);
          ctx.fillStyle = 'hsl(var(--primary))';
          ctx.fill();
          ctx.fillStyle = 'hsl(var(--primary-foreground))';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.label, node.x, node.y);
        });

        // Draw edges
        ctx.beginPath();
        ctx.moveTo(80, 50);
        ctx.lineTo(170, 50);
        ctx.moveTo(230, 50);
        ctx.lineTo(320, 50);
        ctx.moveTo(200, 80);
        ctx.lineTo(200, 120);
        ctx.moveTo(230, 150);
        ctx.lineTo(320, 150);
        ctx.strokeStyle = 'hsl(var(--primary))';
        ctx.stroke();
      }
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Workflow Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas ref={canvasRef} width="400" height="200" />
      </CardContent>
    </Card>
  );
}