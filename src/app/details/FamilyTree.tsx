'use client'

import * as Phaser from 'phaser';
import { useEffect, useRef } from 'react';
import useElementSize from '../common/useElementSize';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    console.log('Phaser: Preloading assets...');
  }

  create() {
    this.add.text(10, 10, 'Hello Phaser!', { color: '#0f0', fontSize: '16px' });

    this.scale.on('resize', (gameSize: Phaser.Structs.Size) => {
      if (this.cameras.main) {
        this.cameras.main.setViewport(0, 0, gameSize.width, gameSize.height);
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
  const { width, height } = useElementSize(parentRef);

  useEffect(() => {
    if (gameRef.current && gameRef.current.scale) {
      gameRef.current.scale.resize(width, height);
    }
  }, [width, height]);

  useEffect(() => {
    const currentParentRef = parentRef.current;

    if (canvasRef.current && currentParentRef && !gameRef.current) {
      const parentWidth = currentParentRef.clientWidth;
      const parentHeight = currentParentRef.clientHeight;

      if (parentWidth <= 0 || parentHeight <= 0) {
        console.warn('Parent container has zero dimensions. Skipping Phaser initialization.');
        return;
      }

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

      } catch (error) {
        console.error('Error creating Phaser game instance:', error);
      }
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(false);
        gameRef.current = null;
      }
    };
  }, []);

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
