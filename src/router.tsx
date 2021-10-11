import { BrowserRouter, Route } from "react-router-dom";
import { StepOne } from "./pages/FormStep1";
import { StepTwo } from "./pages/FormStep2";
import { StepThree } from "./pages/FormStep3";

export const Router = () => {
    return(
        <BrowserRouter>
            <Route path='/' exact component={StepOne}/>
            <Route path='/step2' exact component={StepTwo}/>
            <Route path='/step3' exact component={StepThree}/>
        </BrowserRouter>
    )
}