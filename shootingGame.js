class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
        this.item = "";
    }

    hit(power) {
        if (this.name === newGame.playerA.name) {
            newGame.playerB.health -= power
        } else {
            newGame.playerA.health -= power
        }
    }

    useItem(item) {
        if (item === "Upgrade Health") { this.health += 10 }
        else { this.power += 10 }
    }

    showStatus() {
        return `Player: ${this.name} (Health: ${this.health}, Power: ${this.power})`
    }
}

class ShootingGame {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    getRandomItem() {
        let itemPlayerA = Math.round(Math.random())
        if (itemPlayerA === 0) { this.playerA.item = "Upgrade Health" }
        else { this.playerA.item = "Upgrade Power" }

        let itemPlayerB = Math.round(Math.random())
        if (itemPlayerB === 0) { this.playerB.item = "Upgrade Health" }
        else { this.playerB.item = "Upgrade Power" }
    }

    start() {
        let result = "";
        let turn = 1;
        while (true) {
            if (turn > 2) result += "\n";
            result += `TURN NUMBER ${turn}.`;
            result += "\n------AT THE START OF THE TURN.------";
            result += `\n${this.playerA.showStatus()}\n${this.playerB.showStatus()}\n`;

            this.getRandomItem();
            this.playerA.useItem(this.playerA.item);
            this.playerB.useItem(this.playerB.item);

            result += `\n------AFTER USING THE ITEM.------`;
            result += `\n${this.playerA.showStatus()}\n${this.playerB.showStatus()}\n`;

            this.playerA.hit(this.playerA.power);
            this.playerB.hit(this.playerB.power);

            result += "\n------AT THE END OF THE TURN.------";
            result += `\n${this.playerA.showStatus()}\n${this.playerB.showStatus()}`;

            if (newGame.playerA.health <= 0 && newGame.playerB.health <= 0) {
                result += `\n\nGame Over. It's a draw, both player died.`;
                break;
            }
            else if (newGame.playerB.health <= 0) {
                result += `\n\nGame Over. Player ${this.playerA.name} won the game.`;
                break;
            }
            else if (newGame.playerA.health <= 0) {
                result += `\n\nGame Over. Player ${this.playerB.name} won the game.`;
                break;
            }
            result += "\n\n";
            turn++;
        }
        return result;
    }
}

let player1 = new Player("Shinta")
let player2 = new Player("Ferry")

let newGame = new ShootingGame(player1, player2)

// console.log(newGame.start())