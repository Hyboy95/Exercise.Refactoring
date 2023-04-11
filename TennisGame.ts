enum Point {
    zeroPoint,
    onePoint,
    twoPoint,
    threePoint,
    fourPoint
}

export class TennisGame {
    score: string = '';
    player1Name: string;
    player2Name: string;
    pointOfPlayer1: number;
    pointOfPlayer2: number;

    constructor(player1Name: string, player2Name: string, pointOfPlayer1: number, pointOfPlayer2: number) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.pointOfPlayer1 = pointOfPlayer1;
        this.pointOfPlayer2 = pointOfPlayer2;
    }

    showScore() {
        let tempScore = 0;

        if (this.pointOfPlayer1 == this.pointOfPlayer2) {
            this.whenDrawScore(this.pointOfPlayer1);
        }
        else if (this.pointOfPlayer1 >= Point.fourPoint || this.pointOfPlayer2 >= Point.fourPoint) this.whenTieBreak(this.pointOfPlayer1, this.pointOfPlayer2);
        else {
            this.whenNormalScore(tempScore, this.pointOfPlayer1, this.pointOfPlayer2);
        }
    }

    private whenNormalScore(tempScore: number, pointOfPlayer1: number, pointOfPlayer2: number) {
        for (let i = 1; i < 3; i++) {
            if (i == 1) tempScore = pointOfPlayer1;
            else {
                this.score += "-";
                tempScore = pointOfPlayer2;
            }
            switch (tempScore) {
                case Point.zeroPoint:
                    this.score += "Love";
                    break;
                case Point.onePoint:
                    this.score += "Fifteen";
                    break;
                case Point.twoPoint:
                    this.score += "Thirty";
                    break;
                case Point.threePoint:
                    this.score += "Forty";
                    break;
            }
        }
    }

    private whenTieBreak(pointOfPlayer1: number, pointOfPlayer2: number) {
        {
            let minusResult = pointOfPlayer1 - pointOfPlayer2;
            if (minusResult == 1) this.score = "Advantage player1";
            else if (minusResult == -1) this.score = "Advantage player2";
            else if (minusResult >= 2) this.score = "Win for player1";
            else this.score = "Win for player2";
        }
    }

    private whenDrawScore(pointOfPlayer1: number) {
        switch (pointOfPlayer1) {
            case 0:
                this.score = "Love-All";
                break;
            case 1:
                this.score = "Fifteen-All";
                break;
            case 2:
                this.score = "Thirty-All";
                break;
            case 3:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;
        }
    }
}
