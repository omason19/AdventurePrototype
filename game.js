class Main extends AdventureScene {
    constructor() {
        super("main", "main Room");
    }

    onEnter() {
        this.showMessage("where do you go?");

        let person = this.add.text(this.w * 0.33, this.h * 0.5, "🛀")
            .setStyle({ fontSize: `${4 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => this.showMessage("you"));

        let doorL = this.add.text(this.w * 0.55, this.h * 0.5, "unlocked door 🚪")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("go to the left.");
                })
            .on('pointerdown', () => {
                this.gotoScene('left');
            });
        
        let doorB = this.add.text(this.w * 0.27, this.h * 0.95, "unlocked door 🚪")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("go down.");
                })
            .on('pointerdown', () => {
                this.gotoScene('down');
            });

        let doorR = this.add.text(this.w * 0.03, this.h * 0.5, "🚪 unlocked door")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("go to the right.");
                })
            .on('pointerdown', () => {
                this.gotoScene('right');
            });

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })

        let doorTop = this.add.text(this.w * 0.3, this.h * 0.03, "🚪 locked door")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("it's locked. can you find a way to open it?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('top');
                }
            })

    }
}

class Left extends AdventureScene {
    constructor() {
        super("left", "left Room");
    }
    onEnter() {
        this.add.text(this.w * 0.03, this.h * 0.5, "🚪 go back")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("head back");
            })
            .on('pointerdown', () => {
                this.gotoScene('main');
            });

        let wizard = this.add.text(this.w * 0.6, this.w * 0.2, '🧙‍♂️')
            .setStyle({ fontSize: `${4 * this.s}px`})
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('looks like they have something to say');
            })
            .on('pointerdown', () => {
                this.showMessage('they open your third eye')
                this.gainItem('⓿')
                this.tweens.add({
                    targets: wizard,
                    alpha: 0,
                    duration: 1000,
                    onComplete: ()=> {
                        wizard.destroy();}
                })
             });
    }
}

class Down extends AdventureScene {
    constructor() {
        super("down", "Bottom Room");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('main');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Right extends AdventureScene {
    constructor() {
        super("right", "Right Room");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('main');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Top extends AdventureScene {
    constructor() {
        super("top", "Top Room");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#222' })
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('main');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.cameras.main.setBackgroundColor('#ddd');
        this.add.text(50,70, "click adventure").setStyle({ fontSize: '70px', color: '0x000' });
        this.add.text(60,145, "by oliver mason").setStyle({ fontSize: '30px', color: '0x000' });
        this.add.text(60,185, "click to start...").setStyle({ fontSize: '30px', color: '0x000' });
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('main'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.cameras.main.setBackgroundColor('#ddd');
        this.add.text(50, 50, "That's all!").setStyle({ fontSize: '70px', color: '0x000' });
        this.add.text(55, 120, "Click anywhere to restart.").setStyle({ fontSize: '30px', color: '0x000' });
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Main, Left, Right, Down, Top, Outro],
    title: "Adventure Game",
});

