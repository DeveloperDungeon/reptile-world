'use client'

import { useRef, useEffect, useCallback } from 'react';
import * as Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    console.log('Phaser: Preloading assets...');
  }

  create() {
    this.add.text(10, 10, 'Hello Phaser!', { color: '#0f0', fontSize: '16px' });
    console.log('Phaser: Creating game objects...');

    this.scale.on('resize', (gameSize: Phaser.Structs.Size) => {
      if (this.cameras.main) {
        this.cameras.main.setViewport(0, 0, gameSize.width, gameSize.height);
        console.log(`GameScene camera/viewport resized to: ${gameSize.width} x ${gameSize.height}`);
      }
    });
  }

  update() {
    // Game loop logic here
  }
}

export default function FamilyTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    if (!gameRef.current || !entries || !entries.length) {
      return;
    }
    const { width, height } = entries[0].contentRect;

    if (gameRef.current.scale) {
      gameRef.current.scale.resize(width, height);
    }
  }, []);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    const currentParentRef = parentRef.current;

    if (canvasRef.current && currentParentRef && !gameRef.current) {
      const parentWidth = currentParentRef.clientWidth;
      const parentHeight = currentParentRef.clientHeight;

      if (parentWidth <= 0 || parentHeight <= 0) {
        console.warn('Parent container has zero dimensions. Skipping Phaser initialization.');
        return;
      }

      console.log(`Initializing Phaser game with parent size: ${parentWidth} x ${parentHeight}`);

      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.CANVAS,
        width: parentWidth,
        height: parentHeight,
        canvas: canvasRef.current,
        scene: [GameScene],
        parent: currentParentRef,
        backgroundColor: '#2d2d2d',
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
          }
        },
        scale: {
          mode: Phaser.Scale.NONE,
        }
      };

      try {
        gameRef.current = new Phaser.Game(config);
        console.log('Phaser game instance created.');

        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(currentParentRef);
        console.log('ResizeObserver attached.');

      } catch (error) {
        console.error('Error creating Phaser game instance:', error);
      }
    }

    return () => {
      console.log('Cleanup: Detaching ResizeObserver and destroying Phaser game...');
      if (resizeObserver && currentParentRef) {
        resizeObserver.unobserve(currentParentRef);
        resizeObserver.disconnect();
        console.log('ResizeObserver detached.');
      }
      resizeObserver = null;

      if (gameRef.current) {
        gameRef.current.destroy(false);
        gameRef.current = null;
        console.log('Phaser game instance destroyed.');
      }
    };
  }, [handleResize]);

  return (
    <div
      id='phaser-container'
      ref={parentRef}
      style={{ width: '100%', height: '500px', overflow: 'hidden' }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
