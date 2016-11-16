class DialoguePanel extends egret.DisplayObjectContainer {

    private btn_Accept: egret.Bitmap;
    private btn_Finish: egret.Bitmap;
    private dialoguePanelBg: egret.Bitmap;
    private currentTask: egret.TextField;


    constructor(_npcid: string) {
        super();


        this.dialoguePanelBg = this.createBitmapByName("DialogueBg_png");
        this.addChild(this.dialoguePanelBg);


        this.btn_Accept = this.createBitmapByName("Accept_png");
        this.addChild(this.btn_Accept)
        this.btn_Accept.x = 140
        this.btn_Accept.y = 100
        this.btn_Accept.$setTouchEnabled(true);

        this.btn_Finish = this.createBitmapByName("Finish_png");
        this.addChild(this.btn_Finish)
        this.btn_Finish.x = 0
        this.btn_Finish.y = 100
        this.btn_Finish.$setTouchEnabled(true);

        this.initDialog(_npcid,this.currentTask)


        this.onDialogPanelClicked(_npcid);

        //this.dialoguePanelBg.x = this.x - this.width/5;  //-108 , 300
        //this.dialoguePanelBg.y = this.y + 300;

    }

    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private initDialog(_npcid: string, _currentText: egret.TextField) {

        _currentText = new egret.TextField();
        _currentText.text = "Wait for init"
        this.addChild(_currentText);
        _currentText.x = 0

        var menu = TaskService.getInstance();
        menu.getTaskByCustomRule(function sortForNpc(taskInfo) {

            for (var t in taskInfo) {

                console.log(taskInfo[t].fromNpcId);
                console.log(taskInfo[t].toNpcId);

                if (taskInfo[t].fromNpcId == _npcid || taskInfo[t].toNpcId == _npcid) {


                    _currentText.text = "Mission Related :" + "\n" +taskInfo[t].id;
                    

                }
            }
        });

        



    }




    private onDialogPanelClicked(_npcid: string) {



        this.dialoguePanelBg.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

            console.log("DialogBGClick");

        }, this);


        this.btn_Accept.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {


            var menu = TaskService.getInstance();
            menu.getTaskByCustomRule(function sortForNpc(taskInfo) {

                for (var t in taskInfo) {

                    console.log(taskInfo[t].fromNpcId);
                    console.log(taskInfo[t].toNpcId);

                    if (taskInfo[t].fromNpcId == _npcid && taskInfo[t].status == 1) {


                        TaskService.getInstance().accept(t);

                    }
                }
            });


            console.log("Accept")



        }, this);


        this.btn_Finish.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

            var menu = TaskService.getInstance();
            menu.getTaskByCustomRule(function sortForNpc(taskInfo) {

                for (var t in taskInfo) {

                    console.log(taskInfo[t].fromNpcId);
                    console.log(taskInfo[t].toNpcId);

                    if (taskInfo[t].toNpcId == _npcid && taskInfo[t].status == 2) {


                        TaskService.getInstance().readyToSubmit(t);
                        return 0;

                    }

                    if (taskInfo[t].toNpcId == _npcid && taskInfo[t].status == 3) {


                        TaskService.getInstance().finish(t);

                    }

                }
            });

            console.log("Finish")

        }, this);

    }

}