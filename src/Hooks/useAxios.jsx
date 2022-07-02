import React, { useEffect, useState } from 'react'
import axios from 'axios';


const UseAxios = ( { url } ) => {

    const [ err, setErr ] = useState('');

    const [ipAdress, setIpAdress  ] = useState('')

    const [ location, setLocation ] = useState('')

    const [isp, setIsp  ] = useState('')

    const [timeZone, setTimeZone  ] = useState('')


    const getData = async () => {
        try {
        let response = await axios.get(url);
        let data = await response.data;
        
        setIpAdress(data.ip);
        setLocation(`${data.location.region}, ${data.location.country}`);
        setIsp(data.isp);
        setTimeZone(data.location.timezone)
    }

    catch(err){
        setErr(err)
    }


    }


    useEffect(() => {
        getData()
    }, [url])

    return { err: err,  location: location, isp: isp, timeZone: timeZone, ipAdress: ipAdress  }
}

export default UseAxios
