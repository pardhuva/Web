
import React, {useState, useEffect} from 'react';

function Display() {
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();

    return (
        <>
          <p>Height: {height}</p>
          <p>Width: {width}</p>
        </>
    )
}
export default Display;