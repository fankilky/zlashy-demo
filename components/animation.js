// components/Animation.js
import { useEffect, useState, useRef } from 'react';

const Animation = ({
  id,
  children,
  animation = 'fade',
  duration = 700,
  delay = 0,
  easing = 'ease-out',
  threshold = 0.2,
  once = false, // Default changed to false to allow reverse animations
  className = '',
  distance = 50,
  scale = 0.95,
  rotation = 0,
  blur = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate if scrolling in the right direction or if it's the first time
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '10px'
      }
    );

    observer.observe(element);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id, threshold, once]);

  const getInitialTransform = () => {
    const transforms = [];
    
    // Slide transforms
    if (animation.includes('Up')) {
      transforms.push(`translateY(${distance}px)`);
    } else if (animation.includes('Down')) {
      transforms.push(`translateY(-${distance}px)`);
    } else if (animation.includes('Left')) {
      transforms.push(`translateX(${distance}px)`);
    } else if (animation.includes('Right')) {
      transforms.push(`translateX(-${distance}px)`);
    }

    // Scale transform
    if (animation.includes('scale')) {
      transforms.push(`scale(${scale})`);
    }

    // Rotation transforms
    if (animation === 'rotate') {
      transforms.push(`rotate(${rotation}deg)`);
    } else if (animation === 'flipX') {
      transforms.push(`rotateX(${rotation}deg)`);
    } else if (animation === 'flip') {
      transforms.push(`rotateY(${rotation}deg)`);
    }

    return transforms.join(' ');
  };

  const animations = {
    fade: {
      initial: 'opacity-0',
      animate: 'opacity-100'
    },
    slideUp: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu translate-y-0'
    },
    slideDown: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu translate-y-0'
    },
    slideLeft: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu translate-x-0'
    },
    slideRight: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu translate-x-0'
    },
    scale: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu scale-100'
    },
    flip: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu rotateY-0'
    },
    flipX: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu rotateX-0'
    },
    rotate: {
      initial: `opacity-0 transform-gpu`,
      animate: 'opacity-100 transform-gpu rotate-0'
    },
    blur: {
      initial: `opacity-0 blur-[${blur}px]`,
      animate: 'opacity-100 blur-0'
    }
  };

  const customStyle = {
    transition: `all ${duration}ms ${delay}ms ${easing}`,
    transform: isVisible ? 'none' : getInitialTransform(),
    opacity: isVisible ? 1 : 0,
    filter: animation === 'blur' ? `blur(${isVisible ? 0 : blur}px)` : 'none',
    willChange: 'transform, opacity, filter'
  };

  // Add data attributes for debugging
  const debugAttributes = {
    'data-visible': isVisible,
    'data-scroll-direction': scrollDirection,
    'data-animation': animation
  };

  return (
    <div
      id={id}
      className={`
        transform-gpu
        ${className}
        ${animations[animation]?.initial || ''}
        ${isVisible ? animations[animation]?.animate || '' : ''}
      `}
      style={customStyle}
      {...debugAttributes}
    >
      {children}
    </div>
  );
};

export default Animation;