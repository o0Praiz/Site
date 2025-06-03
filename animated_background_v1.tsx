import React, { useEffect, useRef, useState } from 'react';

// Floating Particles Background
const FloatingParticles = ({ 
  particleCount = 50, 
  speed = 1, 
  color = "rgba(59, 130, 246, 0.3)",
  size = 2,
  className = ""
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * size + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Draw connections to nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount, speed, color, size]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Geometric Shapes Background
const GeometricShapes = ({ className = "" }) => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          type: Math.random() > 0.5 ? 'circle' : 'square',
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 100 + 50,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.1 + 0.05
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute animate-float ${
            shape.type === 'circle' ? 'rounded-full' : 'rounded-lg transform rotate-45'
          }`}
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: `rgba(59, 130, 246, ${shape.opacity})`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

// Gradient Orbs Background
const GradientOrbs = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large orbs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Medium orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-blob animation-delay-3000"></div>
      
      {/* Small orbs */}
      <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-md opacity-25 animate-blob animation-delay-500"></div>
      <div className="absolute top-3/4 right-1/6 w-16 h-16 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-md opacity-25 animate-blob animation-delay-2500"></div>
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

// Matrix Rain Effect
const MatrixRain = ({ className = "", color = "#00ff00", speed = 1 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let columns = [];
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const columnCount = canvas.width / 20;
      columns = [];
      for (let x = 0; x < columnCount; x++) {
        columns[x] = 1;
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = color;
      ctx.font = '15px monospace';
      
      for (let i = 0; i < columns.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * 20, columns[i] * 20);
        
        if (columns[i] * 20 > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }
        columns[i] += speed;
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none opacity-30 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Neural Network Animation
const NeuralNetwork = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let nodes = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createNodes = () => {
      nodes = [];
      const nodeCount = 30;
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
      nodesRef.current = nodes;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
        
        // Draw node with pulse effect
        const pulseRadius = node.radius + Math.sin(node.pulse) * 2;
        const opacity = 0.6 + Math.sin(node.pulse) * 0.4;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
        ctx.fill();
        
        // Draw connections
        nodes.slice(index + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            
            const connectionOpacity = (150 - distance) / 150 * 0.5;
            ctx.strokeStyle = `rgba(59, 130, 246, ${connectionOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Add data flow animation
            const t = (Date.now() * 0.001) % 1;
            const flowX = node.x + (otherNode.x - node.x) * t;
            const flowY = node.y + (otherNode.y - node.y) * t;
            
            ctx.beginPath();
            ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 179, 237, ${connectionOpacity * 2})`;
            ctx.fill();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNodes();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createNodes();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Pulse Waves Background
const PulseWaves = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0">
        {/* Multiple pulse waves */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-20"
            style={{
              animation: `pulse-wave 4s linear infinite ${i * 0.8}s`,
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%'
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes pulse-wave {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Interactive Mouse Trail
const MouseTrail = ({ className = "" }) => {
  const [trail, setTrail] = useState([]);
  const trailRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        opacity: 1
      };
      
      trailRef.current = [...trailRef.current, newPoint].slice(-20);
      setTrail([...trailRef.current]);
    };

    const fadeTrail = () => {
      trailRef.current = trailRef.current
        .map(point => ({ ...point, opacity: point.opacity - 0.05 }))
        .filter(point => point.opacity > 0);
      
      setTrail([...trailRef.current]);
      requestAnimationFrame(fadeTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    fadeTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: point.opacity,
            transform: `scale(${point.opacity})`,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}
    </div>
  );
};

// Main Background Component that combines multiple effects
const AnimatedBackground = ({ 
  type = "gradient", 
  className = "",
  ...props 
}) => {
  const backgroundTypes = {
    particles: <FloatingParticles {...props} className={className} />,
    geometric: <GeometricShapes className={className} />,
    gradient: <GradientOrbs className={className} />,
    matrix: <MatrixRain {...props} className={className} />,
    neural: <NeuralNetwork className={className} />,
    pulse: <PulseWaves className={className} />,
    trail: <MouseTrail className={className} />
  };

  return backgroundTypes[type] || backgroundTypes.gradient;
};

export {
  FloatingParticles,
  GeometricShapes,
  GradientOrbs,
  MatrixRain,
  NeuralNetwork,
  PulseWaves,
  MouseTrail,
  AnimatedBackground
};