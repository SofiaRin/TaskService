class Task {
    public id: string;

    public name: string;

    public describe: string;

    public status: TaskStatus;

    public fromNpcId: string;

    public toNpcId: string;

    constructor(_id: string, _name: string, _describe, _fromNpcId: string, _toNpcId: string, _status) {

        this.id = _id;

        this.name = _name;

        this.describe = _describe;

        this.fromNpcId = _fromNpcId;

        this.toNpcId = _toNpcId;

        this.status = _status;

    }

}



enum TaskStatus {

    UNACCEPTABLE = 0,
    ACCEPTABLE = 1,
    DURING = 2,
    CAN_SUBMIT = 3,
    SUBMITTED = 4

}

