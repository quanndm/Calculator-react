import React, { useEffect, useRef, useState } from 'react'
import { BTN_ACTIONS, btns } from "../assets/btnConfig";

const Calculator = () => {
    const btnsRef = useRef(null);
    const expRef = useRef(null);
    const [expression, setExpression] = useState("");
    useEffect(() => {
        const btns = Array.from(btnsRef.current.querySelectorAll("button"));
        btns.forEach(e => e.style.height = (e.offsetWidth) + "px");
    }, [])
    const btnClick = (item) => {
        const expDiv = expRef.current;
        switch (item.action) {
            case BTN_ACTIONS.THEME:
                document.body.classList.toggle("dark");
                break;
            case BTN_ACTIONS.ADD:
                addAnimSpan(item.display);
                const operator = item.display !== "x" ? item.display : "*";
                setExpression(expression + operator)
                break;
            case BTN_ACTIONS.DELETE:
                expDiv.parentNode.querySelectorAll("div:last-child").innerHTML = "";
                expDiv.innerHTML = "";
                setExpression("");
                break;
            case BTN_ACTIONS.CALC:
                if(expression.trim().length <= 0) return;
                
                expDiv.parentNode.querySelector("div:last-child").remove();

                const cloneNode = expDiv.cloneNode(true);
                expDiv.parentNode.appendChild(cloneNode);

                const transform = `translateY(${-(expDiv.offsetHeight + 10)}px) scale(.4)`;

                try {
                    let res = eval(expression);
                    setExpression(res.toString());
                    setTimeout(() => {
                        cloneNode.style.transform = transform;
                        expDiv.innerHTML = "";
                        addAnimSpan(Math.floor(res*100000000)/100000000)
                    }, 200);
                } catch (error) {
                    alert(error);
                    setTimeout(() => {
                        cloneNode.style.transform = transform;
                        cloneNode.innerHTML = "Syntax error";
                    }, 200);
                }
                break;
            default:
                break;
        }
    }
    const addAnimSpan = (content) => {
        const expDiv = expRef.current;
        const span = document.createElement("span");

        span.innerHTML = content;
        span.style.opacity = "0";
        expDiv.appendChild(span);

        const width = span.offsetWidth + "px";
        span.style.width = "0";

        setTimeout(() => {
            span.style.opacity = "1";
            span.style.width = width;
        }, 100);
    }
    return (
        <div className="calculator">
            <div className="calculator__result">
                <div ref={expRef} className="calculator__result__exp"></div>
                <div className="calculator__result__exp">

                </div>
            </div>
            <div ref={btnsRef} className="calculator__btns">
                {btns.map((item, index) => (
                    <button key={index} className={item.class} onClick={() => btnClick(item)}>
                        {item.display}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Calculator
