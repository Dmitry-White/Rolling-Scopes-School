class FSM {
    constructor(config) {
            if (typeof(config) !== 'undefined') {
                this._config = config;
                this._undoHist = [];
                this._currState = config.initial;
                this._redoHist = [];
            } else {
                throw Error();
            }
        }

        getState() {
            return this._currState;
        }

        changeState(state) {
            if (state in this._config.states){
                this._undoHist.push(this._currState);
                this._currState = state;
                this._redoHist =  [];
            } else {
                throw Error()
            }
        }

        trigger(event) {
            var state = this._currState;
            var transit = this._config.states[state].transitions;
            if (event in transit) {
                this._undoHist.push(this._currState);
                this._currState = transit[event];
                this._redoHist = [];
            } else {
                throw Error();
            }

        }

        reset() {
            this._undoHist.push(this._currState);
            this._currState = this._config.initial;
            this._redoHist = [];
        }

        getStates(event) {
            var allStates = [];
            var states = this._config.states;
            if (typeof(event) === 'undefined') {
                for (var i in states) allStates.push(i);
                return allStates;
            }
            for (var i in states) {
                if (event in states[i].transitions) allStates.push(i);
            }
            return allStates;
        }

        undo() {
            if (this._undoHist.length !== 0) {
                this._redoHist.push(this._currState);
                this._currState = this._undoHist.pop();
                return true;
            }
            return false;
        }

        redo() {
            if (this._redoHist.length !== 0) {
                this._undoHist.push(this._currState);
                this._currState = this._redoHist.pop();
                return true;
            }
            return false;
        }

        clearHistory() {
            this._undoHist = [];
            this._redoHist = [];
        }
}

module.exports = FSM;
