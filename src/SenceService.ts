class SenceService {

    private observerList: SenceObserver[] = [];

    private static instance;
    private static count = 0;



    constructor() {
        SenceService.count++;
        if (SenceService.count > 1) {
            throw 'singleton!!';
        }
    }



    public static getInstance() {
        if (SenceService.instance == null) {
            SenceService.instance = new SenceService();
        }
        return SenceService.instance;
    }

    public addObserver(_observer: SenceObserver): void {

        this.observerList.push(_observer);

    }



    private notify(_monsterId: number): void {

        for (var i = 0; i < this.observerList.length; i++) {

            this.observerList[i].onChange(_monsterId);
        }
    }

}


class KillMonsterButton extends egret.DisplayObjectContainer implements Observer {

    private monsterId: string;
    private button: egret.Bitmap;

    constructor(_monsterId: string) {

        super();

        this.monsterId = _monsterId;

        this.button = this.createBitmapByName("Kill_png");
        this.addChild(this.button);
        this.onButtonClick(this.monsterId);
    }

    onChange() {


    }

    onButtonClick(_monsterId: string) {
        this.touchEnabled = true;

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

            var menu = TaskService.getInstance();

            menu.getTaskByCustomRule(function sortForMonster(taskInfo) {

                for (var t in taskInfo) {
                    if (taskInfo[t].condition.tragetMonsterId == this._monsterId) {
                    taskInfo[t].condition.updateProgress(taskInfo[t]);

                    }

                }
            }
            )

            SenceService.getInstance().notify(this.monsterId);

        }, this);

    }

    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}

