class GameObject {
    x = null;
    y = null;
    w = null;
    h = null;
    context = null;
    currentAction = 'walking';
    spriteDelay = 4;
    spriteTime = 0;
    spriteIndex  = 0;
    xSpeed = 0;
    ySpeed = 0;
    xLastDirection = -1;
    sprite = {
        img: null,
        config: {
            x: 0,
            y: 0,
            w: 100,
            h: 100,
        }
    };
    sprites = {
        standing: [
            {
                x: 0,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 2,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 3,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 4,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 5,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 6,
                y: 0,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 7,
                y: 0,
                w: 80,
                h: 100,
            },
        ],
        walking: [
            {
                x: 0,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 2,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 3,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 4,
                y: 99,
                w: 80,
                h: 100,
            },
            {
                x: 80 * 5,
                y: 99,
                w: 80,
                h: 100,
            },
        ],
    };
    constructor(x,y,w,h, context, sprite) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.context = context;
        this.sprite.img = sprite;
    }

    update() {

    }

    updateSprite(){
        this.spriteTime++;
        if (this.spriteTime >= this.spriteDelay) {
            this.spriteIndex++;
            this.spriteTime = 0;
        }
        if (this.spriteIndex >= this.sprites[this.currentAction].length) {
            this.spriteIndex = 0;
        }
        this.sprite.config = this.sprites[this.currentAction][this.spriteIndex]
    }

    draw() {

        if (this.xLastDirection === -1) {
            this.context.save();
            this.context.translate(this.x, this.y);  //location on the canvas to draw your sprite, this is important.

            this.context.scale(-1, 1);  //This does your mirroring/flipping
            this.context.drawImage(
                this.sprite.img,
                this.sprite.config.x,
                this.sprite.config.y,
                this.sprite.config.w,
                this.sprite.config.h,
                -this.w,
                0,
                this.w,
                this.h,
            );
            this.context.restore()
        }

        if (this.xLastDirection === 1) {
            this.context.drawImage(
                this.sprite.img,
                this.sprite.config.x,
                this.sprite.config.y,
                this.sprite.config.w,
                this.sprite.config.h,
                this.x,
                this.y,
                this.w,
                this.h,
            );
        }

    }
}