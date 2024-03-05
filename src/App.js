import React, { useEffect }  from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './app.css';
import { Button } from "@syncfusion/ej2/buttons";

export const App = () =>{ 
    return(
        <BrowserRouter>
            <div>
                <div>
                    <TooltipComponent>
                        <Button>
                            <FiSettings/>
                        </Button>
                    </TooltipComponent>
                </div>
            </div>
        </BrowserRouter>

    )
}   