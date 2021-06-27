import React, { useState } from 'react';

export default function LandingPage() {

    const [days, setDays] = useState([]);
    const [currentDay, setCurrentDay] = useState('');


    function dateSelection(e) {
       console.log(e.target.value);
       setCurrentDay(e.target.value)
    }

    function addDay(e) {
        e.preventDefault();
        let str = currentDay;
        const stArray = str.split('/');
        if (stArray[0].length != 2 || stArray[1].length != 2 || stArray[2].length != 4) {
            return
        }
        let array = [...days]
        if (array.indexOf(str) > -1) {
            return;
        }
        array.push(str);
        console.log(array);
        setDays([...array]);
    }

    return (
        <div>
            {
                days.length == 0 ? <h1>No days entered yet</h1> : <h1>Non empty</h1> 
            }
            <form onSubmit={addDay}>
                <input name="date" type="text" placeholder="DD/MM/YYYY" onChange={dateSelection}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}