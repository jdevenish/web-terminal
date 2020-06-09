/*
 * React & Bootstrap Imports
 */
import React, {useState} from 'react';
import TerminalContent from "../terminalContent/TerminalContent";

/*
 * CSS Files
 */
import './Terminal.scss'
import '../terminalContent/TerminalContent.scss'
// const terminalData = require('../data/terminal_script.json')


function Terminal() {
    const [close, setClose] = useState(false);

    const onClose = () => {
        setClose(!close);
    };


    return (
        <div className={close ? "terminal__closed" : "terminal"}>
            <div className="terminal--header">
                <div>
                    <div
                        onClick={onClose}
                        className="close-icon"/>
                    <div className="minimize-icon"/>
                    <div className="expand-icon"/>
                </div>
                </div>
                <div className="terminal--body">
                <div className="term--body--height">
                    <div className="input-prompt-final">
                        <p>justin-devenish.com %</p>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Terminal;

