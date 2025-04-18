'use client'

import * as Phaser from 'phaser';
import { useEffect, useRef } from 'react';
import useElementSize from '../common/useElementSize';

class GameScene extends Phaser.Scene {
  private circleGraphics?: Phaser.GameObjects.Graphics;
  private readonly circleRadius: number = 50;
  private circleWorldX: number = 0;
  private circleWorldY: number = 0;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() { }

  create() {
    this.circleWorldX = this.cameras.main.scrollX + this.cameras.main.centerX;
    this.circleWorldY = this.cameras.main.scrollY + this.cameras.main.centerY;

    this.circleGraphics = this.add.graphics();
    this.drawCircleInWorld();

    this.cameras.main.setZoom(1);
    this.cameras.main.centerOn(this.circleWorldX, this.circleWorldY);

    let dragStartX = 0;
    let dragStartY = 0;
    this.input.on(Phaser.Input.Events.POINTER_DOWN, (pointer: Phaser.Input.Pointer) => {
      dragStartX = pointer.x;
      dragStartY = pointer.y;
    });

    this.input.on(Phaser.Input.Events.POINTER_MOVE, (pointer: Phaser.Input.Pointer) => {
      if (pointer.isDown) {
        this.cameras.main.scrollX -= (pointer.x - dragStartX) / this.cameras.main.zoom;
        this.cameras.main.scrollY -= (pointer.y - dragStartY) / this.cameras.main.zoom;
        dragStartX = pointer.x;
        dragStartY = pointer.y;
      }
    });

    this.scale.on('resize', (gameSize: Phaser.Structs.Size) => {
      if (this.cameras.main) {
        this.cameras.main.setViewport(0, 0, gameSize.width, gameSize.height);
      }
    });
  }

  drawCircleInWorld() {
    if (!this.circleGraphics) return;
    this.circleGraphics.clear();
    this.circleGraphics.fillStyle(0xffffff, 1);
    this.circleGraphics.fillCircle(this.circleWorldX, this.circleWorldY, this.circleRadius);
  }

  update() { }
}

export default function FamilyTreeImpl() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const { width, height } = useElementSize(parentRef);

  useEffect(() => {
    if (gameRef.current && gameRef.current.scale && width > 0 && height > 0) {
      gameRef.current.scale.resize(width, height);
    }
  }, [width, height]);

  useEffect(() => {
    const currentParentRef = parentRef.current;

    if (canvasRef.current && currentParentRef && !gameRef.current) {
      const parentWidth = currentParentRef.clientWidth;
      const parentHeight = currentParentRef.clientHeight;

      if (parentWidth <= 0 || parentHeight <= 0) {
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
            gravity: { x: 0, y: 1 },
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
