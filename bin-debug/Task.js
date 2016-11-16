var Task = (function () {
    function Task(_id, _name, _describe, _fromNpcId, _toNpcId, _status) {
        this.id = _id;
        this.name = _name;
        this.describe = _describe;
        this.fromNpcId = _fromNpcId;
        this.toNpcId = _toNpcId;
        this.status = _status;
    }
    var d = __define,c=Task,p=c.prototype;
    return Task;
}());
egret.registerClass(Task,'Task');
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["UNACCEPTABLE"] = 0] = "UNACCEPTABLE";
    TaskStatus[TaskStatus["ACCEPTABLE"] = 1] = "ACCEPTABLE";
    TaskStatus[TaskStatus["DURING"] = 2] = "DURING";
    TaskStatus[TaskStatus["CAN_SUBMIT"] = 3] = "CAN_SUBMIT";
    TaskStatus[TaskStatus["SUBMITTED"] = 4] = "SUBMITTED";
})(TaskStatus || (TaskStatus = {}));
//# sourceMappingURL=Task.js.map