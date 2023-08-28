import axios from "axios";
import { useCallback, useState } from "react";

function useAxiosPost(url, sendData) {

    console.log(sendData);

    const [data, setData] = useState([]);

    const onClick = useCallback(e => {
        axios.post(
            url,
            sendData
        ).then(function(response) {
            console.log(response.data);
            setData(response.data);
        });
    },[url, sendData]);

    console.log("test");
    return [data, onClick];
}

export default useAxiosPost;