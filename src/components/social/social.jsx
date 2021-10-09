import React from "react";
import Icons from "../icons/icons";

const Social = () => {
    return <div className="social">
        <a href="https://www.facebook.com/" className="social__link">
            <Icons name="facebook" height="24" width="24"/>
        </a>
        <a href="https://instagram.com/" className="social__link">
            <Icons name="instagram" height="24" width="24"/>
        </a>
        <a href="https://instagram.com/" className="social__link">
            <Icons name="twitter" height="24" width="24"/>
        </a>
    </div>
}

export default Social;
